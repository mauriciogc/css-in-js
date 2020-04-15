import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
	h1: {
		fontSize: "30px",
		textAlign: "center",
		color: "#e95678"
	}
});

const Welcome = () => {
	return <h1 className={css(styles.h1)}>Hello World!</h1>;
};

export default Welcome;
