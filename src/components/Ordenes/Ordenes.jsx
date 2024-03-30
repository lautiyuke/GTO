import React, {useEffect, useState} from 'react';
import {BordePunteado} from '../BordePunteado/BordePunteado.jsx';
import {setOrdenesStorage, getOrdenes} from '../../hooks/useOrdenes.js';
import {ProductosOrden} from './ProductosOrden.jsx';
import {
	Todas,
	Esperando,
	Cocinando,
	Completada,
	Cancelada,
	HoraIcon,
	Tick,
	Basura,
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
	const [hoverEliminarId, setHoverEliminarId] = useState(null);

	useEffect(() => {
		const nuevasOrdenes = getOrdenes();
		setOrdenes(nuevasOrdenes);
	}, []);

	const handleEliminarMouseEnter = (id) => {
		setHoverEliminarId(id);
	};

	const handleEliminarMouseLeave = () => {
		setHoverEliminarId(null);
	};

	const handleAvanzarFase = (id, faseActual) => {
		let nuevasOrdenes = getOrdenes();
		switch (faseActual) {
			case 'esperando':
				nuevasOrdenes = ordenes.map((orden) =>
					orden.id === id ? {...orden, estado: 'cocinando'} : orden,
				);
				setOrdenesStorage(nuevasOrdenes);
				setOrdenes(nuevasOrdenes);
				break;
			case 'cocinando':
				nuevasOrdenes = ordenes.map((orden) =>
					orden.id === id ? {...orden, estado: 'completada'} : orden,
				);
				setOrdenesStorage(nuevasOrdenes);
				setOrdenes(nuevasOrdenes);
				break;
			case 'cancelada':
				nuevasOrdenes = ordenes.filter((orden) => orden.id !== id);
				setOrdenesStorage(nuevasOrdenes);
				setOrdenes(nuevasOrdenes);
				break;
			default:
				console.log('Default Switch BTN AvanzarFase');
				break;
		}
	};

	const handleCancelar = (id) => {
		let ordenesFuncion = getOrdenes();
		for (let i = 0; i < ordenesFuncion.length; i++) {
			if (ordenesFuncion[i].id === id) {
				ordenesFuncion[i].estado = 'cancelada';
				setOrdenesStorage(ordenesFuncion);
				setOrdenes(ordenesFuncion);
			}
		}
	};

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

	const renderBoton = (orden) => {
		switch (orden.estado.toLowerCase()) {
			case 'esperando':
				return (
					<>
						<button
							className='avanzarFase'
							onClick={() => {
								handleAvanzarFase(orden.id, orden.estado);
							}}>
							<Cocinando color='#ffffff' />
							Cocinando
						</button>

						<button
							className='cancelar'
							onClick={() => {
								handleCancelar(orden.id);
							}}>
							Cancelar
						</button>
					</>
				);
			case 'cocinando':
				return (
					<>
						<button
							className='avanzarFase'
							onClick={() => {
								handleAvanzarFase(orden.id, orden.estado);
							}}>
							<Tick color='#ffffff' />
							Completada
						</button>
						<button
							className='cancelar'
							onClick={() => {
								handleCancelar(orden.id);
							}}>
							Cancelar
						</button>
					</>
				);
			case 'completada':
				return <></>;
			case 'cancelada':
				return (
					<button
						onClick={() => {
							handleAvanzarFase(orden.id, orden.estado);
						}}
						className='eliminarBtn'
						onMouseEnter={() => handleEliminarMouseEnter(orden.id)}
						onMouseLeave={handleEliminarMouseLeave}>
						<Basura color={hoverEliminarId === orden.id ? '#dc2626' : '#000000'} />
						Eliminar
					</button>
				);

			default:
				return null;
		}
	};

	return (
		<div className='ordenes'>
			{ordenes.map(
				(orden) =>
					(orden.estado.toLowerCase() === estado.toLowerCase() || estado === '') && (
						<div className='orden' key={orden.id}>
							<div className='ordenHeader'>
								<div className={`notiEstado ${orden.estado}`}>
									{orden.estado.charAt(0).toUpperCase() + orden.estado.slice(1)}
								</div>
								<div className='horaCreacion'>
									<HoraIcon color='#757f8e' />
									{orden.horaCreacion}
								</div>
							</div>
							<BordePunteado />
							<ProductosOrden productos={orden.productos} />
							<BordePunteado />
							<div className='ordenFooter'>{renderBoton(orden)}</div>
						</div>
					),
			)}
		</div>
	);
};
