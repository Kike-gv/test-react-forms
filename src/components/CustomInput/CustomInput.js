import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { border, fontSize, color } from "styled-system";

const StyledContainer = styled.div`
  margin-bottom: 2rem;
`;

const StyledInput = styled.input`
  ${border}
  ${fontSize}
  ${color}
  &:focus {
    outline: none;
  }
`;

const StyledTitle = styled.p`
  margin-top: 0;
  ${color}
`;

const StyledError = styled.p`
  ${fontSize}
  ${color}
  margin: 0;
`;

const CustomInput = React.forwardRef(
  (
    { type, placeholder, title, error, name, value = false, ...register },
    ref
  ) => {
    const [isCheckValue, setIsCheckValue] = useState(false);
    const [isCheckChanged, setIsCheckChanged] = useState(value);

    useEffect(() => {
      if (type === "checkbox") {
        setIsCheckValue(true);
      }
    }, [type]);

    return (
      <StyledContainer>
        <StyledTitle color="text1">{title}</StyledTitle>
        {!isCheckValue && (
          <StyledInput
            type={type}
            placeholder={placeholder}
            name={name}
            id={name}
            {...register}
            forwardedRef={ref}
            border={0}
            borderBottom="default"
            fontSize="regular"
            color="text1"
            bg="transparent"
          />
        )}

        {isCheckValue && (
          <StyledInput
            type={type}
            placeholder={placeholder}
            name={name}
            id={name}
            value={isCheckChanged}
            {...register}
            onChange={() => setIsCheckChanged(!isCheckChanged)}
            forwardedRef={ref}
            color="text1"
          />
        )}
        {error && (
          <StyledError fontSize="minium" color="error">
            {error}
          </StyledError>
        )}
      </StyledContainer>
    );
  }
);

export default CustomInput;
