import React from 'react';

import './Areas.css';

const Areas = () => {
	return (
		<section className="atuacao">
			<div className="container">
				<h1>Áreas de atuação</h1>
				<div className="flexbox box-atuacao">
					<div className="atuacao-single">
						<h2>Direito do Trabalho</h2>
						<ul>
							<li>Consultoria</li>
							<li>Reclamação trabalhista</li>
							<li>Defesa trabalhista</li>
							<li>Auditoria trabalhista</li>
						</ul>
					</div>
					<div className="atuacao-single">
						<h2>Direito Previdenciário</h2>
						<ul>
							<li>Consultoria</li>
							<li>Cálculos previdenciários</li>
							<li>Contestação de laudos</li>
							<li>Representação administrativa e judicial</li>
						</ul>
					</div>
					<div className="atuacao-single">
						<h2>Direito do Consumidor</h2>
						<ul>
							<li>Atuação administrativa</li>
							<li>Ações judiciais</li>
							<li>Consultoria</li>
						</ul>
					</div>
				</div>
			</div>
			<div id="anchor-equipe"></div>
		</section>
	);
}

export default Areas;