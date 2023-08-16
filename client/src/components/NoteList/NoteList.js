import styles from './NoteList.module.css';
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const NoteList = ({ noteArray }) => {

    const [clickedItem, setClickedItem] = useState(null);
    const [checkedItem, setCheckedItem] = useState([]);

    const handleItemClick = (item) => {
        // Clear the previous clicked item's highlight
        // if (clickedItem === item) {
        //     setClickedItem(null);
        // } else {
        //     setClickedItem(item);
        // }
        setClickedItem(item);
        console.log(clickedItem);

    };

    const res = noteArray.reduce((acc, cur) => {
        if (!acc[cur.date]) {
            acc[cur.date] = [];
        }

        acc[cur.date].push(cur);

        return acc;
    }, {});

    // console.log(res);

    return (
        <div className={styles.NoteDisplay}>
            <ul>
                {Object.keys(res).map((mapitem, index) => (
                    <li key={index}>
                        <h4>{mapitem}</h4>
                        <ul>
                            {res[mapitem].map(note => (
                                <NavLink to={`/test/${note.title}`}>
                                    <li
                                        key={note.createdAt}
                                        onClick={() => handleItemClick(note.createdAt)}
                                        className={`${styles.noteInfo} ${clickedItem === note.createdAt ? styles.clicked : styles.notClicked}`}>
                                        <p>{note.title}</p>
                                        <p>{note.time}</p>
                                    </li>
                                </NavLink>
                            ))}
                        </ul>
                    </li>
                ))
                }
            </ul >
        </div >
    );
}

export default NoteList;