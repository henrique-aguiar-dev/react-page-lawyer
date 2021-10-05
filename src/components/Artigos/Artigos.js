import React, { useRef } from 'react';

import { slideToggle } from '../../modules/custom-lib';

import './Artigos.css';

const Artigos = () => {
	const moreOrLess = useRef(null);
	const moreArticles = useRef(null);
	let opened = false;
	
	const showMoreArticles = (icon) => {
		slideToggle(moreArticles.current, 400);

		if (opened) {
			icon.classList.remove('fa-chevron-circle-down');
			icon.classList.add('fa-chevron-circle-up');
			moreOrLess.current.innerHTML = "Menos artigos";
		} else {
			icon.classList.remove('fa-chevron-circle-up');
			icon.classList.add('fa-chevron-circle-down');
			moreOrLess.current.innerHTML = "Mais artigos";
		}
	}

	const handleClick = (e) => {
		opened = !opened
		showMoreArticles(e.target);
	}

	return (
		<section className="artigos">
			<div className="container">
				<h1>Artigos</h1>
				<p>Clique sobre o artigo para lê-lo.</p>
				<div className="box-artigos art1">
					<div className="art-single">
						<span>27/10/2019</span>
						<p>Jornada de 12 x 36 horas: apenas por acordo individual escrito ou norma coletiva</p>
					</div>
					<div className="art-single">
						<span>20/12/2019</span>
						<p>Reter indevidamente a carteira de trabalho pode gerar multa e dano moral</p>
					</div>
					<div className="art-single">
						<span>21/10/2019</span>
						<p>Rescisão indireta: motivos que justicam a rescisão por culpa do empregador</p>
					</div>
					<div className="art-single">
						<span>18/10/2019</span>
						<p>A CTPS deve ser anotada em até 5 dias úteis, inclusive em contrato de experiência</p>
					</div>
					<div className="art-single">
						<span>17/09/2018</span>
						<p>Trabalhador Marítimo: definição e legislação aplicável</p>
					</div>
				</div>
				<div ref={moreArticles} className="box-artigos art2">
					<div className="art-single">
						<span>17/08/2018</span>
						<p>Reconhecimento de vínculo de emprego: execução das contribuições sociais do período</p>
					</div>
					<div className="art-single">
						<span>10/08/2018</span>
						<p>Justa causa: critérios de aplicação das penalidades</p>
					</div>
					<div className="art-single">
						<span>07/08/2018</span>
						<p>Todos os dirigentes de um Sindicato possuem estabilidade provisória?</p>
					</div>
					<div className="art-single">
						<span>06/08/2018</span>
						<p>Empregado público possui direito à estabilidade do Art. 41 da Constituição?</p>
					</div>
					<div className="art-single">
						<span>04/08/2018</span>
						<p>Autonomia da Vontade nos Contratos de Trabalho e a Reforma Trabalhista</p>
					</div>
				</div>
				<div className="nav-art">
					<h2 ref={moreOrLess} >Mais artigos</h2>
					<i className="fa fa-chevron-circle-down" onClick={handleClick}></i>
				</div>
			</div>
		</section>
	);
}

export default Artigos;