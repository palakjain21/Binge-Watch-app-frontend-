import React from 'react';
import styles from './Card.module.css';
 import minions from './minions.jpg';
 import tangled from './tangled.jpg';
 import ballerina from './ballerina.jpg';
 import { BiPlayCircle, BiDotsVerticalRounded } from "react-icons/bi";


const Animated = () => {
  return (
    <>
    <div className={styles.cardtemplate}>
      <div className={styles.image}>
       { <img src={minions} alt='minions'  width="220px" height="220px"  />  }
      </div>
      <div className={styles.elements}>
        <h2>Play</h2>
      </div>
      <div className={styles.playicon}>
        <BiPlayCircle size="2.5rem"/>
      </div>
      <div className={styles.more}>
        <BiDotsVerticalRounded size="2.5rem"/>
      </div>
    </div>

    <div className={styles.cardtemplate}>
      <div className={styles.image}>
       { <img src={tangled} alt='tangled'  width="220px" height="220px"  />  }
      </div>
      <div className={styles.elements}>
        <h2>Play</h2>
      </div>
      <div className={styles.playicon}>
        <BiPlayCircle size="2.5rem"/>
      </div>
      <div className={styles.more}>
        <BiDotsVerticalRounded size="2.5rem"/>
      </div>
    </div>

    <div className={styles.cardtemplate}>
      <div className={styles.image}>
       { <img src={ballerina} alt='ballerina '  width="220px" height="220px"  />  }
       </div>
      <div className={styles.elements}>
        <h2>Play</h2>
      </div>
      <div className={styles.playicon}>
        <BiPlayCircle size="2.5rem"/>
      </div>
      <div className={styles.more}>
        <BiDotsVerticalRounded size="2.5rem"/>
      </div>
    </div>
  </>  
  );
};

export default Animated;