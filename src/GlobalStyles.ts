import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	* {
        position: relative;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		border-spacing: 0px;
	}

	*:before,
	*:after {
		box-sizing: inherit;
	}

	html,
	body {
		height: 100%;
		margin: 0;
		padding: 0;
	}

	*:focus {
 		outline: 0;
	}

	button {
		border-radius: 0;
		border-width: 0;
	}

	a {
		color: inherit;
		text-decoration: inherit;
	}
`
