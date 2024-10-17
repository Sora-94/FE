export interface comboDto {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  discount: number;
  priceAfterDiscount: number;
  isDeleted: boolean;
  productCombos: {
    productId: string;
    quantity: number;
  }[]; // Thêm thuộc tính isDeleted    // Thêm thuộc tính này nếu cần
}
export interface ComboForUpdate {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  discount: number;
  isDeleted: boolean;
  productCombos: ProductComboForUpdate[];
}

export interface ProductComboForUpdate {
  productId: string;
  quantity: number;
}