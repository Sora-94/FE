import React, { useState, ReactNode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaCaretRight, FaShoppingCart, FaPhone } from 'react-icons/fa';

interface NavbarProps {
  children: ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const [isEcommerceOpen, setIsEcommerceOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(true);
  const [isCustomerOpen, setIsCustomerOpen] = useState(true);


  const toggleEcommerce = () => setIsEcommerceOpen(!isEcommerceOpen);
  const toggleAdmin = () => setIsAdminOpen(!isAdminOpen);
  const toggleCustomer = () => setIsCustomerOpen(!isCustomerOpen);


  return (
    <main className="main profile-page" id="top">
      <nav className="navbar navbar-vertical navbar-expand-lg">
        <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
          <div className="navbar-vertical-content">
            <ul className="navbar-nav flex-column" id="navbarVerticalNav">
              <li className="nav-item">
                <p className="navbar-vertical-label">Cửa Hàng</p>
                <hr className="navbar-vertical-line" />
                <div className="nav-item-wrapper">
                  <a className="nav-link dropdown-indicator label-1" onClick={toggleEcommerce} aria-expanded={isEcommerceOpen}>
                    <div className="d-flex align-items-center">
                      <div className="dropdown-indicator-icon-wrapper">
                        <FaCaretRight className="dropdown-indicator-icon" />
                      </div>
                      <span className="nav-link-icon"><FaShoppingCart /></span>
                      <span className="nav-link-text">Quản lý</span>
                    </div>
                  </a>
                  <div className={`parent-wrapper label-1 ${isEcommerceOpen ? 'show' : 'collapse'}`}>
                    <ul className="nav parent"  id="nv-e-commerce">
                      <li className="collapsed-nav-item-title d-none">Quản lý</li>
                      <li className="nav-item">
                        <a className="nav-link dropdown-indicator" onClick={toggleAdmin} aria-expanded={isAdminOpen}>
                          <div className="d-flex align-items-center">
                            <div className="dropdown-indicator-icon-wrapper">
                              <FaCaretRight className="dropdown-indicator-icon" />
                            </div>
                            <span className="nav-link-text">Quản lý</span>
                          </div>
                        </a>
                        <div className={`parent-wrapper ${isAdminOpen ? 'show' : 'collapse'}`}>
                          <ul className="nav parent" data-bs-parent="#e-commerce" id="nv-admin">
                            <li className="nav-item">
                              <a className="nav-link" href="/product">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">Quản lý sản phẩm</span>
                                </div>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="/combo">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">Quản lý combo</span>
                                </div>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="/category">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">Quản lý thể loại</span>
                                </div>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="/Customer">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">Quản lý người dùng</span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link dropdown-indicator" onClick={toggleCustomer} aria-expanded={isCustomerOpen}>
                          <div className="d-flex align-items-center">
                            <div className="dropdown-indicator-icon-wrapper">
                              <FaCaretRight className="dropdown-indicator-icon" />
                            </div>
                            <span className="nav-link-text">Customer</span>
                          </div>
                        </a>
                        <div className={`parent-wrapper ${isCustomerOpen ? 'show' : 'collapse'}`}>
                          <ul className="nav parent" data-bs-parent="#e-commerce" id="nv-customer">
                            <li className="nav-item">
                              <a className="nav-link" href="apps/e-commerce/landing/homepage.html">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">Homepage</span>
                                </div>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="apps/e-commerce/landing/product-details.html">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">Product details</span>
                                </div>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="apps/e-commerce/landing/products-filter.html">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">Products filter</span>
                                </div>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="apps/e-commerce/landing/cart.html">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">Cart</span>
                                </div>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="apps/e-commerce/landing/checkout.html">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">Checkout</span>
                                </div>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="apps/e-commerce/landing/shipping-info.html">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">Shipping info</span>
                                </div>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="apps/e-commerce/landing/profile.html">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">Profile</span>
                                </div>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="apps/e-commerce/landing/favourite-stores.html">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">Favourite stores</span>
                                </div>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="apps/e-commerce/landing/wishlist.html">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">Wishlist</span>
                                </div>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="apps/e-commerce/landing/order-tracking.html">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">Order tracking</span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pages/support.html">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon"><FaPhone /></span>
                    <span className="nav-link-text">Support</span>
                  </div>
                </a>
              </li>
            </ul>
            
          </div>
          
        </div>
        
      </nav>
      
<nav className="navbar navbar-top fixed-top navbar-expand" id="navbarDefault">
<div className="collapse navbar-collapse justify-content-between">
  <div className="navbar-logo">
    <button
      className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarVerticalCollapse"
      aria-controls="navbarVerticalCollapse"
      aria-expanded="false"
      aria-label="Toggle Navigation"
    >
      <span className="navbar-toggle-icon">
        <span className="toggle-line"></span>
      </span>
    </button>
    <a className="navbar-brand me-1 me-sm-3" href="/profile">
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center">
          <img src="assets/img/icons/logo.png" alt="phoenix" width="27" />
          <h5 className="logo-text ms-2 d-none d-sm-block">phoenix</h5>
        </div>
      </div>
    </a>
  </div>

  <ul className="navbar-nav navbar-nav-icons flex-row">
    <li className="nav-item dropdown">
      <a
        className="nav-link lh-1 pe-0"
        id="navbarDropdownUser"
        href="#!"
        role="button"
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <div className="avatar avatar-l">
          <img className="rounded-circle" src="assets/img/team/40x40/57.webp" alt="" />
        </div>
      </a>
    </li>
  </ul>
</div>
</nav>
     <div className="content" style={{ marginRight:"0px"}}> {children}</div>
    </main>
  );
};

export default Navbar;
