import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Home, About, Page } from './components'
import { Header as HeaderContent, Footer as FooterContent } from './components/shared'
import { projects } from './components/data'
import { GlobalStyles, PrimaryColorBg, PrimaryColor } from './GlobalStyles'
import { darken } from 'polished'

const App: React.FC = () => {
	const bgColor = darken((projects.length - 1) / projects.length / projects.length, PrimaryColorBg)
	return (
		<Router>
			<AppContainer>
				<GlobalStyles />
				<Header>
					<Route exact path={['/', '/about']} render={() => <HeaderContent />} />
				</Header>
				<Canvas>
					<Route path={['/']} render={({ match }) => <Home isVisible={match.isExact} />} />
					<Switch>
						<Route path="/about" render={() => <About />} />
						<Route
							path="/page/:title?"
							render={({ match, location }) => {
								const project = projects.find(
									(project) =>
										match.params.title.replace(/[^\w\s]/gi, '') === project.title.replace(' ', '').toLowerCase()
								)

								return (
									project && <Page data={project} index={location.state ? location.state.index : 0} bgColor={bgColor} />
								)
							}}
						/>
					</Switch>
				</Canvas>
				<Footer>
					<Route exact path={['/', '/about']} render={() => <FooterContent backgroundColor={bgColor} />} />
				</Footer>
			</AppContainer>
		</Router>
	)
}

export default App

const AppContainer = styled.div`
	position: relative;
	height: 100vh;
	min-height: 100vh;
	width: 100%;
	display: grid;
	grid-template-rows: [header] auto [canvas] 1fr [footer] auto;

	color: ${PrimaryColor};
	background-color: ${PrimaryColorBg};
	overflow-y: auto;
`
const Header = styled.header`
	grid-row: header;
`
const Canvas = styled.div`
	grid-row: canvas;
`
const Footer = styled.footer`
	grid-row: footer;
`
