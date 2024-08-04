// Định nghĩa interface cho UserDTO
export interface UserDTO {
    id: string;
    role: string | null; // Nếu role có thể là null, bạn có thể khai báo kiểu dữ liệu là string | null
    firstName: string;
    lastName: string;
    address: string | null; // Nếu address có thể là null, bạn có thể khai báo kiểu dữ liệu là string | null
    imagePath: string | null; // Nếu imagePath có thể là null, bạn có thể khai báo kiểu dữ liệu là string | null
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