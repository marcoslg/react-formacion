import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { IFormData, FormDataValidation } from "models";
import * as Yup from "yup";

const FormulariosYup = () => {
  const formSchema = Yup.object({
    nombre: Yup.string()
      .required("nombre es obligatorio")
      .min(5, "nombre debe ser >= 5"),
  });
  return (
    <div>
      <h1>Formulario yup</h1>
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          edad: 20,
          isDeveloper: false,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={formSchema}
        // validate={(values) => {
        //   const errors: FormDataValidation<IFormData> = {};
        //   if (values.nombre.length < 5) {
        //     errors.nombre = "nombre debe ser >=5 ";
        //   }
        //   return errors;
        // }}
      >
        <Form
          style={{
            padding: "0.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            alignItems: "baseline",
          }}
        >
          <p
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <label htmlFor="int-nombre">nombre</label>
            <Field
              type="text"
              id="int-nombre"
              name="nombre"
              style={{ padding: "0.5 rem 1 rem" }}
            />
            <span style={{ color: "red", fontSize: "0.9rem", fontWeight: 600 }}>
              <ErrorMessage name="nombre" />
            </span>
          </p>
          <Field type="text" name="apellido" />
          <Field type="number" name="edad" />
          <Field type="checkbox" name="isDeveloper" />
          <button type="submit">enviar</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormulariosYup;
