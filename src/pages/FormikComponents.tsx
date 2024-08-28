import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
import '../styles/formStyles.css'

export const FormikComponents = () => {

      return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={
                    {
                        firstName: '',
                        lastName: '',
                        email: '',
                        terms: false,
                        jobType: '',
                    }
                }
                onSubmit={( values ) => {
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                                        .max(15, 'Debe de tener 15 caracteres o menos')
                                        .required('Requerido'),
                        lastName: Yup.string()
                                        .max(10, 'Debe de tener 10 caracteres o menos')
                                        .required('Requerido'),
                        email: Yup.string()
                                        .email('Invalid Email format')
                                        .required('Requerido'),
                        terms: Yup.boolean()
                                        .oneOf([true], 'Debe de aceptar las condiciones'),
                        jobType: Yup.string()
                                        .notOneOf(['it-jr'], 'Esta opcion no es permitida')
                                        .required('Requerido'),

                    })
                }
            >

                {
                    (formik) => (
                        <Form>
                            {/* FirstName */}
                            <label htmlFor="firstName">First Name</label>
                            <Field id={'firstName'} name={'firstName'} type="text" placeholder="FirstName" />
                            <ErrorMessage name="firstName" component={'span'}/>
                            {/* LastName */}
                            <label htmlFor="lastName">Last Name</label>
                            <Field id={'lastName'} name={'lastName'} type="text" />
                            <ErrorMessage name="lastName" component={'span'}/>
                            {/* Email */}
                            <label htmlFor="email">Email Address</label>
                            <Field id={'email'} name={'email'} type="email" />
                            <ErrorMessage name="email" component={'span'} />
                            {/* Select */}
                            <label htmlFor="jobType">Email Address</label>
                            <Field id={'jobType'} name={'jobType'} as="select">
                                <option value="">Pick Something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT Junior</option>
                            </Field>
                            <ErrorMessage name="jobType" component={'span'} />
                            {/* Check */}
                            <label htmlFor="terms">
                                <Field id={'terms'} name={'terms'} type="checkbox" />
                                Terms and Conditions
                            </label>
                            <ErrorMessage name="terms" component={'span'} />
                          
                            
                            <button type='submit'>Enviar</button>
                        </Form>
                    )
                }

                
            </Formik>
            
        </div>
      )
}
