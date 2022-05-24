import Image from "next/image";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { StarIcon } from "@heroicons/react/solid";
import Link from "next/link";

const SingleProduct = ({ product }) => {
  const [bestSeller, setBestSeller] = useState(false);
  useEffect(() => {
    setBestSeller(Math.random() > 0.5);
  }, []);
  return (
    <div className="pr-3 pt-3 pb-0 pl-0">
      <Link href="/products/[id]" as={`/products/${product.id}`}>
        <Container data-aos="zoom-out" className="rounded position-relative">
          <Image
            width={150}
            height={150}
            objectFit="contain"
            src={product?.image}
            alt="p_img"
            className="mt-3"
          />
          {bestSeller && <span className="best_seller"> Best Seller </span>}
          <small>{product?.category}</small>
          <ProductTitle>{product?.title}</ProductTitle>
          <PriceAndRating>
            <span className="flex-grow-1">${product?.price}</span>
            <div className="d-flex align-items-center">
              {Array(Math.round(product?.rating.rate))
                .fill()
                .map((_, i) => (
                  <StarIcon key={i} className="star" />
                ))}
              <span>{product?.rating.count} ratings</span>
            </div>
          </PriceAndRating>
        </Container>
      </Link>
    </div>
  );
};

export default SingleProduct;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
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
    margin-top: 20px;
  }
  :hover{
  transform: scale(1.1) !important;
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
  min-height: 40px;
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
    margin-right: 0;
    color: #febd69 !important;
  }
`;
