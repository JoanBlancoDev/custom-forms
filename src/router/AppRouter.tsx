import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { FormLayout } from "../layout/FormLayout"
import { FormikAbstraction, FormikBasicPage , FormikComponents, FormikYupPage } from "../pages"


const routes = [
    {
        path: 'register',
        component: <h1>Register</h1>
    },
    {
        path: 'formik-basic',
        component: <FormikBasicPage/>
    },
    {
        path: 'formik-yup',
        component: <FormikYupPage/>
    },
    {
        path: 'formik-components',
        component: <FormikComponents/>
    },
    {
        path: 'formik-abstraction',
        component: <FormikAbstraction/>
    },
    {
        path: 'users',
        component: <h1>User</h1>
    },
]

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<FormLayout/>}>
                <Route index element={<h1>Home</h1>}/>
                {
                    routes.map( route => (
                        <Route key={route.path} path={ route.path } element={ route.component } />
                    ) )
                } 
                <Route index path="/*" element={<Navigate to={'/'} replace />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
