import React from 'react';
import styles from './Nav.module.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
const Nav = () => {
	return (
		<div className={styles.header}>
			<img className={styles.logo} src='./images/logo.svg' alt='' />
			<nav>
				<ul className={styles.nav_links}>
					<li>
						<a href='#'>Collections</a>
					</li>
					<li>
						<a href='#'>Men</a>
					</li>
					<li>
						<a href='#'>Women</a>
					</li>
					<li>
						<a href='#'>About</a>
					</li>
					<li>
						<a href='#'>Contact</a>
					</li>
				</ul>
			</nav>
			<div className={styles.shoppingCard}>
			<AiOutlineShoppingCart className={styles.shoppCard}/>
			</div>

			<div className={styles.avatar}>
				<img className={styles.avatarImg} src='./images/image-avatar.png' alt='' />
			</div>
		</div>
	);
};

export default Nav;
