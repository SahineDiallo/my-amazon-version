import { PlusSmIcon, MinusSmIcon, TrashIcon } from "@heroicons/react/outline";
import React from "react";
import styled from "styled-components";
import Currency from "react-currency-formatter";
import { StarIcon } from "@heroicons/react/solid";
import { AddToBasket, RemoveFromBasket } from "../app/slices/BasketSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const incrementItem = () => {
    dispatch(AddToBasket(product));
  };
  const decrementItem = () => {
    dispatch(RemoveFromBasket(product));
  };
  return (
    <CartContainer className="bg-white d-flex align-items-center border-bottom-1">
      <img src={product.item.image} alt="" />
      <CartInfo>
        <CartTitle>{product.item.title}</CartTitle>
        <div className="d-flex align-items-center mb-4 mt-2">
          {Array(Math.round(product.item?.rating.rate))
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="star" />
            ))}
          <small className="ml-3">{product.item?.rating.count} ratings</small>
        </div>
        <CartPrice className="d-flex align-items-center justify-content-between">
          <Currency
            className="price"
            quantity={product.item.price * product.count}
            currency="GBP"
          />
          <CartQuantity>
            <MinusSmIcon onClick={decrementItem} />
            <span className="quantity">{product.count}</span>
            <PlusSmIcon onClick={incrementItem} />
            <TrashIcon />
          </CartQuantity>
        </CartPrice>
      </CartInfo>
    </CartContainer>
  );
};

export default CartItem;

const CartContainer = styled.div`
  img {
    width: 180px;
    object-fit: contain;
    padding: 20px;
    height: 180px;
  }
  border-bottom: 3px solid #f9f9f9;
  box-shadow: 0 0 10px #fbfbfb;
  border-radius: 4px;
`;
const CartInfo = styled.div`
  flex-grow: 1;
  margin-bottom: 20px;

  div.mt-2 > svg {
    width: 20px;
    height: 20px;
    color: #ffb350;
  }
`;
const CartTitle = styled.div`
  font-size: 13px;
  font-weight: 500;
  text-overflow: ellipis;
  color: #131921;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const CartPrice = styled.div`
  .price {
    font-weight: 600 !mportant;
    font-size: 14px;
  }
`;
const CartQuantity = styled.div`
  display: flex;
  align-items: center;
  svg {
    height: 20px;
    width: 20px;
    margin-right: 10px;
    background: #f1f1f1;
    border-radius: 1px;
    cursor: pointer;
  }
  svg:last-child {
    background: #ed2d2d;
    color: white;
    padding: 1px;
    border-radius: 3px;
  }
`;
