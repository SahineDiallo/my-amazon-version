import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StarIcon, ChevronDoubleRightIcon } from "@heroicons/react/solid";
import { BookmarkIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { AddToBasket } from "../../../app/slices/BasketSlice";
import { useDispatch } from "react-redux";
import { AddToBookmark } from "../../../app/slices/BookmarkSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SingleProduct from "../../../components/SingleProduct";
import { selectBookmarkItems } from "../../../app/slices/BookmarkSlice";
import { useSelector } from "react-redux";

const product = ({ product, allProducts }) => {
  const bookmarkItems = useSelector(selectBookmarkItems);
  const bookmarked = product in bookmarkItems;
  const dispatch = useDispatch();
  const alertUser = () => toast("Product added to your basket!");
  const alertBookmark = () => toast("Product bookmarked successfully!");
  const addItemToBasket = () => {
    const _product = { p_id: product.id, item: product, count: 1 };
    dispatch(AddToBasket(_product));
    alertUser();
  };

  const addItemToBookmark = () => {
    dispatch(AddToBookmark(product));
    alertBookmark();
  };
  const [prime, setPrime] = useState(false);
  useEffect(() => {
    const rand = Math.random() > 0.5;
    rand && setPrime(true);
  }, []);

  // similar Products
  const similarProducts = allProducts.filter(
    (item) => item.category === product.category && item.id !== product.id
  );
  return (
    <Container className="my-5">
      <ProductDetails className="row mr-0 ml-0 row-cols-sm-1 row-cols-md-2">
        <ProductImage className="col-md-5 bg-white d-flex align-items-center justify-content-center">
          <img src={product.image} alt="" />
        </ProductImage>
        <ProductInfo className="col-md-7">
          <small>{product?.category}</small>
          <ProductTitle>{product?.title}</ProductTitle>
          <div>
            {Array(Math.round(product.rating.rate))
              .fill()
              .map((_, i) => (
                <div className="d-inline-block mb-2" key={i}>
                  <StarIcon />
                </div>
              ))}
          </div>
          <small>{product.description}</small>
          <ProductPrice>$ {product.price}</ProductPrice>
          {prime && (
            <div className="prime">
              <ChevronDoubleRightIcon />
              Free Deliver available
            </div>
          )}

          <button onClick={addItemToBasket} className="amaz_btn">
            <ShoppingCartIcon /> Add to Basket
          </button>
          <button
            onClick={addItemToBookmark}
            className="border-0 bookmark_btn ml-3 "
          >
            {bookmarked ? <CheckIcon /> : <BookmarkIcon />}
          </button>
          <ToastContainer position="bottom-left" />
        </ProductInfo>
      </ProductDetails>
      <h6 class="my-4"> You might also like </h6>
      <SimilarProducts className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
        {similarProducts.map((product, i) => (
          <SingleProduct product={product} key={i} />
        ))}
      </SimilarProducts>
    </Container>
  );
};

export default product;

export const getStaticProps = async (context) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${context.params.id}`
  );
  const product = await response.json();
  const allProductsRes = await fetch("https://fakestoreapi.com/products");
  const allProducts = await allProductsRes.json();

  return {
    props: {
      product,
      allProducts,
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

const Container = styled.div``;
const ProductDetails = styled.div`
  margin-right: 0;
  margin-left: 0;
`;
const ProductImage = styled.div`
  -webkit-box-shadow: 0 0 10px #fbfbfb;
  box-shadow: 0 0 10px #fbfbfb;
  text-align: center;
  padding: 20px;

  img {
    heigth: 180px;
    width: 180px;
    object-fit: contain;
  }
`;
const ProductInfo = styled.div`
  font-size: 13px;
  padding: 20px;

  svg {
    height: 20px;
    width: 20px;
    color: #e67a00;
  }
`;
const SimilarProducts = styled.div``;
const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 30px;
`;
const ProductTitle = styled.div`
  font-weight: 700;
  text-overflow: ellipis;
  color: #131921;
  margin: 15px 0;
  display: -webkit-box;
  overflow: hidden;
  font-size: 15px;
`;
