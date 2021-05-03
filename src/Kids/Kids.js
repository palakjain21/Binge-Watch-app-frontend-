import React from 'react';
import Navbar from '../Home/Navbar';
import styles from '../Home/home.module.css';
import Animated from '../Card/Animated';
// import NewArrival from '../Card/NewArrival';
const Kids=() => {
return(
    <>

    <div className={styles.bg}>
    <Navbar/>
    <div className={styles.R}>
   < div className={styles.headings} >
    Animated Movies
    </div>
    <div className={styles.templates}>
    <Animated/>
    </div>
    </div>
    </div>
    </>
    );
    };

    export default Kids;
