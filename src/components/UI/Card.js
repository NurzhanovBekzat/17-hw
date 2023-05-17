import React from "react";
import { styled } from "styled-components";

export const Card = ({ children, height }) => {
  return <MyCartStyle height={height}>{children}</MyCartStyle>;
};

const MyCartStyle = styled.div`
  background-color: white;
  margin-top: 10px;
  padding: 4px;
  height: ${(props) => props.height};
  border-radius: 12px;
`;
