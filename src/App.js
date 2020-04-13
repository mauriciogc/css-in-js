import React from "react";
import Component from './components/Component'
import { ThemeProvider } from "styled-components";

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

  return (
		<ThemeProvider theme={theme}>
      <div className="App">
        <Component/>
      </div>
		</ThemeProvider>
  );
    
}
export default App;