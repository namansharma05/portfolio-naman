import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	SiVisualstudiocode,
	SiPostman,
	SiWindows,
	SiSublimetext,
	SiAndroidstudio,
} from "react-icons/si";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaUbuntu } from "react-icons/fa";

function Toolstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<SiVisualstudiocode />
				<h3>VSCode</h3>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPostman />
				<h3>Postman</h3>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<IoLogoGooglePlaystore />
				<h3>Google Play Store</h3>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiWindows />
				<h3>Windows</h3>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiSublimetext />
				<h3>Sublime Text</h3>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<FaUbuntu />
				<h3>Ubuntu</h3>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiAndroidstudio />
				<h3>Android Studio</h3>
			</Col>
		</Row>
	);
}

export default Toolstack;
