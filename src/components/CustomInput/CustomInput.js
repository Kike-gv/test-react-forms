import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
border:none;
border-bottom: solid 1px #747474;
font-size: 16px;
&:focus{
    outline: none;
    border-bottom: solid 2px #383838;
}
`;

// const StyledTitle = styled.p`
// `;

const CustomInput = React.forwardRef(({type, placeholder, name, ...register}, ref ) => {


    return (
        <div>
            <StyledInput type={type} placeholder={placeholder} name={name} id={name} {...register} forwardedRef={ref} />
        </div>
    )
});

export default CustomInput;