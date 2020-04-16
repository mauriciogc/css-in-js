import React from "react";
import { styled } from "styletron-react";

const Title = styled("h1", {
	fontSize: "30px",
	textAlign: "center",
	color: "#e95678"
});

const Welcome = () => {
	return <Title>Hello World!</Title>;
};

export default Welcome;
