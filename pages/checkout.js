import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../app/slices/BasketSlice";
import CartItem from "../components/CartItem";
import { CheckIcon } from "@heroicons/react/outline";
import Currency from "react-currency-formatter";

const checkout = () => {
  const products = useSelector(selectBasketItems);
  return (
    <>
      <h5 className="mt-5 mb-2">Your Basket</h5>
      <Container className="row row-cols-md-2 row-cols-sm-1 mb-4">
        <CartItems className="pr-3 col-md-6">
          {products.map((product, i) => (
            <CartItem key={i} product={product} />
          ))}
        </CartItems>
        <Subtotal className="p-3 col-md-6 bg-white">
          <h6>Checkout</h6>
          <div className="d-flex align-items-center p-2 alert-success alert mb-4">
            <CheckIcon />
            <p className="mb-0"> Your order is eligible for free delivery</p>
          </div>
          <Currency className="fw-bolder" quantity={999} currency="GBP" />
          <div>
            <small>Number of Items: {4}</small>
          </div>

          <button className="amazon__btn">Proceed to checkout</button>
        </Subtotal>
      </Container>
    </>
  );
};

export default checkout;
const Container = styled.div``;
const CartItems = styled.div``;
const Subtotal = styled.div`
  svg {
    width: 20px;
    height: 20px;
  }
  box-shadow: 0 0 10px #fff;
`;
