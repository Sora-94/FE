import axios from "axios";

const apiBaseURL = "https://localhost:7104/api/v1";

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

// Thêm phương thức này vào phần export của file
export const  getUserOrders = async (token: string): Promise<OrderDTO[]> => {
  try {
    const response = await axios.get<OrderResponseDTO>(`${apiBaseURL}/Order`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // Trả về mảng các đối tượng OrderDTO từ thuộc tính items
    return response.data.items.map(order => ({
      orderDate: order.orderDate,
      totalAmount: order.totalAmount,
    }));
  } catch (error) {
    console.error("Failed to fetch user orders:", error);
    throw error;
  }
};
