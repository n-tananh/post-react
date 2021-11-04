import React, {useState} from 'react';
import './Contact.css'
import '../../common/common.css'
import {useForm} from "react-hook-form";

// TODO contact form
const Contact = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data => console.log(data);

	const [message, setMessage] = useState("");

	const handleTyping = (e) => {
		setMessage(e.target.value)
	}

	console.log(message);

	return (
		<div className="contact__wrapper">
			<p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
			<div className="contact__form">
				<form onSubmit={handleSubmit(onSubmit)}>
					<input defaultValue="test" {...register("example")} />
					<input {...register("exampleRequired", { required: true })} />
					{errors.exampleRequired && <span>This field is required</span>}
					<input defaultValue="test" {...register("example")} />
					<textarea onChange={ handleTyping } value={message}/>

					<input type="submit" className="contact btn__link" value="Send"/>
				</form>
			</div>
		</div>
	);
};

export default Contact;