import { Formik, Form } from "formik";
import * as Yup from 'yup';
import '../styles/formStyles.css'
import { MyTextInput, MyCheckbox, MySelect } from "../components"

export const FormikAbstraction = () => {

      return (
        <div>
            <h1>Formik Abstraction</h1>

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
                    () => (
                        <Form>
                            {/* FirstName */}
                            <MyTextInput label="First Name" name="firstName" placeholder="Joan"/>
                            {/* LastName */}
                            <MyTextInput label="Last Name" name="lastName" placeholder="Blanco"/>
                            {/* Email */}
                            <MyTextInput label="Email" name="email" type="email" placeholder="joan@gmail.com"/>
                            {/* Select */}
                            <MySelect id={'jobType'} name={'jobType'} as="select" label={"Job Type"}>
                                <option value="">Pick Something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT Junior</option>
                            </MySelect>
                            {/* Check */}
                            <MyCheckbox label={"Terms and conditions"} name={"terms"}/>
                     
                            <button type='submit'>Enviar</button>
                        </Form>
                    )
                }

                
            </Formik>
            
        </div>
      )
}
