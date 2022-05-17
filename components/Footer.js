import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <FooterTop>
        <span>Back to Top</span>
      </FooterTop>
      <FooterBottom>
        <FooterOption>
          <Span className="footer__head">Get to Know Us</Span>
          <Span>Careers</Span>
          <Span>Blog</Span>
          <Span>About</Span>
          <Span>Amazon Investor</Span>
          <Span>Relations</Span>
          <Span>Amazon Devices</Span>
          <Span>Amazon Science</Span>
        </FooterOption>
        <FooterOption>
          <Span className="footer__head">Make Money with Us</Span>
          <Span>Sell products on Amazon</Span>
          <Span>Sell on Amazon Business</Span>
          <Span>Sell apps on Amazon</Span>
          <Span>Amazon Investor</Span>
          <Span>Become an Affiliate</Span>
          <Span>Advertise Your Products</Span>
          <Span>Self-Publish with Us</Span>
          <Span>Host an Amazon Hub</Span>
        </FooterOption>
        <FooterOption>
          <Span className="footer__head">Amazon Payment Products</Span>
          <Span>Amazon Business Card</Span>
          <Span>Shop with Points</Span>
          <Span>Reload Your Balance</Span>
          <Span>Amazon Currency Converter</Span>
        </FooterOption>
      </FooterBottom>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 14px;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  width: calc(70% - 70px);
  color: white;
  font-size: 14px;
  margin-left: calc(15% + 70px);
`;
const FooterTop = styled.div`
  height: 40px;
  text-align: center;
  background-color: #131921;
  line-height: 40px;
`;
const FooterBottom = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  background-color: #232f3e;
  padding: 30px;
  color: #c9c9c9;
  line-height: 1.7;
  left: calc(15% + 70px);
`;
const FooterOption = styled.div``;
const Span = styled.div``;
