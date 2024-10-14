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
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPostman />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<IoLogoGooglePlaystore />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiWindows />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiSublimetext />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<FaUbuntu />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiAndroidstudio />
			</Col>
		</Row>
	);
}

export default Toolstack;
