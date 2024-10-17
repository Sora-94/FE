import NavbarVertical from "../../components/Layout/LayoutAdmin";

// CSS Imports
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

import React, { useEffect, useState } from "react";
import { getUserProfile } from "../../services/user.js";
import { UserDTO } from "../../models/user.js";
import { useNavigate } from "react-router-dom";
import { getUserOrders, OrderDTO, updateOrder } from "../../services/order";

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<UserDTO | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [orders, setOrders] = useState<OrderDTO[]>([]);
  const navigate = useNavigate();

  // Lấy token từ localStorage
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      alert("Đăng nhập để sử dụng tính năng");
      navigate("/signin");
      setLoading(false); // Ngừng loading khi không có token
      return;
    }

    // Lấy thông tin người dùng và đơn hàng
    const fetchData = async () => {
      try {
        const userData = await getUserProfile(token);
        setUser(userData);

        const ordersData = await getUserOrders(token);
        setOrders(ordersData);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false); // Đã hoàn tất việc gọi API
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
    return (price).toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

  const getOrderStatusClass = (status: number) => {
    switch (status) {
      case 1:
        return "badge bg-warning";
      case 0:
        return "badge bg-info";
      case 2:
        return "badge bg-primary";
      case 3:
        return "badge bg-success";
      case 4:
        return "badge bg-danger";
      default:
        return "badge bg-secondary";
    }
  };

  const getOrderStatusLabel = (status: number) => {
    switch (status) {
      case 1:
        return "Đang xử lý";
      case 0:
        return "Đã xác nhận, đang chuẩn bị";
      case 2:
        return "Đang vận chuyển";
      case 3:
        return "Đã giao";
      case 4:
        return "Đã hủy";
      default:
        return "Không rõ";
    }
  };

  const handleStatusChange = async (
    orderId: string,
    orderDate: string,
    newStatus: number
  ) => {
    try {
      await updateOrder(orderId, { orderDate: orderDate, status: newStatus });
      // Refetch the orders to update the UI
      const updatedOrders = await getUserOrders(token!);
      setOrders(updatedOrders);
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  return (
    <NavbarVertical>
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
                    Đổi mật khẩu
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
                            src={
                              user?.imagePath ||
                              "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"
                            }
                            alt="User Avatar"
                          />
                        </label>
                      </div>
                      <div className="col-12 col-sm-auto flex-1">
                        <h3>
                          {user?.firstName} {user?.lastName}
                        </h3>
                        <p className="text-body-secondary">
                          Đăng ký 3 tháng trước
                        </p>
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
                      <h6 className="mb-2 text-body-secondary">Tổng tiền đã mua</h6>
                      <h4 className="fs-7 text-body-highlight mb-0">
                        {formatCurrency(456000)}
                      </h4>
                    </div>
                    <div className="text-end">
                      <h6 className="mb-2 text-body-secondary">Lần cuối đặt hàng</h6>
                      <h4 className="fs-7 text-body-highlight mb-0">
                        1 tuần trước
                      </h4>
                    </div>
                    <div className="text-end">
                      <h6 className="mb-2 text-body-secondary">Số lượng order</h6>
                      <h4 className="fs-7 text-body-highlight mb-0">12</h4>
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
                      Địa chỉ
                      <a
                        href="/customer/add-customer"
                        className="btn btn-link p-0"
                        type="button"
                      >
                        <span className="fas fa-pencil-alt"></span>
                      </a>
                    </h4>
                    <h5 className="text-body-highlight"> {user?.firstName} {user?.lastName}</h5>
                    <p className="text-body-secondary">
                      {user?.address || "abcxyz"}
                    </p>
                    <p className="mb-0"> {user?.phoneNumber}</p>
                  </div>
                  <div className="pt-4">
                    <h4 className="mb-3">
                      Địa chỉ nhận hàng
                      <a
                        href="/customer/add-customer"
                        className="btn btn-link p-0"
                        type="button"
                      >
                        <span className="fas fa-pencil-alt"></span>
                      </a>
                    </h4>
                    <h5 className="text-body-highlight">{user?.firstName} {user?.lastName}</h5>
                    <p className="text-body-secondary">
                    {user?.address}
                    </p>
                    <p className="mb-0">{user?.phoneNumber}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-9">
            <div className="row g-0">
              <div className="col-auto">
                <h3 id="orders" className="mb-0">
                  Đơn hàng
                </h3>
              </div>
            </div>
            <div className="table-responsive scrollbar mt-6 mt-lg-8">
              <table className="table table-hover table-striped overflow-hidden">
                <thead className="text-small text-uppercase bg-200 text-400">
                  <tr>
                    <th className="align-middle">Mã đơn hàng</th>
                    <th className="align-middle">Ngày</th>
                    <th className="align-middle">Trạng thái</th>
                    <th className="align-middle">Tổng giá</th>
                    <th className="align-middle">Hình thức thanh toán</th>
                    <th className="align-middle">Hoạt động</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td className="align-middle text-nowrap">
                        <a href={`/order/${order.id}`}>{order.id}</a>
                      </td>
                      <td className="align-middle text-nowrap">
                      <td>{new Date(order.orderDate).toLocaleString()}</td>                      </td>
                      <td className="align-middle text-nowrap">
                        <span className={getOrderStatusClass(order.status)}>
                          {getOrderStatusLabel(order.status)}
                        </span>
                      </td>
                      <td className="align-middle text-nowrap">
                        {formatCurrency(order.totalAmount)}
                      </td>
                      <td className="align-middle text-nowrap">Ship COD</td>
                      <td className="align-middle text-nowrap">
                        <>
                          <button
                            className="btn btn-danger btn-sm me-2"
                            onClick={() => {
                              if (order.status === 0 || order.status === 1) {
                                handleStatusChange(
                                  order.id,
                                  order.orderDate,
                                  4
                                );
                              } else {
                                alert("Không thể hủy đơn hàng");
                              }
                            }}
                          >
                            Hủy hàng
                          </button>
                          <button
                            className="btn btn-success btn-sm"
                            onClick={() => {
                              if (order.status === 2) {
                                handleStatusChange(
                                  order.id,
                                  order.orderDate,
                                  3
                                );
                              } else {
                                alert("Đơn hàng chưa giao không thể nhận");
                              }
                            }}
                          >
                            Nhận hàng
                          </button>
                        </>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </NavbarVertical>
  );
};

export default ProfilePage;
