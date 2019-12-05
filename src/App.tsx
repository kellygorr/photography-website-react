import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Home, About, Navigation, Page } from './components'
import { projects } from './components/data'
import { GlobalStyles, AccentColor, PrimaryColorBg, PrimaryColor } from './GlobalStyles'

const App: React.FC = () => {
	return (
		<Router>
			<AppContainer>
				<GlobalStyles />
				<Header>
					<Navigation />
				</Header>
				<Canvas>
					<Switch>
						<Route exact path="/" render={() => <Home />} />
						<Route path="/about" render={() => <About />} />
						<Route
							path="/page/:title?"
							render={({ match }) => {
								const project = projects.find(
									(project) => match.params.title === project.title.replace(' ', '').toLowerCase()
								)
								return project && <Page data={project} />
							}}
						/>
					</Switch>
				</Canvas>
				<Footer>
					<Title>Contact/Resume</Title>
					<Contact>
						<a href="https://www.linkedin.com/in/kellygorr/">LinkedIn</a>
					</Contact>
					<Title>Other Projects</Title>
					<Contact>Photography</Contact>
					<Contact>Digital Art</Contact>
				</Footer>
			</AppContainer>
		</Router>
	)
}

export default App

const AppContainer = styled.div`
	position: relative;
	height: 100%;
	width: 100vw;
	display: grid;
	grid-template-rows: [header] 100px [canvas] auto [footer] 200px;

	color: ${PrimaryColor};
	background-color: ${PrimaryColorBg};
`
const Header = styled.header`
	grid-row: header;
`
const Canvas = styled.div`
	grid-row: canvas;
`
const Footer = styled.footer`
	grid-row: footer;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	background-color: ${AccentColor};
	color: #ffffff;
	padding: 20px 5%;
`
const Title = styled.div``
const Contact = styled.div``
