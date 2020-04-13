import React from "react";
import styled from "styled-components";

const Title = styled.h1`
	font-size: 30px;
	text-align: center;
	color: ${props => (props.primary ? "#e95678" : "#25b0bc")}; //(C)
`;

const Welcome = ({ name = "Stranger" }) => {
	const isStranger = name === "Stranger"; //(A)
	return (
		<Title primary={isStranger}>
			{/* (B) */}Hello {name}
		</Title>
	);
};

export default Welcome;
