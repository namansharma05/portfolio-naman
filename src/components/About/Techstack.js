import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiNodejs, DiMongodb, DiGit } from "react-icons/di";
import {
	SiFlutter,
	SiDart,
	SiExpress,
	SiMysql,
	SiFirebase,
	SiAndroid,
	SiSocketdotio,
	SiJson,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<SiFlutter />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiDart />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiFirebase />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiAndroid />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<CgCPlusPlus />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJavascript1 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiNodejs />
			</Col>

			<Col xs={4} md={2} className="tech-icons">
				<DiMongodb />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiMysql />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiGit />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiExpress />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiSocketdotio />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiJson />
			</Col>
		</Row>
	);
}

export default Techstack;
