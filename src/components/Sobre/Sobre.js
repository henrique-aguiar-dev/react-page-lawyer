import React from 'react';

import './Sobre.css';

const Sobre = () => {
	return (
		<section className="sobre">
			<div className="container">
				<div className="flexbox box-sobre">
					<div className="texto-sobre">
						<h1>Sobre nós</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
					</div>
					<div className="img-sobre"></div>
				</div>
			</div>
			<div id="anchor-atuacao"></div>
		</section>
	);
}

export default Sobre;