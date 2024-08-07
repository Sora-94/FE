import React, { useState, useEffect } from "react";
import { getAllOrders, getOrderById, updateOrder } from "../../services/order";
import "../../assets/Phoenix/css/simplebar.min.css";
import "../../assets/Phoenix/css/theme-rtl.min.css";
import "../../assets/Phoenix/css/theme.min.css";
import "../../assets/Phoenix/css/user-rtl.min.css";
import "../../assets/Phoenix/css/user.min.css";
import "../../assets/Phoenix/css/leaflet.css";
import "../../assets/Phoenix/css/MarkerCluster.css";
import "../../assets/Phoenix/css/MarkerCluster.Default.css";
import NavbarVertical from "../../components/Layout/LayoutAdmin";
import { OrderDto, OrderResponse, OrderStatus, OrderDtoForUpdate } from "../../models/order";

const OrderListPage: React.FC = () => {
  const [orders, setOrders] = useState<OrderDto[]>([]);
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    fetchOrders(pageIndex);
  }, [pageIndex]);

  const fetchOrders = async (page: number) => {
    const response: OrderResponse = await getAllOrders(page, 10); // 10 đơn hàng mỗi trang
    setOrders(response.items);
    setTotalPages(response.totalPages);
  };

  const handleStatusChange = async (orderId: string, newStatus: OrderStatus) => {
    try {
      const order = await getOrderById(orderId);
      const updatedOrder: OrderDtoForUpdate = { orderDate: order.orderDate, status: newStatus };
      await updateOrder(orderId, updatedOrder);
      fetchOrders(pageIndex);
      alert("Cập nhật trạng thái thành công") // Refetch the order list to update the UI
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  const handlePageChange = (newPageIndex: number) => {
    setPageIndex(newPageIndex);
  };

  const formatCurrency = (amount: number) => {
    return (amount).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  };

  return (
    <NavbarVertical>
      <div className="profile-page">
        <div className="d-flex justify-content-between align-items-center my-3">
          <h1>Danh sách đơn hàng</h1>
        </div>
        <table className="table fs-9 mb-0">
          <thead>
            <tr>
              <th scope="col">Mã đơn hàng</th>
              <th scope="col">Tên khách hàng</th>
              <th scope="col">Tổng tiền</th>
              <th scope="col">Ngày đặt hàng</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.fullName}</td>
                <td>{formatCurrency(order.totalAmount)}</td>
                <td>{new Date(order.orderDate).toLocaleString()}</td>
                <td>
                  <select
                    value={order.status}
                    onChange={(e) => {
                        if (order.status === 4) {
                            alert("Đơn hàng đã hủy không thể chuyển đổi trạng thái");
                        } else {
                          handleStatusChange(
                            order.id,
                            parseInt(e.target.value) as OrderStatus
                          );
                        }
                      }}
                  >
                    <option value={0}>Pending</option>
                    <option value={1}>Confirmed</option>
                    <option value={2}>Shipped</option>
                    <option value={3}>Delivered</option>
                    <option value={4}>Cancelled</option>
                  </select>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                        if (order.status === 4) {
                            alert("Đơn hàng đã hủy không thể chuyển đổi trạng thái");
                         
                        } else {
                            handleStatusChange(
                                order.id,
                                order.status
                              );
                        }
                      }}
                  >
                    Cập nhật
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-center my-3">
          <button
            className="btn btn-secondary me-2"
            onClick={() => handlePageChange(pageIndex - 1)}
            disabled={pageIndex === 1}
          >
            Trước
          </button>
          <span>Trang {pageIndex} / {totalPages}</span>
          <button
            className="btn btn-secondary ms-2"
            onClick={() => handlePageChange(pageIndex + 1)}
            disabled={pageIndex === totalPages}
          >
            Sau
          </button>
        </div>
      </div>
    </NavbarVertical>
  );
};

export default OrderListPage;
