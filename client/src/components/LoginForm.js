import React from 'react';
import { Link } from 'react-router-dom';

function LoginForm(props) {
    return (
        <>
            <form className="m-2">
                <h2>LOGIN</h2>

                <section className="mb-2">
                    <label className="form-label">Email</label>
                    <input
                        value={props.email}
                        type="email"
                        onChange={props.loginEmailChange}
                        className="form-control"
                        id="user-email" />
                </section>

                <section className="mb-2">
                    <label className="form-label">Password</label>
                    <input
                        value={props.password}
                        type="password"
                        onChange={props.loginPassChange}
                        className="form-control"
                        id="user-password" />
                </section>
                
                <section className="m-3" onChange={props.radioInput}>
                <section className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" value="user" name="flexRadioDefault" id="userRadio"/>
                        <label className="form-check-label">User</label>
                </section>
                <section className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" value="caregiver" name="flexRadioDefault" id="caregiverRadio"/>
                        <label className="form-check-label"> Caregiver</label>
                </section>
                </section>

                <button id="login" className="btn btn-dark localBtn" onClick={props.handleLogin}>Login</button>
                <section className="m-3 justify-content-end text-center">
                    <label className="form-label">Not a member yet?</label>
                    <br></br>
                    <Link id="signupInstead" to="/signup" className="btn btn-light localBtn">Signup</Link>
                    </section>
            </form>  
        </>
    )
}

export default LoginForm
