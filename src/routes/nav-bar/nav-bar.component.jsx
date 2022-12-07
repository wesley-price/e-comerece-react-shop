import {Outlet, Link} from 'react-router-dom'
import React, {Fragment} from 'react'
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import './nav-bar.styles.scss'

const NavBar = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo'/>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to ='/shop'>
                        SHOP
                    </Link>
                </div>
                <div className='nav-links-container'>
                    <Link className='nav-link' to ='/sign-in'>
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>

    )
}

export default NavBar;