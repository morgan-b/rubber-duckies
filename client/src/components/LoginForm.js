import React from 'react';
import { Link } from 'react-router-dom';

function LoginForm() {
    return (
        <>
          <form className="m-2">
                <h2>LOGIN</h2>
                <section className="mb-2">
                    <label for="user-email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="user-email"/>
                </section>

                <section className="mb-2">
                    <label for="user-password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="user-password"/>
                </section>

                <button id="login" className="btn btn-dark localBtn">Login</button>
                <section className="m-3 justify-content-end text-end">
                    <label for="signupInstead" className="form-label">Not a member yet?</label>
                    <Link id="signupInstead" to="/signup" class="btn btn-light localBtn">Signup</Link>
                </section>
            </form>  
        </>
    )
}

export default LoginForm
