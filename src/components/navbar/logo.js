
const Logo = ({toggler})=>{
    return <div className='logo'>
            <img width="50px" height="50px" src='https://alphafilm.ir/wp-content/uploads/2019/08/alphafilm.png'/>
            <button onClick={toggler} className="d-lg-none navbar-toggler-icon award-icon fa-solid fa-xl"></button>
        </div>

}

export default Logo;