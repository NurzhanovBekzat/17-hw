import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProdictsIphone } from "./pruductsPhone";
import { styled } from "styled-components";
import Button from "./UI/Button";
export const ItemProducts = () => {
  const { id } = useParams();

  const Nazad = useNavigate();

  function GoBack() {
    Nazad(-1);
  }
  return (
    <div>
      {ProdictsIphone.map((el) => {
        console.log(el);
        return (
          id === el.id && (
            <Contains>
              <img src={el.url} />
              <div style={{ flexDirection: "column", textAlign: "start" }}>
                <h3 style={{ paddingTop: "100px" }}>{el.titile}</h3>
                <h3>${el.price}</h3>
                <h3>{el.infarmation}</h3>
              </div>
            </Contains>
          )
        );
      })}
      <Button onClick={GoBack}>Go Back</Button>
    </div>
  );
};

const Contains = styled.div`
  display: flex;
  box-sizing: border-box;
  list-style: none;
  border-radius: 30px;
  box-shadow: 5px 2px 25px 1px rgba(20, 80, 120, 4.26);
  width: 900px;
  height: 550px;
  background-color: aliceblue;
  margin: 50px 0 0 250px;
  padding-right: 30px;
  img {
    width: 440px;
    height: 510px;
  }
  h3 {
    width: 500px;
    padding-top: 10px;
    padding-right: 40px;
  }
`;
