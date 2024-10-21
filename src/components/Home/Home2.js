import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myImg.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Home2() {
	let navigate = useNavigate();
	const routeChange = () => {
		let path = "/project";
		navigate(path);
	};
	return (
		<Container fluid className="home-about-section" id="about">
			<Container>
				<Button
					variant="primary"
					onClick={routeChange}
					style={{
						borderRadius: "10rem",
						padding: "20px",
						width: "60%",
						paddingTop: "25px",
						marginBottom: "100px",
					}}
				>
					VIEW PROJECTS
				</Button>
				<Row>
					<Col md={8} className="home-about-description">
						<h1 style={{ fontSize: "2.6em" }}>
							LET ME <span className="purple"> INTRODUCE </span>{" "}
							MYSELF
						</h1>
						<p className="home-about-body">
							I am a passionate Flutter developer with hands-on
							experience in building cross-platform mobile
							applications. With a focus on delivering clean,
							scalable, and efficient code, I have worked on
							various personal projects that emphasize
							user-friendly design and seamless functionality. My
							expertise includes state management with tools like
							Bloc and Provider, implementing Clean Architecture
							principles, and API Integration from Remote as well
							as Local server. I am eager to contribute to
							innovative projects, continuously learn, and grow as
							part of a dynamic development team.
							<br />
							<br />I have experience with
							<i>
								<b className="purple">
									{" "}
									Flutter Development, Dart, Firebase, Clean
									Architecture, Bloc, Provider, GetX state
									management and API Integration.{" "}
								</b>
							</i>
							<br />
							<br />
							For Database and Backend I use
							<i>
								<b className="purple">
									{" "}
									Node.js/Express.js, MongoDB, MySql.{" "}
								</b>
							</i>
						</p>
					</Col>
					<Col md={4} className="myAvtar">
						<Tilt>
							<img
								src={myImg}
								className="img-fluid"
								alt="avatar"
							/>
						</Tilt>
					</Col>
				</Row>
				<Row>
					<Col md={12} className="home-about-social">
						<h1>FIND ME ON</h1>
						<p>
							Feel free to{" "}
							<span className="purple">connect </span>with me
						</p>
						<ul className="home-about-social-links">
							<li className="social-icons">
								<a
									href="https://github.com/namansharma05"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<AiFillGithub />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://www.linkedin.com/in/naman-kumar-sharma/"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<FaLinkedinIn />
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Home2;
