import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styled from "styled-components";
import { flexbox, layout } from "styled-system";

import CustomInput from "../components/CustomInput";
import CustomCard from "../components/CustomCard";
import FormContainer from "../components/FormContainer";

const FlexedPage = styled.div`
  ${flexbox}
  ${layout}
  ${layout}
`;
const FlexedbigPart = styled.div`
  ${flexbox}
  ${layout}
  ${layout}
`;
const FixedbigPart = styled.div`
  ${layout}
`;
const FlexedSmallPart = styled.div`
  ${flexbox}
  ${layout}
  width: 10rem;
  height: 15rem;
  margin: 1rem;
`;

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  dni: yup.number().positive().integer().required(),
  workOutside: yup.boolean(),
});

const MainPage = () => {
  const [formArray, setFormArray] = useState([]);
  const ref = React.createRef();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setFormArray([...formArray, data]);
  };

  return (
    <FlexedPage display={["block", "flex", "flex", "flex"]} width="100%">
      <FixedbigPart width={["100%", "20rem", "20rem", "20rem"]}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormContainer>
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
              placeholder="introduce tu dni sin letra"
              title="Dni sin letra"
              name="dni"
              {...register("dni")}
              error={errors.dni && "Error en tu dni"}
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
          </FormContainer>
        </form>
      </FixedbigPart>
      <FlexedbigPart display="flex" flexWrap="wrap" width={["100%", "calc(100% - 20rem)", "calc(100% - 20rem)", "calc(100% - 20rem)"]}>
        {formArray.map((item) => (
          <FlexedSmallPart key={item.dni}>
            <CustomCard item={item} />
          </FlexedSmallPart>
        ))}
      </FlexedbigPart>
    </FlexedPage>
  );
};

export default MainPage;
