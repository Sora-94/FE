import React from 'react';
import img1 from '../../assets/img/featur-1.jpg';
import img2 from '../../assets/img/featur-2.jpg';
import img3 from '../../assets/img/featur-3.jpg';
const services = [
  {
    href: '#',
    imgSrc: img1,
    bgClass: 'bg-secondary',
    borderClass: 'border-secondary',
    contentBgClass: 'bg-primary',
    textColorClass: 'text-white',
    title: 'Fresh Apples',
    discount: '20% OFF',
  },
  {
    href: '#',
    imgSrc: img2,
    bgClass: 'bg-dark',
    borderClass: 'border-dark',
    contentBgClass: 'bg-light',
    textColorClass: 'text-primary',
    title: 'Tasty Fruits',
    discount: 'Free delivery',
  },
  {
    href: '#',
    imgSrc: img3,
    bgClass: 'bg-primary',
    borderClass: 'border-primary',
    contentBgClass: 'bg-secondary',
    textColorClass: 'text-white',
    title: 'Exotic Vegitable',
    discount: 'Discount 30$',
  },
];

const Features2: React.FC = () => {
  return (
    <div className="container-fluid service py-5">
      <div className="container py-5">
        <div className="row g-4 justify-content-center">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <a href={service.href}>
                <div className={`service-item ${service.bgClass} rounded ${service.borderClass}`}>
                  <img src={service.imgSrc} className="img-fluid rounded-top w-100" alt="" />
                  <div className="px-4 rounded-bottom">
                    <div className={`service-content ${service.contentBgClass} text-center p-4 rounded`}>
                      <h5 className={service.textColorClass}>{service.title}</h5>
                      <h3 className="mb-0">{service.discount}</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features2;
