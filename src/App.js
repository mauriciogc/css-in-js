import React from "react";
import Component from './components/Component'

//Provider
import ThemeContext from "./contexts/theme";

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
    <ThemeContext.Provider value={{ theme }}>
      <div className="App">
        <Component/>
      </div>
    </ThemeContext.Provider>);
}
export default App;