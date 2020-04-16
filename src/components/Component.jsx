import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	wrapper: {
		padding: "40px",
		textAlign: "left",
		backgroundColor: "#f7df1e",
		color: "#3c3a2d"
	},
	h1: {
		fontSize: "30px",
		fontWeight: "900"
	},
	p: {
		fontSize: "15px",
		fontWeight: "300"
	},
	button: {
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
		}
	},
	a: {
		composes: "$button",
		backgroundColor: "transparent",
		color: "#3c3a2d",
		":hover": {
			backgroundColor: "transparent"
		}
	}
});
const Component = props => {
	const classes = useStyles();
	return (
		<div className={classes.wrapper}>
			<h1 className={classes.h1}>Example component CSS</h1>
			<p className={classes.p}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
				temporibus labore voluptatibus aspernatur illo ad id sit nulla, a atque
				doloribus itaque ab? Soluta, exercitationem illum provident quod iure
				numquam?
			</p>
			<button className={classes.button}>I'm a button</button>
			<a className={classes.a} href="/#" onClick={e => e.preventDefault()}>
				I'm a link
			</a>
		</div>
	);
};

export default Component;
