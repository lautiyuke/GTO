import React, {useState, useEffect} from 'react';
import {NuevaIcon} from '../SVGIcons/SVGIcons';
import './Footer.css';

export const Footer = () => {
	const [horaActual, setHoraActual] = useState(new Date());

	useEffect(() => {
		const intervalo = setInterval(() => {
			setHoraActual(new Date());
		}, 1000);

		return () => {
			clearInterval(intervalo);
		};
	}, []);

	const obtenerHoraFormateada = () => {
		const horas = horaActual.getHours().toString().padStart(2, '0');
		const minutos = horaActual.getMinutes().toString().padStart(2, '0');
		const segundos = horaActual.getSeconds().toString().padStart(2, '0');
		return `${horas}:${minutos}:${segundos}`;
	};

	const abrirPopUp = () => {
		document.getElementById('popup').classList.toggle('open-popup');
		document.getElementById('filtro').classList.toggle('mostrar');
	};

	return (
		<footer className='footer' id='footer'>
			<div className='horaContainer'>
				<p>{obtenerHoraFormateada()}</p>
			</div>
			<button className='btnNuevaOrden' onClick={abrirPopUp}>
				<NuevaIcon color='white' />
				Nueva orden
			</button>
		</footer>
	);
};
