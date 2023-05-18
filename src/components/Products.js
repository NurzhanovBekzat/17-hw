import React from "react";
import { ProdictsIphone } from "./pruductsPhone";
import styled from "styled-components";
import Button from "./UI/Button";
import { Link, useParams } from "react-router-dom";

export const Products = () => {
  const { id } = useParams();
  return (
  <div >
      <Ul >
        {ProdictsIphone.map((el) => <Li key={el.id} style={{boxShadow:'5px 2px 25px 1px rgba(20,80,120,4.26)'}}>
                <Img src={el.url} />
                <Link to="/"> </Link>
                <Link to={`${el.id}/details`}><p>More</p></Link>
                <h4>{el.titile}</h4>
                <h4>${el.price}</h4>
              </Li>
        )}
      </Ul>
      <Button>Go back</Button>
    </div>
  );
};

const Ul = styled.ul`
  display: flex;
  box-sizing: border-box;
  list-style: none;
  gap: 50px;
  

`;
const Img = styled.img`
  width: 350px;
  height: 280px;
`;
const Li = styled.li`
  padding: 10px;
  border-radius: 14px;
  background-color: white;
`;
