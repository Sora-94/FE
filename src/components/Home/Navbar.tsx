import React, { useEffect, useState } from "react";
import axios from "axios";
import CartBadge from '../Home/CartBadge';
const NavbarLayout: React.FC = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token"); // Lấy token từ local storage
    if (token) {
      axios
        .get("https://localhost:7104/api/v1/User/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setRole(response.data.role); // Lưu role vào state
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
    }
  }, []);

  const href = role === "admin" ? "/profile" : "/uprofile";
  return (
    <>
      {/* Spinner Start */}
      {/* <div id="spinner" className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-grow text-primary" role="status"></div>
            </div> */}
      {/* Spinner End */}

      {/* Navbar start */}
      <div className="container-fluid fixed-top">
        <div className="container topbar bg-primary d-none d-lg-block">
          <div className="d-flex justify-content-between">
            <div className="top-info ps-2">
              <small className="me-3">
                <i className="fas fa-map-marker-alt me-2 text-secondary"></i>
                <a href="#" className="text-white">
                  Công viên phần mềm Quang Trung
                </a>
              </small>
              <small className="me-3">
                <i className="fas fa-envelope me-2 text-secondary"></i>
                <a href="#" className="text-white">
                  fb98@gmail.com
                </a>
              </small>
            </div>
            <div className="top-link pe-2">
              <a href="#" className="text-white">
                <small className="text-white mx-2">Chính sách bảo mật</small>/
              </a>
              <a href="#" className="text-white">
                <small className="text-white mx-2">Điều khoản sử dụng</small>
              </a>
            </div>
          </div>
        </div>
        <div className="container px-0">
          <nav className="navbar navbar-light bg-white navbar-expand-xl">
            <a href="/" className="navbar-brand">
              <h1 className="text-primary display-6">Fruitables</h1>
            </a>
            <button
              className="navbar-toggler py-2 px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars text-primary"></span>
            </button>
            <div
              className="collapse navbar-collapse bg-white"
              id="navbarCollapse"
            >
              <div className="navbar-nav mx-auto">
                <a href="/" className="nav-item nav-link active">
                  Trang chủ
                </a>
                <a href="/shop" className="nav-item nav-link">
                  Danh mục
                </a>
                <a href="/donate" className="nav-item nav-link">
                  Quyên góp
                </a>
                <a href="/Testimonial" className="nav-item nav-link">
                  Đánh giá
                </a>
                <a href="/contact" className="nav-item nav-link">
                  Liên hệ
                </a>
              </div>
              <div className="d-flex m-3 me-0">
    ,
                <a href="/cart" className="position-relative me-4 my-auto">
                  <i className="fa fa-shopping-bag fa-2x"></i>
                  <CartBadge />
                </a>
                <a href={href} className="my-auto">
                  <i className="fas fa-user fa-2x"></i>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}

      {/* Search Modal Start */}
      <div
        className="modal fade"
        id="searchModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Search by keyword
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex align-items-center">
              <div className="input-group w-75 mx-auto d-flex">
                <input
                  type="search"
                  className="form-control p-3"
                  placeholder="keywords"
                  aria-describedby="search-icon-1"
                />
                <span id="search-icon-1" className="input-group-text p-3">
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Search Modal End */}
    </>
  );
};

export default NavbarLayout;
