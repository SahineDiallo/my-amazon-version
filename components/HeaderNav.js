import React from "react";
import styled from "styled-components";
import Image from "next/image";
import {
  BookmarkIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../app/slices/BasketSlice";
import { selectBookmarkItems } from "../app/slices/BookmarkSlice";

const HeaderNav = () => {
  const { data: session, status } = useSession();
  const authenticated = status === "authenticated";
  const basketItems = useSelector(selectBasketItems);
  const bookmarkItems = useSelector(selectBookmarkItems);
  const countItems = (arr) => {
    return arr.reduce((total, item) => total + item.count, 0);
  };
  const router = useRouter();
  return (
    <Header className="sticky-md-top">
      <div className="top_inv__div"></div>
      <Container>
        <TopNav>
          <Link href="/" passHref>
            <a className="flex-grow-1 flex-md-grow-0 flex-shrink-0">
              <Image
                src="https://links.papareact.com/f90"
                alt=""
                width={100}
                height={40}
                className="mt-2 nav__logo mr-3"
              />
            </a>
          </Link>
          <SearchArea className="d-none d-md-flex ">
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
            <OptionLineOne className="username">
              Hello,{authenticated ? session.user.name : "Guest"}
            </OptionLineOne>
            <OptionLineTwo>
              {authenticated ? "Sign Out" : "Sign In Here"}
            </OptionLineTwo>
          </SignInArea>
          <div className="icons_section d-sm-flex d-md-none">
            <IconWithCount onClick={() => router.push("/checkout")}>
              <ShoppingCartIcon />
              <span className="nav__count">{countItems(basketItems)}</span>
            </IconWithCount>
            <IconWithCount onClick={() => router.push("/bookmark")}>
              <BookmarkIcon />
              <span className="nav__count">{bookmarkItems.length}</span>
            </IconWithCount>
          </div>
        </TopNav>
        <BottomNav className="d-md-none d-sm-flex justify-conten-center">
          <SearchArea className="ml-0">
            <SearchInput />
            <SearchIcon className="s__icon" />
          </SearchArea>
        </BottomNav>
      </Container>
    </Header>
  );
};

export default HeaderNav;

const Header = styled.div``;
const Container = styled.div`
  min-height: 60px;
  background: linear-gradient(to bottom, #131921, 95%, transparent);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  border-radius: 15px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  color: white;
  svg {
    height: 25px;
    width: 25px;
  }
  .icons_section {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 8px;
    margin-right: 10px;
  }
  .username {
    color: gray;
    white-space: nowrap;
  }
`;
const TopNav = styled.div`
  display: flex;
  align-items: start;
`;
const BottomNav = styled.div`
  .ml-0 {
    margin-left: 0 !important;
    margin-bottom: 15px;
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
const IconWithCount = styled.div`
  position: relative;
`;
