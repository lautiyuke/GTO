export const Todas = ({color, size = '24'}) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
			fill='currentColor'
			viewBox='0 0 256 256'>
			<rect width='256' height='256' fill='none' />
			<rect
				x='40'
				y='40'
				width='176'
				height='176'
				rx='8'
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='24'
			/>
			<line
				x1='176'
				y1='20'
				x2='176'
				y2='40'
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='24'
			/>
			<line
				x1='80'
				y1='20'
				x2='80'
				y2='40'
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='24'
			/>
			<line
				x1='40'
				y1='88'
				x2='216'
				y2='88'
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='24'
			/>
			<polyline
				points='164 128 117.3 172 92 148'
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='24'
			/>
		</svg>
	);
};

export const Esperando = ({color, size = '24'}) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
			fill='currentColor'
			viewBox='0 0 256 256'>
			<rect width='256' height='256' fill='none' />
			<line
				x1='88'
				y1='64'
				x2='216'
				y2='64'
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='24'
			/>
			<line
				x1='88'
				y1='128'
				x2='216'
				y2='128'
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='24'
			/>
			<line
				x1='88'
				y1='192'
				x2='216'
				y2='192'
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='24'
			/>
			<circle cx='44' cy='128' r='16' fill={color} />
			<circle cx='44' cy='64' r='16' fill={color} />
			<circle cx='44' cy='192' r='16' fill={color} />
		</svg>
	);
};

export const Cocinando = ({color, size = '24'}) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
			fill='currentColor'
			viewBox='0 0 256 256'>
			<rect width='256' height='256' fill='none' />
			<line
				x1='88'
				y1='16'
				x2='88'
				y2='40'
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='24'
			/>
			<line
				x1='128'
				y1='16'
				x2='128'
				y2='40'
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='24'
			/>
			<line
				x1='168'
				y1='16'
				x2='168'
				y2='40'
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='24'
			/>
			<path
				d='M52,80H204a8,8,0,0,1,8,8v96a23.9,23.9,0,0,1-24,24H68a23.9,23.9,0,0,1-24-24V88A8,8,0,0,1,52,80Z'
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='24'
			/>
			<line
				x1='244'
				y1='96'
				x2='212'
				y2='120'
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='24'
			/>
			<line
				x1='12'
				y1='96'
				x2='44'
				y2='120'
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='24'
			/>
		</svg>
	);
};

export const Completada = ({color, size = '24'}) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
			fill='currentColor'
			viewBox='0 0 256 256'>
			<rect width='256' height='256' fill='none' />
			<line
				x1='136'
				y1='128'
				x2='216'
				y2='128'
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='24'
			/>
			<line
				x1='136'
				y1='64'
				x2='216'
				y2='64'
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='24'
			/>
			<line
				x1='136'
				y1='192'
				x2='216'
				y2='192'
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='24'
			/>
			<polyline
				points='92 48 57.3 80 40 64'
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='24'
			/>
			<polyline
				points='92 112 57.3 144 40 128'
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='24'
			/>
			<polyline
				points='92 176 57.3 208 40 192'
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='24'
			/>
		</svg>
	);
};

export const Cancelada = ({color, size = '24'}) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
			fill='currentColor'
			viewBox='0 0 256 256'>
			<rect width='256' height='256' fill='none' />
			<line
				x1='76'
				y1='100'
				x2='180'
				y2='100'
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='24'
			/>
			<line
				x1='76'
				y1='140'
				x2='180'
				y2='140'
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='24'
			/>
			<path
				d='M32,208V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V208l-32-16-32,16-32-16L96,208,64,192Z'
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='24'
			/>
		</svg>
	);
};

export const NuevaIcon = ({color}) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			fill='currentColor'
			viewBox='0 0 256 256'>
			<rect width='256' height='256' fill='none' />
			<circle
				cx='74'
				cy='74'
				r='34'
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='24'
			/>
			<circle
				cx='182'
				cy='74'
				r='34'
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='24'
			/>
			<circle
				cx='74'
				cy='182'
				r='34'
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='24'
			/>
			<line
				x1='182'
				y1='156'
				x2='182'
				y2='208'
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='24'
			/>
			<line
				x1='208'
				y1='182'
				x2='156'
				y2='182'
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='24'
			/>
		</svg>
	);
};

export const HoraIcon = ({color}) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			fill='currentColor'
			viewBox='0 0 256 256'>
			<rect width='256' height='256' fill='none' />
			<circle
				cx='128'
				cy='128'
				r='96'
				fill='none'
				stroke={color}
				strokeMiterlimit='10'
				strokeWidth='16'
			/>
			<polyline
				points='128 72 128 128 184 128'
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='16'
			/>
		</svg>
	);
};
