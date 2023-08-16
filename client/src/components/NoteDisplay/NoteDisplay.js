import styles from './NoteDisplay.module.css'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

//Need to validate whether the param received exists in the database / local storage. If not then display an error message
const NoteDisplay = () => {
    let { id } = useParams();

    useEffect(() => {
        console.log(`Param: ${id}`);
    });

    return (
        <div className={styles.NoteDisplay}>
            <h1>DISPLAY NOTE HERE</h1>
            <input type="checkbox" />
        </div>
    );
}

export default NoteDisplay;