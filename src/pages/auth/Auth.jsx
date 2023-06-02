import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthAbout from './AuthAbout';
import { login, signup } from '../../actions/auth';
import './Auth.css';

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const switchHandler = () => {
        setIsSignup(!isSignup);
        setName("");
        setEmail("");
        setPassword("");
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        if (isSignup) {
            if (!name) {
                alert('Enter a name to continue')
            }
            else if (!email) {
                alert('Enter email to continue')
            }
            else if (!password && password < 8) {
                alert('Password too short')
            }
            else {
                dispatch(signup({ name, email, password }, navigate));
            }
        }
        if (!isSignup) {
            if (!email) {
                alert('Enter email to continue')
            }
            else if (!password) {
                alert('Enter password to continue')
            }
            else {
                dispatch(login({ email, password }, navigate));
            }
        }
    }

    return (
        <section className='auth-section'>
            {isSignup && <AuthAbout />}
            <div className='auth-container-2'>
                <form onSubmit={formSubmitHandler}>
                    {isSignup &&
                        <label htmlFor='name'>
                            <h4>Display Name</h4>
                            <input id='name' type='text' name='name' onChange={(e) => { setName(e.target.value) }} value={name} />
                        </label>}
                    <label htmlFor='email'>
                        <h4>Email</h4>
                        <input id='email' type='email' name='email' onChange={(e) => { setEmail(e.target.value) }} value={email} />
                    </label>
                    <label htmlFor='password'>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h4>Password</h4>
                            {!isSignup && <p style={{ color: '#007ac6', fontSize: '13px' }}>Forgot password?</p>}
                        </div>
                        <input id='password' type='password' name='password' onChange={(e) => { setPassword(e.target.value) }} value={password} />
                        {isSignup && <p style={{ color: '#666767', fontSize: '13px' }}>Passwords must contain at least eight<br /> characters, including at least 1 letter and 1<br /> number.</p>}
                    </label>
                    {isSignup && <label htmlFor='confirmpassword'>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h4>Confirm Password</h4>
                            {!isSignup && <p style={{ color: '#007ac6', fontSize: '13px' }}>Forgot password?</p>}
                        </div>
                        <input id='confirmpassword' type='password' name='confirmpassword' onChange={(e) => { setConfirmPassword(e.target.value) }} value={confirmPassword} />
                        {confirmPassword !== password && <p className='conf'>Password do not match</p>}
                    </label>
                    }
                    <button className='auth-btn' type='submit'>{isSignup ? 'Sign up' : 'Log in'}</button>
                    {isSignup && <p style={{ color: '#666767', fontSize: '13px' }}>By clicking “Sign up”, you agree to our
                        <span style={{ color: '#007ac6', cursor: 'pointer' }}> terms of<br /> service</span> and acknowledge
                        that you have read <br />and understand our <span style={{ color: '#007ac6', cursor: 'pointer' }}>privacy
                            policy</span> and <span style={{ color: '#007ac6', cursor: 'pointer' }}>code of <br />conduct</span>.</p>}
                </form>
                <p>
                    {isSignup ? 'Already have an account?' : 'Don\'t have an account?'}
                    <button type='button' className='handle-switch-btn' onClick={switchHandler}>{isSignup ? 'Log in' : 'Sign up'}</button>
                </p>
            </div>
        </section>
    )
}

export default Auth;