import Header from './Header/Header'
import Notes from './Notes/Notes'
import { Routes, Route } from 'react-router-dom'
import FullNote from '../../pages/FullNote/FullNote'
import NewNote from '../../pages/NewNote/NewNote'
import About from '../../pages/About/About'
import { useEffect, useState } from 'react'
import { NotesContext } from '../Context/notesContext'
import EditNote from '../../pages/EditNote/EditNote'

function App() {
  const [notes, setNotes] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://notes-api-v2.onrender.com/notes/api', {
        method: 'GET'
      })
      const data = await response.json()
      setNotes(data)
    }
    fetchData()
  }, [])


  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <Notes />
          </>
        }/>
        <Route path='/new-note' element={<NewNote />}/>
        <Route path='/note/:id' element={<FullNote />} />
        <Route path='/edit-note/:id' element={<EditNote />} />
        <Route path='/about' element={<About />}/>
      </Routes>
    </NotesContext.Provider>
  )
}

export default App
