import React from "react";

import styled from "styled-components/macro";
import { border, color, layout, shadow } from "styled-system";

const StyledContainer = styled.div`
  ${color}
  ${layout}  
  ${border}
  ${shadow}
  margin: 1rem;
  padding: 1rem;
  border-radius: 1rem;
`;

const FormContainer = ({ children }) => {
  return (
    <StyledContainer width={["initial", "15rem", "15rem", "15rem"]} boxShadow='default'>
      {children}
    </StyledContainer>
  );
};

export default FormContainer;
