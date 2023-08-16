import styles from './RootLayout.module.css';
import Navbar from '../../components/Navbar/Navbar';
// import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    // const [noteArray, setNoteArray] = useState([]);

    // useEffect(() => {
    //     if (noteArray.length) {
    //         console.log(`FROM ROOT: ${noteArray}`);
    //     };
    // }, [noteArray]);

    return (
        <div className={styles.layoutContainer}>
            <div className={styles.navbarContainer}><Navbar /></div>
            <div className={styles.displayContainer}>
                {/* <h1>GRID CHILD 2</h1> */}
                <Outlet />
            </div>
        </div>
    );
}

export default RootLayout;