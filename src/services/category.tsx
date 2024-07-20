
import { CategoryDto } from "../models/category";
import api from "../api/api";
import { AxiosResponse } from "axios";
 
export const getAllCategories = async(url: string) => {
  const res = await api
    .get<CategoryDto[]>(url)
    .then((response: AxiosResponse) => {
      return response.data.categories;
    })
    .catch((error) => {
      return error;
    })
    console.log(res)
    return res;
};

export const getCategoryById = async(url: string, id: string | undefined) =>{
  const res = await api
  .get<CategoryDto>(`${url}/${id}`)
  .then((response: AxiosResponse)=>{
    console.log(response);
    return response.data;
  })
  .catch((error)=>{
    console.log(error);
  })
  return res;
};
export const createCategory = async(url: string, data:CategoryDto)=>{
  console.log(data);
  const res = await api
  .post<CategoryDto>(`${url}`,data)
  .then((response: AxiosResponse)=>{
      return response.data;
  })
  .catch((error)=>{
      console.log(error);
  });
  return res;
};
export const updateCategory = async (url: string, id: string | undefined, data: CategoryDto) => {
  console.log(data);
  const res = await api
    .put<CategoryDto>(`${url}/${id}`, data) // Đổi từ .patch thành .put
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return res;
};

export const deleteCategory = async(url: string, id: string| undefined)=>{
  const res = await api
  .delete<CategoryDto>(`${url}/${id}`)
  .then((response: AxiosResponse)=>{
      return response.data;
  })
  .catch((error)=>{
      console.log(error);
  });
  return res;
};