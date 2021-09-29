import { createGlobalStyle } from 'styled-components';

import './GlobalFonts.css';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html,
	body {
		width: 100%;
		height: 100%;
		font-family: "Verdana", sans-serif;
		scroll-behavior: smooth;
		background: url(${require("../media/bg.jpg").default}) rgba(0,0,0,0.7);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
		background-blend-mode: overlay;
	}

	section {
		width: 100%;
	}

	.container {
		max-width: 1200px;
		height: 100%;
		margin: 0 auto;
		padding: 0 2%;
	}

	.flexbox {
		width: 100%;
		height: 100%;
		display: inline-flex;
	}
`