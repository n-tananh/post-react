import React from 'react';
import './PostEdit.css'
import HEADER_DATA from "../../common/headerConstant";
import Header from "../../components/Header/Header";
import {TextField} from "@mui/material";
import {API_URL} from "../../common/constant";
import {useForm} from "react-hook-form";
import {useParams} from "react-router-dom";
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";
import axios from "axios";
import {useHistory} from "react-router-dom/cjs/react-router-dom";

const {heading, subheading, backgroundUrl} = HEADER_DATA.edit;
const convertResponseToData = res => res.data;
const PostEdit = ({token}) => {

	const {id} = useParams();

	const {isLoading, data: post, errorMessage} = useFetch({}, `${API_URL.GET_POSTS_BY_ID}/${id}`, convertResponseToData);

	const {register, formState: {errors}, handleSubmit} = useForm();

	const editPost = ({title, description, content}) => {
		console.log({title, description, content});

		const url = `${API_URL.GET_POSTS}/${id}`;
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

		const data = {title, description, content};

		axios.put(url, data)
			.then((res) => {
				console.log(res.data.message)
				alert("Edit done")
				window.location.href = "/"
			}).catch((error) => {
			if (error.status === 401 || 403) {
				alert("You do not have permission to edit posts")
			}
		});
	};

	return (
		<React.Fragment>
			<Header
				heading={heading}
				subheading={subheading}
				backgroundUrl={backgroundUrl}
			/>
			{isLoading && <Loading type="bars"/>}
			{errorMessage && errorMessage}

			{post.title && (
				<div className="edit__wrapper">
					<div className="edit__form">
						<form onSubmit={handleSubmit(editPost)}>

							<TextField
								id="title"
								label="Title"
								margin="normal"
								className="form__input"
								defaultValue={post.title}
								focused
								{...register("title", {required: true})}
							/>
							{errors.title?.type === 'required' && (<p className="form_error">Name is required</p>)}

							<TextField
								id="description"
								label="Description"
								className="form__input"
								margin="normal"
								focused
								defaultValue={post.description}
								{...register("description", {required: true})}
							/>
							{errors.description?.type === 'required' && (<p className="form_error">Description is required</p>)}

							<TextField
								id="content"
								label="Content"
								className="form__input"
								margin="normal"
								multiline
								focused
								minRows={10}
								maxRows={15}
								defaultValue={post.content}
								{...register("content", {required: true})}
							/>
							{errors.content?.type === 'required' && (<p className="form_error">Content is required</p>)}

							<input type="submit" className="btn__link" value="Update"/>
						</form>
					</div>
				</div>)}
		</React.Fragment>

	);
};

export default PostEdit;