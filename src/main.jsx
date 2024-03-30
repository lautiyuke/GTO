import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {Navbar} from './components/Navbar/Navbar.jsx';
import {Footer} from './components/Footer/Footer.jsx';
import {PopUp} from './components/PopUp/PopUp.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Navbar />
		<App />
		<Footer />
		<PopUp />
		<div className='filtro' id='filtro'></div>
	</React.StrictMode>,
);
