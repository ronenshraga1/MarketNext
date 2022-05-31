import React from 'react';
import styles from './home.module.css'
import Image from 'next/image'
import SearchComponent from './Components/SearchComponent/SearchComponent';


export default function Home() {
    return (
        <div>
            <SearchComponent />
        </div>
    );
}