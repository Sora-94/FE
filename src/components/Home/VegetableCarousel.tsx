import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img6 from '../../assets/img/vegetable-item-6.jpg';
import img1 from '../../assets/img/vegetable-item-1.jpg';
import img3 from '../../assets/img/vegetable-item-3.png';
import img4 from '../../assets/img/vegetable-item-4.jpg';
import img5 from '../../assets/img/vegetable-item-5.jpg';

const vegetableItems = [
  {
    imgSrc: img6,
    title: 'Parsely',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
    price: '$4.99 / kg',
    buttonLabel: 'Add to cart',
  },
  {
    imgSrc: img1,
    title: 'Parsely',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
    price: '$4.99 / kg',
    buttonLabel: 'Add to cart',
  },
  {
    imgSrc: img3,
    title: 'Banana',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
    price: '$7.99 / kg',
    buttonLabel: 'Add to cart',
  },
  {
    imgSrc: img4,
    title: 'Bell Papper',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
    price: '$7.99 / kg',
    buttonLabel: 'Add to cart',
  },
  {
    imgSrc: img5,
    title: 'Potatoes',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
    price: '$7.99 / kg',
    buttonLabel: 'Add to cart',
  },
];

const VegetableCarousel: React.FC = () => {
    return (
      <div className="container-fluid vesitable py-5">
        <div className="container py-5">
          <h1 className="mb-0">Fresh Organic Vegetables</h1>
          <OwlCarousel className="owl-theme" loop margin={10} nav>
            {vegetableItems.map((item, index) => (
              <div className="item" key={index}>
                <div className="border border-primary rounded position-relative vesitable-item">
                  <div className="vesitable-img">
                    <img src={"https://media.istockphoto.com/id/995518546/vi/anh/c%C3%A1c-lo%E1%BA%A1i-tr%C3%A1i-c%C3%A2y-nhi%E1%BB%87t-%C4%91%E1%BB%9Bi-ch%C3%ADn-%C4%91%E1%BA%A7y-m%C3%A0u-s%E1%BA%AFc-d%E1%BA%A1ng-xem-tr%C3%AAn-c%C3%B9ng.jpg?s=612x612&w=0&k=20&c=k2OkpTM9AvQIR_D9Yd19DCU2VlNjEN22w6-WyRYo168="} className="img-fluid w-100 rounded-top" alt={item.title} />
                  </div>
                  <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: '10px', right: '10px' }}>
                    Vegetable
                  </div>
                  <div className="p-4 rounded-bottom">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                      <p className="text-dark fs-5 fw-bold mb-0">{item.price}</p>
                      <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
                        <i className="fa fa-shopping-bag me-2 text-primary"></i> {item.buttonLabel}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    );
  };

export default VegetableCarousel;
