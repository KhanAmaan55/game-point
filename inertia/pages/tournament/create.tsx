import { Head } from '@inertiajs/react'
import { Button, TextField } from '@mui/material'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { router } from '@inertiajs/react'
import './create.scss'

import * as Yup from 'yup'
import axios from 'axios'

const create = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
  })

  const initialValues = {
    name: '',
    description: '',
  }

  const handleSubmit = async (values: any) => {
    console.log(values)
    try {
      const data = await axios.post('/tournaments/create', values).then((res) => {
        return res.data
      })
      if (data.code === 200) {
        router.visit('/tournaments')
      }
    } catch (error) {
      console.log(error)
    }
    // resetForm()
  }
  return (
    <>
      <Head title="Create" />
      <div>
        <h1>Create Tournament</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="formStyle">
              <div>
                <Field
                  as={TextField}
                  variant="outlined"
                  label="Name"
                  name="name"
                  className="formFields"
                  error={errors.name && touched.name}
                  helperText={<ErrorMessage name="name" />}
                />
              </div>
              <div>
                <Field
                  as={TextField}
                  variant="outlined"
                  label="Description"
                  name="description"
                  className="formFields"
                  multiline
                  rows={4}
                  error={errors.description && touched.description}
                  helperText={<ErrorMessage name="description" />}
                />
              </div>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}

export default create
