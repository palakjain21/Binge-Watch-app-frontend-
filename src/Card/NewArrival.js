import React from 'react';
import styles from './Card.module.css';
 import friends from './friends.jpg';
 import thebigbangtheory from './thebigbangtheory.jpg';
 import riverdale from './riverdale.jpg';
 import Popup from '../Popup/Popup';
 import {useState} from 'react';
 import { BiPlayCircle, BiDotsVerticalRounded } from "react-icons/bi";


const NewArrival = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
    
    <div className={styles.cardtemplate}>
      <div className={styles.image}>
       { <img src={friends} alt='friends'  width="220px" height="220px"  />  }
      </div>
      <div className={styles.elements}>
        <h2>Play</h2>
      </div>
      <div className={styles.playicon}>
        <BiPlayCircle size="2.5rem"/>
      </div>
      <div className={styles.more}   value="Click to Open Popup"
      onClick={togglePopup}>
        <BiDotsVerticalRounded size="2.5rem"/>
      </div>
      {isOpen && <Popup
      content={<>
        <p>Share this video</p>
         <button>Yes</button> 
      </>}
      handleClose={togglePopup}
      />}
    </div>
    <div className={styles.cardtemplate}>
      <div className={styles.image}>
       { <img src={thebigbangtheory} alt='thebigbangtheory'  width="220px" height="220px"  />  }
       </div>
      <div className={styles.elements}>
        <h2>Play</h2>
      </div>
      <div className={styles.playicon}>
        <BiPlayCircle size="2.5rem"/>
      </div>
      <div className={styles.more}   value="Click to Open Popup"
      onClick={togglePopup}>
        <BiDotsVerticalRounded size="2.5rem"/>
      </div>
    </div>
    <div className={styles.cardtemplate}>
      <div className={styles.image}>
       { <img src={riverdale} alt='riverdale'  width="220px" height="220px"  />  }
       </div>
      <div className={styles.elements}>
        <h2>Play</h2>
      </div>
      <div className={styles.playicon}>
        <BiPlayCircle size="2.5rem"/>
      </div>
      <div className={styles.more}   value="Click to Open Popup"
      onClick={togglePopup}>
        <BiDotsVerticalRounded size="2.5rem"/>
      </div>
    </div>
  </>  
  );
};

export default NewArrival;