import React from 'react';

import Mask from '../../modules/phonemask';

import './Contato.css';

const Contato = () => {
	const loadMask = (input) => {
		const phoneMask = new Mask(input);
		phoneMask.mask();
	}

	const handleFocus = (event) => {
		const inputPhone = event.target;

		loadMask(inputPhone)
		
		inputPhone.placeholder = '(__)____-____';
		inputPhone.addEventListener('focusout', e => inputPhone.placeholder = 'Telefone p/ contato...');
		inputPhone.addEventListener('paste', e => e.preventDefault());
	}

	return (
		<section className="contato">
			<div className="container">
				<h1>Contato</h1>
				<div className="flexbox box-contato">
					<div className="contato-left">
						<div className="dados-contato">
							<h2>Telefones / Whatsapp:<br />
								(99) 9999-9999<br />
								(99) 99999-9999</h2>
							<h2>Endereço:</h2>
							<p>Av. Lorem Ipsum, nº 0000. Bairro Dollor Sit. CEP 99.999-999. Amet-ET</p>
						</div>
						<div className="mapa"></div>
					</div>
					<div className="contato-right">
						<h2>Enviar uma mensagem</h2>
						<form id="form" action="" method="POST">
							<input className="form nome" type="text" name="nome" placeholder="Seu nome..." required />
							<input className="form email" type="email" name="email" placeholder="Seu e-mail..." required />
							<input className="form tel" id="fone" type="tel" maxLength="14" minLength="13" name="telefone" placeholder="Telefone p/ contato..." onFocus={handleFocus} />
							<input className="form assu" type="text" name="assunto" placeholder="Assunto..." required />
							<textarea className="form msg" name="mensagem" placeholder="Sua mensagem..." required ></textarea>
							<input type="submit" value="Enviar" id="send" />
							<div className="alert-submit">
								<p id="msg-sended">Mensagem enviada com sucesso! Responderemos em breve.</p>
								<p id="msg-error">Erro: mensagem NÃO enviada. Favor conferir os dados informados ou tente novamente mais tarde.</p>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div id="anchor-artigos"></div>
		</section>
	);
}

export default Contato;