import React, { Fragment } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	button: {
		fontSize: "14px",
		fontWeight: "400",
		backgroundColor: "#4a430b",
		border: "none",
		cursor: "pointer",
		color: "#ffffff",
		padding: "10px 20px",
		borderRadius: "4px"
	},
	link: {
		composes: "$button",
		color: "#4a430b",
		backgroundColor: "transparent"
	}
});

const Welcome = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<button className={classes.button}>Click me!!</button>
			<a className={classes.link} href="/#" onClick={e => e.preventDefault()}>
				Give me click too!!
			</a>
		</Fragment>
	);
};
export default Welcome;
