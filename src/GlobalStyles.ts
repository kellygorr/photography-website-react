import { createGlobalStyle } from 'styled-components'
import './fonts.css'

export const AccentColor = '#181818'
export const PrimaryAccentColor = '#FFFFFF'
export const PrimaryColor = '#FFFFFF'
export const PrimaryColorBg = '#131313'
export const Overlay = 'rgba(19,19,19,0.5)'
export const LoadingColor = '#212121'

export const TextColor = ' #dedede'

export const GlobalStyles = createGlobalStyle`
	* {
        position: relative;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		border-spacing: 0px;
		font-weight:normal;
	}

	*:before,
	*:after {
		box-sizing: inherit;
	}

	html,
	body, #root {
		width: 100%;
		margin: 0;
		padding: 0;
		font-family: 'open_sansregular';
		overflow: hidden;
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
		font-family: 'open_sansregular';
	}

	ul {
		list-style-type:none;
	}

`
