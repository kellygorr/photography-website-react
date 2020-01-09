import * as React from 'react'
import styled from 'styled-components/macro'
import { PrimaryAccentColor } from '../../GlobalStyles'
import { SkillType } from '../data/IProject'

const websiteTags = [SkillType.TypeScript, SkillType.React, SkillType.HTML, SkillType.CSS]

export const Footer: React.FC<{ backgroundColor: string }> = (props: { backgroundColor: string }) => (
	<Container style={{ backgroundColor: props.backgroundColor }}>
		<Title>Contact/Resume</Title>
		<Contact>
			<a href="https://www.linkedin.com/in/kellygorr/">LinkedIn</a>
		</Contact>
		<Title>Portfolio</Title>
		<Contact>
			<a href="https://kellygorr.com/">kellygorr.com</a>
		</Contact>
		<Title>Website Info</Title>
		<Tags>[{websiteTags.map((tag, index) => (index === websiteTags.length - 1 ? tag : tag + ', '))}]</Tags>

		<Contact>
			<a href="https://github.com/kellygorr/gallery-website-react">https://github.com/kellygorr/gallery-website-react</a>
		</Contact>
	</Container>
)

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 100%;
	height: 100%;
	color: ${PrimaryAccentColor};
	padding: 40px 5%;
	font-size: 0.9em;
`
const Title = styled.div`
	margin-top: 10px;
	&:first-child {
		margin: 0;
	}
	&::after {
		content: ': ';
	}
`
const Contact = styled.div`
	&:hover {
		text-decoration: underline;
	}
`

const Tags = styled.div`
	width: 100%;
`
