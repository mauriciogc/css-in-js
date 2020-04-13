import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	padding: 40px;
	text-align: left;
	background: #f7df1e;
	color: #3c3a2d;
`;

const Title = styled.h1`
	font-size: 30px;
	font-weight: 900;
`;
const Paragraph = styled.p`
	font-size: 15px;
	font-weight: 300;
`;
const Button = styled.button`
	font-size: 14px;
	font-weight: 400;
	background-color: #4a430b;
	border: none;
	cursor: pointer;
	color: #ffffff;
	padding: 10px 20px;
	border-radius: 4px;
	&:hover {
		background-color: #342f08;
	}
`;
const Link = styled.a`
	font-size: 14px;
	font-weight: 400;
	background-color: transparent;
	border: none;
	cursor: pointer;
	color: #3c3a2d;
	padding: 10px 20px;
	border-radius: 4px;
`;

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
