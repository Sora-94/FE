import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import NavbarLayout from '../../components/Home/Navbar';
import FooterLayout from '../../components/Home/Footer';
import '@fortawesome/fontawesome-free/css/all.css'; // FontAwesome
import '../../assets/lib/owlcarousel/assets/owl.carousel.min.css'; // OwlCarousel
import '../../assets/css/bootstrap.min.css'; // Bootstrap
import '../../assets/css/style.css'; // Custom CSS
import testimonial from '../../assets/img/testimonial-1.jpg';
const testimonials = [
  {
    text: "Trái cây tươi, sạch. giao hàng nhanh thân thiện",
    img: testimonial,
    name: 'Phương Giang',
    profession: 'Sinh viên',
    rating: 4,
  },
  {
    text: "Trái cây tươi, sạch. giao hàng nhanh thân thiện",
    img: testimonial,
    name: 'Bảo Hân',
    profession: 'Nhân viên VSATTP',
    rating: 5,
  },
  {
    text: "Trái cây tươi, sạch. giao hàng nhanh thân thiện",
    img: testimonial,
    name: 'Thanh Nhàn',
    profession: 'Nhân viên MKT',
    rating: 5,
  },
];

const Testimonial: React.FC = () => {
  return (
    <>
      <NavbarLayout />
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Đánh giá</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
          <li className="breadcrumb-item active text-white">Đánh giá</li>
        </ol>
      </div>
      <div className="container-fluid testimonial py-5">
        <div className="container py-5">
          <div className="testimonial-header text-center">
            <h4 className="text-primary">Lời đánh giá của chúng tôi</h4>
            <h1 className="display-5 mb-5 text-dark">Khách hàng của chúng tôi nói!</h1>
          </div>
          <OwlCarousel className="owl-carousel testimonial-carousel" loop margin={10} nav>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-item img-border-radius bg-light rounded p-4">
                <div className="position-relative">
                  <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: '30px', right: '0' }}></i>
                  <div className="mb-4 pb-4 border-bottom border-secondary">
                    <p className="mb-0">{testimonial.text}</p>
                  </div>
                  <div className="d-flex align-items-center flex-nowrap">
                    <div className="bg-secondary rounded">
                      <img src={testimonial.img} className="img-fluid rounded" style={{ width: '100px', height: '100px' }} alt="" />
                    </div>
                    <div className="ms-4 d-block">
                      <h4 className="text-dark">{testimonial.name}</h4>
                      <p className="m-0 pb-3">{testimonial.profession}</p>
                      <div className="d-flex pe-5">
                        {[...Array(5)].map((_, starIndex) => (
                          <i
                            key={starIndex}
                            className={`fas fa-star${starIndex < testimonial.rating ? ' text-primary' : ''}`}
                          ></i>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
      <FooterLayout />
    </>
  );
};

export default Testimonial;
