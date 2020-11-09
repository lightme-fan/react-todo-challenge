import React from 'react'
import { Link } from 'react-router-dom'
import All from './src/All'

function Header() {
    return (
        <header className='header'>
            <nav>
                <ul className='todo-heading'> 
                    <li><Link to='/src/all'>All</Link></li>
                    <li><Link to='/src/active'>Active</Link></li>
                    <li><Link to='/src/complete'>Complete</Link></li>
                </ul>
            </nav>
        </header>

    )
}

export default Header