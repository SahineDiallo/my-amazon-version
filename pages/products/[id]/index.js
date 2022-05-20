import React from "react";

const product = ({ product }) => {
  return (
    <Container>
      <ProductDetails></ProductDetails>
      <SimalarProducts className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3"></SimalarProducts>
    </Container>
  );
};

export default product;

export const getStaticProps = async (context) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${context.params.id}`
  );
  const product = await response.json();

  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  const products = await res.json();
  const ids = products.map((product) => product.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};
