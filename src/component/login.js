import React from 'react';
import logo from './logo.jpeg';
import graph from './graph.jpg';
import './login.css';

const Login = () => {
    return (
        <div className='container'>
            <div className='section'>
                <div className='left-bar'>
                    <div className='card'>
                        <div className='logo'>
                            <img src={logo} alt="logo" className='logo-img' />
                        </div>
                         <h2 className='title'>Hi, Welcome to Eden!</h2>
                         <p className='para'>Start your 7-day free trial.</p>
                        <form action="" className='form'>
                            <label for="user-name" className='form-label'>Your Name</label>
                            <input type="text" placeholder="steve jobs" className='input' name="user-name" />
                            <label for="email-id" className='form-label'>Your Email</label>
                            <input type="email" name="email-id" className='input' placeholder="abcd@gmail.com" />
                            <label for="password" className='form-label'>Password</label>
                            <input type="password" name="password" className='input' placeholder="at least 8 character" />
                            <input type="submit" name="btn" className='submit-btn' value="Get started" />
                            <div className='terms'>
                            <input type="checkbox" className='check' name="conditions" />
                            <label className='con' for="conditions">I agree the Terms & conditions</label>
                            </div>
                        </form>
                        <div className='link'>
                            <a className='log-in' href="#">Are you already member?</a>
                        </div>
                    </div>
                </div>
                <div className='right-bar'>
                    <div className='section-2'>
                        <img className='graph-img' src={graph} alt="graph" />
                        <div className='overide'>
                            <span className='left-span'>New Users</span> <span className='right-span'>New Messages</span>
                        </div>
                        <div className='overide-2'><span className='left-span'>Today</span><i className='fa fa-angle-down' aria-hidden="true"></i>
                        </div>
                        <div className='bottom-text'>
                            <h2>Detailed Reports</h2>
                            <p>Pityful a rethoric question ran over her cheek, then</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login