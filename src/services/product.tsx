import { ProductDto } from "../models/product";
import api from "../api/api";
import { AxiosResponse } from "axios";

export const getAllProducts = async (url: string): Promise<ProductDto[]> => {
  try {
    const response: AxiosResponse = await api.get<ProductDto[]>(url);
    return response.data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; // Re-throw error for further handling
  }
};

export const getProductById = async (url: string, id: string | undefined): Promise<ProductDto | undefined> => {
  try {
    const response: AxiosResponse = await api.get<ProductDto>(`${url}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    throw error; // Re-throw error for further handling
  }
};

export const createProduct = async (url: string, data: Omit<ProductDto, 'id'>): Promise<ProductDto | undefined> => {
  try {
    const response: AxiosResponse = await api.post<ProductDto>(url, data);
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error; // Re-throw error for further handling
  }
};

export const updateProduct = async (url: string, id: string | undefined, data: ProductDto): Promise<ProductDto | undefined> => {
  try {
    const response: AxiosResponse = await api.put<ProductDto>(`${url}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error updating product with id ${id}:`, error);
    throw error; // Re-throw error for further handling
  }
};

export const deleteProduct = async (url: string, id: string | undefined): Promise<ProductDto | undefined> => {
  try {
    const response: AxiosResponse = await api.delete<ProductDto>(`${url}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting product with id ${id}:`, error);
    throw error; // Re-throw error for further handling
  }
};
