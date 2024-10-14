import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: "left" }}>
						Hi Everyone, I am{" "}
						<span className="purple">Naman Sharma </span>
						from <span className="purple"> Delhi, India.</span>
						<br />I hold a Bachelor of Technology degree in Computer
						Science and Engineering from ABESIT, Ghaziabad, India.
						<br />
						Previously, I worked as a Flutter Developer Intern at
						GroceryGo Pvt. Ltd. for nearly a year. I am currently
						exploring opportunities as a Flutter Developer or
						Freelance Developer.
						<br />
						<br />
						In addition to coding, I enjoy engaging in activities
						such as:
					</p>
					<ul>
						<li className="about-activity">
							<ImPointRight /> Playing Video Games
						</li>
						<li className="about-activity">
							<ImPointRight /> Playing Guitar
						</li>
					</ul>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
