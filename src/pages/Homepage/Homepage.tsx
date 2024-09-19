import React from 'react';
import SearchDestination from "../../components/SearchDestination/SearchDestination";
import styles from './Homepage.module.scss';

const Homepage = () => {
    return (<div className={styles.homepageContainer}>
        <SearchDestination/>
    </div>)
}

export default Homepage;