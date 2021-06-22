import { React } from 'react';
import './App.css';
import Pendulum from './components/Pendulum/index.js';
// import Logo from './components/Logo/index.js';

const App = () =>
	<div className="App">{Pendulum()}</div>;

export default App;
