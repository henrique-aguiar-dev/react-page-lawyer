import React, { useEffect, useState }from 'react';

import LogoHeader from './Logo/LogoHeader';
import Menu from './Menu/Menu';
import SocialIcons from '../SocialIcons/SocialIcons';
import { slideUp, slideDown } from '../../modules/custom-lib'

import './Header.css';

const Header = () => {
	const [clicked, setClicked] = useState(false);
	const [width, setWidth] = useState({width: window.innerWidth});

	useEffect(() => {
		const handleResize = () => setWidth({width: window.innerWidth})

		window.addEventListener('resize', handleResize)
		
		return () => window.removeEventListener('resize', handleResize)
		
	}, [width])

	const handleClickMenuIcon = (event) => {
		const menuMobile = document.querySelector('.menu-mobile');

		if (!clicked) {
			setClicked(true);
			slideDown(menuMobile, 500);
		} else {
			setClicked(false);
			slideUp(menuMobile, 500);
		}

		window.addEventListener('click', e => {
			if(e.target.localName !== 'li' && e.target !== event.target) {
				setClicked(false);
				slideUp(menuMobile, 500);
			}
		})

		return () => window.removeEventListener('click');
	}

	return (
		<header>
			<div className="flexbox header-flex">
				<div className="header-left">
					<LogoHeader />
				</div>

				<div className="header-right">
					<div className="icon-menu-mob">
						<i onClick={handleClickMenuIcon} className="fa fa-bars" aria-hidden="true"></i>
					</div>
					<Menu className="menu-desktop"/>
					<Menu className="menu-mobile"/>
					<SocialIcons class={"sm-icons-header"} />
				</div>
			</div>
		</header>
	)
}

export default Header;
