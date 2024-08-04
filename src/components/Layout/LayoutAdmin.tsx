import React, {useEffect, useState, ReactNode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaCaretRight, FaShoppingCart, FaPhone } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token'); // Lấy token từ local storage
    if (!token) {
      alert('Bạn cần đăng nhập để sử dụng tính năng này');
      navigate('/login'); // Điều hướng đến trang đăng nhập
      return;
    }

    axios.get('https://localhost:7104/api/v1/User/profile', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      const userRole = response.data.role;
      setRole(userRole);
      if (userRole !== 'admin') {
        alert('Bạn không đủ quyền hạn để vào trang quản lý');
        navigate('/uprofile'); // Điều hướng đến trang uprofile
      }
    })
    .catch(error => {
      console.error('Error fetching user profile:', error);
      alert('Đã xảy ra lỗi khi lấy thông tin người dùng');
    });
  }, [navigate]);

  if (role !== 'admin') {
    return null; // Không hiển thị gì nếu không phải admin
  }

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
     <div className="content" style={{ marginRight:"0px", marginTop:"20px"}}> {children}</div>
    </main>
  );
};

export default Navbar;
