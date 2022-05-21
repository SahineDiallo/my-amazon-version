import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../app/slices/BasketSlice";
import CartItem from "../components/CartItem";
import { CheckIcon } from "@heroicons/react/outline";
import Currency from "react-currency-formatter";

const checkout = () => {
  const products = useSelector(selectBasketItems);
  const totalPrice = products.reduce(
    (price, product) => price + product.item.price * product.count,
    0
  );
  const countItems = products.reduce((total, item) => total + item.count, 0);

  return (
    <>
      <h5 className="mt-5 mb-2">Your Basket</h5>
      <Container className="row row-cols-md-2 row-cols-sm-1 mb-4">
        {!products.length ? (
          <div className="pr-3 col-md-6">
            <img
              className="w-100"
              src="https://s3.amazonaws.com/neverbounce-hosted/images/blog/abandoned-cart-strategies.png"
              alt=""
            />
          </div>
        ) : (
          <CartItems className="pr-3 col-md-6">
            {products.map((product, i) => (
              <CartItem key={i} product={product} />
            ))}
          </CartItems>
        )}

        <Subtotal className="p-3 col-md-6 bg-white">
          <h6>Checkout</h6>
          <div className="d-flex align-items-center p-2 alert-success alert mb-4">
            <CheckIcon />
            <p className="mb-0"> Your order is eligible for free delivery</p>
          </div>
          <Currency
            className="fw-bolder"
            quantity={totalPrice}
            currency="GBP"
          />
          <div>
            <small>Number of Items: {countItems}</small>
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
