import React from 'react';

//Components
import Header from '../../components/Header/Header';
import Sobre from '../../components/Sobre/Sobre';

const Main = () => {
	return (
		<>
			<Header />
			<div className="fix-header"></div>
			<Sobre />
		</>
	);
}
 
export default Main;