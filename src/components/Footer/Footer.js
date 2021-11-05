import React from 'react';
import './Footer.css'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
	return (
		<div className="footer__wrapper">
			<div className="footer__content">
				<ul className="list__social_link">
					<li className="item__social__link">
						<a href="https://www.facebook.com/ndaiduong">
							<FacebookRoundedIcon sx={{fontSize: 55}}/>
						</a>
					</li>
					<li className="item__social__link">
						<a href="https://www.instagram.com/oceanoppa">
							<InstagramIcon sx={{fontSize: 55}}/>
						</a>
					</li>
					<li className="item__social__link">
						<a href="https://github.com/oceannguyen">
							<GitHubIcon sx={{fontSize: 55}}/>
						</a>
					</li>
				</ul>
				<p>
					Copyright © Ocean Nguyen 2019
				</p>
			</div>
		</div>
	);
};

export default Footer;