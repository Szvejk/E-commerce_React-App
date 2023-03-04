import React, { useState } from 'react';
import styles from './Nav.module.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { SlMenu } from 'react-icons/sl';


const Nav = () => {
	const [openNav, setOpenNav] = useState(false);
	return (
		<div className={styles.header}>
			<div className={styles.mobile}>
				<div className={styles.dropdownWrapper}>
					<SlMenu
						className={styles.menuMobileIcon}
						onClick={() => setOpenNav((prev) => !prev)}
					/>
					{openNav && (
						<div className={styles.dropdown}>
							<ul className={styles.nav_mobile}>
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
						</div>
					)}
				</div>
			</div>
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
				<AiOutlineShoppingCart className={styles.shoppCard} />
			</div>

			<div className={styles.avatar}>
				<img
					className={styles.avatarImg}
					src='./images/image-avatar.png'
					alt=''
				/>
			</div>
		</div>
	);
};

export default Nav;
