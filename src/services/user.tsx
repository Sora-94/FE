// services/UserService.ts
import axios, { AxiosResponse } from 'axios';
import api from '../api/api'; // Đảm bảo api đã được cấu hình với base URL và các cài đặt khác
import { UserDTO,PaginatedUserResponse  } from '../models/user';

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
    phoneNumber: ''  };
};

// Định nghĩa kiểu dữ liệu cho User
export const getAllUsers = async (
  pageIndex: number = 1,
  pageSize: number = 10,
  searchTerm: string = '',
  sortColumn: string = '',
  sortOrder: string = 'asc'
): Promise<PaginatedUserResponse> => {
  try {
    const response = await apiClient.get<PaginatedUserResponse>('/User', {
      params: {
        PageIndex: pageIndex,
        PageSize: pageSize,
        SearchTerm: searchTerm,
        SortColumn: sortColumn,
        SortOrder: sortOrder
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching users');
  }
};
const API_BASE_URL = 'https://be-gu7h.onrender.com/api/v1';
const TOKEN = 'YOUR_ACCESS_TOKEN_HERE'; // Thay đổi thành token thực tế của bạn

// Tạo instance của axios với cấu hình cơ bản
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${TOKEN}`,
    'Accept': '*/*'
  }
});

// Lấy danh sách người dùng với phân trang và tìm kiếm
export const getUsers = async (
  pageIndex: number = 1,
  pageSize: number = 10,
  searchTerm: string = '',
  sortColumn: string = '',
  sortOrder: string = 'asc'
): Promise<PaginatedUserResponse> => {
  try {
    const response = await apiClient.get<PaginatedUserResponse>('/User', {
      params: {
        PageIndex: pageIndex,
        PageSize: pageSize,
        SearchTerm: searchTerm,
        SortColumn: sortColumn,
        SortOrder: sortOrder
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching users');
  }
};

// Lấy thông tin người dùng theo ID
export const getUserById = async (id: string): Promise<UserDTO> => {
  try {
    const response = await apiClient.get<UserDTO>(`/User/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching user by ID');
  }
};

// Cập nhật thông tin người dùng
export const updateUserProfile = async (user: Partial<UserDTO>): Promise<void> => {
  try {
    await apiClient.post('/User/profile', user);
  } catch (error) {
    throw new Error('Error updating user profile');
  }
};
