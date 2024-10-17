import React from 'react';
import payment from '../../assets/img/payment.png';


const Footer: React.FC = () => {
  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 ">
        <div className="container bg-dark py-5">
          <div className="pb-4 bg-dark  mb-4" style={{ borderBottom: '1px solid rgba(226, 175, 24, 0.5)' }}>
            <div className="row g-4">
              <div className="col-lg-3">
                <a href="#">
                  <h1 className="text-primary mb-0">Fruitables</h1>
                  <p className="text-secondary mb-0">Sản phẩm tươi sống</p>
                </a>
              </div>
              <div className="col-lg-6">
                <div className="position-relative mx-auto">
                  <input
                    className="form-control border-0 w-100 py-3 px-4 rounded-pill"
                    type="number"
                    placeholder="Your Email"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white"
                    style={{ top: 0, right: 0 }}
                  >
                    Đăng ký ngay
                  </button>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="d-flex justify-content-end pt-3">
                  <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href="">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a className="btn btn-outline-secondary btn-md-square rounded-circle" href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <div className="footer-item">
                <h4 className="text-light mb-3">Tại sao mọi người thích chúng tôi!</h4>
                <p className="mb-4">
                  Đảm bảo được nguồn hàng tươi sống và giao tới tận tay khách hàng
                </p>
                <a href="" className="btn border-secondary py-2 px-4 rounded-pill text-primary">
                  đọc thêm
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex flex-column text-start footer-item">
                <h4 className="text-light mb-3">Shop Info</h4>
                <a className="btn-link" href="">
                  Về chúng tôi
                </a>
                <a className="btn-link" href="">
                  Liên hệ
                </a>
                <a className="btn-link" href="">
                Chính sách bảo mật                </a>
                <a className="btn-link" href="">
                Điều khoản & Điều kiện                </a>
                <a className="btn-link" href="">
                Chính sách đổi trả                </a>
                <a className="btn-link" href="">
                Câu hỏi thường gặp & Trợ giúp                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex flex-column text-start footer-item">
                <h4 className="text-light mb-3">Tài khoản</h4>
                <a className="btn-link" href="">
                Tài khoản của tôi                </a>
                <a className="btn-link" href="">
                Chi tiết cửa hàng                </a>
                <a className="btn-link" href="">
Giỏ hàng                </a>
                <a className="btn-link" href="">
Danh sách yêu thích                </a>
                <a className="btn-link" href="">
Lịch sử đạt hàng                </a>
               
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-item">
                <h4 className="text-light mb-3">Liên hệ</h4>
                <p>Địa chỉ:  Công viên phần mềm Quang Trung,phường Tân Chánh Hiệp, Quận 12, thành phố Hồ Chí Minh</p>
                <p>Email: fb98@gmail.com</p>
                <p>Phone: +84 865033560</p>
                <p>Payment Accepted</p>
                <img src={payment} className="img-fluid" alt="Payment Methods" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}


      {/* Back to Top */}
      <a href="#" className="btn btn-primary border-3 border-primary rounded-circle back-to-top">
        <i className="fa fa-arrow-up"></i>
      </a>
    </>
  );
};

export default Footer;
