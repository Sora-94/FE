import React from 'react';
import '../../assets/Phoenix/css/simplebar.min.css';
import '../../assets/Phoenix/css/theme-rtl.min.css';
 import '../../assets/Phoenix/css/theme.min.css';
 import '../../assets/Phoenix/css/user-rtl.min.css';
 import '../../assets/Phoenix/css/user.min.css';
 import '../../assets/Phoenix/css/leaflet.css';
 import '../../assets/Phoenix/css/MarkerCluster.css';
 import '../../assets/Phoenix/css/MarkerCluster.Default.css';

// // JavaScript Imports
 import '../../assets/Phoenix/js/popper.min.js';
 import '../../assets/Phoenix/js/bootstrap.min.js';
 import '../../assets/Phoenix/js/all.min.js';
 import '../../assets/Phoenix/js/lodash.min.js';
 import '../../assets/Phoenix/js/list.min.js';
 import '../../assets/Phoenix/js/feather.min.js';
 import '../../assets/Phoenix/js/dayjs.min.js';
 import '../../assets/Phoenix/js/echarts.min.js';
 import '../../assets/Phoenix/js/leaflet.js';
 import '../../assets/Phoenix/js/leaflet.markercluster.js';
import '../../assets/Phoenix/js/leaflet-tilelayer-colorfilter.min.js';
import bgimg from '../../assets/Phoenix/images/37.png';
import bgimg2 from '../../assets/Phoenix/images/38.png';
import auth from '../../assets/Phoenix/images/auth.png';
import auth2 from '../../assets/Phoenix/images/auth-dark.png';
import logo from '../../assets/Phoenix/images/logo.png';


const SignUpCard: React.FC = () => {
  return (
    <main className="main profile-page" id="top">
      <div className="container-fluid bg-body-tertiary dark__bg-gray-1200">
        <div className="bg-holder bg-auth-card-overlay" style={{ backgroundImage: bgimg }}></div>
        <div className="row flex-center position-relative min-vh-100 g-0 py-5">
          <div className="col-11 col-sm-10 col-xl-8">
            <div className="card border border-translucent auth-card">
              <div className="card-body pe-md-0">
                <div className="row align-items-center gx-0 gy-7">
                  <div className="col-auto bg-body-highlight dark__bg-gray-1100 rounded-3 position-relative overflow-hidden auth-title-box">
                    <div className="bg-holder" style={{ backgroundImage: bgimg2 }}></div>
                    <div className="position-relative px-4 px-lg-7 pt-7 pb-7 pb-sm-5 text-center text-md-start pb-lg-7 card-sign-up">
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
                        <h3 className="text-body-highlight">Sign Up</h3>
                        <p className="text-body-tertiary">Create your account today</p>
                      </div>
                      <button className="btn btn-phoenix-secondary w-100 mb-3">
                        <svg className="svg-inline--fa fa-google text-danger me-2 fs-9" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                          <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                        </svg>
                        Sign up with google
                      </button>
                      <button className="btn btn-phoenix-secondary w-100">
                        <svg className="svg-inline--fa fa-facebook text-primary me-2 fs-9" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"></path>
                        </svg>
                        Sign up with facebook
                      </button>
                      <div className="position-relative mt-4">
                        <hr className="bg-body-secondary" />
                        <div className="divider-content-center bg-body-emphasis">or use email</div>
                      </div>
                      <form>
                        <div className="mb-3 text-start">
                          <label className="form-label" htmlFor="name">Name</label>
                          <input className="form-control" id="name" type="text" placeholder="Name" />
                        </div>
                        <div className="mb-3 text-start">
                          <label className="form-label" htmlFor="email">Email address</label>
                          <input className="form-control" id="email" type="email" placeholder="name@example.com" />
                        </div>
                        <div className="row g-3 mb-3">
                          <div className="col-sm-6">
                            <label className="form-label" htmlFor="password">Password</label>
                            <div className="position-relative" data-password="data-password">
                              <input className="form-control form-icon-input pe-6" id="password" type="password" placeholder="Password" data-password-input="data-password-input" />
                              <button className="btn px-3 py-0 h-100 position-absolute top-0 end-0 fs-7 text-body-tertiary" data-password-toggle="data-password-toggle">
                              </button>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                            <div className="position-relative" data-password="data-password">
                              <input className="form-control form-icon-input pe-6" id="confirmPassword" type="password" placeholder="Confirm Password" data-password-input="data-password-input" />
                              <button className="btn px-3 py-0 h-100 position-absolute top-0 end-0 fs-7 text-body-tertiary" data-password-toggle="data-password-toggle">
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="form-check mb-3">
                          <input className="form-check-input" id="termsService" type="checkbox" />
                          <label className="form-label fs-9 text-transform-none" htmlFor="termsService">
                            I accept the <a href="#!">terms </a>and <a href="#!">privacy policy</a>
                          </label>
                        </div>
                        <button className="btn btn-primary w-100 mb-3">Sign up</button>
                        <div className="text-center">
                          <a className="fs-9 fw-bold" href="/signup ">Sign in to an existing account</a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUpCard;
