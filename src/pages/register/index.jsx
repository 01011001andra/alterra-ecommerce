import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import store from '../../store/indexlogin';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Proses penyimpanan data register
    if (email && password) {
      // Lakukan proses penyimpanan data register di sini
      setMessage('Pendaftaran berhasil!');
      dispatch({ type: 'SET_EMAIL', payload: email });
      dispatch({ type: 'SET_PASSWORD', payload: password });
    } else {
      setMessage('Email dan password harus diisi!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
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
      <button type="submit" className="btn btn-primary">Register</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default Register;
