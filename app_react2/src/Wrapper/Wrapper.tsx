import Button from '../Button/Button';
import Counter from '../Counter/Counter';
import styles from './Wrapper.module.css';
import React from 'react';

const Wrapper = () => {
	return (
		<>
			<div className={styles.wrap}>
				<Counter />
				<Button />
			</div>
		</>
	);
};

export default Wrapper;
