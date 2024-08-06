export interface OrderDto {
    id: string;
    firstName: string;
    lastName: string;
    fullName: string;
    totalAmount: number;
    orderItems: OrderItemDto[];
    orderDate: string;
    status: OrderStatus;
  }
  export interface OrderDtoForUpdate {
    orderDate: string;
    status: OrderStatus;
  }
  
  export interface OrderItemDto {
    id: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    comboId: string | null;
    comboName: string | null;
    productId: string;
    productName: string;
  }
  
  export interface OrderResponse {
    items: OrderDto[];
    pageIndex: number;
    totalPages: number;
    totalCount: number;
    pageSize: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  }
  
  export enum OrderStatus {
    Pending = 0,
    Confirmed = 1,
    Shipped = 2,
    Delivered = 3,
    Cancelled = 4
  }
  