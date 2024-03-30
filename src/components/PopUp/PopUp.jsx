import React, {useState} from 'react';
import {getOrdenes, setOrdenes} from '../../hooks/useOrdenes.js';
import {BordePunteado} from '../BordePunteado/BordePunteado.jsx';
import {XIcon} from '../SVGIcons/SVGIcons.jsx';
import './PopUp.css';

export const PopUp = () => {
	const [productos, setProductos] = useState([]);
	const closePopUp = () => {
		document.getElementById('popup').classList.toggle('open-popup');
		document.getElementById('filtro').classList.remove('mostrar');
	};

	const obtenerHoraFormateada = () => {
		const horaActual = new Date();
		const horas = horaActual.getHours().toString().padStart(2, '0');
		const minutos = horaActual.getMinutes().toString().padStart(2, '0');
		return `${horas}:${minutos}`;
	};

	const handleAgregarProducto = () => {
		if (
			document.getElementById('nombreProducto').value !== '' &&
			!isNaN(parseInt(document.getElementById('cantProducto').value))
		) {
			let nuevosProductos = [...productos]; // Create a copy of the productos array
			nuevosProductos.push({
				nombre: document.getElementById('nombreProducto').value,
				cantidad: parseInt(document.getElementById('cantProducto').value),
			});
			setProductos(nuevosProductos);
		}
	};

	const handleEnviarOrden = () => {
		if (productos.length !== 0) {
			closePopUp();
			let ordenes = getOrdenes();
			let id;
			if (ordenes != -1) {
				id = ordenes[ordenes.length - 1].id + 1;
			} else {
				ordenes = [];
				id = 1;
			}
			ordenes.push({
				id: id,
				horaCreacion: obtenerHoraFormateada(),
				productos: productos,
				estado: 'esperando',
			});
			setOrdenes(ordenes);
		}
	};

	const handleVaciarLista = () => {
		setProductos([]);
	};

	return (
		<>
			<div className='popup' id='popup'>
				<div className='headerPopUp'>
					<p>Nueva Orden</p>
					<button onClick={closePopUp}>
						<XIcon color='#000000' />
					</button>
				</div>
				<div className='bodyPopUp'>
					<div className='izquierdaPopUp'>
						<form
							onSubmit={(e) => {
								e.preventDefault();
							}}>
							<div className='inputsNueva'>
								<input
									type='text'
									id='nombreProducto'
									placeholder='Nombre...'
									autoComplete='off'
									required
								/>
								<input
									type='number'
									id='cantProducto'
									defaultValue='1'
									min='1'
									autoComplete='off'
									required
								/>
							</div>
							<div className='botones'>
								<button
									type='submit'
									className='agregarProducto btnPopUp'
									onClick={handleAgregarProducto}>
									Agregar producto
								</button>
								<button className='vaciarLista btnPopUp' onClick={handleVaciarLista}>
									Vaciar lista
								</button>
								<button
									type='submit'
									className='enviarOrden btnPopUp'
									onClick={handleEnviarOrden}>
									Enviar orden
								</button>
							</div>
						</form>
					</div>
					<div className='derechaPopUp'>
						<p>Lista de productos</p>
						<BordePunteado />
						<div className='lista'>
							{productos.map((producto, index) => (
								<div className='itemLista' key={index}>
									<p>{producto.nombre}</p>
									<p>{producto.cantidad}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className='filtro' id='filtro'></div>
		</>
	);
};
