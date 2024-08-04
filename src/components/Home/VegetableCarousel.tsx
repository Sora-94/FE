import React, { useEffect, useState } from 'react';
import ComboService from '../../services/combo'; // Đảm bảo đường dẫn đúng theo cấu trúc thư mục của bạn
import { comboDto } from '../../models/combo'; // Đảm bảo đường dẫn đúng theo cấu trúc thư mục của bạn
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const VegetableCarousel: React.FC = () => {
  const [combos, setCombos] = useState<comboDto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCombos = async () => {
      try {
        setLoading(true);
        const combosData = await ComboService.getCombos();
        setCombos(combosData);
      } catch (err) {
        setError('Failed to fetch combos.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCombos();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container-fluid vesitable py-5">
      <div className="container py-5">
        <h1 className="mb-0">Combo</h1>
        <OwlCarousel className="owl-theme" loop margin={10} nav>
          {combos.map((item, index) => (
            <div className="item" key={index}>
              <div className="border border-primary rounded position-relative vesitable-item">
                <div className="vesitable-img">
                  <img src={item.image || "https://via.placeholder.com/150"} className="img-fluid w-100 rounded-top" alt={item.name} />
                </div>
                <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: '10px', right: '10px' }}>
                  Combo
                </div>
                <div className="p-4 rounded-bottom">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <div className="d-flex justify-content-between flex-lg-wrap">
                    <p className="text-dark fs-5 fw-bold mb-0">{item.price}</p>
                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
                      <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart
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
