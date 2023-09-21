import React from 'react';
import Link from 'next/link';
import styles from './screen1.module.css';
import { Metadata } from "next";


export const metadata: Metadata = {
                
}

function Screen1() {
    
    
    
    

    function aguaRender(){
        return(
            <div className={"baseScreen hide-native-scrollbar " + styles["Screen1"]}>
                
            </div>
        );
    };

    return aguaRender();
}

export default Screen1;
            