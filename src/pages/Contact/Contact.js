import React from 'react';
import './Contact.css'
import '../../common/common.css'
import {useForm} from "react-hook-form";
import {TextField} from "@mui/material";

// TODO contact form
const Contact = () => {
	const {register, handleSubmit, formState: {errors}} = useForm();

	const onSubmit = () => {
		console.log("submit");
	}

	return (
		<div className="contact__wrapper">
			<div className="contact__content">
				<p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as
					possible!</p>
				<div className="contact__form">
					<form onSubmit={handleSubmit(onSubmit)}>
						<TextField
							id="name"
							label="Name"
							margin="normal"
							className="form__input"
							variant="standard"
						/>
						<TextField
							id="email"
							label="Email Address"
							margin="normal"
							className="form__input"
							variant="standard"
						/>
						<TextField
							id="phone-num"
							label="Phone Number"
							margin="normal"
							className="form__input"
							variant="standard"
						/>
						<TextField
							id="message"
							label="Messages"
							margin="normal"
							className="form__input"
							multiline
							variant="standard"
							minRows={8}
							maxRows={8}
						/>

						<input type="submit" className="contact btn__link" value="Send"/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;