import React, {useState} from 'react';
import NavBar from '../components/NavBar';
import "./style.css";


function ErrorPage() {



    return (
        <>
        <NavBar/>
        <div className="card m-3 text-center">
            <p>Oops! This page doesn't exist.</p>
        </div>

        </>
    )
}

export default ErrorPage;
