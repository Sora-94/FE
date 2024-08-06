import React, { useState, useEffect } from 'react';
import NavbarLayout from '../../components/Home/Navbar';
//import Vesitable from '../../components/Home/vesitable';
import FooterLayout from '../../components/Home/Footer';
import '@fortawesome/fontawesome-free/css/all.css'; // FontAwesome
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import '../../assets/lib/owlcarousel/assets/owl.carousel.min.css'; // OwlCarousel
import '../../assets/css/bootstrap.min.css'; // Bootstrap
import '../../assets/css/style.css'; // Style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faShoppingBag, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import singleItem from '../../assets/img/single-item.jpg';
import avatar from '../../assets/img/avatar.jpg';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { QRCode } from 'react-qrcode-logo';

const ShopDetail: React.FC = () => {
  const { id } = useParams(); // Lấy ID từ URL
  const [product, setProduct] = useState<any>(null); // Thay đổi kiểu dữ liệu cho phù hợp với cấu trúc dữ liệu của bạn
  const [quantity, setQuantity] = useState<number>(1); // Thêm state cho quantity
  const [reviews] = useState<any[]>([]); // Thay đổi kiểu dữ liệu cho phù hợp với cấu trúc dữ liệu của bạn

  useEffect(() => {
    // Fetch product data
    axios.get(`https://be-gu7h.onrender.com/api/v1/Product/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the product!', error);
      });
  }, [id]);

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
      quantity: quantity
    };

    // Lưu vào local storage
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
  };
  const formatCurrency = (price: number) => {
    return (price*1000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  };
  const handleQuantityChange = (type: 'increment' | 'decrement') => {
    setQuantity(prevQuantity => {
      if (type === 'increment') {
        return prevQuantity + 1;
      } else if (type === 'decrement' && prevQuantity > 1) {
        return prevQuantity - 1;
      }
      return prevQuantity;
    });
  };

  if (!product) {
    return <div>Loading...</div>; // Hoặc một component loading khác nếu muốn
  }

  return (
    <>
      <NavbarLayout />
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Shop Detail</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Pages</a></li>
          <li className="breadcrumb-item active text-white">Shop Detail</li>
        </ol>
      </div>
      <div className="container-fluid py-5 mt-5">
        <div className="container py-5">
          <div className="row g-4 mb-5">
            <div className="col-lg-8 col-xl-9">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="border rounded">
                    <a href="#">
                      <img src={product.image || singleItem} className="img-fluid rounded" alt="Image" style={{objectFit:"cover",width:"100%"}} />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h4 className="fw-bold mb-3">{product.name}</h4>
                  <p className="mb-3">Category: {product.categoryName}</p>
                  <h5 className="fw-bold mb-3">{formatCurrency(product.price)}</h5>
                  <div className="d-flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        className={i < product.rating ? 'text-secondary' : ''}
                      />
                    ))}
                  </div>
                  <p className="mb-4">{product.description}</p>
                  <div className="input-group quantity mb-5" style={{ width: '100px' }}>
                    <div className="input-group-btn">
                      <button 
                        className="btn btn-sm btn-minus rounded-circle bg-light border" 
                        onClick={() => handleQuantityChange('decrement')}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                    </div>
                    <input 
                      type="text" 
                      className="form-control form-control-sm text-center border-0" 
                      value={quantity} 
                      readOnly 
                    />
                    <div className="input-group-btn">
                      <button 
                        className="btn btn-sm btn-plus rounded-circle bg-light border" 
                        onClick={() => handleQuantityChange('increment')}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                  </div>
                  <button 
                    className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"
                    onClick={handleAddToCart}
                  >
                    <FontAwesomeIcon icon={faShoppingBag} className="me-2 text-primary" /> Add to cart
                  </button>
                </div>
                <div className="col-lg-12">
                  <nav>
                    <div className="nav nav-tabs mb-3">
                      <button
                        className="nav-link active border-white border-bottom-0"
                        type="button"
                        role="tab"
                        id="nav-about-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-about"
                        aria-controls="nav-about"
                        aria-selected="true"
                      >
                        Description
                      </button>
                      <button
                        className="nav-link border-white border-bottom-0"
                        type="button"
                        role="tab"
                        id="nav-mission-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-mission"
                        aria-controls="nav-mission"
                        aria-selected="false"
                      >
                        Reviews
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content mb-5">
                    <div className="tab-pane active" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                      <p>{product.longDescription}</p>
                      <div className="px-2">
                        <div className="row g-4">
                          <div className="col-6">
                            {[
                              { label: 'Weight', value: product.weight },
                              { label: 'Country of Origin', value: product.origin },
                              { label: 'Quality', value: product.quality },
                              { label: 'Check', value: product.check },
                              { label: 'Min Weight', value: product.minWeight }
                            ].map((item, index) => (
                              <div
                                key={index}
                                className={`row ${index % 2 === 0 ? 'bg-light' : ''} text-center align-items-center justify-content-center py-2`}
                              >
                                <div className="col-6">
                                  <p className="mb-0">{item.label}</p>
                                </div>
                                <div className="col-6">
                                  <p className="mb-0">{item.value}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab">
                      {reviews.map((review, index) => (
                        <div className="d-flex" key={index}>
                          <img src={avatar} className="img-fluid rounded-circle p-3" style={{ width: '100px', height: '100px' }} alt="" />
                          <div>
                            <p className="mb-2" style={{ fontSize: '14px' }}>{review.date}</p>
                            <div className="d-flex justify-content-between">
                              <h5>{review.name}</h5>
                              <div className="d-flex mb-3">
                                {[...Array(5)].map((_, i) => (
                                  <FontAwesomeIcon key={i} icon={faStar} className={i < review.stars ? 'text-secondary' : ''} />
                                ))}
                              </div>
                            </div>
                            <p>{review.comment}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <form action="#">
                  <h4 className="mb-5 fw-bold">Leave a Reply</h4>
                  <div className="row g-3 mb-4">
                    <div className="col-sm-6 col-lg-4">
                      <input type="text" className="form-control bg-light border-0" placeholder="Your Name" />
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <input type="email" className="form-control bg-light border-0" placeholder="Your Email" />
                    </div>
                    <div className="col-12">
                      <textarea className="form-control bg-light border-0" rows={5} placeholder="Message"></textarea>
                    </div>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Save my name, email, and website in this browser for the next time I comment.
                    </label>
                  </div>
                  <button className="btn btn-secondary rounded-pill py-3 px-5 mt-3" type="submit">Submit Now</button>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3">
              <div className="bg-light text-center rounded-2 p-5">
                <h4 className="mb-4">Scan Qr Code</h4>
                <QRCode
                  value={`https://fastfood-shop-fb98.netlify.app/product/details/${id}`}
                  size={150}
                  logoImage={product.image}
                  logoWidth={30}
                  logoHeight={30}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterLayout />
    </>
  );
};

export default ShopDetail;
