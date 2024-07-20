import React from 'react';
import NavbarLayout from '../../components/Home/Navbar';
import VesitableProduct from '../../components/Home/vesitable'; // Sửa tên component từ 'vesitable' thành 'VesitableProduct'
import ProductDetails from '../../components/Home/productDetails'; // Sửa tên component từ 'productDetails' thành 'ProductDetails'
import FooterLayout from '../../components/Home/Footer';
import '@fortawesome/fontawesome-free/css/all.css'; // FontAwesome
// import 'lightbox2/dist/css/lightbox.min.css'; // Lightbox
// import '../../assets/lib/lightbox/css/lightbox.min.css'; // 
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import '../../assets/lib/owlcarousel/assets/owl.carousel.min.css'; // OwlCarousel
import '../../assets/css/bootstrap.min.css'; // Bootstrap
import '../../assets/css/style.css'; // Style

const ShopDetail: React.FC = () => {
  return (
    <>
      <NavbarLayout />
      {/* Single Page Header */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Shop Detail</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Pages</a></li>
          <li className="breadcrumb-item active text-white">Shop Detail</li>
        </ol>
      </div>
      {/* Single Page Header End */}

      {/* Single Product Start */}
      <div className="container-fluid py-5 mt-5">
        <div className="container py-5">
          <ProductDetails /> {/* Sử dụng tên component viết hoa */}
          <VesitableProduct /> {/* Sử dụng tên component viết hoa */}
        </div>
      </div>
      {/* Single Product End */}
      <FooterLayout />
    </>
  );
};

export default ShopDetail;
