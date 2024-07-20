import React from 'react';
import { ProductDto } from '../../models/product';
interface ProductCardProps {
    product: ProductDto;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const {  name, description, price } = product;

    return (
        <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="rounded position-relative fruite-item">
                <div className="fruite-img">
                <img src={"https://media.istockphoto.com/id/995518546/vi/anh/c%C3%A1c-lo%E1%BA%A1i-tr%C3%A1i-c%C3%A2y-nhi%E1%BB%87t-%C4%91%E1%BB%9Bi-ch%C3%ADn-%C4%91%E1%BA%A7y-m%C3%A0u-s%E1%BA%AFc-d%E1%BA%A1ng-xem-tr%C3%AAn-c%C3%B9ng.jpg?s=612x612&w=0&k=20&c=k2OkpTM9AvQIR_D9Yd19DCU2VlNjEN22w6-WyRYo168="} className="img-fluid w-100 rounded-top" alt={name} />
                </div>
                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: "10px", left: "10px" }}>fruits</div>
                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">{price}</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
