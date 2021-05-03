import React from 'react';
import styles from './Card.module.css';
 import tenet from './tenet.jpg';
 import pagglait from './pagglait.jpg';
 import godzillaVSkong from './godzillaVSkong.jpg';
 import {useState} from 'react';
 import { useHistory } from 'react-router-dom';
 import Popup from '../Popup/Popup';
 import { BiPlayCircle, BiDotsVerticalRounded } from "react-icons/bi";


const Card = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    
    <>
   
          <div className={styles.cardtemplate}>
            <div className={styles.image}>
              { <img src={tenet} alt='tenet'  width="220px" height="220px"  />  }
            </div>
            <div className={styles.elements}>
              <h2>Play</h2>
            </div>
            <div className={styles.playicon}>
              <BiPlayCircle size="2.5rem"/>
            </div> 
            <div className={styles.more} 
            value="Click to Open Popup"
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
            { <img src={pagglait} alt='pagglait'  width="220px" height="220px"  />  }
             </div>
            <div className={styles.elements}>
              <h2>Play</h2>
            </div>
            <div className={styles.playicon}>
              <BiPlayCircle size="2.5rem"/>
            </div>
            <div className={styles.more} value="Click to Open Popup"
            onClick={togglePopup}>
              <BiDotsVerticalRounded size="2.5rem"/>
            </div>
          </div>

          <div className={styles.cardtemplate}>
            <div className={styles.image}>
            { <img src={godzillaVSkong} alt='godzillaVSkong'  width="220px" height="220px"  />  }
            </div>
            <div className={styles.elements}>
              <h2>Play</h2>
            </div>
            <div className={styles.playicon}>
        <     BiPlayCircle size="2.5rem"/>
            </div>
            <div className={styles.more} value="Click to Open Popup"
            onClick={togglePopup}>
              <BiDotsVerticalRounded size="2.5rem"/>
            </div>
          </div>
  </>  
  );
};

    export default Card;