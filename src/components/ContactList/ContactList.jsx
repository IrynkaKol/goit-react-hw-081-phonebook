import React from 'react';
import {
  List,
  Item,
  Contact,
  Avatar,
  Wrapper,
  Button,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectStatusFilter } from 'redux/selector';
import { deleteContact, fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectStatusFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <List>
      {getVisibleContacts().map(({ id, name, number, avatar }) => (
        <Item key={id}>
          <Contact>
            <Avatar width={50} src={avatar} alt="avatar" />
            <Wrapper>
              <span>{name}: </span>
              <br />
              <span>{number} </span>
            </Wrapper>
          </Contact>
          <Button onClick={() => handleDelete(id)}>Delete</Button>
        </Item>
      ))}
    </List>
  );
}

export default ContactList;
