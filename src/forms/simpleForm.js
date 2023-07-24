import React, {useState} from "react";
import { useFormik, Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from 'yup';
import TextError from './textError'

const initialValues = {
	name:'',
	comment:'',
	address:'',
	social:{
		facebook:'',
	},
	phone:[''],
	phNumbers:['']
}

const savedValues = {
	name:'kanny',
	comment:'you are hero',
	address:'2111 cactus bloom ln',
	social:{
		facebook:'',
	},
	phone:[''],
	phNumbers:['']
}


const onSubmit = (values, onSubmitProps) => {
	console.log("on Submit", values)
	console.log("on Submit Props", onSubmitProps)
	onSubmitProps.resetForm();
}

const validationSchema = Yup.object({
	name: Yup.string().required("required!"),
	comment: Yup.string().required("Where is your comment?")
})

const SimpleForm = () =>{
	const [savedValue, setSavedValue] = useState(null);
	// console.log("values", formik.values);
	// console.log("errors", formik.errors);
	// console.log("visted", formik.touched);

	const error ={
    color: 'blue',
  }
	return(
		<Formik 
		initialValues={savedValue || initialValues}
		validationSchema={validationSchema}
		onSubmit={onSubmit}
		enableReinitialize
		>
			{formik =>{
				console.log("entire formik props",formik)
				return (
					<Form>
						<div className='form-control'>
							<label htmlFor="name">Name</label>
							<Field
								type="test"
								name="name"
								id ="name"
								placeholder="Enter your name"
							/>
							<ErrorMessage name="name" component={TextError}/>
						</div>
						<div className='form-control'>
							<label htmlFor="comment">Comment</label>
							<Field
								as="textarea"
								name="comment"
								id ="comment"
							/>
							<ErrorMessage name="comment">
								{
									errorMsg=>
									<div style={error}>
										{errorMsg}
									</div>
								}
							</ErrorMessage>
						</div>

						{/* render Props  */}
						<div className='form-control'>
							<label htmlFor="address">Address</label>
							<Field type="test" name="address">
								{
									(props)=>{
										const {field, form, meta} =props
										console.log("render props", props)
										console.log("render props meta", meta.initialTouched)
										return(
											<div>
												<input id="address" {...field}/>
												{meta.touched && meta.error ? <div>{meta.error}</div> : null}
											</div>
										)}
								}
							</Field>
						</div>
						<div className='form-control'>
							<label htmlFor="social">FaceBook</label>
							<Field
								type="test"
								name="social.facebook"
							/>
						</div>
						<div className='form-control'>
							<label htmlFor="phone">Phone</label>
							<Field
								type="test"
								name="phone[0]"
							/>
						</div>

						<div className='form-control'>
							<label htmlFor="phNumber">phPhone</label>
							<FieldArray name="phNumbers" type="text">
								{
									fieldArrayProps =>{
										console.log("fieldArrayProps", fieldArrayProps);
										const {push, remove, form} = fieldArrayProps;
										const {values} = form;
										const {phNumbers} = values;
										console.log("validation render", form.errors);
										return(
											<div>
												{
													phNumbers.map((phNumber, i)=>(
														<div key={i}>
															<Field name={`phNumber[${i}]`}/>
															{i<0 && (<button type="button" onClick={()=>remove(i)}>-</button>)}
															<button type="button" onClick={()=>push('')}>+</button>
														</div>
													))}
											</div>
										)
										}}
							</FieldArray>
						</div>
						<button type="button" onClick={()=>setSavedValue(savedValues)}>Saved Values</button>
						<button type="submit" disabled={!(formik.dirty && formik.isValid)}>Submit</button>
					</Form>
				)
			}}
			
		</Formik>
			
	)
}

export default SimpleForm;