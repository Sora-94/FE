import React, { useEffect, useState } from 'react';
import banner from '../../assets/img/featur-3.jpg';
import { ProductDto } from '../../models/product';
import { getAllProductsNoDeleteForAd } from '../../services/product';
import ProductCard from '../Home/ProductCard';

const AdSection: React.FC = () => {
  const [bestSellingProducts, setBestSellingProducts] = useState<ProductDto[]>([]);

  useEffect(() => {
    const fetchBestSellingProducts = async () => {
      const products = await getAllProductsNoDeleteForAd();
      setBestSellingProducts(products);
    };

    fetchBestSellingProducts();
  }, []);

  return (
    <div>
      <div className="container-fluid banner bg-secondary my-5">
        <div className="container py-5">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="py-4">
                <h1 className="display-3 text-white">Trái cây tươi</h1>
                <p className="fw-normal display-3 text-dark mb-4">
                  Trong cửa hàng của chúng tôi
                </p>
                <p className="mb-4 text-dark">
                  Đảm bảo nguồn hàng luôn tươi.
                </p>
                <a
                  href="#"
                  className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5"
                >
                  Mua
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <img src={banner} className="img-fluid w-100 rounded" alt="" />
                <div
                  className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute"
                  style={{ width: 140, height: 140, top: 0, left: 0 }}
                >
                  <h1 style={{ fontSize: 100 }}>1</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 700 }}>
            <h1 className="display-4">Sản phẩm bán chạy nhất</h1>
            <p>
              Các sản phẩm được mua nhiều nhất
            </p>
          </div>
          <div className="row g-4">
            {bestSellingProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdSection;
