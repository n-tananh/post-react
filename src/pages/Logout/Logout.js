import React from "react";
import { Redirect } from "react-router-dom";

const Logout = ({ setToken, setUsername }) => {
	setToken(null);
	setUsername(null);
	return <Redirect to="/" />;
};
export default Logout;