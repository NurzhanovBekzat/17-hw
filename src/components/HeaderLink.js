import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const HeaderLink = () => {
  return (
    <Header>
      <h2>
        <Link style={{ color: "white" }} to="IStore">
          IStore
        </Link>
      </h2>
      <LinkContains>
        <H3>
          <Link style={{ color: "white" }} to="/products">
            Products
          </Link>
        </H3>

        <H3>
          <Link style={{ color: "white" }} to="/MyCart">
            My Cart
          </Link>
        </H3>

        <H3>
          <Link style={{ color: "white" }} to="/MyOrder">
            My Orders
          </Link>
        </H3>
      </LinkContains>
    </Header>
  );
};

const Header = styled.header`
  height: 60px;
  background-color: blue;
  display: flex;
  justify-content: space-between;
  padding: 0px 30px;
`;
const LinkContains = styled.div`
  display: flex;
  gap: 50px;
`;
const H3 = styled.h3`
  color: white;
`;
