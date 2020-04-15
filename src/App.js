import React from "react";
import Component from "./components/Component";
import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";
const renderer = createRenderer();

const App = () => (
	<RendererProvider renderer={renderer}>
		<div className="App">
			<Component />
		</div>
	</RendererProvider>
);
export default App;
