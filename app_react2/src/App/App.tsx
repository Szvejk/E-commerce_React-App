import React from 'react';
import styles from './App.module.css';
import Card from '../Card/Card';
import Nav from '../Nav/Nav';

const App = () => {
	return (
		<div className={styles.wrapper}>
			<Nav />
			<Card />
		</div>
	);
};

export default App;
