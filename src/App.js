import React from "react";
import Welcome from "./components/Welcome";
import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";
const renderer = createRenderer();

const App = () => (
	<RendererProvider renderer={renderer}>
		<div className="App">
			<Welcome />
			<Welcome name="Mauricio" />
		</div>
	</RendererProvider>
);
export default App;
