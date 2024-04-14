import css from './ContactForm.module.css';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useId } from 'react';

export default function ContactForm({initialValues, onSubmit}) {
  const id = useId();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string().trim().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().trim().min(3, "Too short").max(50, "Too long").required("Required"),
  });

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={FeedbackSchema}>
      <Form className={css['contact-form']}>
        <label htmlFor={`${id}-name`}>Name</label>
        <Field className={css['contact-field']} type="text" name="name" placeholder='Input name' id={`${id}-name`} />
        <ErrorMessage name="name" component="span" />
        <label htmlFor={`${id}-number`}>Contact</label>
        <Field className={css['contact-field']} type="text" name="number" placeholder='Input number' id={`${id}-number`} />
        <ErrorMessage name="number" component="span" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
