import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// , ErrorMessage

import { useId } from 'react';


import css from './ContactForm.module.css';

export default function ContactForm({initialValues, onSubmit}) {
  const id = useId();
  
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className={css['contact-form']}>
        <label htmlFor={`${id}-name`}>Name</label>
        <Field className={css['contact-field']} type="text" name="name" placeholder='Input name' id={`${id}-name`} />
        <label htmlFor={`${id}-number`}>Contact</label>
        <Field className={css['contact-field']} type="text" name="number" placeholder='Input number' id={`${id}-number`} />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
