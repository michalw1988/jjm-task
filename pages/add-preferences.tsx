import Layout from '../components/Layout'
import styles from '../styles/AddPreferences.module.scss'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"


export default function AddPreferencesPage() {

  const initialValues = {
    name: '',
    surname: '',
    phone: '',
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("To pole jest wymagane")
      .min(3, "Imię powinno mieć co najmniej 3 znaki"),
    surname: Yup.string()
      .required("To pole jest wymagane")
      .min(3, "Nazwisko powinno mieć co najmniej 3 znaki"),
    phone: Yup.string(),
  })

  return (
    <Layout title="Dodaj preferencje">
      <h1>Dodaj preferencje</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log('FORM SUBMIT', values)
        }}
      >
        {formik => {
          const { errors, touched, isValid, dirty } = formik
          return (
            <div className="container">
              <p>Wypełnij formularz, aby dodać swoją preferencję zawodowową.</p>
              <Form className={styles['preferences-form']}>
                <div className={styles['form-row']}>
                  <label htmlFor="name">Imię</label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    className={errors.name && touched.name ? "input-error" : null}
                  />
                  <ErrorMessage name="name" component="span" className={styles.error} />
                </div>

                <div className={styles['form-row']}>
                  <label htmlFor="surname">Nazwisko</label>
                  <Field
                    type="text"
                    name="surname"
                    id="surname"
                    className={errors.surname && touched.surname ? "input-error" : null}
                  />
                  <ErrorMessage name="surname" component="span" className={styles.error} />
                </div>

                <div className={styles['form-row']}>
                  <label htmlFor="surname">Numer telefonu</label>
                  <Field
                    type="text"
                    name="phone"
                    id="phone"
                  />
                </div>

                <button
                  type="submit"
                  className={!(dirty && isValid) ? "disabled-btn" : ""}
                  disabled={!(dirty && isValid)}
                >
                  Zapisz
                </button>
              </Form>
            </div>
          );
        }}
      </Formik>
    </Layout>
  )
}
