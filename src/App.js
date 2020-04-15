import React from "react";
import WithStylesContext from "react-with-styles/lib/WithStylesContext";
import AphroditeInterface from "react-with-styles-interface-aphrodite";

import Component from "./components/Component";

const theme = {
	colors: {
		primary: "#4A430B",
		primaryVariant: "#3C3A2D",
		background: "#F7DF1E",
		secondary: "#F9EA6F",
		secondaryVariant: "#FFFFFF"
	}
};

const App = () => {
	return (
		<WithStylesContext.Provider
			value={{
				stylesInterface: AphroditeInterface,
				stylesTheme: theme
			}}
		>
			<div className="App">
				<Component />
			</div>
		</WithStylesContext.Provider>
	);
};
export default App;
