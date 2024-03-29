import {Routes, Route, HashRouter} from 'react-router-dom';
import {Ordenes} from './components/Ordenes/Ordenes';
import './App.css';

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path='/' element={<Ordenes />} />
				<Route path='esperando' element={<Ordenes estado='Esperando' />} />
				<Route path='cocinando' element={<Ordenes estado='Cocinando' />} />
				<Route path='completadas' element={<Ordenes estado='Completada' />} />
				<Route path='canceladas' element={<Ordenes estado='Cancelada' />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
