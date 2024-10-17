import axios, { AxiosResponse } from 'axios';
import { Registerdto, LoginRequest, LoginResponse } from '../models/auth';
import api from '../api/api';

interface ValidationErrors {
  [key: string]: string[];
}

export const registerUser = async (url: string, data: Registerdto) => {
  try {
    const res: AxiosResponse<{ success: boolean; errors?: ValidationErrors; message?: string }> = await api.post(url, data);
    return res.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export const loginUser = async (url: string, data: LoginRequest): Promise<LoginResponse> => {
  try {
    const res: AxiosResponse<LoginResponse> = await api.post(url, data);
    return res.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};
const handleAxiosError = (error: any): LoginResponse => {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    const message = error.response?.data.message || 'Unexpected error occurred';
    if (status === 400) {
      return {
        isSuccess: false,
        message,
        data: { Token: [] }, // Khởi tạo giá trị mặc định cho data
        errors: {} // Khởi tạo giá trị mặc định cho errors
      };
    }
    console.error(error.response?.data);
  } else {
    console.error('Unexpected error', error);
  }
  return {
    isSuccess: false,
    message: 'Unexpected error occurred',
    data: { Token: [] }, // Khởi tạo giá trị mặc định cho data
    errors: {} // Khởi tạo giá trị mặc định cho errors
  };
}