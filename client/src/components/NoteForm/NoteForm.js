// import { useEffect, useMemo, useState } from 'react';
// import styles from './NoteForm.module.css';
// import { useOutletContext } from "react-router-dom";

// const NoteForm = () => {
//     const [noteArray, setNoteArray] = useOutletContext();
//     const [title, setTitle] = useState();
//     const [body, setBody] = useState();

//     useEffect(() => {
//         if (noteArray.length) {
//             console.log(noteArray);
//         };
//     }, [noteArray]);

//     const titleInput = (event) => {
//         setTitle(event.target.value);
//     };

//     const bodyInput = (event) => {
//         setBody(event.target.value);
//     };

//     return (
//         <div className="styles.noteFormDiv">
//             <h1>NOTE FORM COMPONENT</h1>

//             <label>
//                 <span>Title:</span>
//                 <input type="text" name="title" onChange={titleInput} required />
//             </label>
//             <label>
//                 <span>Body:</span>
//                 <textarea name="body" onChange={bodyInput} required></textarea>
//             </label>

//             <button onClick={() => {
//                 const note = {
//                     title: title,
//                     body: body,
//                 };
//                 setNoteArray([...noteArray, note])
//             }}>CLICK ME</button>

//         </div>
//     );
// }

// export default NoteForm;