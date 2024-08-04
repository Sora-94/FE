import axios from 'axios';
import { CategoryDto } from '../models/category';

const API_BASE_URL = 'https://localhost:7104';

interface CategoryResponse {
  items: CategoryDto[];
  message?: string;
  pageIndex: number;
  totalPages: number;
  totalCount: number;
  pageSize: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

interface CreateCategoryResponse {
  message: string;
  isSuccess: boolean;
  data: CategoryDto;
  errors?: any;
}
export const getAllCategoriesNofilter = async (): Promise<CategoryDto[]> => {
  try {
    const res = await axios.get<CategoryResponse>(`${API_BASE_URL}/api/v1/Category?PageSize=99`);
    return res.data.items.sort((a, b) => (a.isDeleted === b.isDeleted ? 0 : a.isDeleted ? 1 : -1));
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const getAllCategories = async (): Promise<CategoryDto[]> => {
  try {
    const res = await axios.get<CategoryResponse>(`${API_BASE_URL}/api/v1/Category`);
    return res.data.items.filter(category => !category.isDeleted);
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const updateCategory = async (id: string, data: Partial<CategoryDto>) => {
  try {
    const res = await axios.put(`${API_BASE_URL}/api/v1/Category/${id}`, data);
    if (res.data.isSuccess) {
      window.alert(res.data.message); // Log thông báo thành công
    } else {
      console.log('Có lỗi xảy ra khi tạo loại hàng:', res.data.errors); // Log lỗi nếu có
    }
    return res.data;
  } catch (error) {
    window.alert("Tên thể loại bị trùng");
    console.log(error);
    return null;
  }
};

export const deleteCategory = async (id: string, name: string) => {
  const data = {
    name,
    isDeleted: true
  };
  try {
    const res = await axios.put<CategoryDto>(`${API_BASE_URL}/api/v1/Category/${id}`, data);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const createCategory = async (data: Partial<CategoryDto>) => {
  try {
    const res = await axios.post<CreateCategoryResponse>(`${API_BASE_URL}/api/v1/Category`, data);
    if (res.data.isSuccess) {
      window.alert(res.data.message); // Log thông báo thành công
    } else {
      console.log('Có lỗi xảy ra khi tạo loại hàng:', res.data.errors); // Log lỗi nếu có
    }
    return res.data;
  } catch (error) {
    window.alert("Tên thể loại bị trùng");
    console.log(error);
    return null;
  }
};

export const get4Categories = async (): Promise<string[]> => {
  try {
    const res = await axios.get<CategoryResponse>(`${API_BASE_URL}/api/v1/Category`);
    const categoryNames = res.data.items.filter(category => !category.isDeleted).slice(0, 4).map(category => category.name);
    return categoryNames;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getCategoryById = async (id: string) => {
  try {
    const res = await axios.get<CategoryDto>(`${API_BASE_URL}/api/v1/Category/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
