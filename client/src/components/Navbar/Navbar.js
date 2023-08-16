import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import NoteList from '../NoteList/NoteList';
import { BiSortAlt2, BiCheck, BiTrash } from 'react-icons/bi';
import { getFormattedTimestamp } from '../../utils/timestampUtils';
import { getConvertedTime } from '../../utils/timeUtils';

const Navbar = () => {
  // const navigate = useNavigate();
  // const addNoteBtnClick = () => {
  //   navigate('/add-note');
  // };
  // useEffect(() => {
  //   if (noteArray.length) {
  //     console.log(`FROM NAVBAR: ${noteArray}`);
  //   };
  // }, [noteArray]);

  const [noteArray, setNoteArray] = useState([
    { title: 'sample1', body: '1', time: '1:00 PM', date: '2023-08-01', createdAt: 'August 15, 2023 at 8:44:19 PM GMT+8' },
    { title: 'sample2', body: '2', time: '2:00 PM', date: '2023-08-02', createdAt: 'August 16, 2023 at 8:45:19 PM GMT+8' },
    { title: 'sample3', body: '3', time: '3:00 PM', date: '2023-08-02', createdAt: 'August 17, 2023 at 8:46:19 PM GMT+8' },
    { title: 'sample4', body: '4', time: '4:00 PM', date: '2023-08-03', createdAt: 'August 18, 2023 at 8:47:19 PM GMT+8' },
  ]);

  // useEffect(() => {
  //   console.log(getFormattedTimestamp());
  //   console.log(getConvertedTime('18:34'));
  // }, []);

  return (
    <div className={styles.navbar}>

      <div className={styles.buttonContainer}>
        <button className={styles.sortButton}> <BiSortAlt2 /></button>
        <div className={styles.buttonSubcontainer}>
          <p className={styles.selectCount}>3 selected</p>
          <button className={styles.checkButton}> <BiCheck /></button>
          <button className={styles.deleteButton}> <BiTrash /></button>
        </div>

      </div>

      <div className={styles.itemListContainer}>
        <NoteList noteArray={noteArray} />
      </div>

    </div>
  );
};

export default Navbar;
