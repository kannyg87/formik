import React from "react";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import FormikControl from './formikControl'

const Reuseable = ()=>{
  const dropDownOptions = [
    { key:'Select an option', value:''},
    { key:'option1', value:'option1'},
    { key:'option2', value:'option2'},
    { key:'option3', value:'option3'},
  ]

  const radioOptions = [
    { key:'option1', value:'roption1'},
    { key:'option2', value:'roption2'},
    { key:'option3', value:'roption3'},
  ]

  const checkboxOptions = [
    { key:'option1', value:'coption1'},
    { key:'option2', value:'coption2'},
    { key:'option3', value:'coption3'},
  ]

  const initialValues ={
    email:'',
    textarea:'',
    selectOption: '',
    radioOption: '',
    checkbox: [],
    birthDate: null
  }
  const validationSchema = Yup.object({
    email: Yup.string().required("required!"),
    textarea: Yup.string().required("required textarea!"),
    selectOption: Yup.string().required("required selectOption!"),
    radioOption: Yup.string().required("required radioOption!"),
    checkbox: Yup.array().required("required checkboxOption!"),
    birthDate: Yup.date().required("required checkboxOption!").nonNullable(),
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
          formik =>(
          <Form>
            <FormikControl control='input' type='email' label='Email' name='email'/>
            <FormikControl control='textarea' type='textarea' label='Comment' name='textarea'/>
            <FormikControl control='select' label='Select Option' name='selectOption' options={dropDownOptions}/>
            <FormikControl control='radio' label='Pick one Option' name='radioOption' options={radioOptions}/>
            <FormikControl control='checkbox' label='checkbox Option' name='checkbox' options={checkboxOptions}/>
            <FormikControl control='date' label='Pick a Date' name='birthDate' />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
  )
}
export default Reuseable;