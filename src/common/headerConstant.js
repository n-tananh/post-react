import bgHome from '../assets/images/bg-index.jpg'
import bgAbout from '../assets/images/bg-about.jpg'
import bgPosts from '../assets/images/bg-post.jpg'
import bgContact from '../assets/images/bg-contact.jpg'
import bgLogin from '../assets/images/bg_login.jpg'
import bgEdit from '../assets/images/bg_edit.jpg'

const HEADER_DATA = {
	home: {
		heading: "Ocean Nguyen",
		subheading: "Engineer / Video Creator",
		backgroundUrl: bgHome
	},
	about: {
		heading: "About Me",
		subheading: "This is what I do.",
		backgroundUrl: bgAbout
	},
	post: {
		heading: "Posts",
		subheading: "",
		backgroundUrl: bgPosts
	},
	contact: {
		heading: "Contact Me",
		subheading: "Have questions? I have answers.",
		backgroundUrl: bgContact
	},
	login: {
		heading: "Login",
		subheading: "Welcome back",
		backgroundUrl: bgLogin
	},
	edit: {
		heading: "Edit post",
		subheading: "Make something better",
		backgroundUrl: bgEdit
	},
}

export default HEADER_DATA;