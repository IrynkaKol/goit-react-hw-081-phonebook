import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormStyled, Input, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';

import Notiflix from 'notiflix';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selector';


function ContactForm () {
  const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().min(6).max(16).required(),
  });

  
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const initialValues = {
    name: '',
    number: '',
  }

  
  const handleSubmit = (items, {resetForm}) => {
    
    const allContacts = {...items};
    if (contacts.find(
      ({name}) => name.toLowerCase() === allContacts.name.trim().toLowerCase())) {
      Notiflix.Notify.info(`Contact ${allContacts.name} already exist`);
      resetForm();
      return;
    } 
      dispatch(addContact(allContacts));
        resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            placeholder="Name"
           
          />
          <ErrorMessage component="div" name="name" />
        </label>
        <label htmlFor="number">
          Number
          <Input
            type="tel"
            name="number"
            placeholder="Number"
            
          />
          <ErrorMessage component="div" name="number" />
        </label>
        <Button type="submit">Add contact</Button>
      </FormStyled>
    </Formik>
  );
};

export default ContactForm;
