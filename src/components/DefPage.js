import React from "react";
import { styled } from "styled-components";

export const DefPage = () => {
  return <div>
    <Img src="https://3dnews.ru/assets/external/illustrations/2022/10/20/1076087/iphone.jpg"/>
  </div>;
};

const Img = styled.img`
width: 800px;
border-radius: 12px;
margin-top: 50px;
margin-left: 300px;
-webkit-box-shadow: 0px -5px 4px 17px rgba(143, 148, 152, 0.2);
-moz-box-shadow: 0px -5px 4px 17px rgba(143, 148, 152, 0.2);
box-shadow: 0px -5px 4px 17px rgba(143, 148, 152, 0.2);
`