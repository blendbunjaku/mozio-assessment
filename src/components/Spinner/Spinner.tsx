import React from 'react';
import styles from './Spinner.module.scss';

const Spinner: React.FC = () => (
    <div className={styles.threeDotsSpinner}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
    </div>
);
export default Spinner;
