import * as React from 'react'
import styled, { css } from 'styled-components/macro'
import { PrimaryAccentColor } from '../../GlobalStyles'
import { SkillType } from '../data/IProject'
import { FooterList } from './FooterList'

export interface IFooterList {
	title: string
	link: ILink[]
}

interface ILink {
	title: string
	URL: string
	tags?: string[]
}

const sites: IFooterList[] = [
	{
		title: 'Contact/Resume',
		link: [
			{
				title: 'LinkedIn',
				URL: 'https://www.linkedin.com/in/kellygorr/',
			},
		],
	},
	{
		title: 'Portfolio',
		link: [
			{
				title: 'kellygorr.com',
				URL: 'https://kellygorr.com/',
			},
		],
	},
	{
		title: 'Photography',
		link: [
			{
				title: 'photography.kellygorr.com',
				URL: 'https://photography.kellygorr.com/',
			},
		],
	},
]

const info: IFooterList[] = [
	{
		title: 'About Website',
		link: [
			{
				tags: [SkillType.TypeScript, SkillType.React, SkillType.HTML, SkillType.CSS],
				title: 'https://github.com/kellygorr',
				URL: 'https://github.com/kellygorr/photography-website-react',
			},
		],
	},
]

export const Footer: React.FC = () => (
	<Container>
		<Left>
			<FooterList list={sites} />
		</Left>
		<Right>
			<FooterList list={info} />
		</Right>
	</Container>
)

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	width: 100%;
	height: 100%;
	padding: 40px 3%;

	color: ${PrimaryAccentColor};
	font-size: 0.9em;
	background-color: #000000;
`

const Columns = css`
	display: flex;
	flex-direction: column;
`

const Left = styled.div`
	${Columns}
`
const Right = styled.div`
	${Columns}
`
