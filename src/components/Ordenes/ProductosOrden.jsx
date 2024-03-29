import React from 'react';
import './ProductosOrden.css';

export const ProductosOrden = ({productos}) => (
	<div className='ordenBody'>
		{productos.map((producto, productoIndex) => (
			<Producto
				key={productoIndex}
				nombre={producto.nombre}
				cantidad={producto.cantidad}
			/>
		))}
	</div>
);

const Producto = ({nombre, cantidad}) => (
	<div className='producto'>
		<div className='nombreProducto'>{nombre}</div>
		<div className='cantidadProducto'>x{cantidad}</div>
	</div>
);
