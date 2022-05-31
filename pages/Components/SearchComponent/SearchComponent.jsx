import React, { useState } from 'react';
import styles from './search.module.css';
import Image from 'next/image';

export default function SearchComponent(){
    const [searchInput,setSearchInput] = useState('');
    const handleInput =(event) =>{
        setSearchInput(event.target.value);
    }
    return (
        <div className={styles.searchContainer}>
            <div className={styles.imgIcon}>
               { searchInput.length > 0 ? undefined : <Image src="/search.svg" height={30} width={30} />}
            </div>
            <input type="text" className={styles.searchInput} onChange={handleInput} value={searchInput}  />
        </div>
    )
}