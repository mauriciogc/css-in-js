import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div(({ theme }) => ({
	padding: "40px",
	textAlign: "left",
	backgroundColor: theme.colors.background,
	color: theme.colors.primaryVariant
}));

const Title = styled.h1({
	fontSize: "30px",
	fontWeight: "900"
});
const Paragraph = styled.p({
	fontSize: "15px",
	fontWeight: "300"
});
const Button = styled.button(({ theme }) => ({
	fontSize: "14px",
	fontWeight: "400",
	backgroundColor: theme.colors.primary,
	border: "none",
	cursor: "pointer",
	color: theme.colors.secondaryVariant,
	padding: "10px 20px",
	borderRadius: "4px",
	"&:hover": {
		backgroundColor: theme.colors.primaryVariant
	}
}));
const Link = styled(Button)(({ theme }) => ({
	backgroundColor: "transparent",
	cursor: "pointer",
	color: theme.colors.primaryVariant,
	borderRadius: "none",
	"&:hover": {
		backgroundColor: "transparent"
	}
}));

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
			<Link as="a" href="/#" onClick={e => e.preventDefault()}>
				I'm a link
			</Link>
		</Wrapper>
	);
};

export default Component;
