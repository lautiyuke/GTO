import {useEffect} from 'react';
import {Link} from '../Link/Link.jsx';
import './Navbar.css';

export const Navbar = () => {
	return (
		<header>
			<nav className='navbar'>
				<div className='logo'>
					<h1>GTO</h1>
				</div>
				<div className='links'>
					<Link text='Todas' href='#/' />
					<Link text='Esperando' href='#/esperando' />
					<Link text='Cocinando' href='#/cocinando' />
					<Link text='Completadas' href='#/completadas' />
					<Link text='Canceladas' href='#/canceladas' />
				</div>
			</nav>
		</header>
	);
};
