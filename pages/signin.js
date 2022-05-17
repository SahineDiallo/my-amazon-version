import { getProviders, signIn } from "next-auth/react";
import LoginForm from "../components/LoginForm";
import styled from "styled-components";
import Link from "next/link";

function signin({ providers }) {
  const buttonProvider = Object.values(providers).map((provider) => {
    return (
      <div key={provider.name}>
        <button
          className="signUP__btn my-3"
          onClick={() => signIn(provider.id)}
        >
          Sign in with {provider.name}
        </button>
      </div>
    );
  });
  return (
    <LoginDiv>
      <Link href="" passHref>
        <a>
          <img
            className="login__logo"
            src="https://pnggrid.com/wp-content/uploads/2021/05/Logo-Amazon-1024x310.png"
            alt="amazon_logo"
          />
        </a>
      </Link>
      <LoginContainer className="login__container">
        <h1>Sign In</h1>
        {buttonProvider}
        <LoginForm />
        <small className="mb-4">
          By continuing you agree to Fake Amazon Conditions of Use and Privacy
          Notice.
        </small>
        <div className="d-flex flex-column text-center">
          <small className="nacc">Need an Amazon Account </small>
          <Link href="register" passHref>
            <button className="signUP__btn">Sign Up Now</button>
          </Link>
        </div>
      </LoginContainer>
    </LoginDiv>
  );
}

export default signin;

export async function getServerSideProps(context) {
  return {
    props: {
      providers: await getProviders(context),
    },
  };
}
const LoginContainer = styled.div``;
const LoginDiv = styled.div`
  justify-content: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
