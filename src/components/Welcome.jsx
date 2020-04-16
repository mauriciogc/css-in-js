import React, { Fragment } from "react";
import { withStyle, styled } from "styletron-react";

const Button = styled("button", {
	fontSize: "14px",
	fontWeight: "400",
	backgroundColor: "#4a430b",
	border: "none",
	cursor: "pointer",
	color: "#ffffff",
	padding: "10px 20px",
	borderRadius: "4px"
});

const Link = withStyle(Button, {
	color: "#4a430b",
	backgroundColor: "transparent"
});

const Welcome = () => {
	return (
		<Fragment>
			<Button>Click me!!</Button>
			<Link>Give me click too!!</Link>
		</Fragment>
	);
};

export default Welcome;
