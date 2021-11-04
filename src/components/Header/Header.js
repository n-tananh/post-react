import React from 'react';
import NavBar from "../NavBar/NavBar";
import './Header.css'

const Header = () => {
	return (
		<div className="header__wrapper">
			<NavBar/>
			<div className="banner__wrapper"/>
			{/*<div className="banner__overlay"/>*/}
		</div>
	);
};

export default Header;