import React from 'react';
import { useState } from 'react';
// CSS Imports
import '../../assets/Phoenix/css/simplebar.min.css';
import '../../assets/Phoenix/css/theme-rtl.min.css';
import '../../assets/Phoenix/css/theme.min.css';
import '../../assets/Phoenix/css/user-rtl.min.css';
import '../../assets/Phoenix/css/user.min.css';
import '../../assets/Phoenix/css/leaflet.css';
import '../../assets/Phoenix/css/MarkerCluster.css';
import '../../assets/Phoenix/css/MarkerCluster.Default.css';

// JavaScript Imports
import '../../assets/Phoenix/js/popper.min.js';
import '../../assets/Phoenix/js/bootstrap.min.js';
import '../../assets/Phoenix/js/all.min.js';
import '../../assets/Phoenix/js/lodash.min.js';
import '../../assets/Phoenix/js/list.min.js';
import '../../assets/Phoenix/js/feather.min.js';
import '../../assets/Phoenix/js/echarts.min.js';
import '../../assets/Phoenix/js/leaflet.js';
import '../../assets/Phoenix/js/leaflet.markercluster.js';
import '../../assets/Phoenix/js/leaflet-tilelayer-colorfilter.min.js';
import bgimg from '../../assets/Phoenix/images/37.png';
import bgimg2 from '../../assets/Phoenix/images/38.png';
import auth from '../../assets/Phoenix/images/auth.png';
import auth2 from '../../assets/Phoenix/images/auth-dark.png';
import logo from '../../assets/Phoenix/images/logo.png';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Xử lý gửi email reset password ở đây
    console.log('Email submitted:', email);
  };

  return (
    <main className="main profile-page" id="top">
      <div className="container-fluid bg-body-tertiary dark__bg-gray-1200">
        <div className="bg-holder bg-auth-card-overlay" style={{backgroundImage:bgimg}}></div>
        {/*/.bg-holder*/}
        <div className="row flex-center position-relative min-vh-100 g-0 py-5">
          <div className="col-11 col-sm-10 col-xl-8">
            <div className="card border border-translucent auth-card">
              <div className="card-body pe-md-0">
                <div className="row align-items-center gx-0 gy-7">
                  <div className="col-auto bg-body-highlight dark__bg-gray-1100 rounded-3 position-relative overflow-hidden auth-title-box">
                    <div className="bg-holder" style={{backgroundImage:bgimg2}}></div>
                    {/*/.bg-holder*/}
                    <div className="position-relative px-4 px-lg-7 pt-7 pb-7 pb-sm-5 text-center text-md-start pb-lg-7">
                      <h3 className="mb-3 text-body-emphasis fs-7">Phoenix Authentication</h3>
                      <p className="text-body-tertiary">Give yourself some hassle-free development process with the uniqueness of Phoenix!</p>
                      <ul className="list-unstyled mb-0 w-max-content w-md-auto">
                        <li className="d-flex align-items-center"><span className="uil uil-check-circle text-success me-2"></span><span className="text-body-tertiary fw-semibold">Fast</span></li>
                        <li className="d-flex align-items-center"><span className="uil uil-check-circle text-success me-2"></span><span className="text-body-tertiary fw-semibold">Simple</span></li>
                        <li className="d-flex align-items-center"><span className="uil uil-check-circle text-success me-2"></span><span className="text-body-tertiary fw-semibold">Responsive</span></li>
                      </ul>
                    </div>
                    <div className="position-relative z-n1 mb-6 d-none d-md-block text-center mt-md-5"><img className="auth-title-box-img d-dark-none" src={auth}alt=""/>
                    <img className="auth-title-box-img d-light-none" src={auth2} alt=""/></div>
                  </div>
                  <div className="col mx-auto">
                    <div className="auth-form-box">
                      <div className="text-center"><a className="d-flex flex-center text-decoration-none mb-4" href="../../../index.html">
                          <div className="d-flex align-items-center fw-bolder fs-3 d-inline-block"><img src={logo} alt="phoenix" width="58"/></div>
                        </a>
                        <h4 className="text-body-highlight">Forgot your password?</h4>
                        <p className="text-body-tertiary mb-5">Enter your email below and we will <br className="d-md-none"/>send you <br className="d-none d-xxl-block"/>a reset link</p>
                        <form className="d-flex align-items-center mb-5" onSubmit={handleSubmit}>
                          <input className="form-control flex-1" id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                          <button className="btn btn-primary ms-2">Send
                            <svg className="svg-inline--fa fa-chevron-right ms-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="">
                              <path fill="currentColor" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                            </svg>
                          </button>
                        </form><a className="fs-9 fw-bold" href="#!">Still having problems?</a>
                      </div>
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

export default ForgotPassword;
