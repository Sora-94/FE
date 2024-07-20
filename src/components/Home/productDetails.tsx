import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faAppleAlt, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import singleItem from '../../assets/img/single-item.jpg';
import avatar from '../../assets/img/avatar.jpg';

const ProductDetail: React.FC = () => {
  return (
    <div className="row g-4 mb-5">
      <div className="col-lg-8 col-xl-9">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="border rounded">
              <a href="#">
                <img src={singleItem} className="img-fluid rounded" alt="Image" />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <h4 className="fw-bold mb-3">Broccoli</h4>
            <p className="mb-3">Category: Vegetables</p>
            <h5 className="fw-bold mb-3">3,35 $</h5>
            <div className="d-flex mb-4">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className={i < 4 ? 'text-secondary' : ''}
                />
              ))}
            </div>
            <p className="mb-4">
              The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.
            </p>
            <p className="mb-4">
              Suspendisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish
            </p>
            <div className="input-group quantity mb-5" style={{ width: '100px' }}>
              <div className="input-group-btn">
                <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                  <FontAwesomeIcon icon={faStar} />
                </button>
              </div>
              <input type="text" className="form-control form-control-sm text-center border-0" value="1" />
              <div className="input-group-btn">
                <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                  <FontAwesomeIcon icon={faStar} />
                </button>
              </div>
            </div>
            <a href="#" className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary">
              <FontAwesomeIcon icon={faShoppingBag} className="me-2 text-primary" /> Add to cart
            </a>
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
                <p>
                  The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.
                  Suspendisse ultricies nisi vel quam suscipit
                </p>
                <p>
                  Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish filefish Antarctic
                  icefish goldeye aholehole trumpetfish pilot fish airbreathing catfish, electric ray sweeper.
                </p>
                <div className="px-2">
                  <div className="row g-4">
                    <div className="col-6">
                      {[
                        { label: 'Weight', value: '1 kg' },
                        { label: 'Country of Origin', value: 'Agro Farm' },
                        { label: 'Quality', value: 'Organic' },
                        { label: 'Check', value: 'Healthy' },
                        { label: 'Min Weight', value: '250 Kg' }
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
                {[{ name: 'Jason Smith', date: 'April 12, 2024', stars: 5 }, { name: 'Sam Peters', date: 'April 12, 2024', stars: 4 }].map((review, index) => (
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
                      <p>
                        The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.
                        Suspendisse ultricies nisi vel quam suscipit
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <form action="#">
            <h4 className="mb-5 fw-bold">Leave a Reply</h4>
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="border-bottom rounded">
                  <input type="text" className="form-control border-0 me-4" placeholder="Your Name *" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="border-bottom rounded">
                  <input type="email" className="form-control border-0" placeholder="Your Email *" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="border-bottom rounded my-4">
                  <textarea className="form-control border-0" cols={30} rows={8} placeholder="Your Review *" spellCheck="false"></textarea>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="d-flex justify-content-between py-3 mb-5">
                  <div className="d-flex align-items-center">
                    <p className="mb-0 me-3">Please rate:</p>
                    <div className="d-flex align-items-center" style={{ fontSize: '12px' }}>
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} className={i < 4 ? 'text-muted' : ''} />
                      ))}
                    </div>
                  </div>
                  <a href="#" className="btn border border-secondary text-primary rounded-pill px-4 py-3">Post Comment</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-4 col-xl-3">
        <div className="row g-4 fruite">
          <div className="col-lg-12">
            <div className="input-group w-100 mx-auto d-flex mb-4">
              <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
              <span id="search-icon-1" className="input-group-text p-3">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
            <div className="mb-4">
              <h4>Categories</h4>
              <ul className="list-unstyled fruite-categorie">
                {['Apples', 'Vegetables', 'Fish', 'Chicken', 'Fruits'].map((category, index) => (
                  <li key={index} className="d-flex justify-content-between align-items-center mb-2">
                    <span>{category}</span>
                    <span className="badge bg-light rounded-pill">12</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h4>Popular Tags</h4>
              <div className="d-flex flex-wrap">
                {['Vegetables', 'Fruits', 'Apples', 'Chicken', 'Organic'].map((tag, index) => (
                  <a key={index} href="#" className="btn btn-outline-secondary rounded-pill me-2 mb-2">{tag}</a>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h4>Recent Posts</h4>
              <div className="d-flex mb-3">
                <img src="img/recent-1.jpg" className="img-fluid rounded me-3" style={{ width: '80px', height: '80px' }} alt="" />
                <div>
                  <a href="#" className="d-block">Sed tincidunt velit ex, non consectetur dui pharetra nec.</a>
                  <p className="text-muted mb-0" style={{ fontSize: '12px' }}>July 11, 2024</p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <img src="img/recent-2.jpg" className="img-fluid rounded me-3" style={{ width: '80px', height: '80px' }} alt="" />
                <div>
                  <a href="#" className="d-block">Pellentesque ac rhoncus sem, vel volutpat ipsum.</a>
                  <p className="text-muted mb-0" style={{ fontSize: '12px' }}>July 10, 2024</p>
                </div>
              </div>
            </div>
            <div>
              <h4>Instagram Feed</h4>
              <div className="d-flex flex-wrap">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="position-relative">
                    <img src={`img/instagram-${index + 1}.jpg`} className="img-fluid rounded" alt="" />
                    <a href="#" className="position-absolute top-50 start-50 translate-middle">
                      <FontAwesomeIcon icon={faAppleAlt} className="text-white fs-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
