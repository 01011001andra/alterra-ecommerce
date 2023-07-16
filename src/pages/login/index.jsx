import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import store from '../../store/indexlogin';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Proses login menggunakan email dan password yang tersimpan
    console.log('Email:', email);
    console.log('Password:', password);
    dispatch({ type: 'SET_EMAIL', payload: email });
    dispatch({ type: 'SET_PASSWORD', payload: password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Masukkan email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Masukkan password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  );
};

export default Login;
