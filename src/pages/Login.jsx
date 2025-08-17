import React from 'react';
import { useAuth } from '../context/AuthContext';
import '../login.css'

const Login = () => {

  const { email, setEmail, password, setPassword, handleSubmit, errors } = useAuth()

  return (
    <>
      <div className="login" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <form method="post">
          {/* email */}
          <input
            id="formBasicEmail"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: '0.5rem',
              border: `1px solid ${errors.email ? 'red' : '#ced4da'}`,
              borderRadius: '0.25rem',
            }}
          />
          {errors.email && (
            <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
              {errors.email}
            </div>
          )}

          {/* password */}
          <input
            type="password"
            name="p"
            placeholder="Password"
            required="required"
            id="formBasicPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
              {errors.password}
            </div>
          )}

          <button
            type="submit"
            className="btn-primary btn-block btn-large">
            Let me in.
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
