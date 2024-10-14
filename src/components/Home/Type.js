import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
	return (
		<Typewriter
			options={{
				strings: [
					"Android Developer.",
					"Flutter Developer.",
					"Freelancer.",
					"Open Source Contributor.",
				],
				autoStart: true,
				loop: true,
				deleteSpeed: 25,
			}}
		/>
	);
}

export default Type;
