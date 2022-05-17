import styled from "styled-components";
import CategoryFeed from "../components/CategoryFeed";
import HomeCarousel from "../components/HomeCarousel";
import ProductFeed from "../components/ProductFeed";

export default function Home({ categories, products }) {
  return (
    <div className="">
      <HomeCarousel />
      <CategoryContainer>
        <strong>All Categories</strong>
        <CategoryFeed categories={categories} />
      </CategoryContainer>
      <ProductFeed products={products} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const resProducts = await fetch("https://fakestoreapi.com/products");
  const products = await resProducts.json();
  const categories = await res.json();
  return {
    props: {
      categories,
      products,
    },
  };
};

const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 14px;
  padding: 20px 0;
  color: #626060;
  font-weight: 500;
  letter-spacing: 0.01rem;
`;
