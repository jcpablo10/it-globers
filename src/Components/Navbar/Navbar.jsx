import React from 'react'
import '../../Styles/_navbar.scss'
import navData from './navigationData.json'


const Navbar = ({setCompany}) => {

    const { NavigationData } = navData;

    const navClick = (name) => {
        setCompany(name)
    }

    return (
        <nav className="nav">
            <ul className="nav__list">
                {
                    NavigationData.map( (item)=> (
                        <li key={item.id} className="nav__item" >
                            <div className="nav__link" onClick={ ()=>{navClick(item.name)} }>{item.name}</div>
                        </li>
                    ) )
                }
                
            </ul>
        </nav>
    )
}

export default Navbar
