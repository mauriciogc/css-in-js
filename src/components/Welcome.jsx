import React, { Fragment } from "react";
import { connect } from "react-fela";

const rules = () => ({
	button: {
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
	},
	link: () => ({
		...rules().button,
		color: "#4a430b",
		backgroundColor: "transparent",
		"&:hover": {}
	})
});

const Welcome = props => {
	const { styles } = props;
	return (
		<Fragment>
			<button className={styles.button}>Click me!!</button>
			<a className={styles.link} href="/#" onClick={e => e.preventDefault()}>
				Give me click too!!
			</a>
		</Fragment>
	);
};

export default connect(rules)(Welcome);
