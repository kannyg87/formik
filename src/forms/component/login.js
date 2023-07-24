import React from "react";
import { Formik, Form} from "formik";
import TextError from '../textError'
import * as Yup from 'yup';
import FormikControl from "./formikControl";

const Login = (props)=>{
  const initialValues ={
    email:'',
    password:''
  }
  const validationSchema = Yup.object({
    email: Yup.string().required("required!"),
    password: Yup.string().required("required textarea!"),
  })
  
  const onSubmit = (values,onSubmitProps) => {
    console.log("form Data",values)
    onSubmitProps.resetForm();
  }
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
      {
        formik =>{
          return (
        <Form>
          <FormikControl control='input' type='email' label='Email' name='email'/>
          <FormikControl control='input' type='password' label='password' name='password'/>

          <button type="submit" disabled={!formik.isValid}>Submit</button>
        </Form>
      )}
    }

    </Formik>
  )
}
export default Login;