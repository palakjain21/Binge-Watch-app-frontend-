import React  from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import SearchBox from './Searchbox';
import { BiUserCircle } from "react-icons/bi";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';



const Profile = ({ option, closeOption }) => {
  const history = useHistory();

 const routeChange = () =>{ 
  let path = `Login`; 
  history.push(path);
 }
  return (
    <>
      {option === 'profile' ? (
        <>
          <div className={styles.mapoptions}>
              <div className={styles.menu}>
                {/* < BiUserCircle fill="white" size="4rem" onClick={() => closeOption(null)} /> */}

                <div className={styles.dropdown}>
                 <button><span>Account</span></button> 
                 <button><span>Settings</span></button> 
                 <button onClick={() => history.push('/Login')}>
                   <span>Logout</span>
                  </button>
                </div>
              </div>
          </div>
        </>
      ) : null}
    </>
  );
};
const Navbar = () => {
  const [isOptionOpen, changeIsOptionOpen] = useState(null);
    return (
      <>
      {isOptionOpen ? (
        <Profile option={isOptionOpen} closeOption={changeIsOptionOpen} />
      ) : null}
     
        <div className={styles.navbar}>
       
            <div className={styles.button}>
          
            <NavLink to='/home' activeStyle={{fontWeight: "bold",color: "white"}}>
            <h2>HOME</h2>  
            </NavLink>
            </div>
            <div className={styles.button}>
            <NavLink to='/Series' activeStyle={{fontWeight: "bold",color: "white"}}>
             <h2>SERIES</h2>
            </NavLink>
            </div>
            <div className={styles.button}>
             <NavLink to='/Movies' activeStyle={{fontWeight: "bold",color: "white"}}> 
              <h2>MOVIES</h2>
             </NavLink> 
            </div>
            <div className={styles.button}>
            <NavLink to='/Kids' activeStyle={{fontWeight: "bold",color: "white"}}>
              <h2>KIDS</h2>
            </NavLink>
            </div>
             <div onClick={() => changeIsOptionOpen('profile')}>
                <span className={styles.Icon}>
                <div>
                  <BiUserCircle fill="white" size="4rem"/>
                </div>
                </span>
              </div>

             <div className={styles.box}>
              <SearchBox/>
             </div>
          
            
            


           
        </div>
      </>
    );
  };
  
    
  export default Navbar;