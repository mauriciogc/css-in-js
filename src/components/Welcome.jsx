import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
	h1: {
		fontSize: "30px",
		textAlign: "center"
	},
	pink: {
		color: "#e95678"
	},
	blue: {
		color: "#25b0bc"
	}
});

const Welcome = ({ name = "Stranger" }) => {
	return (
		<h1
			className={css(
				styles.h1,
				name === "Stranger" ? styles.pink : styles.blue
			)}
		>
			Hello {name}
		</h1>
	);
};

export default Welcome;
