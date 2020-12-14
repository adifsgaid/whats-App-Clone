import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
        });
    }).catch((error) => alert.apply(error.message))
    }
    return (
        <div className='login'>
           <div className='login__container'>
               <img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png' alt='Whatsapp imag'/>
               <div className='login__container'>
                   <h1>Sign in to WhatsApp</h1>
               </div>

               <Button type='submit' onClick={signIn}>
                   Sign in Whit Google
               </Button>
           </div>
        </div>
    )
}

export default Login
