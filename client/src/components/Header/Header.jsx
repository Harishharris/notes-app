import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav>
			<div>Notes App</div>
			<ul>
				<li>Home</li>
				<li><Link to='/new-note'>New Note</Link></li>
				<li><Link to='/about'>About</Link></li>
			</ul>
		</nav>
  )
}