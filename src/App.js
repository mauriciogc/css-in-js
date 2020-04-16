import React from "react";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import {ThemeProvider} from "./contexts/context"
import Component from "./components/Component";

const engine = new Styletron();


const App = () => (
	<ThemeProvider>
		<StyletronProvider value={engine}>
			<div className="App">
				<Component />
			</div>
		</StyletronProvider>
	</ThemeProvider>
);
export default App;
