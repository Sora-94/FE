import React from "react";
import { ProductDto } from "../../models/product";
interface ProductCardProps {
  product: ProductDto;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, description, price } = product;
  const formatCurrency = (price: number) => {
    return (price).toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };
  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <a
        href={`/product/details/${product.id}`}
        className="rounded position-relative fruite-item"
      >
        <div className="fruite-img">
          <img
            src={`${
              product.image ||
              "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/1/3/776318/Hoa-Qua-De-Len-Men.jpg"
            }`}
            className="img-fluid w-100 rounded-top"
            alt={name}
            style={{ objectFit: "cover", height: "230px" }}
          />
        </div>
        <div
          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
          style={{ top: "10px", left: "10px" }}
        >
          fruits
        </div>
        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
          <h4>{name}</h4>
          <p>{description}</p>
          <div className="d-flex justify-content-between flex-lg-wrap">
            <p className="text-dark fs-5 fw-bold mb-0">{formatCurrency(price)}</p>
            <a
              href="#"
              className="btn border border-secondary rounded-pill px-3 text-primary"
            >
              <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to
              cart
            </a>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
