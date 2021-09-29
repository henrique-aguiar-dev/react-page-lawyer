//Global Packages, modules...
import React from 'react';

import Main from './Pages/Main/Main';

//Styles
import GlobalStyles from './global/GlobalStyles';
import './global/custom-font-awesome.css';

function App() {
  return (
		<>
			<GlobalStyles />
			<Main />
		</>
  );
}

export default App;
