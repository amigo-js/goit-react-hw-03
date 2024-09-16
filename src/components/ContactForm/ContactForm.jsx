import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name is too short!")
    .max(50, "Name is too long!")
    .required("This field is required!"),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      "Phone number is not valid. Correct format is: 123-45-67"
    )
    .min(3, "Phone number is too short!")
    .max(50, "Phone number is too long!")
    .required("This field is required!"),
});

export default function ContactForm({ onAdd }) {
  const nameId = useId();
  const numberId = useId();
  const addNewContactId = nanoid();

  const handleSubmit = (values, actions) => {
    values.id = addNewContactId;
    onAdd(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.contactForm}>
        <div className={styles.formItem}>
          <label htmlFor={nameId} className={styles.label}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            id={nameId}
            placeholder="Enter your name"
          />
          <ErrorMessage name="name" component="span" style={{ color: "red" }} />
        </div>

        <div className={styles.formItem}>
          <label htmlFor={numberId}>Number</label>
          <Field
            type="tel"
            name="number"
            id={numberId}
            placeholder="Enter your phone number"
          />
          <ErrorMessage
            name="number"
            component="span"
            style={{ color: "red" }}
          />
        </div>

        <div>
          <button className={styles.button} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
}
