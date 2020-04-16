import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	h1: {
		fontSize: "30px",
		textAlign: "center",
		color: "#e95678"
	}
});

const Welcome = () => {
	const classes = useStyles();

	return <h1 className={classes.h1}>Hello World!</h1>;
};
export default Welcome;
