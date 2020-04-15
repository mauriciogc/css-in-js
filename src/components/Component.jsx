import React from "react";
import { withStyles } from "react-with-styles";

const styles = ({ colors }) => ({
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
		backgroundColor: "transparent",
		color: colors.primaryVariant,
		"&:hover": {}
	}
});

const Component = ({ css, styles }) => {
	return (
		<div {...css(styles.wrapper)}>
			<h1 {...css(styles.h1)}>Example component CSS</h1>
			<p {...css(styles.p)}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
				temporibus labore voluptatibus aspernatur illo ad id sit nulla, a atque
				doloribus itaque ab? Soluta, exercitationem illum provident quod iure
				numquam?
			</p>
			<button {...css(styles.button)}>I'm a button</button>
			<a
				href="/#"
				onClick={e => e.preventDefault()}
				{...css(styles.button, styles.a)}
			>
				I'm a link
			</a>
		</div>
	);
};

export default withStyles(styles)(Component);
