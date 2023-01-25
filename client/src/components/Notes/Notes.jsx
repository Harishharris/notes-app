import Note from '../Note/Note'
import './Notes.css'
import { NotesContext } from '../../Context/notesContext'
import { useContext } from 'react'

export default function Notes() {
	const { notes } = useContext(NotesContext)
	if (!notes) {
		return (
			<h1>No Notes to Show</h1>
		)
	}

  return (
    <main>
			<h1>Your Notes here...</h1>
			{notes.map(note => <Note 
				key={note._id}
				note={note}
			/>)}
		</main>
  )
}