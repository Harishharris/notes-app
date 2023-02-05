import './NewNote.css'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { NotesContext } from '../../src/Context/notesContext'

export default function NewNote() {
	const { setNotes } = useContext(NotesContext)
	const date = new Date()
	const navigate = useNavigate()

	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const [isOk, setIsOk] = useState()

	async function handleFormSubmit(e) {
		e.preventDefault()
		const response = await fetch('https://notes-api-v2.onrender.com/notes/api', {
			method: 'POST',
			body: JSON.stringify({
				title: title,
				body: body
			}),
			headers: {
      	"Content-Type": "application/json"
    	}
		})
		const data = await response.json()
		if (response.ok) {
			setIsOk(true)
			setNotes(currNotes => [...currNotes, data])
			console.log(data)
			const time = setTimeout(() => {
				setIsOk('')
			}, 2000)
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
		<section onSubmit={handleFormSubmit} className='new-note'>
			<h1>Add Note</h1>
			<form>
				<label htmlFor="title">Title: </label>
				<input 
					type='text'
					id="title"
					required
					placeholder="Title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<br />
				<label htmlFor='body'>Body: </label>
				<input
					type='text'
					id='body'
					placeholder="Type what's happened today" 
					required
					value={body}
					onChange={(e) => setBody(e.target.value)}
				/>
				<div>Date: {date.getDate()} - {date.getMonth() + 1} - {date.getFullYear()}</div>
				<button>Add Note</button>
				<br></br>
				{isOk === true && <p className='server-ok'>Note Successfully Added</p>}
				{isOk === false && <p className='server-error'>OOPS! Something went wrong, Please try again</p>}
				<button onClick={() => navigate('/')}>GO Back</button>
			</form>
		</section>
	)
}
