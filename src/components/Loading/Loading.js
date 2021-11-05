import React from 'react';
import ReactLoading from 'react-loading';
import './Loading.css'

const Loading = ({ type, color }) => (
	<div className="loading__wrapper">
		<ReactLoading type={type} color="#333" height={500} width={100} />
	</div>
);

export default Loading;