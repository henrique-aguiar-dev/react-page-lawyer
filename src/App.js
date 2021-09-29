//Global Packages, modules...
import React from 'react';

//Components
import Header from './components/Header/Header';

//Styles
import GlobalStyles from './global/GlobalStyles';
import './global/custom-font-awesome.css';


function App() {
  return (
		<>
			<GlobalStyles />
			<Header />
		</>
  );
}

export default App;
