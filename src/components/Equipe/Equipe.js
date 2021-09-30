import React, { useLayoutEffect, useState } from 'react';

import { carouselBuilder } from '../../modules/hcarrousel';

import './Equipe.css';

const Equipe = () => {
	const [width] = useState(window.innerWidth);

	
	useLayoutEffect(() => {
		const checkWidthChange = () => {
			if (width !== window.innerWidth) setTimeout(() => window.location.reload(),0)
		}

		window.addEventListener('resize', checkWidthChange)
	}, [width])

	useLayoutEffect(() => {
		const carousel = {
			slidesContainer: document.querySelector('.carousel-container'),
			allSlides: document.querySelectorAll('.slide-single'),
			bulletsContainer: document.querySelector('.carousel-bullets'),
			arrowLeft: document.querySelector('#navprev'),
			arrowRight: document.querySelector('#navnext'),
			autoSlide: false,
			speed: 500,
			interval: 5000
		}

		carouselBuilder(carousel);
	}, []);

	return (
		<section className="equipe">
			<div className="container">
				<h1>Equipe</h1>
				<div className="carousel-container disable-select" draggable="false">

					<div className="slide-single eq1" draggable="false">
						<div className="img-equipe">
							<img src={require("../../media/equipe03.jpg").default} alt="foto equipe" />
						</div>
						<div className="text-equipe" draggable="false">
							<h2>Marco Tulio</h2>
							<p>OAB nº 999.999<br />
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						</div>
					</div>

					<div className="slide-single eq2" draggable="false">
						<div className="img-equipe">
							<img src={require("../../media/equipe02.jpg").default} alt="foto equipe" />
						</div>
						<div className="text-equipe" draggable="false">
							<h2>Lorem Ipsum</h2>
							<p>OAB nº 99.999<br />
								Qui dolor magna anim esse laboris proident est et. Esse irure aliqua irure cupidatat sed officia officia reprehenderit ullamco cillum fugiat. Ea veniam aute adipisicing occaecat et cupidatat esse est non.</p>
						</div>
					</div>

					<div className="slide-single eq3" draggable="false">
						<div className="img-equipe">
							<img src={require("../../media/equipe03.jpg").default} alt="foto equipe" />
						</div>
						<div className="text-equipe" draggable="false">
							<h2>Dolor Magna</h2>
							<p>OAB/CE nº 88.888<br />
								Voluptate laboris excepteur laborum qui nisi sit irure et sed sint proident laborum esse ad esse pariatur voluptate irure. In duis ut voluptate proident labore id et esse in duis ea in excepteur pariatur ex quis.</p>
						</div>
					</div>
				</div>

				<div className="flexbox box-bullets">
					<i className="fa fa-chevron-circle-left arrows" id="navprev"></i>
					<div className="carousel-bullets"></div>
					<i className="fa fa-chevron-circle-right arrows" id="navnext"></i>
				</div>

			</div>
		</section>
	);
}

export default Equipe;