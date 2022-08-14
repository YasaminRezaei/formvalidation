import React,{useState,useEffect} from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validate from './validate';
import notify from './toastifiy';
import styles from './SignUp.module.css';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [data,setData] = useState({
        name : "",
        email:"",
        password:"",
        confirmPassword:"",
        isAccepted:false
    });
    const [errors,setErrors] = useState({});
    const [touched,setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data,"signup"));
    },[data,touched])

    const changeHandler = (event) => {
        if(event.target.name==="isAccepted"){
            setData({...data,[event.target.name]:event.target.checked})
        }else{
            setData({...data,[event.target.name]:event.target.value})
        }
        console.log(data);
    }

    const fokusHandler = (event) => {
        setTouched({...touched,[event.target.name]:true})
       
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(!Object.keys(errors).length) {
            notify("success","Signed up successfully");
        } else {
            notify("error","Invalid data!");
            setTouched({
                name : true,
                email:true,
                password:true,
                confirmPassword:true,
                isAccepted:true
            })
        }
    }


    return (
        <div className={styles.container}>
            <form className={styles.formContainer} onSubmit={submitHandler}>
                <h2 className={styles.header}>Sign Up</h2>
                <div className={styles.formField}>
                    <label>Name</label>
                    <input
                     className={(touched.name && errors.name) ?styles.uncompleted: styles.formInput}
                     type="text"
                     name='name'
                     value= {data.name}
                     onChange={changeHandler}
                     onFocus={fokusHandler}
                     
                     />
                    {touched.name && errors.name && <span>{errors.name}</span>}
                </div>
                <div className={styles.formField}>
                    <label>E Mail</label>
                    <input
                     className={(touched.email && errors.email) ?styles.uncompleted: styles.formInput}
                     type="text"
                     name='email'
                     value= {data.email}
                     onChange={changeHandler} 
                     onFocus={fokusHandler}/>
                    {touched.email && errors.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Password</label>
                    <input
                     className={(touched.password && errors.password) ?styles.uncompleted: styles.formInput}
                     type="password"
                     name='password'
                     value= {data.password}
                     onChange={changeHandler}
                     onFocus={fokusHandler}/>
                    {touched.password && errors.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Confirm </label>
                    <input
                     className={(touched.confirmPassword && errors.confirmPassword) ?styles.uncompleted: styles.formInput}
                     type="password"
                     name='confirmPassword'
                     value= {data.confirmPassword} 
                    onChange={changeHandler} onFocus={fokusHandler}/>
                    {touched.confirmPassword && errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div className={styles.formField}>
                    <div className={styles.checkBoxContainer}>
                        <label>i accept term of privacy policy</label>
                        <input
                        type="checkbox"
                        name='isAccepted'
                        value= {data.isAccepted}
                        onChange={changeHandler}
                        onFocus={fokusHandler}/>
                    </div>
                    {touched.confirmPassword && errors.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
                <div className={styles.formButtons}>
                  <Link to='/login'>Login</Link>
                  <button type='submit'>Sign Up</button>
                
                </div>

            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;