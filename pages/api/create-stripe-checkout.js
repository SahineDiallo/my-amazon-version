export default async (req, res) => {
  const { email, products } = req.body;
  console.log("email", email);
  console.log("products", products);
};
