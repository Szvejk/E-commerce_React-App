import React, { useCallback, useState } from 'react';
import styles from './Counter.module.css';

const Counter = () => {
	const [count, setCount] = useState(0);

	function decrementCount() {
		setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
	}
	function incrementCount() {
		setCount((prevCount) => prevCount + 1);
	}
	return (
		<div className={styles.counter}>
			<button onClick={decrementCount} className = {styles.buttonMinus}>-</button>
			<span>{count}</span>
			<button onClick={incrementCount}className = {styles.buttonPlus}>+</button>
		</div>
	);
};
export default Counter;
