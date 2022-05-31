import React from 'react';
import Image from 'next/image';
import styles from './item.mdoule.css';
export default function ItemComponent({title,description,price}){
    return (
    <div className={styles.container}>
        <Image src="/azerbijan" height={40} width={100} />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
    )
}