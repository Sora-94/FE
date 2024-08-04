import React from 'react';
const HeroHeader: React.FC = () => {
    return (
        <div className="container-fluid py-5 mb-5 hero-header">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-md-12 col-lg-7">
                        <h4 className="mb-3 text-secondary">100% Thực phẩm sạch</h4>
                        <h1 className="mb-5 display-3 text-primary">Đảm bảo vệ sinh an toàn thực phẩm</h1>
                        <div className="position-relative mx-auto">
                            <input className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill" type="number" placeholder="tìm kiếm" />
                            <button type="submit" className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100" style={{ top: 0, right: '25%' }}>Gửi ngay</button>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active rounded">
                                    <img src="https://img.pikbest.com/templates/20210824/bg/01f852f4c783dff91952e84e9d453ef8_87690.png!bw700" className="img-fluid w-100 h-100 bg-secondary rounded" alt="First slide" />
                                </div>
                                <div className="carousel-item rounded">
                                    <img src="https://img.pikbest.com/origin/05/84/66/65rpIkbEsTfid.jpg!w700wp"className="img-fluid w-100 h-100 rounded" alt="Second slide" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroHeader;
