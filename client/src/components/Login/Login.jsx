import React, { useState } from 'react';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  return fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const Login = ({ setToken }) => {
  const [username, setUserName] = useState('admin');
  const [password, setPassword] = useState('admin');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };
  return (
    <div className='wrapper'>
      <main className='auth-page'>
        <div className='container'>
          <div className='auth-page__row'>
            <div className='auth-page__column'>
              <div className='auth-page__item wrapper-global'>
                <div className='auth-page__head'>
                  <h3 className='auth-page__title'>Login to react-dashboard</h3>
                  <p className='auth-page__text'>Please fill all fields below.</p>
                </div>
                <div className='auth-page__content'>
                  <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <div className='auth-page__input-group'>
                      <input
                        className='auth-page__input'
                        value={username}
                        type='text'
                        onChange={(e) => setUserName(e.target.value)}></input>
                    </div>
                    <label>Password</label>
                    <div className='auth-page__input-group'>
                      <input
                        className='auth-page__input'
                        value={password}
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div className='auth-page__footer'>
                      <button type='submit' className='auth-btn btn btn-danger'>
                        <span className='auth-btn-circle'></span>Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
