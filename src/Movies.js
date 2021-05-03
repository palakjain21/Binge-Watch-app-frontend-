import React from 'react';
import Navbar from '../Home/Navbar';
import styles from '../Home/home.module.css';
import Card from '../Card/Card';

const Movies=() => {
return(
    <>

        <div className={styles.bg}>
            <Navbar/>
            <div className={styles.R}>
                < div className={styles.headings} >
                Latest Movies
                </div>
                <div className={styles.templates}>
                <Card/>
                </div>
            </div>
        </div>
    </>
    );
 };

    export default Movies;