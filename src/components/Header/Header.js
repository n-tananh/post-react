import React from 'react';
import './Header.css'

const Header = ( {heading, subheading, backgroundUrl} ) => {

	return (
		<div className="header__wrapper">
			<div className="header__heading">
				<h1>{ heading }</h1>
				<span className="header__subheading">{ subheading }</span>
			</div>
			<div className="banner__wrapper" style={{ backgroundImage : `url(${backgroundUrl})` }} />
			<div className="banner__overlay"/>
		</div>
	);
};

export default Header;