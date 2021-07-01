import { React } from 'react';
import './index.css';
import config from '../../core/config';

const { count } = config.magicBox;
const randomNumber = Math.floor(Math.random() * count) + 1;
const two = 2;

const Box = (num) =>
	<div className={ `box ${ num % two ? 'light' : 'dark' }` }>
		{ num > 1 ? Box(num - 1) : randomNumber }
	</div>;

const MagicBox = () =>
	<div className="magic-box">{ Box(randomNumber) }</div>;

export default MagicBox;
