import { NavLink } from 'react-router-dom'
import reactLogo from '../assets/react.svg'

import '../styles/styles.css'

const navLinks = [
    {
        path: 'register',
        to: '/register',
    },
    {
        path: 'formik-basic',
        to: '/formik-basic',
    },
    {
        path: 'formik-yup',
        to: '/formik-yup',
    },
    {
        path: 'formik-components',
        to: '/formik-components',
    },
    {
        path: 'formik-abstraction',
        to: '/formik-abstraction',
    },
    {
        path: 'users',
        to: '/users',
    },
]

export const SideBar = () => {
  return (
    <>
    <nav className='sideBar'>
        <div>
            <img src={ reactLogo } alt="react-logo" />
        </div>

        <ul>
            {

                navLinks.map( navLink => (
                    <li key={navLink.path}>
                        <NavLink className={({isActive}) => isActive ? 'active' : '' } to={navLink.to} end>{navLink.path}</NavLink>
                    </li>
                ))
            }
        </ul>
    </nav>
    </>
  )
}
