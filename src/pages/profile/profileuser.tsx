
import "../../assets/Phoenix/css/simplebar.min.css";
import "../../assets/Phoenix/css/theme-rtl.min.css";
import "../../assets/Phoenix/css/theme.min.css";
import "../../assets/Phoenix/css/user-rtl.min.css";
import "../../assets/Phoenix/css/user.min.css";
import "../../assets/Phoenix/css/leaflet.css";
import "../../assets/Phoenix/css/MarkerCluster.css";
import "../../assets/Phoenix/css/MarkerCluster.Default.css";

// JavaScript Imports
import "../../assets/Phoenix/js/popper.min.js";
import "../../assets/Phoenix/js/bootstrap.min.js";
import "../../assets/Phoenix/js/all.min.js";
import "../../assets/Phoenix/js/lodash.min.js";
import "../../assets/Phoenix/js/list.min.js";
import "../../assets/Phoenix/js/feather.min.js";
import "../../assets/Phoenix/js/echarts.min.js";
import "../../assets/Phoenix/js/leaflet.js";
import "../../assets/Phoenix/js/leaflet.markercluster.js";
import "../../assets/Phoenix/js/leaflet-tilelayer-colorfilter.min.js";
// pages/ProfilePage.tsx
import React, { useEffect, useState } from "react";
import { getUserProfile } from "../../services/user.js";
import { UserDTO } from "../../models/user.js";
import { useNavigate } from "react-router-dom";
import { getUserOrders, OrderDTO} from '../../services/order';

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<UserDTO | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const [orders, setOrders] = useState<OrderDTO[]>([]);

  // Lấy token từ localStorage
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      alert("Đăng nhập để sử dụng tính năng");
      navigate("/signin");
      setLoading(false);
      return;
    }
  
    const fetchData = async () => {
      try {
        const userData = await getUserProfile(token);
        setUser(userData);
  
        const ordersData = await getUserOrders(token);
        setOrders(ordersData);
  
        // Tính toán Total Spent và Total Orders
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [token, navigate]);

  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleLogout = () => {
    localStorage.removeItem("token"); // Xóa token khỏi local storage
    navigate("/"); // Điều hướng về trang chủ
  };
  const formatCurrency = (price: number) => {
    return (price * 1000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  };
  return (
    <section className="pt-5 pb-9 profile-page">
      <div className="container-small">
        <nav className="mb-3" aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="#!">Quản lý</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Profile
            </li>
          </ol>
        </nav>
        <div className="row align-items-center justify-content-between g-3 mb-4">
          <div className="col-auto">
            <h2 className="mb-0">Profile</h2>
          </div>
          <div className="col-auto">
            <div className="row g-2 g-sm-3">
              <div className="col-auto">
                <button
                  className="btn btn-phoenix-danger"
                  onClick={handleLogout}
                >
                  Đăng xuất
                </button>
              </div>
              <div className="col-auto">
                <button className="btn btn-phoenix-secondary">
                  Reset password
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3 mb-6">
          <div className="col-12 col-lg-8">
            <div className="card h-100">
              <div className="card-body">
                <div className="border-bottom border-dashed pb-4">
                  <div className="row align-items-center g-3 g-sm-5 text-center text-sm-start">
                    <div className="col-12 col-sm-auto">
                      <input className="d-none" id="avatarFile" type="file" />
                      <label
                        className="cursor-pointer avatar avatar-5xl"
                        htmlFor="avatarFile"
                      >
                        <img
                          className="rounded-circle"
                          src={user?.imagePath || "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"}
                          alt="User Avatar"
                        />
                      </label>
                    </div>
                    <div className="col-12 col-sm-auto flex-1">
                      <h3>
                        {user?.firstName} {user?.lastName}
                      </h3>
                      <p className="text-body-secondary">Joined 3 months ago</p>
                      <div>
                        <a className="me-2" href="#!">
                          <i className="fa fa-linkedin-in text-body-quaternary text-opacity-75 text-primary-hover"></i>
                        </a>
                        <a className="me-2" href="#!">
                          <i className="fa fa-facebook text-body-quaternary text-opacity-75 text-primary-hover"></i>
                        </a>
                        <a href="#!">
                          <i className="fa fa-twitter text-body-quaternary text-opacity-75 text-primary-hover"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-between-center pt-4">
                  <div>
                    <h6 className="mb-2 text-body-secondary">Total Spent</h6>
                    <h4 className="fs-7 text-body-highlight mb-0">{formatCurrency(500)}</h4>
                  </div>
                  <div className="text-end">
                    <h6 className="mb-2 text-body-secondary">Last Order</h6>
                    <h4 className="fs-7 text-body-highlight mb-0">
                      1 week ago
                    </h4>
                  </div>
                  <div className="text-end">
                    <h6 className="mb-2 text-body-secondary">Total Orders</h6>
                    <h4 className="fs-7 text-body-highlight mb-0">123</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="border-bottom border-dashed">
                  <h4 className="mb-3">
                    Default Address
                    <a href="/customer/add-customer" className="btn btn-link p-0" type="button">
                      <i  className="fa fa-pen-to-square fs-9 ms-3 text-body-quaternary"></i>
                    </a>
                  </h4>
                </div>
                <div className="pt-4 mb-7 mb-lg-4 mb-xl-7">
                  <div className="row justify-content-between">
                    <div className="col-auto">
                      <h5 className="text-body-highlight">Address</h5>
                    </div>
                    <div className="col-auto">
                      <p className="text-body-secondary">
                        {user?.address || "No address provided"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-top border-dashed pt-4">
                  <div className="row flex-between-center mb-2">
                    <div className="col-auto">
                      <h5 className="text-body-highlight mb-0">Email</h5>
                    </div>
                    <div className="col-auto">
                      <a className="lh-1" href={`mailto:${user?.email}`}>
                        {user?.email || "No email provided"}
                      </a>
                    </div>
                  </div>
                  <div className="row flex-between-center mb-2">
                    <div className="col-auto">
                      <h5 className="text-body-highlight mb-0">Phone</h5>
                    </div>
                    <div className="col-auto">
                      <a className="lh-1" href={`tel:${user?.phoneNumber}`}>
                        {user?.phoneNumber || "No phone number provided"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-12">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="mb-4">My Orders</h4>
                {orders.length === 0 ? (
                  <p>No orders found.</p>
                ) : (
                  <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Status</th>
                      <th>Delivery</th>
                      <th>Order Date</th>
                      <th>Total Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.totalAmount} className="hover-actions-trigger btn-reveal-trigger position-static">
                        
                        <td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                          <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                            <span className="badge-label">đã nhận hàng</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16px"
                              height="16px"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-check ms-1"
                              style={{ height: "12.8px", width: "12.8px" }}
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                        </td>
                        <td className="delivery align-middle white-space-nowrap text-body py-2">
                          COD
                        </td>
                        <td className="total align-middle text-body-tertiary text-end py-2">
                          {order.orderDate}
                        </td>
                        <td className="date align-middle fw-semibold text-end py-2 text-body-highlight">
                          {formatCurrency(order.totalAmount)}
                        </td>
                    
                      </tr>
                    ))}
                  </tbody>
                </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
