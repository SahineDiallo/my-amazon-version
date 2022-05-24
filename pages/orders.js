import React from "react";
import { db } from "../../amazon-clone/firebase";
import { useSession, getSession } from "next-auth/react";
import moment from "moment";
import Orders from "../components/Orders";

const orders = ({ orders }) => {
  console.log(orders);
  const { data: session, status } = useSession();
  const authenticated = status === "authenticated";
  return (
    <div className="order__container">
      <h3 className="border-bottom-2 mt-5 text-center">
        {orders.length} Order(s)
      </h3>
      {authenticated ? (
        <div class="mb-2">
          {orders?.map(
            ({ id, amount, amountShipping, items, timestamp, images }) => (
              <Orders
                key={id}
                id={id}
                amount={amount}
                amountShipping={amountShipping}
                items={items}
                timestamp={timestamp}
                images={images}
              />
            )
          )}
        </div>
      ) : (
        <p className="alert alert-info">Please login to see your orders</p>
      )}
    </div>
  );
};

export default orders;

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  const session = await getSession(context);
  if (!session) {
    return {
      props: {},
    };
  } else {
    //getting the data from firebase
    const orders = await db
      .collection("users")
      .doc(session.user.email)
      .collection("orders")
      .orderBy("timestamp", "desc")
      .get();
    //getting the stripe data
    const stripeOrders = await Promise.all(
      orders.docs.map(async (order) => ({
        order: order.id,
        amount: order.data().amount,
        amountShipping: order.data().amount_shipping,
        images: order.data().images,
        timestamp: moment(order.data().timestamp.toDate()).unix(),
        items: (
          await stripe.checkout.sessions.listLineItems(order.id, {
            limit: 100,
          })
        ).data,
      }))
    );
    return {
      props: {
        orders: stripeOrders,
      },
    };
  }
}
