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

	return (
		<footer className='footer'>
			<div className='horaContainer'>
				<p>{obtenerHoraFormateada()}</p>
			</div>
			<button className='btnNuevaOrden'>
				<NuevaIcon color='white' />
				Nueva orden
			</button>
		</footer>
	);
};
