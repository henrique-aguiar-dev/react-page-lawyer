import React from 'react';

import './Footer.css';

const Footer = () => {
	return (
		<section className="footer">
			<div className="container">
				<div className="box-footer">
					<div className="box-footer-single bfs1">
						<h2>Telefones / Whatsapp:<br />
							(85) 9999-9999<br />
							(85) 99999-9999</h2>
					</div>
					<div className="box-footer-single bfs2">
						<h2>Redes sociais:</h2>
						<span className="sm-icons-footer">
							<a target="_blank" title="Nossa página no Facebook" href="https://facebook.com" rel="noreferrer">
								<i className="fa fa-facebook" aria-hidden="true"></i>
							</a>
							<a target="_blank" title="Nosso perfil no Instagram" href="https://instagram.com" rel="noreferrer">
								<i className="fa fa-instagram" aria-hidden="true"></i>
							</a>
						</span>
					</div>
					<div className="box-footer-single bfs3">
						<h2>Links úteis:</h2>
						<ul>
							<li>
								<a target="_blank" href="https://www.oab.org.br" rel="noreferrer">Ordem dos Advogados do Brasil - OAB</a>
							</li>
							<li>
								<a target="_blank" href="http://oabce.org.br" rel="noreferrer">OAB - Seccional Ceará</a>
							</li>
							<li>
								<a target="_blank" href="http://www.mpce.mp.br/decon" rel="noreferrer">Decon-CE</a>
							</li>
							<li>
								<a target="_blank" href="http://www.defensoria.ce.def.br/" rel="noreferrer">Defensoria Pública - CE</a>
							</li>
							<li>
								<a target="_blank" href="https://www.tjce.jus.br/" rel="noreferrer">Tribunal de Justiça - CE</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<small>Todos os direitos reservados. Modelo criado por L. Henrique.</small>
		</section>
	);
}

export default Footer;