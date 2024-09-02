import { Formik, Form, Field, ErrorMessage } from "formik"
import  * as Yup from 'yup';
import '../styles/formStyles.css';

interface InitalValues {
    name: string;
    email: string;
    password1: string;
    password2: string;
}

const initialValues : InitalValues = {
        name: '',
        email: '',
        password1: '',
        password2: '',
}

const validationSchema = Yup.object({
    name: Yup.string()
            .max(15, 'Debe tener como maximo 15 caracteres')
            .min(2, 'Debe tener como minimo 2 caracteres')
            .required('Este campo es requerido'),
    email: Yup.string()
            .email('Debe ser un email valido!')
            .required('Este campo es requerido'),
    password1: Yup.string()
            .min(8, 'Debe tener mas de 8 caracteres!')
            .required('Este campo es requerido'),
    password2: Yup.string()
            .oneOf( [Yup.ref('password1')], 'Deben hacer match' )
            .required('Este campo es requerido')
})

export const RegisterFormikPage = () => {
  return (
    <>
      <div>
        <h1>Formik Register Page</h1>
        <Formik
        initialValues={
            initialValues
        }     
        onSubmit={
            (values) => {
               console.log(values)
            }
        }
        validationSchema={ validationSchema }
        >
        {
            ({ handleReset }) => (
                <Form>
                    {/* Name */}
                    <label htmlFor="name">Name:</label>
                    <Field 
                    name='name' 
                    type="text" 
                    id={'name'}
                    placeholder="Name" 
                    autoComplete = 'true'                 
                    />
                    <ErrorMessage name="name" component={'span'} />
                    {/* Email */}
                    <label htmlFor="email">Email:</label>
                    <Field 
                    name='email' 
                    type="email" 
                    id={'email'}
                    placeholder="Email" 
                    autoComplete = 'true'
                    />
                    <ErrorMessage name="email" component={'span'} />
                    {/* Password1 */}
                    <label htmlFor="password1">Password:</label>
                    <Field 
                    name='password1' 
                    type="password" 
                    id={'password1'}
                    placeholder="Password"
                    autoComplete = 'true' 
                    />
                    <ErrorMessage name="password1" component={'span'} />
                    {/* Password2 */}
                    <label htmlFor="password2">Repeat Password:</label>
                    <Field 
                    name='password2' 
                    type="password" 
                    id={'password2'}
                    placeholder="Repeat password" 
                    autoComplete = 'true'
                    />
                    <ErrorMessage name="password2" component={'span'} />
                    {/* Buttons */}
                    <button type="submit">Submit</button>
                    <button type="button" onClick={handleReset}>Reset Form</button>
                </Form>
            )

        }
        </Formik>
    </div>
    </>
  )
}
