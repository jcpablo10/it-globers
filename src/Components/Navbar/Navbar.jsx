import React from 'react'
import '../../Styles/_navbar.scss'
import navData from './navigationData.json'


const Navbar = () => {

    const { NavigationData } = navData;

    return (
        <nav className="nav">
            <ul className="nav__list">
                {
                    NavigationData.map( (item)=> (
                        <li key={item.id} className="nav__item">
                            <a className="nav__link" href="#">{item.name}</a>
                        </li>
                    ) )
                }
                
            </ul>
        </nav>
    )
}

export default Navbar
