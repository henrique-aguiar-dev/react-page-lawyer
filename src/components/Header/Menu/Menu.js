/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { forwardRef } from 'react';

import './Menu.css';

const Menu = forwardRef((props, ref) => {
	return (
		<nav ref={ref} className={props.className}>
			<ul>
				<li><a href="#">Sobre nós</a></li>
				<li><a href="#anchor-atuacao">Áreas de atuação</a></li>
				<li><a href="#anchor-equipe">Equipe</a></li>
				<li><a href="#anchor-contato">Contato</a></li>
				<li><a href="#anchor-artigos">Artigos</a></li>
			</ul>
		</nav>
	)
});

export default Menu;