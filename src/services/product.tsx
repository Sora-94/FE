  import { ProductDto,ProductResponse,ProductDtoForCreate,ProductDtoForUpdate } from "../models/product";
  import api from "../api/api";
  import { AxiosResponse } from "axios";
  import axios from "axios";

  export const getProducts = async (pageIndex: number): Promise<any> => {
    try {
      const res = await api.get(`https://be-gu7h.onrender.com/api/v1/Product?PageSize=16&pageIndex=${pageIndex}`);
      return res.data;
    } catch (error) {
      console.log(error);
      return { items: [], totalPages: 0, totalCount: 0 };
    }
  };

  export const getAllProducts = async (pageIndex: number, pageSize: number): Promise<ProductResponse> => {
    try {
      const res = await api.get<ProductResponse>(`/api/v1/Product?pageIndex=${pageIndex}&pageSize=${pageSize}`);
      return res.data;
    } catch (error) {
      console.log(error);
      return {
        items: [],
        pageIndex: 0,
        totalPages: 0,
        totalCount: 0,
        pageSize: 0,
        hasPreviousPage: false,
        hasNextPage: false
      };
    }
  };
  export const getProductForList = async (): Promise<ProductDto[]> => {
    try {
      const res = await api.get<ProductResponse>('/api/v1/Product?PageSize=16');
      return res.data.items.filter(product => !product.isDeleted);;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  export const getProductForSearch = async (seachdata: string): Promise<ProductDto[]> => {
    try {
      const res = await api.get<ProductResponse>(`/api/v1/Product?PageSize=16&SearchTerm=${seachdata}`);
      return res.data.items.filter(product => !product.isDeleted);;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  
  export const getProductsByCategory = async (category: string): Promise<ProductDto[]> => {
    try {
      const res = await api.get<ProductResponse>(`/api/v1/Product?SearchTerm=${category}`);
      return res.data.items;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  export const getAllProductsNoDelete = async (): Promise<ProductDto[]> => {
    try {
      const res = await api.get<ProductResponse>('/api/v1/Product?PageSize=8');
      return res.data.items.filter(category => !category.isDeleted);;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  export const getAllProductsNoDeleteForAd = async (): Promise<ProductDto[]> => {
    try {
      const res = await api.get<ProductResponse>('/api/v1/Product?PageSize=8&PageIndex=2');
      return res.data.items.filter(category => !category.isDeleted);;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  export const getAllProductsNoDeletea = async (): Promise<ProductDto[]> => {
    try {
      const res = await api.get<ProductResponse>('/api/v1/Product?PageSize=99');
      return res.data.items.filter(category => !category.isDeleted);;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  export const getAllProduct = async (): Promise<ProductDto[]> => {
    try {
      const res = await api.get<ProductResponse>('/api/v1/Product');
      return res.data.items;
    } catch (error) {
      console.log(error);
      return [];
    }
  };


  export const getProductsByCategorya = async (category: string): Promise<ProductDto[]> => {
    try {
      const res = await api.get<ProductResponse>(`/api/v1/Product?PageSize=4&SearchTerm=${category}`);
      return res.data.items.filter(product => !product.isDeleted);;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  export const createProduct = async (data: ProductDtoForCreate): Promise<ProductDtoForCreate> => {
    try {
      const response: AxiosResponse<ProductDtoForCreate> = await api.post<ProductDtoForCreate>(
        'https://be-gu7h.onrender.com/api/v1/Product',
        data
      );
      return response.data;
    } catch (error) {
      console.error('Error creating product:', error);
      throw error; // Re-throw error for further handling
    }
  };
  export const updateProduct = async (id: string, productData: ProductDtoForUpdate): Promise<void> => {
    try {
      await axios.put(`https://be-gu7h.onrender.com/api/v1/Product/${id}`, productData);
    } catch (error) {
      console.error('Failed to update product:', error);
      throw error;
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
  export const getProductById = async (id: string) => {
    const response = await axios.get(`https://be-gu7h.onrender.com/api/v1/Product/${id}`);
    return response.data;
  };
