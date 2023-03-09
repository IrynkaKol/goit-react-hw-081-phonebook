import { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Label } from './LoginForm.styled';

function reducer(state, action) {
  switch (action.type) {
    case 'name':
      return { ...state, email: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    default:
      return state;
  }
}
export const LoginForm = () => {
  const [state, setState] = useReducer(reducer, {
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleChangeInput = e => {
    setState({ type: e.target.name, payload: e.target.value });
    console.log(state);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn(state));
  };
  /*

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        emaill: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };*/

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label htmlFor="">
        Email
        <input onChange={handleChangeInput} type="email" name="name" />
      </Label>
      <Label htmlFor="">
        Password
        <input onChange={handleChangeInput} type="password" name="password" />
      </Label>
      <button type="submit">Log In</button>
    </Form>
  );
};
