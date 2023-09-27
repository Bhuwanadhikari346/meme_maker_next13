"use client";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background-color: purple;
  height: 60px;
  width: 100%;
`;

const MenuItemWrapper = styled.div`
  height: 100%;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 60px;
  .left {
    font-size: 24px;
  }
  .right {
    cursor: pointer;
    display: flex;
    gap: 20px;
    font-size: 18px;
    & > span:first-child {
      border: 1px solid orange;
      padding: 0px 5px;
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <MenuItemWrapper>
        <div className="left">MEMEY&#128515;</div>
        <div className="right">
          <span>Home</span>
          <span>About Us</span>
          <span>Login</span>
        </div>
      </MenuItemWrapper>
    </HeaderWrapper>
  );
};
export { Header };
