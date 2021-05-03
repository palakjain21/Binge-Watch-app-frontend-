import React from 'react';
import Navbar from './Navbar';
import styles from './home.module.css';
import Card from '../Card/Card';
import NewArrival from '../Card/NewArrival';

const Home=() => {
return(
    <>

    <div className={styles.bg}>
      <Navbar/>
      <div className={styles.R}>
        < div className={styles.headings} >
          New Arrivals!!!
        </div>
        <div className={styles.templates}>
          <Card/>
        </div>
        < div className={styles.head} > 
          Top 10 trending!!!
        </div> 
        <div className={styles.temp}>
          <NewArrival/>
        </div>
   
      </div>
    </div>
    </>
  );

};

    export default Home;
