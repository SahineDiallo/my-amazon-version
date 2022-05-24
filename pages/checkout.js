import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../app/slices/BasketSlice";
import CartItem from "../components/CartItem";
import { CheckIcon } from "@heroicons/react/outline";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(process.env.stripe_public_key);

const checkout = () => {
  const products = useSelector(selectBasketItems);
  const { data: session, status } = useSession();
  const authenticated = status === "authenticated";

  const totalPrice = products.reduce(
    (price, product) => price + product.item.price * product.count,
    0
  );
  const countItems = products.reduce((total, item) => total + item.count, 0);
  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    // hit the backend with a post request
    const checkoutSession = await axios.post("/api/create-stripe-checkout", {
      products: products,
      email: session.user.email,
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) alert(result.error.message);
  };
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

          <button
            role="link"
            onClick={createCheckoutSession}
            disabled={!authenticated || !products}
            className="amazon__btn"
          >
            {authenticated ? "Proceed to checkout" : "Please login to checkout"}
          </button>
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
