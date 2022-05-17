import React from "react";
import styled from "styled-components";
import {
  HomeIcon,
  ShoppingCartIcon,
  ClockIcon,
  BookmarkIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

const SideNav = () => {
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
        <Link href="/" passHref>
          <a>
            <HomeIcon />
          </a>
        </Link>
        <BookmarkIcon />
        <ShoppingCartIcon />
        <ClockIcon />
      </IconSection>
      <UserSection>
        <UserCircleIcon />
        <span className="text-white">Hello</span>
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
  }
`;
const IconSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin-top: -30px;
  svg {
    width: 25px !important;
    height: 25px !important;
    cursor: pointer;
  }
`;
const UserSection = styled.div``;
