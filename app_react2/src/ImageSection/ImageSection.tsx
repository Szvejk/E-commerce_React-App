import React, { useCallback, useState } from 'react';
import styles from './ImageSection.module.css';
import Image1 from '../../images/image-product-1.jpg';
import Image2 from '../../images/image-product-2.jpg';
import Image3 from '../../images/image-product-3.jpg';

const ImageSection = () => {
	return (
		<div className={styles.container}>
			<div className={styles.mainImg}>
				<img src='./images/image-product-1.jpg' />
			</div>

			<ul className={styles.list_products}>
				<li className={styles.active}>
					<img style={{ width: 100, height: 100 }} src={Image1} />
				</li>
				<li>
					<img style={{ width: 100, height: 100 }} src={Image2} />
				</li>
				<li>
					<img style={{ width: 100, height: 100 }} src={Image3} />
				</li>
			</ul>
		</div>
	);
};

export default ImageSection;
