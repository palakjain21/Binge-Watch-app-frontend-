import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from './Login.module.css';
import Logo from '../Binge-Watch.png';


const Login =() =>{

const history = useHistory();

 const routeChange = () =>{ 
  let path = `Signup`; 
  history.push(path);
 }

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = () => {
   
    history.push('/Home');
  }
  return (
    <div className= {styles.Container}>
      <div className={styles.logo}>
       <img className={styles.logo} src={Logo} alt={'logo'} width="150px" height="150px" /> 
       </div>
       <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h2> Log In</h2>
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
          <div className={styles.checkbox}>
                
                <input name="priority" type="checkbox" style={{marginLeft:"5px"}} />
                <label>Keep me Logged In</label>
              </div>
              <button type="submit" className={styles.submitbutton}  >
                <span>Submit</span>
              </button>

          <div className={styles.signup}>
            New to Binge-Watch?
            <button type="submit" style={{ backgroundColor:"#e4e4de"}}className={styles.registerbutton}   onClick={() => history.push('/Signup')} >
              <span className="register">Create your account</span>           
            </button>
          </div>
        </form>
    </div>
  );
};
    
    export default Login;