import React from "react";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import Welcome from "./components/Welcome";

const engine = new Styletron();

const App = () => (
	<StyletronProvider value={engine}>
		<div className="App">
			<Welcome />
			<Welcome name="Mauricio" />
		</div>
	</StyletronProvider>
);
export default App;
