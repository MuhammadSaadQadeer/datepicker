import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Picker from "./Picker";

const SignupSchema = Yup.object().shape({
  startDate: Yup.string().required("Required"),
});

const ValidationSchemaExample = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}
  >
    <h1>Test Form Date Picker</h1>
    <Formik
      initialValues={{
        startDate: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field
            name="startDate"
            placeholder={"Start Date"}
            component={Picker}
          />
          {errors.startDate && touched.startDate ? (
            <div>{errors.startDate}</div>
          ) : null}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button style={{ padding: 10 }} type="submit">
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default ValidationSchemaExample;
