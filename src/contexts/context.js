import React from "react";
import { createStyled } from "styletron-react";
import { driver, getInitialStyle } from "styletron-standard";
import THEME from "./theme";

const { Provider, Consumer } = React.createContext();

const wrapper = StyledComponent => props => (
	<Consumer>{theme => <StyledComponent {...props} $theme={theme} />}</Consumer>
);

export const ThemeProvider = ({ children }) => (
	<Provider value={THEME}>{children}</Provider>
);

export const styled = createStyled({
	wrapper,
	getInitialStyle,
	driver
});
