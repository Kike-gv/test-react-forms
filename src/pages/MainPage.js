import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styled from "styled-components";

import CustomInput from "../components/CustomInput";

const OuterContainer = styled.div`
  margin: 1rem;
`;

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  age: yup.number().positive().integer().required(),
  workOutside: yup.boolean(),
});

const MainPage = () => {
  const ref = React.createRef();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <OuterContainer>
        <CustomInput
          type="text"
          placeholder="introduce tu nombre"
          title="Nombre"
          name="name"
          {...register("firstName")}
          error={errors.firstName && "Error en tu nombre"}
          ref={ref}
        />

        <CustomInput
          type="text"
          placeholder="introduce tu apellido"
          title="Apellido"
          name="lastname"
          {...register("lastName")}
          error={errors.lastName && "Error en tu apellido"}
          ref={ref}
        />

        <CustomInput
          type="number"
          placeholder="introduce tu edad"
          title="Edad"
          name="age"
          {...register("age")}
          error={errors.age && "Error en tu edad"}
          ref={ref}
        />

        <CustomInput
          type="checkbox"
          placeholder=""
          title="¿Has trabajado en el extranjero?"
          name="workOutside"
          {...register("workOutside")}
          error={errors.workOutside && ""}
          ref={ref}
        />

        <input type="submit" />
      </OuterContainer>
    </form>
  );
};

export default MainPage;
