import { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Label } from './RegisterForm.styled';

function reducer(state, action) {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload };
    case 'email':
      return { ...state, email: action.payload };
    case 'password':
      return { ...state, password: action.payload };
      default:
      return state
  }
}
export const RegisterForm = () => {

  const [state, setState] = useReducer(reducer, {
    name: '',
    email: '',
    password: '',
  })

  const dispatch = useDispatch();

  const handleChangeInput = e => {
    setState({ type: e.target.name, payload: e.target.value });
    console.log(state);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register(state));
  };
  /*const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset()
  };*/

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label htmlFor=''>
        Username
        <input onChange={handleChangeInput} type="text" name="name" />
      </Label>
      <Label htmlFor=''>
        Email
        <input onChange={handleChangeInput} type="email" name="email" />
      </Label>
      <Label htmlFor=''>
        Password
        <input onChange={handleChangeInput} type="password" name="password" />
      </Label>
      <button type="submit">Register</button>
    </Form>
  );
};
