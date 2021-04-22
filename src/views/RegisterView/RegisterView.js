import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/auth-operations';
import style from './RegisterView.module.css';

const RegisterView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signup({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>RegisterView</h2>

      <form onSubmit={handleSubmit} className={style.form}>
        <label className={style.label}>
          Username
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChangeName}
            value={name}
          />
        </label>
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

export default RegisterView;

// const [name, setName] = useState('Name');
// const [email, setEmail] = useState('name@mail.ru');
// const [password, setPassword] = useState('QW1234!');
