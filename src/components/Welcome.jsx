import React, { Fragment } from "react";
import styled from "styled-components";

const Button = styled.button`
	font-size: 14px;
	font-weight: 400;
	background-color: #4a430b;
	border: none;
	cursor: pointer;
	color: #ffffff;
	padding: 10px 20px;
	border-radius: 4px;
`;

const Link = styled(Button)`
	color: #4a430b;
	background-color: transparent;
`;

const Welcome = () => {
	return (
		<Fragment>
			<Button>Click me!!</Button>
			<Link as="a">Give me click too!!</Link>
		</Fragment>
	);
};

export default Welcome;
