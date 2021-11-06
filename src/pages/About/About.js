import React from 'react';
import './About.css'
import Header from "../../components/Header/Header";
import HEADER_DATA from "../../common/headerConstant";

const { heading, subheading, backgroundUrl } = HEADER_DATA.about;
const About = () => {
	return (
		<React.Fragment>
			<Header
				heading={ heading }
				subheading = { subheading }
				backgroundUrl = { backgroundUrl }
			/>
			<div className="about__wrapper">
				<div className="container">
					<div className="about__content">
						<p>
							Hello friends! I am Ocean Nguyen. Currently, I'm working at an untitled large tech company as software engineer. I love solving problems and developing myself that broaden my horizon about thousands of thing around the world.
						</p>
						<p>
							This blog tries to intersect not only Day in a life of me as a software engineer but also Entertainment and Media.
						</p>
						<p>
							Hopefully, it would be good for you. Feel free to give me feedback.
						</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;