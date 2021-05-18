import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin-bottom: 2rem;
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: solid 1px #747474;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-bottom: solid 2px #383838;
  }
`;

const StyledTitle = styled.p`
  margin-top: 0;
`;

const StyledError = styled.p`
  color: red;
  margin: 0;
  font-size: 0.875rem;
`;

const CustomInput = React.forwardRef(
  ({ type, placeholder, title, error, name, ...register }, ref) => {
    return (
      <StyledContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledInput
          type={type}
          placeholder={placeholder}
          name={name}
          id={name}
          {...register}
          forwardedRef={ref}
        />
        {error && <StyledError>{error}</StyledError>}
      </StyledContainer>
    );
  }
);

export default CustomInput;
