import React from 'react'
import siteLogo from '../images/tmdb.png'

function Header() {
    return (
        <div className="header">
            
      
        <div className="column">
            <img src={siteLogo} alt=""/>
        </div>
        <div className="column">
            <p>MoviesDB Search </p>
        </div>


        </div>
    )
}

export default Header
