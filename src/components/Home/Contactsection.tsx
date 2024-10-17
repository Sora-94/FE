import React from "react";
import testimonial1 from '../../assets/img/testimonial-1.jpg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const ContactSection: React.FC = () => {
  return (
    <div>
      {/* Fact and Testimonial Section Start */}
      <div className="container-fluid py-5">
        <div className="container">
          {/* Fact Section */}
          <div className="bg-light p-5 rounded">
            <div className="row g-4 justify-content-center">
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="counter bg-white rounded p-5">
                  <i className="fa fa-users text-secondary"></i>
                  <h4>khách hàng hài lòng</h4>
                  <h1>1963</h1>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="counter bg-white rounded p-5">
                  <i className="fa fa-users text-secondary"></i>
                  <h4>Chất lượng dịch vụ</h4>
                  <h1>99%</h1>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="counter bg-white rounded p-5">
                  <i className="fa fa-users text-secondary"></i>
                  <h4>Giấy chứng nhận chất lượng</h4>
                  <h1>33</h1>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="counter bg-white rounded p-5">
                  <i className="fa fa-users text-secondary"></i>
                  <h4>Sản phẩm có sẵn</h4>
                  <h1>120</h1>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="testimonial py-5">
            <div className="testimonial-header text-center">
            <h4 className="text-primary">Lời đánh giá của chúng tôi</h4>
            <h1 className="display-5 mb-5 text-dark">Khách hàng của chúng tôi nói!</h1>
            </div>
            <OwlCarousel className="owl-theme" loop margin={10} nav>
              <div className="item">
                <div className="testimonial-item img-border-radius bg-light rounded p-4">
                  <div className="position-relative">
                    <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: 30, right: 0 }}></i>
                    <div className="mb-4 pb-4 border-bottom border-secondary">
                      <p className="mb-0">Trái cây tươi, sạch. giao hàng nhanh thân thiện
                      </p>
                    </div>
                    <div className="d-flex align-items-center flex-nowrap">
                      <div className="bg-secondary rounded">
                        <img src={testimonial1} className="img-fluid rounded" style={{ width: 100, height: 100 }} alt="" />
                      </div>
                      <div className="ms-4 d-block">
                        <h4 className="text-dark">Phương Giang</h4>
                        <p className="m-0 pb-3">Sinh viên</p>
                        <div className="d-flex pe-5">
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-item img-border-radius bg-light rounded p-4">
                  <div className="position-relative">
                    <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: 30, right: 0 }}></i>
                    <div className="mb-4 pb-4 border-bottom border-secondary">
                      <p className="mb-0">Trái cây tươi, sạch. giao hàng nhanh thân thiện
                      </p>
                    </div>
                    <div className="d-flex align-items-center flex-nowrap">
                      <div className="bg-secondary rounded">
                        <img src={testimonial1} className="img-fluid rounded" style={{ width: 100, height: 100 }} alt="" />
                      </div>
                      <div className="ms-4 d-block">
                        <h4 className="text-dark">Bảo Hân</h4>
                        <p className="m-0 pb-3">Nhân Viên ATVSTP</p>
                        <div className="d-flex pe-5">
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-item img-border-radius bg-light rounded p-4">
                  <div className="position-relative">
                    <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: 30, right: 0 }}></i>
                    <div className="mb-4 pb-4 border-bottom border-secondary">
                      <p className="mb-0">Trái cây tươi, sạch. giao hàng nhanh thân thiện</p>
                    </div>
                    <div className="d-flex align-items-center flex-nowrap">
                      <div className="bg-secondary rounded">
                        <img src={testimonial1} className="img-fluid rounded" style={{ width: 100, height: 100 }} alt="" />
                      </div>
                      <div className="ms-4 d-block">
                        <h4 className="text-dark">Thanh Nhàn</h4>
                        <p className="m-0 pb-3">Nhân viên MKT</p>
                        <div className="d-flex pe-5">
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
      {/* Fact and Testimonial Section End */}
    </div>
  );
};

export default ContactSection;
