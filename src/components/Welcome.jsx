import React, { Fragment } from "react";
import { StyleSheet, css } from "aphrodite/no-important";

const styles = StyleSheet.create({
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
		},
		"@media (max-width: 420px)": {
			fontSize: "50px"
		}
	},
	link: {
		color: "#4a430b",
		backgroundColor: "transparent",
		":hover": {
			backgroundColor: "transparent"
		}
	}
});

const Welcome = () => {
	return (
		<Fragment>
			<button className={css(styles.button)}>Click me!!</button>
			<a className={css(styles.button, styles.link)}> Give me click too!!</a>
		</Fragment>
	);
};

export default Welcome;
