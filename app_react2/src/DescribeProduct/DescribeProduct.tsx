import React from 'react';
import styles from './DescribeProduct.module.css';
import Price from '../Price/Price';

import Wrapper from '../Wrapper/Wrapper';
const DescribeProduct = () => {
	return (
		<div className={styles.productDescription}>
			<div className={styles.wrapperOffer}>
				<h5 className={styles.nameCompany}>Sneaker company</h5>
				<h1>Fall Limited Edition Sneakers</h1>
				<p className={styles.text}>
					These low-profile sneakers are your perfect casual wear companion.
					Featuring a durable rubber outer sole,they'll withstand everything the
					weather can offer
				</p>
				<Price />
				<Wrapper />
			</div>
		</div>
	);
};

export default DescribeProduct;
