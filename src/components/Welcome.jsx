import React from "react";
import { styled } from "styletron-react";

const Title = styled("h1", props => ({
	fontSize: "30px",
	textAlign: "center",
	color: props.$primary ? "#e95678" : "#25b0bc"
}));

const Welcome = ({ name = "Stranger" }) => {
	const isStranger = name === "Stranger";
	return <Title $primary={isStranger}>Hello {name}</Title>;
};

export default Welcome;
