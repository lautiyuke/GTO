import {useEffect, useState} from 'react';

export const getOrdenes = () => {
	const ordenesGuardadas = localStorage.getItem('ordenes');
	const parseadas = JSON.parse(ordenesGuardadas);
	return parseadas == null ? -1 : parseadas;
};
