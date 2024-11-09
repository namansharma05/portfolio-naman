import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import MarioImage from "../../Assets/Projects/Mario.png";
import ChatsScreen from "../../Assets/Projects/chat-app/chats-screen.png";
import FoodHomePage from "../../Assets/Projects/food-app/home-page.png";
import CarOnboarding from "../../Assets/Projects/car-rental-app/get-started.png";
import MovieApp from "../../Assets/Projects/movie-app/trending&popular.png";
import NewsApp from "../../Assets/Projects/news-app/news-app.png";
import Alarm1 from "../../Assets/Projects/alarm-app/Alarm1.png";
function Projects() {
	return (
		<Container fluid className="project-section">
			{/* <Particle /> */}
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="purple">Works </strong>
				</h1>
				<p style={{ color: "white" }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row
					style={{ justifyContent: "center", paddingBottom: "10px" }}
				>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={ChatsScreen}
							isBlog={false}
							title="Talkify"
							description="A real-time chat application built using Dart, Flutter, Node.js, Express.js, Socket.io, MongoDB, Bloc state management, and Clean Architecture. This application allows users to engage in seamless, real-time communication with each other, offering a smooth and interactive chat experience."
							ghLink="https://github.com/namansharma05/clean_arch_bloc_chat_app"
						/>
					</Col>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={FoodHomePage}
							isBlog={false}
							title="FarmFresh"
							description="A fully-fledged mobile application that enables users to sign in via Gmail, add fresh products to their wishlist or cart, and make purchases using Cash on Delivery or Google Payments. The app is built using Dart, Flutter, Firebase, Provider, and follows Clean Architecture principles to ensure scalability and maintainability."
							ghLink="https://github.com/namansharma05/provider_food_app"
						/>
					</Col>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={CarOnboarding}
							isBlog={false}
							title="RentMyRide"
							description="A mobile application that allows users to rent luxury cars at affordable prices, offering real-time data management. Built using Dart, Flutter, APIs, Bloc state management, and Clean Architecture, this app enables users to view the current location of the car they wish to rent, providing a seamless and efficient rental experience."
							ghLink="https://github.com/namansharma05/clean_arch_bloc_car_rental_app"
						/>
					</Col>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={MovieApp}
							isBlog={false}
							title="MovieLens"
							description="Designed and developed a mobile application that offers users a streamlined interface for discovering trending and popular movies. The application includes a robust search feature. Built using Dart, Flutter, APIs, Bloc state management, and Clean Architecture, ensuring an efficient and maintainable codebase. The user-friendly design enhances the overall experience, making it easy for users to explore and find movies they love"
							ghLink="https://github.com/namansharma05/clean_arch_bloc_movie_app"
						/>
					</Col>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={NewsApp}
							isBlog={false}
							title="DailyTak"
							description="A dynamic mobile application that allows users to browse and read daily news articles from various countries and industries. The application features an intuitive interface that categorizes news articles, making it easy for users to stay informed about global events and trends. Built using Dart and Flutter, the app utilizes APIs to fetch the latest news and employs Bloc state management alongside Clean Architecture to ensure a responsive and maintainable codebase."
							ghLink="https://github.com/namansharma05/clean_arch_bloc_news_app"
						/>
					</Col>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={Alarm1}
							isBlog={false}
							title="Arise"
							description="A cross-platform alarm application with a seamless user experience, leveraging Flutter for the UI and Kotlin for Android-specific features. The app allows users to set, manage, and customize alarms with options for recurring events, snooze functionality, and a variety of notification tones. The project aimed at providing an intuitive, reliable solution for users looking to manage their time effectively."
							ghLink="https://github.com/namansharma05/alarm-app"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
