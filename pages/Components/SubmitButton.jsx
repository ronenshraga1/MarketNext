import React, { useState } from 'react';
import Router from 'next/router'
import styles from './submitButton.module.css';

export default function SubmitButtonComponent({Username,Password}){
    async function apiLogin(){
        const response = await fetch('http://localhost:3000/api/home',{
            method:'POST',
            body:JSON.stringify({username:Username,password:Password}),
            headers: { 'Content-Type': 'application/json'},
        })
        if(response.ok){
            Router.push('/market');
        }
    }
    const handleSubmit = async () =>{
        console.log('check');
        await apiLogin();
    }
    return <input type="submit" className={styles.submitButton} onClick={handleSubmit} value="Login" />
}