import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: 'fa-car-side',
      title: 'Giao hàng miễn phí',
      description: 'Miễn phí cho đơn đặt hàng trên 300.000đ',
    },
    {
      icon: 'fa-user-shield',
      title: 'Thanh toán bảo đảm',
      description: 'Thanh toán bảo mật 100%, nhiêu phương thức',
    },
    {
      icon: 'fa-exchange-alt',
      title: 'Trả hàng trong 30 ngày',
      description: 'Đảm bảo tiền trong 30 ngày',
    },
    {
      icon: 'fa-phone-alt',
      title: 'Hỗ trợ 24/7',
      description: 'Hỗ trợ mọi lúc nhanh chóng',
    },
  ];

  return (
    <div className="container-fluid featurs py-5">
      <div className="container py-5">
        <div className="row g-4">
          {features.map((feature, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className={`fas ${feature.icon} fa-3x text-white`}></i>
                </div>
                <div className="featurs-content text-center">
                  <h5>{feature.title}</h5>
                  <p className="mb-0">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
