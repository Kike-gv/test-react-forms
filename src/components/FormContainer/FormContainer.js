import React from "react";

import styled from "styled-components";
import { border, color, layout } from "styled-system";

const StyledContainer = styled.div`
  ${color}
  ${border}
  ${layout}
  margin: 2rem;
  padding: 1rem;
  border-radius: 1rem;
`;

const FormContainer = ({ children }) => {
  return <StyledContainer border="default" width={["initial", "15rem", "15rem", "15rem"]}>{children}</StyledContainer>;
};

export default FormContainer;
