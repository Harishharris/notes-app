import './FullNote.css'
import { NotesContext } from '../../src/Context/notesContext'
import { useContext, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

export default function FullNote() {
	const { id } = useParams()
	const { notes, setNotes } = useContext(NotesContext)
	const [isOk, setIsOk] = useState()
	const singleNote = notes.find(note => note._id === id.toString())
	const navigate = useNavigate()
	
	const handleNavigate = () => {
		navigate('/')
	}

	async function handleDeleteNote() {
		const response = await fetch(`https://notes-api-v2.onrender.com/notes/api/${id}`, {
			method: 'DELETE'
		})
		if (response.ok) {
			setIsOk(true)
			const time = setTimeout(() => {
				setIsOk('')
			}, 2000)
			navigate('/')
		}
		else {
			setIsOk(false)
			const time = setTimeout(() => {
				setIsOk('')
			}, 2000)
			console.log('not ok')
		}
	}

	return (
		<section className='full-note'>
			<h1>Full Note</h1>
			<h2>{singleNote.title}</h2>
			<p>{singleNote.body}</p>
			<button onClick={handleNavigate} className='go-back'>Go Back</button>
			<br />
			<button className='delete-note' onClick={handleDeleteNote}>Delete Note</button>
			{isOk === true && <p className='server-ok'>Note Successfully Deleted</p>}
			{isOk === false && <p className='server-error'>OOPS! Something went wrong, Please try again</p>}
			<br></br>
			<Link to={`/edit-note/${id}`}><button className='edit-note'>Edit Note</button></Link>
		</section>
	)
}
