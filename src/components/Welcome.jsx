import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	h1: {
		fontSize: "30px",
		textAlign: "center",
		color: props => (props.primary ? "#e95678" : "#25b0bc")
	}
});

const Welcome = ({ name = "Stranger" }) => {
	const isStranger = name === "Stranger"; //(A)
	const classes = useStyles({ primary: isStranger });

	return <h1 className={classes.h1}>Hello {name}</h1>;
};
export default Welcome;
