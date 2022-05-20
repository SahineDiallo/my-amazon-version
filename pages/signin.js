import { getProviders, signIn } from "next-auth/react";
import styled from "styled-components";
import Link from "next/link";
import { getSession } from "next-auth/react";

function signin({ providers }) {
  const buttonProvider =
    providers &&
    Object.values(providers).map((provider) => {
      return (
        <div key={provider.name}>
          <button
            className="signUP__btn mb-3"
            onClick={() => signIn(provider.id)}
          >
            Sign in with {provider.name}
          </button>
        </div>
      );
    });
  return (
    <LoginDiv>
      <img
        className="login__logo"
        src="https://pnggrid.com/wp-content/uploads/2021/05/Logo-Amazon-1024x310.png"
        alt="amazon_logo"
      />
      <LoginContainer className="login__container">
        <h1>Sign In</h1>
        {buttonProvider}
        <small className="mb-4">
          By continuing you agree to Fake Amazon Conditions of Use and Privacy
          Notice.
        </small>
      </LoginContainer>
    </LoginDiv>
  );
}

export default signin;

export async function getServerSideProps(context) {
  const { req, res } = context;
  const session = await getSession({ req }); //since this is a promise use await
  if (session && res) {
    res.writeHead(302, {
      location: "/",
    });
    res.end();
    return { props: {} };
  }
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
