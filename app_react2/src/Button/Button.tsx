import React from 'react';
import styles from './Button.module.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Button = () => {
	return (
		<div className={styles.buttonSection}>
			<button className={styles.shop}>
				<AiOutlineShoppingCart className={styles.shoppButton} />
				Add to card
			</button>
		</div>
	);
};

export default Button;
