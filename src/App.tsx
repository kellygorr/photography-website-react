import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Home, Contact, Navigation, Page } from './components'
import { projects } from './components/data'
import { GlobalStyles } from './GlobalStyles'

const App: React.FC = () => {
	return (
		<Router>
			<AppContainer>
				<GlobalStyles />
				<TopRow>
					<Navigation />
				</TopRow>
				<Canvas>
					<Switch>
						<Route exact path="/" render={() => <Home />} />
						<Route path="/contact" render={() => <Contact />} />
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
			</AppContainer>
		</Router>
	)
}

export default App

const AppContainer = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	padding: 10px;
	display: grid;
	grid-template-rows: [navigation] 50px [canvas] auto;
`
const TopRow = styled.div`
	grid-row: navigation;
`
const Canvas = styled.div`
	grid-row: canvas;
`
