import react from 'react'
import logo from '../images/troll-face.png'


export default function Header() {
    return (
        <header className="header">
            <img src={logo} className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <h3 className="header--project">React Course - Project 3</h3>
        </header>
    )
}