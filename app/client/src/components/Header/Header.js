import { Link } from 'react-router-dom'
import React from 'react'

// components
import Searchbar from '../searchbar/Searchbar'

// css
import './style.css'

export default function Header() {
    return (
        <section id="header">
            <Searchbar mode="simple" />
            <Link id="notifications" to="/notifications">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
            </Link>
        </section>
    )
}