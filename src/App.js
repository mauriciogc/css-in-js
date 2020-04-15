import React from "react";
import Component from "./components/Component";
import { createRenderer } from "fela";
import { RendererProvider, ThemeProvider } from "react-fela";
const renderer = createRenderer();

const App = () => {
	
  const theme = {
    colors: {
      primary: "#4A430B",
      primaryVariant: "#3C3A2D",
      background: "#F7DF1E",
      secondary: "#F9EA6F",
      secondaryVariant: "#FFFFFF"
    }
  };
	return (<RendererProvider renderer={renderer}>
		<ThemeProvider theme={theme}>
		<div className="App">
			<Component />
		</div>
		</ThemeProvider>
	</RendererProvider>);
};
export default App;
