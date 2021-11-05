import React from 'react';
import NavBar from "../NavBar/NavBar";
import './Header.css'
import banner from "../../assets/images/bg-index.jpg"

const Header = ({ heading, subheading, background }) => {
	return (
		<div className="header__wrapper">
			<NavBar/>
			<div className="header__heading">
				<h1>Ocean Nguyen</h1>
				<span className="header__subheading">Engineer/Video Creator</span>
			</div>
			<div className="banner__wrapper" style={{ backgroundImage : `url(${banner})` }} />
			<div className="banner__overlay"/>
		</div>
	);
};

export default Header;