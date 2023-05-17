import React from "react";
import { ProdictsIphone } from "./pruductsPhone";
import styled from "styled-components";
import Button from "./UI/Button";

export const Products = () => {
  return (
    <div>
      <Ul>
        {ProdictsIphone.map((el) => (
          <Li key={el.id}>
            <Img src={el.url} />
            <h4>{el.titile}</h4>
            <h4>${el.price}</h4>
          </Li>
        ))}
      </Ul>
      <Button>Go Back</Button>
    </div>
  );
};

const Ul = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
`;
const Img = styled.img`
  width: 160px;
  height: 200px;
`;
const Li = styled.li`
  padding: 40px;
  border-radius: 14px;
  background-color: white;
`;
