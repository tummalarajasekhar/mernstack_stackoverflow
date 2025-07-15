import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import bars from '../../assets/bars-solid.svg'
import logo from '../../assets/logo.png'
import search from '../../assets/search-solid.svg'
import Avatar from '../avatar/Avatar'
import './Navbar.css'
import { setcurrentuser } from '../../action/currentuser'
import { jwtDecode } from 'jwt-decode'


function Navbar({ handleSlideIn }) {
    var user = useSelector((state) => state.currentuserreducer)
    console.log(user)
    console.log(user);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handlelogout = () => {
        dispatch({ type: "LOGOUT" })
        navigate("/")
        dispatch(setcurrentuser(null))
    }
    console.log(user)

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedtoken = jwtDecode(token);
            if (decodedtoken.exp * 1000 < new Date().getTime()) {
                handlelogout();
            }
        }
        dispatch(setcurrentuser(JSON.parse(localStorage.getItem("Profile"))))
    }, [user?.token, dispatch])
    return (
        <nav className="main-nav">
            <div className="navbar">
                <button className="slide-in-icon" onClick={() => handleSlideIn()}>
                    <img src={bars} alt="bars" width='15' />
                </button>
                <div className="navbar-1">
                    <Link to='/' className='nav-item nav-logo'>
                        <img src={logo} alt="logo" />
                    </Link>
                    <Link to="/" className="nav-item nav-btn res-nav">
                        About
                    </Link>
                    <Link to="/" className="nav-item nav-btn res-nav">
                        Products
                    </Link>
                    <Link to="/" className="nav-item nav-btn res-nav">
                        For Teams
                    </Link>
                    <form><input type="text" placeholder='Search...' />
                        <img src={search} alt="search" width='18' className='search-icon' />
                    </form>
                </div>
                <div className="navbar-2">
                    {user === null ? (
                        <Link to='/Auth' className='nav-item nav-links'>
                            Log in
                        </Link>
                    ) : (
                        <>
                            <Avatar backgroundColor='#009dff' px='10px' py='7px' borderRadius='50%' color="white">
                                <Link to={`/Users/${user?.message?._id}`} style={{ color: "white", textDecoration: "none" }}>
                                    {user.message?.name?.charAt(0).toUpperCase()}
                                </Link>
                            </Avatar>
                            <button className="nav-tem nav-links" onClick={handlelogout}>Log out</button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar