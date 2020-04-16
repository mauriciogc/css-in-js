import React from "react";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import Component from "./components/Component";

const engine = new Styletron();

const App = () => (
	<StyletronProvider value={engine}>
		<div className="App">
			<Component />
		</div>
	</StyletronProvider>
);
export default App;
