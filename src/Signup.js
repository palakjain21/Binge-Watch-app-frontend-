import React, { useState } from 'react';
 import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from './Signup.module.css';
 import Logo from '../Binge-Watch.png';

const Signup =() =>{
    const { register, handleSubmit, errors } = useForm();
 

  const history = useHistory();

 const routeChange = () =>{ 
  let path = `Login`; 
  history.push(path);
 }

 const onSubmit = () => {
  
  history.push('/Home');
}

  return (
    <div className= {styles.Container}>
      <div className={styles.logo}>
       <img src={Logo}  width="150px" height="150px" border-radius="50%" /> 
       </div>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h2> Sign Up</h2>
          <span className={styles.entry}>
            <label className={styles.label}>Name</label>

            <input
              name="Name"
              type="name"
              className={styles.input}
              placeholder="Enter your full name"
              />
          </span>
              
          <span className={styles.entry}>
            <label className={styles.label}>E-mail</label>

            <input
              name="email"
              type="email"
              className={styles.input}
              placeholder="Enter your email address"
            //   ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
            //   value={values.email}
            //   onChange={onChange}
            />
            {/* {errors.email && (
              <h3 className={styles.errors}> '*This field is required'</h3>
            )} */}
          </span>
          <span className={styles.entry}>
            <label className={styles.label}>Password</label>
            <input
              name="password"
              type="password"
              className={styles.input}
              placeholder="Enter password of minimum length 6"
            //   ref={register({ required: true, minLength: 6 })}
            //   value={values.password}
            //   onChange={onChange}
            />
            {/* {errors.password && (
              <h3 className={styles.errors}> '*This field is required'</h3>
            )} */}
          </span>
          < span className={styles.entry}>
            <label className={styles.label}>Country</label>

            <input
              name="country"
              type="name"
              className={styles.input}
              placeholder="Enter your country"
              />
          </span>
          <div className={styles.checkbox}>
                
                <input name="priority" type="checkbox" style={{marginLeft:"5px"}} />
                <label>Save my credentials</label>
          </div>
              <button type="submit" className={styles.submitbutton}>
                <span>Submit</span>
              </button>

          <div className={styles.login}>
            Already have a Binge-Watch account?
            <button type="submit" style={{width:"24rem", backgroundColor:"#e4e4de"}}className={styles.submitbutton} onClick={() => history.push('/Login')}>
              <span>Login</span>
            </button>
          </div>
        </form>
    </div>
  );
    };
    
      export default Signup;