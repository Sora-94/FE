import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const VegetableCarousel: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js';
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => {
      // Init OwlCarousel
      (window as any).jQuery('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        responsive: {
          600: {
            items: 3
          }
        }
      });
    };
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="vesitable">
      <OwlCarousel className="owl-carousel vegetable-carousel justify-content-center">
        {[
          {
            imgSrc: 'img/vegetable-item-6.jpg',
            title: 'Parsely',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
            price: '$4.99 / kg'
          },
          {
            imgSrc: 'img/vegetable-item-1.jpg',
            title: 'Parsely',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
            price: '$4.99 / kg'
          },
          {
            imgSrc: 'img/vegetable-item-3.png',
            title: 'Banana',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
            price: '$7.99 / kg'
          },
          {
            imgSrc: 'img/vegetable-item-4.jpg',
            title: 'Bell Papper',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
            price: '$7.99 / kg'
          },
          {
            imgSrc: 'img/vegetable-item-5.jpg',
            title: 'Potatoes',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
            price: '$7.99 / kg'
          },
          // Thêm các sản phẩm khác tại đây
        ].map((item, index) => (
          <div className="border border-primary rounded position-relative vesitable-item" key={index}>
            <div className="vesitable-img">
              <img src={item.imgSrc} className="img-fluid w-100 rounded-top" alt={item.title} />
            </div>
            <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: '10px', right: '10px' }}>
              Vegetable
            </div>
            <div className="p-4 pb-0 rounded-bottom">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold">{item.price}</p>
                <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary">
                  <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default VegetableCarousel;
