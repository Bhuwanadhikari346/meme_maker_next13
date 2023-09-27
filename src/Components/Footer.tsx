"use client";

import { styled } from "styled-components";

const FooterWrapper = styled.div`
  height: 40px;
  background: #ebebeb;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Footer = () => {
  return <FooterWrapper>&copy; 2023 MEMEY&#128515;</FooterWrapper>;
};
export { Footer };
