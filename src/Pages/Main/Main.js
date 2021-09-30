import React from 'react';

//Components
import Header from '../../components/Header/Header';
import Sobre from '../../components/Sobre/Sobre';
import Areas from '../../components/Areas/Areas';
import Equipe from '../../components/Equipe/Equipe';

const Main = () => {
	return (
		<>
			<Header />
			<div className="fix-header"></div>
			<Sobre />
			<Areas />
			<Equipe />
		</>
	);
}
 
export default Main;