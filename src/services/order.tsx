import axios from "axios";

const apiBaseURL = "https://be-gu7h.onrender.com/api/v1";

// Định nghĩa kiểu dữ liệu cho phản hồi của API
export interface OrderDTO {
  orderDate: string;
  totalAmount: number;
}

export interface OrderResponseDTO {
  items: OrderDTO[];
  pageIndex: number;
  totalPages: number;
  totalCount: number;
  pageSize: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}


// Định nghĩa kiểu dữ liệu cho phản hồi của API
export interface OrderDTO {
  orderDate: string;
  totalAmount: number;
  status: number;
  id:string;
}

export interface OrderResponseDTO {
  items: OrderDTO[];
  pageIndex: number;
  totalPages: number;
  totalCount: number;
  pageSize: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

// Thêm phương thức này vào phần export của file
export const  getUserOrders = async (token: string): Promise<OrderDTO[]> => {
  try {
    const response = await axios.get<OrderResponseDTO>(`${apiBaseURL}/Order/history`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // Trả về mảng các đối tượng OrderDTO từ thuộc tính items
    return response.data.items.map(order => ({
      id:order.id,
      orderDate: order.orderDate,
      totalAmount: order.totalAmount,
      status: order.status,
    }));
  } catch (error) {
    console.error("Failed to fetch user orders:", error);
    throw error;
  }
};
import { OrderResponse,OrderDtoForUpdate } from "../models/order";

const API_URL = "https://be-gu7h.onrender.com/api/v1/Order";

export const getAllOrders = async (page: number, pageSize: number): Promise<OrderResponse> => {
  const response = await axios.get(`${API_URL}?PageIndex=${page}&PageSize=${pageSize}`);
  return response.data;
};
export const getOrderById = async (orderId: string): Promise<OrderDtoForUpdate> => {
  const response = await axios.get(`${API_URL}/${orderId}`);
  return response.data;
};

export const updateOrder = async (orderId: string, updatedOrder: OrderDtoForUpdate): Promise<void> => {
  await axios.put(`${API_URL}/${orderId}`, updatedOrder);
};