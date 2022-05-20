import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

const HeaderNav = () => {
  const { data: session, status } = useSession();
  const authenticated = status === "authenticated";
  const router = useRouter();
  return (
    <Header className="sticky-md-top">
      <div className="top_inv__div"></div>
      <Container>
        <Link href="/" passHref>
          <a>
            <Image
              src="https://links.papareact.com/f90"
              alt=""
              width={100}
              height={40}
              className="mt-2 nav__logo mr-3"
            />
          </a>
        </Link>
        <SearchArea>
          <SearchInput />
          <SearchIcon className="s__icon" />
        </SearchArea>
        <SignInArea
          onClick={
            authenticated
              ? signOut
              : () =>
                  router.push(
                    {
                      pathname: "/signin",
                    },
                    undefined,
                    { shallow: true }
                  )
          }
          className="mt-2 sign__area"
        >
          <OptionLineOne>
            Hello,{authenticated ? session.user.name : "Guest"}
          </OptionLineOne>
          <OptionLineTwo>
            {authenticated ? "Sign Out" : "Sign In Here"}
          </OptionLineTwo>
        </SignInArea>
      </Container>
    </Header>
  );
};

export default HeaderNav;

const Header = styled.div``;
const Container = styled.div`
  height: 60px;
  background: linear-gradient(to bottom, #131921, 95%, transparent);
  padding: 10px;
  display: flex;
  align-items: start;
  border-radius: 15px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  color: white;
  svg {
    height: 25px;
    width: 25px;
  }
`;
const SearchArea = styled.div`
  background: #febd69;
  height: 40px;
  display: flex;
  align-items: center;
  flex-grow: 1;
  border-radius: 4px;
  margin-left: 20px;
  overflow: hidden;
  transition: all ease 0.3s;
  margin-right: 0 10px 0 20px;
  :focus-within {
    box-shadow: 0 0 0 3px #f90;
  }
  .s__icon {
    width: 40px;
  }
`;
const SearchInput = styled.input`
  height: 40px;
  flex-grow: 1;
  padding: 7px;
  border: none;
  outline: none;
`;
const OptionLineTwo = styled.div`
  font-weight: 700;
`;
const OptionLineOne = styled.div`
  font-size: 14px;
`;
const SignInArea = styled.div`
  padding: 0 20px;
  line-height: 1;
  display: flex;
  align-items: start;
  flex-direction: column;
`;
