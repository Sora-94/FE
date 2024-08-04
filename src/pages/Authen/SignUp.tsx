import React, { useState } from "react";
import { registerUser } from "../../services/auth";
import { Registerdto } from "../../models/auth.js";
import "../../assets/Phoenix/css/simplebar.min.css";
import "../../assets/Phoenix/css/theme-rtl.min.css";
import "../../assets/Phoenix/css/theme.min.css";
import "../../assets/Phoenix/css/user-rtl.min.css";
import "../../assets/Phoenix/css/user.min.css";
import "../../assets/Phoenix/css/leaflet.css";
import "../../assets/Phoenix/css/MarkerCluster.css";
import "../../assets/Phoenix/css/MarkerCluster.Default.css";
import "../../assets/Phoenix/js/popper.min.js";
import "../../assets/Phoenix/js/bootstrap.min.js";
import "../../assets/Phoenix/js/all.min.js";
import "../../assets/Phoenix/js/lodash.min.js";
import "../../assets/Phoenix/js/list.min.js";
import "../../assets/Phoenix/js/feather.min.js";
import "../../assets/Phoenix/js/dayjs.min.js";
import "../../assets/Phoenix/js/echarts.min.js";
import "../../assets/Phoenix/js/leaflet.js";
import "../../assets/Phoenix/js/leaflet.markercluster.js";
import "../../assets/Phoenix/js/leaflet-tilelayer-colorfilter.min.js";
import bgimg from "../../assets/Phoenix/images/37.png";
import bgimg2 from "../../assets/Phoenix/images/38.png";
import auth from "../../assets/Phoenix/images/auth.png";
import auth2 from "../../assets/Phoenix/images/auth-dark.png";
import logo from "../../assets/Phoenix/images/logo.png";
import { useNavigate } from 'react-router-dom';

interface ValidationErrors {
  [key: string]: string[];
}

