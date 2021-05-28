import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
import { projects } from './data'
import { Home } from './components/Home'
import { Page } from './components/Page'
import { Header as HeaderComponent } from './components/Header'
import { Footer as FooterComponent } from './components/Footer'
import { GlobalStyles, PrimaryColorBg, TextColor } from './GlobalStyles'

interface ILocation {
	index: number
}

const App = (): JSX.Element => {
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
			<AppContainer ref={appContainerRef} tabIndex={-1}>
				<GlobalStyles />
				<Header>
					<Route exact path="/" render={() => <HeaderComponent />} />
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
								return project && <Page data={project} index={location.state ? (location.state as ILocation).index : 0} />
							}}
						/>
					</Switch>
				</Canvas>
				<Footer>
					<Route exact path="/" render={() => <FooterComponent />} />
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

	color: ${TextColor};
	background-color: ${PrimaryColorBg};

	overflow: hidden;
	overflow-y: auto;
`
const Header = styled.header`
	width: inherit;
	grid-row: header;
`
const Canvas = styled.main`
	width: inherit;
	grid-row: canvas;
`
const Footer = styled.footer`
	width: inherit;
	grid-row: footer;
`
