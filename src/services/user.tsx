// services/UserService.ts
import axios, { AxiosResponse } from 'axios';
import api from '../api/api'; // Đảm bảo api đã được cấu hình với base URL và các cài đặt khác
import { UserDTO } from '../models/user';

// Hàm lấy thông tin hồ sơ người dùng hiện tại (Yêu cầu phải đăng nhập)
export const getUserProfile = async (token: string): Promise<UserDTO> => {
  try {
    const res: AxiosResponse<UserDTO> = await api.get('/api/v1/User/profile', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return res.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};

// Hàm xử lý lỗi từ Axios
const handleAxiosError = (error: any): UserDTO => {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    const message = error.response?.data.message || 'Unexpected error occurred';
    console.error(`Error ${status}: ${message}`);
  } else {
    console.error('Unexpected error', error);
  }
  return {
    id: '',
    role: null,
    firstName: '',
    lastName: '',
    address: null,
    imagePath: null,
    email: '',
    phoneNumber: ''
  };
};
