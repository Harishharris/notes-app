import './EditNote.css'
import { useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function NewNote() {
	const navigate = useNavigate()
	const { id } = useParams()
	const date = new Date()
	const [isOk, setIsOk] = useState('')
	const [editTitle, setEditTitle] = useState()
	const [editBody, setEditBody] = useState()

	useEffect(() => {
		const fetchNote = async () => {
			const response = await fetch(`https://notes-api-v2.onrender.com/notes/api/${id}`)
			const data = await response.json()
			setEditTitle(data.title)
			setEditBody(data.body)
		}
		fetchNote()
	}, [])

	async function handleFormSubmit(e) {
		e.preventDefault()
		const response = await fetch(`http://localhost:3000/notes/api/${id}`, {
			method: 'PUT',
			body: JSON.stringify({
				title: editTitle,
				body: editBody
			}),
			headers: {
      	"Content-Type": "application/json"
    	}
		})
		const data = await response.json()
		if (response.ok) {
			setIsOk(true)
			const time = setTimeout(() => {
				setIsOk('')
			}, 2000)
		}
		else {
			setIsOk(false)
			const time = setTimeout(() => {
				setIsOk('')
			}, 2000)
		}
	}

	return (
		<section onSubmit={handleFormSubmit} className='new-note'>
			<h1>Edit Note</h1>
			<form>
				<label htmlFor="title">Title: </label>
				<input 
					type='text'
					id="title"
					required
					placeholder="Title"
					value={editTitle}
					onChange={(e) => setEditTitle(e.target.value)}
				/>
				<br />
				<label htmlFor='body'>Body: </label>
				<input
					type='text'
					id='body'
					placeholder="Type what's happened today" 
					required
					value={editBody}
					onChange={(e) => setEditBody(e.target.value)}
				/>
				<div>Date: {date.getDate()} - {date.getMonth() + 1} - {date.getFullYear()}</div>
				<button>Edit Note</button>
				<br></br>
				{isOk === true && <p className='server-ok'>Note Modified Added</p>}
				{isOk === false && <p className='server-error'>OOPS! Something went wrong, Please try again</p>}
				<button onClick={() => navigate('/')}>GO Back</button>
			</form>
		</section>
	)
}
