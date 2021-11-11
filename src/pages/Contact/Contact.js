import React from 'react';
import './Contact.css'
import '../../assets/styles/common.css'
import {useForm} from "react-hook-form";
import {TextField} from "@mui/material";
import {PATTERN} from "../../common/constant";
import Header from "../../components/Header/Header";
import HEADER_DATA from "../../common/headerConstant";

const { heading, subheading, backgroundUrl } = HEADER_DATA.contact;
const Contact = () => {
	const { register, formState: { errors }, handleSubmit } = useForm();

	const onSubmit = (values) => {
		alert(`Send : ${values.message} done`)
		console.log(values)
	}

	const handleChange = (e) => {
	 	console.log(e.target.value)
	}

	return (
		<React.Fragment>
			<Header
				heading={ heading }
				subheading = {subheading}
				backgroundUrl = {backgroundUrl}
			/>
			<div className="contact__wrapper">
				<div className="contact__content">
					<p className="contact__title">Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as
						possible!</p>
					<div className="contact__form">
						<form onSubmit={handleSubmit(onSubmit)}>
							<TextField
								onChange={ handleChange }
								id="name"
								label="Name"
								margin="normal"
								className="form__input"
								variant="standard"
								{...register("name", { required: true })}
							/>
							{errors.name?.type === 'required' && (<p className="form_error">Name is required</p>)}

							<TextField
								id="email"
								label="Email Address"
								margin="normal"
								className="form__input"
								variant="standard"
								{...register("email", { required: true, pattern: PATTERN.EMAIL })}
							/>
							{errors.email?.type === 'required' &&(<p className="form_error">Email is required</p>)}
							{errors?.email?.type === "pattern" &&  (<p className="form_error">Email is invalid</p>)}

							<TextField
								id="phoneNum"
								label="Phone Number"
								margin="normal"
								className="form__input"
								variant="standard"
								{...register("phoneNum", { required: true })}
							/>
							{errors.phoneNum?.type === 'required' && (<p className="form_error">Phone number is required</p>)}

							<TextField
								id="message"
								label="Messages"
								margin="normal"
								className="form__input"
								multiline
								variant="standard"
								minRows={8}
								maxRows={8}
								{...register("message", { required: true })}
							/>
							{errors.message?.type === 'required' && (<p className="form_error">Message is required</p>)}

							<input type="submit" className="contact btn__link" value="Send"/>
						</form>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;