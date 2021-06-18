import React from 'react';
import Navbar from '../Home/Navbar';
import styles from '../Home/home.module.css';
import NewArrival from '../Card/NewArrival';

const Series=() => {
return(
    <>

    <div className={styles.bg}>
        <Navbar/>
        <div className={styles.R}>
            < div className={styles.headings} >
            Your's favourite 
            </div>
            <div className={styles.templates} >
            <NewArrival/>
            </div>
        </div>
    </div>
    </>
    );
};

    export default Series;