import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import formJson from '../data/custom-form.json'
import { MySelect, MyTextInput } from '../components'

const initialValues : { [key : string] : any } = {};

const requiredFields : { [key : string] : any } = {};

for (const input of formJson) {
    initialValues[input.name] = input.value;

    if (!input.validations?.length) continue;

    let schema = Yup.string()

    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required('Este campo es requerido')
        }
        if (rule.type === 'minLength') {
            schema = schema.min((rule as any).value || 2, `Minimo de ${(rule as any).value || 2} caracteres`);
        }
        if (rule.type === 'email') {
            schema = schema.email('Debe ser un email valido');
        }
        // Otras reglas
    }
    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields})

export const DynamicFormPage = () => {
  return (
    <div>
        <h1>Dynamic Form Page</h1>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            {
                () => (
                    <Form>
                        {
                        formJson.map( ({ label, name, placeholder, type, options }) => {
                            if(type === 'input' || type === 'password' || type.includes('email')) {
                                return <MyTextInput 
                                key={name} 
                                id={name} 
                                type={(type as any)} 
                                name={name} 
                                label={label} 
                                placeholder={placeholder}  />
                            }

                            if (type.includes('select')) {
                                return (
                                    <MySelect key={name} label={label} name={name} id={name}>

                                        <option value={''}>Select an option</option>
                                        {
                                            options?.map( ({id, label}) => (                                         
                                                <option key={id} value={id}>{label}</option>
                                            ) )
                                        }
                                    </MySelect>
                                )
                            }

                            throw new Error(`El type: ${type} no es soportado`)

                        })
                        }

                        <button type='submit'>Submit</button>
                    </Form>
                )
            }
        </Formik>
    </div>
  )
}
