import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import style from './LoginView.module.css';

const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>LoginView</h2>

      <form onSubmit={handleSubmit} className={style.form}>
        <label className={style.label}>
          Email address
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChangeEmail}
          />
        </label>
        <label className={style.label}>
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChangePassword}
          />
        </label>
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default LoginView;

// const [email, setEmail] = useState('name@mail.ru');
// const [password, setPassword] = useState('QW1234!');
