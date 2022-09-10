import './navbar.css'
import { useState } from 'react';

const Navbar = ()=>{

    const[toggle,setToggle] = useState(0);

    const toggler = ()=>{
        if(toggle===0) setToggle(1);
        else setToggle(0);
    }

    return <nav className='container d-flex justify-content-between flex-column flex-lg-row'>
        <div className='logo'>
            <img width="50px" height="50px" src='https://alphafilm.ir/wp-content/uploads/2019/08/alphafilm.png'/>
            <button onClick={toggler} className="d-lg-none navbar-toggler-icon award-icon fa-solid fa-xl"></button>
        </div>

        
        <div className={
            (!toggle)?'collapse-items flex-grow-1 d-lg-flex justify-content-between flex-column flex-lg-row not-display':
            'collapse-items flex-grow-1 justify-content-between flex-column flex-lg-row display-list'}>
            <div className='navbar'>
                <ul className='d-flex list-group flex-row flex-column flex-lg-row'>
                    <li className='list-group-item'>
                       <a href='#'>item1</a> 
                    </li>
                    <li className='list-group-item'>
                       <a href='#'>item2</a> 
                    </li>
                    <li className='list-group-item'>
                       <a href='#'>item3</a> 
                    </li>
                    <li className='list-group-item'>
                       <a href='#'>item4</a> 
                    </li>                    
                </ul>
            </div>
            <div className='search' onSubmit={''}>
                <form className='form'>
                    <div className='form-group'>
                        <input placeholder='search something' className='search-input' type="text" value={''} onChange={''}/>
                        <button className='btn btn-success'>search</button>
                    </div>
                
                </form>
            </div>
        </div>
        
    </nav>
}

export default Navbar;