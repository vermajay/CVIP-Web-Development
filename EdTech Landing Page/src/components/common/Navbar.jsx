import React from 'react'
import { Link, matchPath } from 'react-router-dom'
import {NavbarLinks} from '../../data/navbar-links'
import StudyNotionLogo from '../../assets/Logo/Logo-Full-Light.png'
import { useLocation } from 'react-router-dom'

const Navbar = () => {

    const location = useLocation();
    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname);
    }

    return (
        <div className='h-14 border-b border-richBlack-700'>
            <div className='flex w-11/12 h-full max-w-maxContent items-center justify-between mx-auto'>

                <Link to={"/"}>
                  <img src={StudyNotionLogo} height={32} width={160} loading='lazy'/>
                </Link>
            
                <nav className='flex gap-7 text-richBlack-25 justify-between pr-[500px]'>
                    {
                      NavbarLinks.map((link, index)=>(
                          <div key={index}>
                            <Link to={link?.path} className={`${matchRoute(link?.path) ? "text-yellow-50" : ""}`}>
                                {link.title}
                            </Link>
                          </div>
                      ))
                    }
                </nav>

            </div>
        </div>
    )
}

export default Navbar