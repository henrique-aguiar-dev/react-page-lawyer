import React from 'react';

import './Menu.css';

const Menu = (props) => {
	return (
		<nav className={props.className}>
			<ul>
				<li><a href="#anchor-sobre">Sobre nós</a></li>
				<li><a href="#anchor-atuacao">Áreas de atuação</a></li>
				<li><a href="#anchor-equipe">Equipe</a></li>
				<li><a href="#anchor-contato">Contato</a></li>
				<li><a href="#anchor-artigos">Artigos</a></li>
			</ul>
		</nav>
	)
}

export default Menu;