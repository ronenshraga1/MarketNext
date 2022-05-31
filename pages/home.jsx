import React, { useCallback,useState } from 'react';
import styles from './home.module.css'
import Image from 'next/image'
import UserName from './Components/UserName';
import Password from './Components/Password';
import SubmitButtonComponent from './Components/SubmitButton';

export default function Home() {
    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const onUserNameChange = useCallback((value)=>{
        setUserName(value.target.value)
    },[]);
    const onPasswordChange = useCallback((value)=>{
        setPassword(value.target.value)
    },[])

    return (
        <div className={styles.logincontainer}>
            <h1>Welcome to Ronen store</h1>
            <Image src="/store.svg" height="100px" width="100px" />
            <div className={styles.usernameContainer}>
                <UserName onUserNameChange={onUserNameChange} userName={username} />
            </div>
            <div >
            <Password onPasswordChange={onPasswordChange} password={password} />
            </div>
            <div className={styles.submitButtonContainer}>
            <SubmitButtonComponent Username={username} Password={password} />
            </div>
        </div>
    );
}