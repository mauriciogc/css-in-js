import React, { Fragment } from "react";
import { FelaComponent } from "react-fela";

const button = {
	fontSize: "14px",
	fontWeight: "400",
	backgroundColor: "#4a430b",
	border: "none",
	cursor: "pointer",
	color: "#ffffff",
	padding: "10px 20px",
	borderRadius: "4px",
	"&:hover": {
		backgroundColor: "#342f08"
	},
	"@media (max-width: 420px)": {
		fontSize: "50px"
	}
};

const link = {
	...button,
	color: "#4a430b",
	backgroundColor: "transparent",
	"&:hover": {}
};

const Welcome = () => {
	return (
		<Fragment>
			<FelaComponent as="button" style={button}>
				Click me!!
			</FelaComponent>
			<FelaComponent as="a" style={link}>
				Give me click too!!
			</FelaComponent>
		</Fragment>
	);
};

export default Welcome;
