import React, {useEffect, useState} from 'react';
import {BordePunteado} from '../BordePunteado/BordePunteado.jsx';
import {getOrdenes} from '../../hooks/useOrdenes.js';
import {ProductosOrden} from './ProductosOrden.jsx';
import {
	Todas,
	Esperando,
	Cocinando,
	Completada,
	Cancelada,
	HoraIcon,
} from '../SVGIcons/SVGIcons.jsx';
import './Ordenes.css';

const mensajesEstado = {
	'': {icono: Todas, mensaje: 'No hay ordenes hoy'},
	Esperando: {icono: Esperando, mensaje: 'No hay ordenes en espera'},
	Cocinando: {icono: Cocinando, mensaje: 'No hay ordenes cocinandose'},
	Completada: {icono: Completada, mensaje: 'No hay ordenes completadas'},
	Cancelada: {icono: Cancelada, mensaje: 'No hay ordenes canceladas'},
};

export const Ordenes = ({estado = ''}) => {
	const [ordenes, setOrdenes] = useState([]);
	useEffect(() => {
		const nuevasOrdenes = getOrdenes();
		setOrdenes(nuevasOrdenes);
	}, []);

	if (ordenes === -1 || !Array.isArray(ordenes) || ordenes.length === 0) {
		const mensajeEstado = mensajesEstado[estado] || {
			icono: null,
			mensaje: 'Salida default del Switch',
		};
		const IconoEstado = mensajeEstado.icono;
		return (
			<div className='noOrdenes'>
				<IconoEstado color='#757f8e' size='150' />
				{mensajeEstado.mensaje}
			</div>
		);
	}

	const primeraLetraAMayuscula = (string) =>
		string.charAt(0).toUpperCase() + string.slice(1);

	return (
		<div className='ordenes'>
			{ordenes.map(
				(orden) =>
					(orden.estado.toLowerCase() === estado.toLowerCase() || estado === '') && (
						<div className='orden' key={orden.id}>
							<div className='ordenHeader'>
								<div className={`notiEstado ${orden.estado}`}>
									{primeraLetraAMayuscula(orden.estado)}
								</div>
								<div className='horaCreacion'>
									<HoraIcon color='#757f8e' />
									{orden.horaCreacion}
								</div>
							</div>
							<BordePunteado />
							<ProductosOrden productos={orden.productos} />
							<BordePunteado />
							<div className='ordenFooter'>
								<button className='avanzarFase'>
									<Cocinando color='#ffffff' />
									Cocinando
								</button>
								<button className='cancelar'>Cancelar</button>
							</div>
						</div>
					),
			)}
		</div>
	);
};
