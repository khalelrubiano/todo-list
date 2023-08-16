// import styles from './App.module.css';
// import NoteForm, { noteAction } from './components/NoteForm/NoteForm';
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './layouts/RootLayout/RootLayout';
import Test from './components/Test/Test';
import NoteDisplay from './components/NoteDisplay/NoteDisplay';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route path="/test/:id" element={<NoteDisplay />} />
        <Route path="*" element={<Test />} />
        {/* <Route path="/add-note" element={<NoteForm />} /> */}
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />

    // <div className={styles.container}>
    //   <div class={styles.item}><Navbar /></div>
    //   <div class={styles.item}>
    //     <h1>HEADER</h1>
    //   </div>
    // </div>
  );
}

export default App;
