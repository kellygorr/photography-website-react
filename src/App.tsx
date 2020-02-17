import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Home, About, Page } from './components'
import { Header as HeaderContent, Footer as FooterContent } from './components/shared'
import { projects } from './components/data'
import { GlobalStyles, PrimaryColorBg, PrimaryColor } from './GlobalStyles'

const App: React.FC = () => {
	const [isHomepage, setIsHomepage] = React.useState(true)
	const [homeScrollPosition, setHomeScrollPosition] = React.useState(0)
	const appContainerRef = React.useRef(null)

	React.useEffect(() => {
		if (isHomepage) {
			appContainerRef.current.scrollTo(0, homeScrollPosition)
		}
	}, [isHomepage, homeScrollPosition])

	return (
		<Router>
			<AppContainer ref={appContainerRef}>
				<GlobalStyles />
				<Header>
					<Route exact path={['/', '/about']} render={() => <HeaderContent />} />
				</Header>
				<Canvas>
					<Route
						path="/"
						render={({ match }) => {
							setIsHomepage(true)
							return <Home isVisible={match.isExact} />
						}}
					/>
					<Switch>
						<Route path="/about" render={() => <About />} />
						<Route
							path="/page/:title?"
							render={({ match, location }) => {
								const project = projects.find(
									(project) =>
										match.params.title.replace(/[^\w\s]/gi, '') === project.title.replace(' ', '').toLowerCase()
								)
								if (appContainerRef.current && isHomepage) {
									setHomeScrollPosition(appContainerRef.current.scrollTop)
								}
								setIsHomepage(false)
								return project && <Page data={project} index={location.state ? location.state.index : 0} />
							}}
						/>
					</Switch>
				</Canvas>
				<Footer>
					<Route exact path={['/', '/about']} render={() => <FooterContent />} />
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
	width: 100vw;
	display: grid;
	grid-template-rows: [header] auto [canvas] 1fr [footer] auto;

	color: ${PrimaryColor};
	background-color: ${PrimaryColorBg};
	overflow: hidden;
	overflow-y: auto;
`
const Header = styled.header`
	width: inherit;
	grid-row: header;
`
const Canvas = styled.div`
	width: inherit;
	grid-row: canvas;
`
const Footer = styled.footer`
	width: inherit;
	grid-row: footer;
`
