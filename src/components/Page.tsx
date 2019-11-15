import * as React from 'react'
import styled from 'styled-components'
import { IProject, ISection } from './data/IProject'
import { Section } from './Section'

interface IPageProps {
	data: IProject | null
}

export const Page: React.FC<IPageProps> = (props: IPageProps) => {
	if (!props.data) {
		return null
	}
	return (
		<Container>
			{props.data.title}
			{props.data.content.map((data: ISection) => {
				let items = Object.entries(data)
				return items.map((item, index) => <Section key={index} type={item[0]} data={item[1]} />)
			})}
		</Container>
	)
}

const Container = styled.div`
	height: 100%;
	width: 100%;
`
