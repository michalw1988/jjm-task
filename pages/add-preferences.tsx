import Layout from '../components/Layout'
import styles from '../styles/AddPreferences.module.scss'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import DropDown from '../components/DropDown'


export default function AddPreferencesPage() {

  const initialValues = {
    name: '',
    surname: '',
    phone: '',
    sector: '',
    reason: '',
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("To pole jest wymagane")
      .min(3, "Imię powinno mieć co najmniej 3 znaki"),
    surname: Yup.string()
      .required("To pole jest wymagane")
      .min(3, "Nazwisko powinno mieć co najmniej 3 znaki"),
    phone: Yup.string(),
    sector: Yup.string()
      .required("To pole jest wymagane"),
    reason: Yup.string()
      .when('sector', {
        is: 'sector4',
        then: Yup.string().required("To pole jest wymagane")
      }),
  })

  const options = [
    { value: "sector1", label: "Branża 1" },
    { value: "sector2", label: "Branża 2" },
    { value: "sector3", label: "Branża 3" },
    { value: "sector4", label: "Branża 4" },
  ];

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
                    placeholder="Podaj imię"
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
                    placeholder="Podaj nazwisko"
                    className={errors.surname && touched.surname ? "input-error" : null}
                  />
                  <ErrorMessage name="surname" component="span" className={styles.error} />
                </div>

                <div className={styles['form-row']}>
                  <label htmlFor="phone">Numer telefonu</label>
                  <Field
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Podaj numer telefonu (nieobowiązkowe)"
                  />
                </div>

                <div className={styles['form-row']}>
                  <label htmlFor="sector">Branża</label>
                  <DropDown
                    name="sector"
                    options={options}
                    id="sector"
                    placeholder="Wybierz branżę"
                  />
                  <ErrorMessage name="sector" component="span" className={styles.error} />
                </div>

                {
                  formik.values.sector === 'sector4' && <div className={styles['form-row']}>
                    <label htmlFor="reason">Uzasadnienie</label>
                    <Field
                      type="text"
                      name="reason"
                      id="reason"
                      placeholder="Podaj uzasadnienie"
                      className={errors.reason && touched.reason ? "input-error" : null}
                    />
                    <ErrorMessage name="reason" component="span" className={styles.error} />
                  </div>
                }

                <button
                  type="submit"
                  className={`${!(dirty && isValid) ? styles.disabled : null}`}
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
