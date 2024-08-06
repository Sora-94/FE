// interfaces.ts
export interface ProductDto {
  isDeleted: boolean;
  id: string;
  categoryName: string;
  name: string;
  price: number;
  image: string | null;
  description: string;
  discount: number;
  stockQuantity: number;
  categoryId: string;
  imgSrc :string;
  category: string;
  title: string;
  isdelete: boolean;
  buttonLabel: "add to cart";
}

export interface ProductResponse {
  items: ProductDto[];
  pageIndex: number;
  totalPages: number;
  totalCount: number;
  pageSize: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
// src/dtos/ProductDtoForUpdate.ts
export interface ProductDtoForUpdate {
  name: string;
  price: number;
  image: string;
  description: string;
  discount: number;
  stockQuantity: number;
  categoryId: string;
  isDeleted: boolean;
}

export interface ProductDtoForCreate {
  name: string;
  price: number;
  image: string;
  description: string;
  discount: number;
  stockQuantity: number;
  categoryId: string;
}

