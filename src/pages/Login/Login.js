import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Formik} from 'formik';
import './Login.css';
import axios from 'axios';
import Header from "../../components/Header/Header";
import HEADER_DATA from "../../common/headerConstant";

const initialValues = {username: '', password: ''};
const validateForm = values => {
	const errors = {};
	if (values.username.trim().length < 1) {
		errors.username = 'Username require';
	}

	if (values.password.trim().length < 1) {
		errors.password = 'Password require';
	}
	return errors;
}
const {heading, subheading, backgroundUrl} = HEADER_DATA.login;

const LoginPage = ({setToken, setUsername}) => {

	const submit = (values, {setSubmitting}) => {

		axios({
			method: 'POST',
			url: 'http://localhost:8080/authenticate',
			data: values
		}).then(response => {
			setSubmitting(false);
			setToken(response.data.jwttoken);
			setUsername(response.data.username);
			axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.jwttoken}`;
		}).catch(error => {
			console.log(error.response.data)
			error.process = error.response.data.message;
			setSubmitting(false);
		})
	};

	return (
		<React.Fragment>
			<Header
				heading={heading}
				subheading={subheading}
				backgroundUrl={backgroundUrl}
			/>
			<div className="login__wrapper">
				<div className="form__wrapper">
					<Formik
						initialValues={initialValues}
						validate={validateForm}
						onSubmit={submit}
					>
						{
							({
								 values,
								 errors,
								 touched,
								 handleChange,
								 handleBlur,
								 handleSubmit,
								 isSubmitting,
							 }) => (

								<Form className="login__form" onSubmit={handleSubmit}>
									<Form.Control.Feedback style={{color: "red", textAlign: "left"}} type="invalid">
										{errors.process}
									</Form.Control.Feedback>
									<Form.Group className="form__group" controlId="formBasicEmail">
										<Form.Label className="form__label">Username</Form.Label>
										<Form.Control
											type="text"
											placeholder="Enter username"
											value={values.username}
											onChange={handleChange}
											onBlur={handleBlur}
											isInvalid={touched.username && errors.username}
											name="username"
											className= "form__control"
										/>
										<Form.Control.Feedback style={{color: "red", textAlign: "left"}} type="invalid">
											{errors.username}
										</Form.Control.Feedback>
									</Form.Group>

									<Form.Group className="form__group" controlId="formBasicPassword">
										<Form.Label  className="form__label"> Password </Form.Label>
										<Form.Control
											type="password"
											placeholder="Password"
											isInvalid={touched.password && errors.password}
											value={values.password}
											onChange={handleChange}
											onBlur={handleBlur}
											name="password"
											className= "form__control"
										/>
										<Form.Control.Feedback  style={{color: "red", textAlign: "left"}} type="invalid">
											{errors.password}
										</Form.Control.Feedback>
									</Form.Group>
									<Button
										variant="primary"
										type="submit"
										className="btn__link"
										disabled={isSubmitting}
									>
										Submit
									</Button>
								</Form>
							)
						}
					</Formik>
				</div>
			</div>

		</React.Fragment>

	)
};

export default LoginPage;
