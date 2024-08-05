// Định nghĩa interface cho UserDTO
export interface UserDTO {
  id: string;
  role: string | null;
  firstName: string;
  lastName: string;
  address: string | null;
  imagePath: string | null;
  email: string;
  phoneNumber: string;
}

  interface ValidationErrors {
    [key: string]: string[];
  }
  
  export interface UserResponse {
    success: boolean;
    data?: UserDTO; // Dữ liệu người dùng, có thể là UserDTO hoặc undefined
    errors?: ValidationErrors; // Các lỗi xác thực, nếu có
    message?: string; // Tin nhắn phản hồi
  }
  
  // Định nghĩa kiểu dữ liệu cho phản hồi của API
  export interface PaginatedUserResponse {
    items: UserDTO[];
    pageIndex: number;
    totalPages: number;
    totalCount: number;
    pageSize: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  }
  