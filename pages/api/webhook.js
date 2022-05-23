import { buffer } from "micro";
import * as admin from "firebase-admin";

var serviceAccount = require("../../permissions.json");
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.apps();

//connect to stripe

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const endpoints = process.env.STRIPE_SIGNIN_SECRET;

const fulfillOrder = async (session) => {
  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`success: ORDER ${session.id} has been added successfully`);
    });
};
export default async (req, res) => {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];

    let event;
    //check if the posted event came from stripe...
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpoints);
    } catch (error) {
      console.log("ERROR", error);
      return res.status(400).send(`webhook error, ${error.message}`);
    }

    //that means stripe fired the event
    //Handle the checkout completed event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      // fulfill the order
      fulfillOrder(session)
        .then(() => res.status(200))
        .catch((error) =>
          res.status(400).send(`Webhook error: ${error.message}`)
        );
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
