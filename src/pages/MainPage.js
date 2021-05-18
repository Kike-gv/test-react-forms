import React from "react";
import { useForm } from "react-hook-form";
import styled from 'styled-components';

import CustomInput from '../components/CustomInput';

const OuterContainer = styled.div`
margin: 1rem;
`;

const MainPage = () => {
    const ref = React.createRef();

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <OuterContainer>
                <CustomInput type="text" placeholder="introduce tu nombre" title='Nombre' name='name' {...register("firstName", { required: true, maxLength: 20 })} error={errors.firstName && 'Error en tu nombre'} ref={ref} />

                <CustomInput type="text" placeholder="introduce tu apellido" title='Apellido' name='lastname' {...register("lastName", { pattern: /^[A-Za-z]+$/i })} error={errors.lastName && 'Error en tu apellido'} ref={ref} />

                <input type="submit" />
            </OuterContainer>
        </form>
    );
}

export default MainPage;