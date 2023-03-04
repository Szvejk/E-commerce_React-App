import React from 'react'
import styles from './Price.module.css'

const Price = () => {
  return ( <> 
    <div className={styles.price}>
      <div className={styles.currentPrice}>
        $125.00
      </div>
      <div className={styles.discount}>50%</div>
     </div>
      <p className={styles.oldPrice}>$250.00</p> 
    </>
  )
}

export default Price
