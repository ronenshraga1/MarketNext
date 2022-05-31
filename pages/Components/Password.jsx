import React, { useState } from 'react';
import styles from './username.module.css';

export default function Password({onPasswordChange,password}){
    const handleInput =(event) =>{
        setPassword(event.target.value);
    }
    return <input type="password" className={styles.username} value={password} placeholder="Password" onChange={onPasswordChange} />
}