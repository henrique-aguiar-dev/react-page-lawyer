import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html,
	body {
		width: 100%;
		font-family: "Verdana", sans-serif;
		scroll-behavior: smooth;
		background: url(${require("../media/bg.jpg").default}) rgba(0,0,0,0.7);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
		background-blend-mode: overlay;
		color: white;
	}

	h1{
		font-size: 26px;
		padding-bottom: 10px;
		text-align: center;
	}

	h2{
		font-size: 20px;
		padding-bottom: 10px;
		text-align: center;
	}

	p{font-size: 16px;}

	section{
		width: 100%;
		padding: 80px 2%;
	}

	.container{
		max-width: 1300px;
		height: 100%;
		background-color: rgba(0,0,0,0.95);
		border-radius: 5px;
		margin: 0 auto;
		padding: 20px 0;
		text-align: center;
	}

	.flexbox {
		width: 100%;
		height: 100%;
		display: inline-flex;
	}

	@media (max-width: 460px) {
		section {
			padding: 40px 2%;
		}
	}
`