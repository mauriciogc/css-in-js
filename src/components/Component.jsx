import React from "react";

const Component = props => {
	return (
		<div>
			<h1>Example component CSS</h1>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
				temporibus labore voluptatibus aspernatur illo ad id sit nulla, a atque
				doloribus itaque ab? Soluta, exercitationem illum provident quod iure
				numquam?
			</p>
			<button>I'm a button</button>
			<a href="/#" onClick={e => e.preventDefault()}>
				I'm a link
			</a>
		</div>
	);
};

export default Component;
