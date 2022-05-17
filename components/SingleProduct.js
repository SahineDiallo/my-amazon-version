import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { StarIcon } from "@heroicons/react/solid";

const SingleProduct = ({ product }) => {
  const offert = Math.random() > 0.5;
  return (
    <div className="pr-3 pt-3 pb-0 pl-0">
      <Container data-aos="fade-up" className="rounded position-relative">
        <Image
          width={150}
          height={150}
          objectFit="contain"
          src={product.image}
          alt="p_img"
        />
        {offert && <span className="best_seller">Best seller</span>}
        <small>{product.category}</small>
        <ProductTitle>{product.title}</ProductTitle>
        <PriceAndRating>
          <span classname="flex-grow-1">${product.price}</span>
          <StarIcon className="star mr-2" />
          <span>{product.rating.rate}</span>
        </PriceAndRating>
      </Container>
    </div>
  );
};

export default SingleProduct;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #131921;
  padding: 3px 15px 10px 15px;
  border-radius: 30px;
  font-size: 13px;
  background: white !important;
  box-shadow: 0 0 10px #edecec;
  small {
    background: #f1f1f16b;
    color: #131921;
    width: fit-content;
    padding: 3px 15px;
    border-radius: 30px;
    font-size: 13px;
  }

  img {
    background: #fff !important;
    padding: 20px !important;
    border-radius: 4px;
  }
`;
const ProductTitle = styled.div`
  font-weight: 700;
  text-overflow: ellipis;
  color: #131921;
  margin: 15px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const PriceAndRating = styled.div`
  display: flex;
  align-items: center;

  span:first-child {
    font-weight: 700;
    flex-grow: 1;
    font-size: 15px;
  }
  span:last-child {
    display: flex;
    align-items: center;
  }
  svg {
    widht: 20px;
    height: 20px;
    margin-right: 10px;
    color: #febd69 !important;
  }
`;
