import React from "react";
import { connect } from "react-fela";

const rules = () => ({
	wrapper: ({ theme }) => ({
		padding: "40px",
		textAlign: "left",
		backgroundColor: theme.colors.background,
		color: theme.colors.primaryVariant
	}),
	h1: {
		fontSize: "30px",
		fontWeight: "900"
	},
	p: {
		fontSize: "15px",
		fontWeight: "300"
	},
	button: ({ theme }) => ({
		fontSize: "14px",
		fontWeight: "400",
		backgroundColor: theme.colors.primary,
		border: "none",
		cursor: "pointer",
		color: theme.colors.secondaryVariant,
		padding: "10px 20px",
		borderRadius: "4px",
		"&:hover": {
			backgroundColor: theme.colors.primaryVariant
		}
	}),
	a: ({ theme }) => ({
		...rules().button({ theme }),
		backgroundColor: "transparent",
		color: theme.colors.primaryVariant,
		"&:hover": {}
	})
});

const Component = props => {
	const { styles } = props;
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.h1}>Example component CSS</h1>
			<p className={styles.p}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
				temporibus labore voluptatibus aspernatur illo ad id sit nulla, a atque
				doloribus itaque ab? Soluta, exercitationem illum provident quod iure
				numquam?
			</p>
			<button className={styles.button}>I'm a button</button>
			<a className={styles.a} href="/#" onClick={e => e.preventDefault()}>
				I'm a link
			</a>
		</div>
	);
};
export default connect(rules)(Component);
