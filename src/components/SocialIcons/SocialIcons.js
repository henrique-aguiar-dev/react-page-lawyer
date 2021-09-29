import React from 'react';

import './SocialIcons.css'

const SocialIcons = (props) => {
	return (
		<div className={props.class}>
			<a target="_blank" title="Nossa página no Facebook" href="https://facebook.com" rel="noreferrer"><i className="fa fa-facebook"></i></a>
			<a target="_blank" title="Nosso perfil no Instagram" href="https://instagram.com" rel="noreferrer"><i className="fa fa-instagram"></i></a>
		</div>
	);
}

export default SocialIcons;