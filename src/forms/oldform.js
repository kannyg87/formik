import React from "react";
import { useFormik, Formik } from "formik";
import * as Yup from 'yup';

const initialValues = {
	name:'',
}
const onSubmit = values => {console.log("on Submit", values)}
const validate = values => {
	let error = {}
		if(!values.name){
			error.name = "required"
		}
	return error
}

const validationSchema = Yup.object({
	name: Yup.string().required("required!")
})

const OldForm = () =>{
	const formik = useFormik({
		initialValues,
		onSubmit,
		// validate
		validationSchema
	});
	// console.log("values", formik.values);
	// console.log("errors", formik.errors);
	console.log("visted", formik.touched);
	return(
		<div>
			<form onSubmit={formik.handleSubmit}>
				<label htmlFor="name">Name</label>
				<input
					type="test"
					name="name"
					placeholder="Enter your name"
					// onChange={formik.handleChange} 
					// value={formik.values.name}
					// onBlur={formik.handleBlur}
					// we can do instead get field props
					{...formik.getFieldProps('name')}
				/>
				{formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
				<button type="submit">Submit</button>
			</form>
		</div>
			
	)
}

export default OldForm;