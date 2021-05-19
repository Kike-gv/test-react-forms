import React, { useState, useEffect } from "react";

import styled from "styled-components/macro";
import {
  border,
  fontSize,
  color,
  flexbox,
  layout,
  shadow,
  space,
} from "styled-system";

const StyledContainer = styled.div`
  ${color}
  ${flexbox}
  ${layout}
  ${shadow}
  height: 15rem;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem;
`;

const FlexedPart = styled.div`
  ${flexbox}
  ${layout}
`;

const StyledText = styled.p`
  ${border}
  ${fontSize}
  ${color}
  ${space}
`;
const StyledTitle = styled.p`
  ${border}
  ${fontSize}
  ${color}
  font-weight: bold;
`;

const LightCircle = styled.div`
  ${color}
  width:4rem;
  height: 4rem;
  border-radius: 100%;
`;

const CustomCard = ({ item }) => {
  const [randomNum, setRandomNum] = useState();
  const { dni, firstName, lastName, workOutside } = item;
  console.log("🚀 ~ file: CustomCard.js ~ line 33 ~ CustomCard ~ item", item);

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  useEffect(() => {
    setRandomNum(getRandomInt(0, 10));
  }, [dni]);

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
    <StyledContainer
      width={["initial", "15rem", "15rem", "15rem"]}
      bg={colorArr[randomNum]}
      boxShadow="default"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <FlexedPart
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        height="4rem"
      >
        {workOutside && <LightCircle bg="lightTransparent"></LightCircle>}
      </FlexedPart>
      <FlexedPart
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <StyledTitle margin="0.5rem" fontSize="big">
          {dni}
        </StyledTitle>
        <StyledText margin="0rem">{firstName}</StyledText>
        <StyledText margin="0rem">{lastName}</StyledText>
      </FlexedPart>
    </StyledContainer>
  );
};

export default CustomCard;
