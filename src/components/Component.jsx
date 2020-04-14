import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div({
	padding: "40px",
	textAlign: "left",
	backgroundColor: "#f7df1e",
	color: "#3c3a2d"
});

const Title = styled.h1({
	fontSize: "30px",
	fontWeight: "900"
});
const Paragraph = styled.p({
	fontSize: "15px",
	fontWeight: "300"
});
const Button = styled.button({
	fontSize: "14px",
	fontWeight: "400",
	backgroundColor: "#4a430b",
	border: "none",
	cursor: "pointer",
	color: "#ffffff",
	padding: "10px 20px",
	borderRadius: "4px",
	"&:hover": {
		backgroundColor: "#342f08"
	}
});
const Link = styled.a({
	fontSize: "14px",
	fontWeight: "400",
	backgroundColor: "transparent",
	border: "none",
	cursor: "pointer",
	color: "#3c3a2d",
	padding: "10px 20px",
	borderRadius: "4px"
});

const Component = props => {
	return (
		<Wrapper>
			<Title>Example component CSS</Title>
			<Paragraph>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
				temporibus labore voluptatibus aspernatur illo ad id sit nulla, a atque
				doloribus itaque ab? Soluta, exercitationem illum provident quod iure
				numquam?
			</Paragraph>
			<Button>I'm a button</Button>
			<Link href="/#" onClick={e => e.preventDefault()}>
				I'm a link
			</Link>
		</Wrapper>
	);
};

export default Component;
