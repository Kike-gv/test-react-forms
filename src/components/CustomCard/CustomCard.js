import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { border, fontSize, color } from "styled-system";

const StyledContainer = styled.div`
  ${color}
`;

// const StyledInput = styled.input`
//   ${border}
//   ${fontSize}
//   ${color}
// `;

const StyledText = styled.p`
  ${border}
  ${fontSize}
  ${color}
`;
const StyledTitle = styled.p`
  ${border}
  ${fontSize}
  ${color}
`;

const CustomCard = ({ item }) => {
  const [randomNum, setRandomNum] = useState();
  const { dni, firstName, lastName, workOutside } = item;

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  useEffect(() => {
    setRandomNum(getRandomInt(0, 10));
  },[dni]);

  const colorArr = [
    "bg00",
    "bg01",
    "bg02",
    "bg03",
    "bg04",
    "bg05",
    "bg06",
    "bg07",
    "bg08",
    "bg09",
  ];

  return (
    <StyledContainer bg={colorArr[randomNum]}>
      <StyledTitle fontSize="big">{dni}</StyledTitle>
      <StyledText>{firstName}</StyledText>
      <StyledText>{lastName}</StyledText>
      <StyledText>{workOutside}</StyledText>
    </StyledContainer>
  );
};

export default CustomCard;
