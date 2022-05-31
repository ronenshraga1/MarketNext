import React, { useState } from 'react';
import styles from './username.module.css';

export default function UserName({onUserNameChange,userName}){
    const handleInput =(event) =>{
        setUserName(event.target.value);
    }
    return <input type="text" className={styles.username} placeholder="Username" value={userName} onChange={onUserNameChange} />
}