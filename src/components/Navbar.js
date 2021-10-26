import React from 'react'
import { FaSearch } from "react-icons/fa";

const Navbar = ({name, setName}) => {
    return (
        <div id='navbar'>
            <h3>TunWatch</h3>
            <input placeholder=' Search'  value={name} onChange={(e)=>setName(e.target.value)}></input> 
            <button className='search-btn'><FaSearch /></button> 
            </div>
    )
}

export default Navbar
