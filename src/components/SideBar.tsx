import { NavLink } from 'react-router-dom'
import reactLogo from '../assets/react.svg'

import '../styles/styles.css'

const navLinks = [
    {
        name: 'register',
        to: '/register',
    },
    {
        name: 'dynamic-form',
        to: '/dynamic-form',
    },
    {
        name: 'formik-register',
        to: '/formik-register',
    },
    {
        name: 'formik-basic',
        to: '/formik-basic',
    },
    {
        name: 'formik-yup',
        to: '/formik-yup',
    },
    {
        name: 'formik-components',
        to: '/formik-components',
    },
    {
        name: 'formik-abstraction',
        to: '/formik-abstraction',
    },
    {
        name: 'users',
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
                    <li key={navLink.name}>
                        <NavLink className={({isActive}) => isActive ? 'active' : '' } to={navLink.to} end>{navLink.name}</NavLink>
                    </li>
                ))
            }
        </ul>
    </nav>
    </>
  )
}