const SignUpCard: React.FC = () => {
  const [form, setForm] = useState<Registerdto>({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    PhoneNumber: "",
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [generalError, setGeneralError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await registerUser("/api/v1/authentication/register", form);
    if (result?.success) {
      navigate('/signin');
    } else if (result?.errors) {
      if (result.message === "User created successfully") {
        window.alert("Đăng ký thành công!");
        navigate('/signin');
        setGeneralError(null);
      } else if (result.message === "Đã xảy ra lỗi khi tạo Đăng ký") {
        setErrors(result.errors || {});
        setGeneralError(null);
      } else {
        setErrors({});
        setGeneralError(result.message || null);
      }
    }
  };

  return (
    <main className="main profile-page" id="top">
      <div className="container-fluid bg-body-tertiary dark__bg-gray-1200">
        <div
          className="bg-holder bg-auth-card-overlay"
          style={{ backgroundImage: `url(${bgimg})` }}
        ></div>
        <div className="row flex-center position-relative min-vh-100 g-0 py-5">
          <div className="col-11 col-sm-10 col-xl-8">
            <div className="card border border-translucent auth-card">
              <div className="card-body pe-md-0">
                <div className="row align-items-center gx-0 gy-7">
                  <div className="col-auto bg-body-highlight dark__bg-gray-1100 rounded-3 position-relative overflow-hidden auth-title-box">
                    <div
                      className="bg-holder"
                      style={{ backgroundImage: `url(${bgimg2})` }}
                    ></div>
                    <div className="position-relative px-4 px-lg-7 pt-7 pb-7 pb-sm-5 text-center text-md-start pb-lg-7 card-sign-up">
                      <h3 className="mb-3 text-body-emphasis fs-7">
                        Phoenix Authentication
                      </h3>
                      <p className="text-body-tertiary">
                        Give yourself some hassle-free development process with
                        the uniqueness of Phoenix!
                      </p>
                      <ul className="list-unstyled mb-0 w-max-content w-md-auto">
                        <li className="d-flex align-items-center">
                          <span className="uil uil-check-circle text-success me-2"></span>
                          <span className="text-body-tertiary fw-semibold">
                            Fast
                          </span>
                        </li>
                        <li className="d-flex align-items-center">
                          <span className="uil uil-check-circle text-success me-2"></span>
                          <span className="text-body-tertiary fw-semibold">
                            Simple
                          </span>
                        </li>
                        <li className="d-flex align-items-center">
                          <span className="uil uil-check-circle text-success me-2"></span>
                          <span className="text-body-tertiary fw-semibold">
                            Responsive
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="position-relative z-n1 mb-6 d-none d-md-block text-center mt-md-15">
                      <img
                        className="auth-title-box-img d-dark-none"
                        src={auth}
                        alt=""
                      />
                      <img
                        className="auth-title-box-img d-light-none"
                        src={auth2}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col mx-auto">
                    <div className="auth-form-box">
                      <div className="text-center mb-7">
                        <a
                          className="d-flex flex-center text-decoration-none mb-4"
                          href="../../../index.html"
                        >
                          <div className="d-flex align-items-center fw-bolder fs-3 d-inline-block">
                            <img src={logo} alt="phoenix" width="58" />
                          </div>
                        </a>
                        <h3 className="text-body-highlight">Sign Up</h3>
                        <p className="text-body-tertiary">
                          Create your account today
                        </p>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <div
                          className="row g-3 mb-3"
                          style={{ marginTop: "-50px" }}
                        >
                          <div className="col-sm-6">
                            <label className="form-label" htmlFor="firstName">
                              First Name
                            </label>
                            <div className="position-relative">
                              <input
                                className="form-control form-icon-input pe-6"
                                id="firstName"
                                placeholder="First Name"
                                value={form.firstName}
                                onChange={handleChange}
                              />
                              <button
                                className="btn px-3 py-0 h-100 position-absolute top-0 end-0 fs-7 text-body-tertiary"
                                data-firstName-toggle="data-firstName-toggle"
                              ></button>
                            </div>
                            {errors.firstName &&
                              errors.firstName.map((error, index) => (
                                <div key={index} className="text-danger">
                                  {error}
                                </div>
                              ))}
                          </div>
                          <div className="col-sm-6">
                            <label className="form-label" htmlFor="lastName">
                              Last Name
                            </label>
                            <div className="position-relative">
                              <input
                                className="form-control form-icon-input pe-6"
                                id="lastName"
                                placeholder="Last Name"
                                value={form.lastName}
                                onChange={handleChange}
                              />
                              <button
                                className="btn px-3 py-0 h-100 position-absolute top-0 end-0 fs-7 text-body-tertiary"
                                data-lastName-toggle="data-lastName-toggle"
                              ></button>
                            </div>
                            {errors.lastName &&
                              errors.lastName.map((error, index) => (
                                <div key={index} className="text-danger">
                                  {error}
                                </div>
                              ))}
                          </div>
                        </div>
                        <div
                          className="mb-3 text-start"
                          style={{ marginTop: "-10px" }}
                        >
                          <label className="form-label" htmlFor="Phone">
                            Phone
                          </label>
                          <input
        className="form-control"
        id="PhoneNumber"
        type="text"
        placeholder="Phone"
        value={form.PhoneNumber}
        onChange={handleChange}
      />
      {errors.PhoneNumber &&
        errors.PhoneNumber.map((error, index) => (
          <div key={index} className="text-danger">
            {error}
          </div>
        ))}
                        </div>

                        <div
                          className="mb-3 text-start"
                          style={{ marginTop: "-10px" }}
                        >
                          <label className="form-label" htmlFor="email">
                            Email address
                          </label>
                          <input
                            className="form-control"
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            value={form.email}
                            onChange={handleChange}
                          />
                          {errors.email &&
                            errors.email.map((error, index) => (
                              <div key={index} className="text-danger">
                                {error}
                              </div>
                            ))}
                        </div>
                        <div className="row g-3 mb-3">
                          <div className="col-sm-6">
                            <label className="form-label" htmlFor="password">
                              Password
                            </label>
                            <div
                              className="position-relative"
                              data-password="data-password"
                            >
                              <input
                                className="form-control form-icon-input pe-6"
                                id="password"
                                type="password"
                                placeholder="Password"
                                value={form.password}
                                onChange={handleChange}
                              />
                              <button
                                className="btn px-3 py-0 h-100 position-absolute top-0 end-0 fs-7 text-body-tertiary"
                                data-password-toggle="data-password-toggle"
                              ></button>
                            </div>
                            {errors.password &&
                              errors.password.map((error, index) => (
                                <div key={index} className="text-danger">
                                  {error}
                                </div>
                              ))}
                          </div>
                          <div className="col-sm-6">
                            <label
                              className="form-label"
                              htmlFor="confirmPassword"
                            >
                              Confirm Password
                            </label>
                            <div
                              className="position-relative"
                              data-password="data-password"
                            >
                              <input
                                className="form-control form-icon-input pe-6"
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm Password"
                                value={form.confirmPassword}
                                onChange={handleChange}
                              />
                              <button
                                className="btn px-3 py-0 h-100 position-absolute top-0 end-0 fs-7 text-body-tertiary"
                                data-password-toggle="data-password-toggle"
                              ></button>
                            </div>
                            {errors.confirmPassword &&
                              errors.confirmPassword.map((error, index) => (
                                <div key={index} className="text-danger">
                                  {error}
                                </div>
                              ))}
                          </div>
                        </div>
                        {generalError && (
                          <div className="text-danger mb-3">{generalError}</div>
                        )}
                        <div className="d-grid">
                          <button className="btn btn-primary" type="submit">
                            Sign Up
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <p className="text-body-tertiary">
                    Already have an account? <a href="/login">Log in</a>
                  </p>
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
