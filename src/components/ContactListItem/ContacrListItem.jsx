import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/operations';
import {
  Item,
  Contact,
  Wrapper,
  Button,
} from '../ContactList/ContactList.styled';

export const ContactListItem = ({
  id,
  name: nameValue,
  number: numberValue,
  handleDelete,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(nameValue);
  const [number, setNumber] = useState(numberValue);
  const dispatch = useDispatch();

  const handleChangeMode = () => {
    if (isEdit) {
      setIsEdit(prev => !prev);
      dispatch(editContact({ id, name, number }));
      return;
    }
    setIsEdit(prev => !prev);
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        return;
      case 'number':
        setNumber(e.target.value);
        return;
      default:
        return;
    }
  };

  return (
    <Item key={id}>
      <Contact>
        <Wrapper>
          {isEdit ? (
            <input
              onChange={handleChange}
              name="name"
              type="text"
              value={name}
            />
          ) : (
            <span>{name}: </span>
          )}

          <br />
          {isEdit ? (
            <input
              onChange={handleChange}
              name="number"
              type="text"
              value={number}
            />
          ) : (
            <span>{number}: </span>
          )}
        </Wrapper>
      </Contact>
      <Button onClick={() => handleDelete(id)}>Delete</Button>
      <Button onClick={handleChangeMode}>{isEdit ? 'Save' : 'Edit'}</Button>
    </Item>
  );
};
