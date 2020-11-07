import React from 'react'
import { Link } from 'react-router-dom'
import All from './src/All'

function Header() {
    return (
        <header className='header'>
            <nav>
                <ul className='todo-heading'> 
                    <li><Link to='/'>All</Link></li>
                    <li><Link to='/active'>Active</Link></li>
                    <li><Link to='/complete'>Complete</Link></li>
                </ul>
            </nav>
        </header>

    )
}

export default Header