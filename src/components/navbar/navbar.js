import './navbar.css'
import { useState } from 'react';
import Logo from './logo';
import SearchItems from './search-items/search-items';

const Navbar = ()=>{

    const[toggle,setToggle] = useState(0);

    const toggler = ()=>{
        if(toggle===0) setToggle(1);
        else setToggle(0);
    }

    return <nav className='container d-flex justify-content-between flex-column flex-lg-row'>
        <Logo toggler={toggler}  /> 
        <SearchItems toggle={toggle} />
        
    </nav>
}

export default Navbar;