import React from "react";
import { useForm } from "react-hook-form";
import styled from 'styled-components';

import CustomInput from '../components/CustomInput';

const OuterContainer = styled.div`
margin: 1rem;
`;

const MainPage = () => {
    const ref = React.createRef();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <OuterContainer>
                <CustomInput type="text" placeholder="introduce tu nombre" name='name' {...register("firstName", { required: true, maxLength: 20 })} ref={ref} />

                <CustomInput type="text" placeholder="introduce tu apellido" name='lastname' {...register("lastName", { pattern: /^[A-Za-z]+$/i })} ref={ref} />

                <input type="submit" />
            </OuterContainer>
        </form>
    );
}

export default MainPage;