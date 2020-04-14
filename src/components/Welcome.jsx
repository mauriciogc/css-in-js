import React from "react";
import { FelaComponent } from "react-fela";

const style = {
	fontSize: "30px",
	textAlign: "center",
	color: "#e95678",
	backgroundColor: "#ccff00"
};

const Title = props => <FelaComponent style={style} as="h1" {...props} />;

const Welcome = () => {
	return <Title style={style}>Hello World!</Title>;
};

export default Welcome;
