import './About.css'
import { useNavigate } from 'react-router-dom'

export default function About() {
	const navigate = useNavigate()
	return (
		<section>
			<h1>About Page</h1>
			<p>This is a simple About Page that keeps track of all your notes.You can access all of your notes and you can update those notes, delete those notes and you can add new notes to the page.</p>
			<button onClick={() => navigate('/')}>Go Back</button>
		</section>
	)
}