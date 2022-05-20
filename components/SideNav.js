import React from "react";
import styled from "styled-components";
import { useSession } from "next-auth/react";
import { selectBasketItems } from "../app/slices/BasketSlice";
import { selectBookmarkItems } from "../app/slices/BookmarkSlice";
import {
  HomeIcon,
  ShoppingCartIcon,
  ClockIcon,
  BookmarkIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const SideNav = () => {
  const basketItems = useSelector(selectBasketItems);
  const bookmarkItems = useSelector(selectBookmarkItems);
  const { data: session, status } = useSession();
  const authenticated = status === "authenticated";
  return (
    <SideContainer>
      <Link href="/" passHref>
        <a>
          <img
            src="https://www.freeiconspng.com/thumbs/amazon-icon/amazon-icon--socialmedia-iconset--uiconstock-0.png"
            alt="amazon_small_logo"
            width={40}
          />
        </a>
      </Link>
      <IconSection>
        <HomeIcon />
        <IconWithCount>
          <BookmarkIcon />
          <span className="nav__count">{bookmarkItems.length}</span>
        </IconWithCount>
        <IconWithCount>
          <ShoppingCartIcon />
          <span className="nav__count">{basketItems.length}</span>
        </IconWithCount>
        <ClockIcon />
      </IconSection>
      <UserSection className={authenticated && "ml-3"}>
        {authenticated ? (
          <div className="flex-shrink-0 ml-3">
            <Image
              width={37}
              height={37}
              src={session.user.image}
              object-fit="contain"
              className="rounded-circle"
            />
          </div>
        ) : (
          <UserCircleIcon />
        )}
        {/* <span className="text-white">Hello</span> */}
      </UserSection>
    </SideContainer>
  );
};

export default SideNav;

const SideContainer = styled.div`
  width: 70px;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff !important;
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: 10px 0px 10px #efecec;
  color: #131921;
  padding: 30px 0;

  img {
    object-fit: contain;
    margin-top: 5px;
  }
  svg {
    width: 25px !important;
    height: 25px !important;
    cursor: pointer;
  }
`;
const IconSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin-top: -30px;
`;
const UserSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 35px !important;
    height: 35px !important;
    cursor: pointer;
  }
`;
const IconWithCount = styled.div`
  position: relative;
`;
