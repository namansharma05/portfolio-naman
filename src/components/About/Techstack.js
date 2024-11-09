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
				<h3>Flutter</h3>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiDart />
				<h3>Dart</h3>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiFirebase />
				<h3>Firebase</h3>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiAndroid />
				<h3>Android</h3>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<CgCPlusPlus />
				<h3>C++</h3>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJavascript1 />
				<h3>JavaScript</h3>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiNodejs />
				<h3>Node.js</h3>
			</Col>

			<Col xs={4} md={2} className="tech-icons">
				<DiMongodb />
				<h3>MongoDb</h3>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiMysql />
				<h3>MySql</h3>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiGit />
				<h3>Git</h3>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiExpress />
				<h3>Express.js</h3>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiSocketdotio />
				<h3>Socket.io</h3>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiJson />
				<h3>Json</h3>
			</Col>
		</Row>
	);
}

export default Techstack;
