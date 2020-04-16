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
	borderRadius: "4px",
	":hover": {
		backgroundColor: "#342f08"
	},
	"@media (max-width: 420px)": {
		fontSize: "50px"
	}
});

const Link = withStyle(Button, {
	color: "#4a430b",
	backgroundColor: "transparent",
	":hover": {
		backgroundColor: "transparent"
	}
});

const Welcome = () => {
	return (
		<Fragment>
			<Button>Click me!!</Button>
			<Link $as="a" href="/#" onClick={e => e.preventDefault()}>
				Give me click too!!
			</Link>
		</Fragment>
	);
};

export default Welcome;
