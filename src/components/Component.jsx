import React from "react";
import { useTheme, createUseStyles } from "react-jss";

const useStyles = createUseStyles(({ colors }) => ({
	wrapper: {
		padding: "40px",
		textAlign: "left",
		backgroundColor: colors.background,
		color: colors.primaryVariant
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
		backgroundColor: colors.primary,
		border: "none",
		cursor: "pointer",
		color: colors.secondaryVariant,
		padding: "10px 20px",
		borderRadius: "4px",
		"&:hover": {
			backgroundColor: colors.primaryVariant
		}
	},
	a: {
		composes: "$button",
		backgroundColor: "transparent",
		color: colors.primaryVariant,
		"&:hover": {
			backgroundColor: "transparent"
		}
	}
}));
const Component = props => {
	const theme = useTheme();
	const classes = useStyles({ theme });
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
