import React from 'react';
import DescribeProduct from '../DescribeProduct/DescribeProduct';
import ImageSection from '../ImageSection/ImageSection';
import styles from './Card.module.css';

const Card = () => {
	return (
		<div className={styles.wrappers}>
			<div className={styles.card}>

				
					<div className={styles.flexImg}>
						<ImageSection />
					</div>
					
					<div className={styles.flexDescription}>
						<DescribeProduct />
					</div>
				
			</div>
		</div>
	);
};

export default Card;
