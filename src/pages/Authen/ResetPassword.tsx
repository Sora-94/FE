import React, { useState } from 'react';
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
const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic xử lý đặt lại mật khẩu
    if (password === confirmPassword) {
      console.log('Password:', password);
    } else {
      console.error('Passwords do not match');
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
                    <div className="position-relative px-4 px-lg-7 pt-7 pb-7 pb-sm-5 text-center text-md-start pb-lg-7">
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
                        <h4 className="text-body-highlight">Reset new password</h4>
                        <p className="text-body-tertiary">Type your new password</p>
                      </div>
                      <form className="mt-5" onSubmit={handleSubmit}>
                        <div className="position-relative mb-2" data-password="data-password">
                          <input
                            className="form-control form-icon-input pe-6"
                            id="password"
                            type="password"
                            placeholder="Type new password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            data-password-input="data-password-input"
                          />
                          <button
                            className="btn px-3 py-0 h-100 position-absolute top-0 end-0 fs-7 text-body-tertiary"
                            type="button"
                            data-password-toggle="data-password-toggle"
                          >
                          </button>
                        </div>
                        <div className="position-relative mb-4" data-password="data-password">
                          <input
                            className="form-control form-icon-input pe-6"
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm new password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            data-password-input="data-password-input"
                          />
                          <button
                            className="btn px-3 py-0 h-100 position-absolute top-0 end-0 fs-7 text-body-tertiary"
                            type="button"
                            data-password-toggle="data-password-toggle"
                          >
                          </button>
                        </div>
                        <button className="btn btn-primary w-100" type="submit">Set Password</button>
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

export default ResetPassword;
