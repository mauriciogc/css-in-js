import React from "react";
import { FelaComponent } from "react-fela";

const style = props => ({
	fontSize: "30px",
	textAlign: "center",
	color: props.primary ? "#e95678" : "#25b0bc"
});

const Title = props => <FelaComponent as="h1" {...props} />;

const Welcome = ({ name = "Stranger" }) => {
	const isStranger = name === "Stranger";
	return (
		<Title primary={isStranger} style={style}>
			Hello {name}
		</Title>
	);
};

export default Welcome;
