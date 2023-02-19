import './Note.css'
import { Link, Route } from 'react-router-dom'

export default function Note({ note }) {
	const date = new Date()
	if (!note) {
		<h1>No Note</h1>
	}
	return (
		<section className='each-note'>
			<h1>{note && note.title}</h1>
      <p>{note && note.body < 30 ? note.body : note.body + "..."}</p>
			<Link to={`/note/${note._id}`}>
				<button>Read More</button>
			</Link>
		</section>
	)
}
