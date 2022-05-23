const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { email, products } = req.body;
  const transformedItems = products.map((product) => ({
    description: product.item.description,
    quantity: product.count,
    price_data: {
      currency: "gbp",
      unit_amount: product.item.price * 100,
      product_data: {
        name: product.item.title,
        images: [product.item.image],
      },
    },
  }));
  console.log(transformedItems);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["US", "CA", "GB"],
    },
    shipping_rates: ["shr_1L2Lb4CaVFlpfW6RbmJScWBs"],
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(products.map((product) => product.item.image)),
    },
  });

  res.status(200).json({ id: session.id });
};
