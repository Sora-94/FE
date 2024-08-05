import React, { useState } from 'react';
import '../../assets/Phoenix/css/simplebar.min.css';
import '../../assets/Phoenix/css/theme-rtl.min.css';
import '../../assets/Phoenix/css/theme.min.css';
import '../../assets/Phoenix/css/user-rtl.min.css';
import '../../assets/Phoenix/css/user.min.css';
import '../../assets/Phoenix/css/leaflet.css';
import '../../assets/Phoenix/css/MarkerCluster.css';
import '../../assets/Phoenix/css/MarkerCluster.Default.css';
import bgimg from '../../assets/Phoenix/images/37.png';
import bgimg2 from '../../assets/Phoenix/images/38.png';
import auth from '../../assets/Phoenix/images/auth.png';
import auth2 from '../../assets/Phoenix/images/auth-dark.png';
import logo from '../../assets/Phoenix/images/logo.png';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/auth';
import { LoginRequest, LoginResponse } from '../../models/auth';

const AuthCard: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      const requestData: LoginRequest = { email, password };
  
      try {
        const response: LoginResponse = await loginUser('/api/v1/authentication/login', requestData);
  
        if (response.isSuccess) {
          const token = response.data.Token[0];
          localStorage.setItem('token', token); // Lưu token vào localStorage
          window.alert("Đăng nhập thành công!");
          navigate('/');
          console.log('Login successful:', response);
        } else {
          setError(response.message || 'Login failed');
        }
      } catch (error) {
        console.error('Login error:', error);
        setError('Login failed');
      }
    };

  return (
    <main className="main profile-page" id="top">
      <div className="container-fluid bg-body-tertiary dark__bg-gray-1200">
        <div className="bg-holder bg-auth-card-overlay" style={{ backgroundImage: `url(${bgimg})` }}></div>
        <div className="row flex-center position-relative min-vh-100 g-0 py-5">
          <div className="col-11 col-sm-10 col-xl-8">
            <div className="card border border-translucent auth-card">
              <div className="card-body pe-md-0">
                <div className="row align-items-center gx-0 gy-7">
                  <div className="col-auto bg-body-highlight dark__bg-gray-1100 rounded-3 position-relative overflow-hidden auth-title-box">
                    <div className="bg-holder" style={{ backgroundImage: `url(${bgimg2})` }}></div>
                    <div className="position-relative px-4 px-lg-7 pt-7 pb-7 pb-sm-5 text-center text-md-start pb-lg-7 pb-md-7">
                      <h3 className="mb-3 text-body-emphasis fs-7">Phoenix Authentication</h3>
                      <p className="text-body-tertiary">Give yourself some hassle-free development process with the uniqueness of Phoenix!</p>
                      <ul className="list-unstyled mb-0 w-max-content w-md-auto">
                        <li className="d-flex align-items-center"><span className="uil uil-check-circle text-success me-2"></span><span className="text-body-tertiary fw-semibold">Fast</span></li>
                        <li className="d-flex align-items-center"><span className="uil uil-check-circle text-success me-2"></span><span className="text-body-tertiary fw-semibold">Simple</span></li>
                        <li className="d-flex align-items-center"><span className="uil uil-check-circle text-success me-2"></span><span className="text-body-tertiary fw-semibold">Responsive</span></li>
                      </ul>
                    </div>
                    <div className="position-relative z-n1 mb-6 d-none d-md-block text-center mt-md-15">
                      <img className="auth-title-box-img d-dark-none" src={auth} alt="" />
                      <img className="auth-title-box-img d-light-none" src={auth2} alt="" />
                    </div>
                  </div>
                  <div className="col mx-auto">
                    <div className="auth-form-box">
                      <div className="text-center mb-7">
                        <a className="d-flex flex-center text-decoration-none mb-4" href="../../../index.html">
                          <div className="d-flex align-items-center fw-bolder fs-3 d-inline-block">
                            <img src={logo} alt="phoenix" width="58" />
                          </div>
                        </a>
                        <h3 className="text-body-highlight">Sign In</h3>
                        <p className="text-body-tertiary">Get access to your account</p>
                      </div>
                      {error && <div className="alert alert-danger">{error}</div>}
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                          <label className="form-label" htmlFor="email">Email address</label>
                          <div className="form-icon-container">
                            <input
                              className="form-control form-icon-input"
                              id="email"
                              type="email"
                              placeholder="name@example.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <svg className="svg-inline--fa fa-user text-body fs-9 form-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                              <path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="mb-3 text-start">
                          <label className="form-label" htmlFor="password">Password</label>
                          <div className="form-icon-container" data-password="data-password">
                            <input
                              className="form-control form-icon-input pe-6"
                              id="password"
                              type="password"
                              placeholder="Password"
                              data-password-input="data-password-input"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <svg className="svg-inline--fa fa-key text-body fs-9 form-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="key" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 16.4 13.3 29.7 29.7 29.7H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="row flex-between-center mb-7">
                          <div className="col-auto">
                            <div className="form-check mb-0">
                              <input className="form-check-input" type="checkbox" id="card-checkbox" />
                              <label className="form-check-label mb-0" htmlFor="card-checkbox">Remember me</label>
                            </div>
                          </div>
                          <div className="col-auto">
                            <a className="fs--1 fw-semi-bold" href="#!">Forgot Password?</a>
                          </div>
                        </div>
                        <button className="btn btn-primary d-block w-100 mt-6" type="submit">Log In</button>
                      </form>
                      <div className="position-relative mt-5">
                        <hr className="bg-300" />
                        <div className="divider-content-center">or log in with</div>
                      </div>
                      <div className="row g-2 mt-2">
                        <div className="col-sm-6">
                          <a className="btn btn-outline-google-plus btn-sm d-block w-100" href="#"><span className="fab fa-google-plus-g me-2" data-fa-transform="grow-8"></span> google</a>
                        </div>
                        <div className="col-sm-6">
                          <a className="btn btn-outline-facebook btn-sm d-block w-100" href="#"><span className="fab fa-facebook-square me-2" data-fa-transform="grow-8"></span> facebook</a>
                        </div>
                      </div>
                      <div className="text-center mt-5">
                        <a className="fs--1 fw-bold" href="/signup">No account? Register</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer text-center py-3">
                <p className="mb-0"><a href="https://themewagon.com/">&copy; 2023 ThemeWagon&ensp;</a> All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthCard;
