import './Note.css'
import { Link, Route } from 'react-router-dom'

export default function Note({ note }) {
	const date = new Date()
	if (!note) {
		<h1>No Note</h1>
	}
	return (
		<section className='each-note'>
			<h1>{note.title.replace(not, note.title[0].toUpperCase())}</h1>
			<p>{note.body.length < 30 ? note.body : note.body.substring(0, 120) + '...'}</p>
			<Link to={`/note/${note._id}`}>
				<button>Read More</button>
			</Link>
		</section>
	)
}
