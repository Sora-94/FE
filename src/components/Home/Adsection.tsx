import React from "react";
import banner from '../../assets/img/featur-3.jpg';
const AdSection: React.FC = () => {
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
                <img src={banner}  className="img-fluid w-100 rounded"     alt="" />
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
             Các sản phẩm được mua nhiêu nhất
            </p>
          </div>
          <div className="row g-4">
            {[
              {
                img: "best-product-1.jpg",
                title: "Organic Tomato",
                price: "3.12 $",
              },
              {
                img: "best-product-2.jpg",
                title: "Organic Tomato",
                price: "3.12 $",
              },
              {
                img: "best-product-3.jpg",
                title: "Organic Tomato",
                price: "3.12 $",
              },
              {
                img: "best-product-4.jpg",
                title: "Organic Tomato",
                price: "3.12 $",
              },
              {
                img: "best-product-5.jpg",
                title: "Organic Tomato",
                price: "3.12 $",
              },
              {
                img: "best-product-6.jpg",
                title: "Organic Tomato",
                price: "3.12 $",
              },
              {
                img: "fruite-item-1.jpg",
                title: "Organic Tomato",
                price: "3.12 $",
              },
              {
                img: "fruite-item-2.jpg",
                title: "Organic Tomato",
                price: "3.12 $",
              },
              {
                img: "fruite-item-3.jpg",
                title: "Organic Tomato",
                price: "3.12 $",
              },
              {
                img: "fruite-item-4.jpg",
                title: "Organic Tomato",
                price: "3.12 $",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`col-lg-6 col-xl-${index < 6 ? 4 : 3}`}
              >
                <div className="p-4 rounded bg-light text-center">
                  <img
                    src={"https://images.pexels.com/photos/51958/oranges-fruit-vitamins-healthy-eating-51958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                    className={`img-fluid rounded-${
                      index < 6 ? "circle" : ""
                    } w-100`}
                    alt=""
                  />
                  <div className="py-4">
                    <a href="#" className="h5">
                      {item.title}
                    </a>
                    <div className="d-flex my-3 justify-content-center">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h4 className="mb-3">{item.price}</h4>
                    <a
                      href="#"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdSection;
