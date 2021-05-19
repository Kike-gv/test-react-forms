import React from "react";

import styled from "styled-components";
import { border, fontSize, color } from "styled-system";

const StyledContainer = styled.div`
  ${color}
  ${border}
  width: 15rem;
  margin: 2rem;
  padding: 1rem;
  border-radius: 1rem;
`;

const FormContainer = ({ children }) => {
  return <StyledContainer border='default' >{children}</StyledContainer>;
};

export default FormContainer;
