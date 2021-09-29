import React from 'react';

const LogoHeader = () => {
	return (
		// eslint-disable-next-line jsx-a11y/anchor-is-valid
		<a href="#" title="Voltar ao topo">
			<img draggable="false"
				src={require('../../../media/logotop.png').default} alt="logo"
			/>
		</a>
	);
}

export default LogoHeader;