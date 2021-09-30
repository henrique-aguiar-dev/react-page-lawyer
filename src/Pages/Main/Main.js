import React from 'react';

//Components
import Header from '../../components/Header/Header';
import Sobre from '../../components/Sobre/Sobre';
import Areas from '../../components/Areas/Areas';
import Equipe from '../../components/Equipe/Equipe';
import Contato from '../../components/Contato/Contato';

const Main = () => {
	return (
		<>
			<Header />
			<div className="fix-header"></div>
			<Sobre />
			<Areas />
			<Equipe />
			<Contato />
		</>
	);
}
 
export default Main;