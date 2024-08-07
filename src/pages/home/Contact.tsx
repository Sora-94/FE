import NavbarLayout from '../../components/Home/Navbar';

import FooterLayout from '../../components/Home/Footer';
import '@fortawesome/fontawesome-free/css/all.css'; // FontAwesome
// import 'lightbox2/dist/css/lightbox.min.css'; // Lightbox
// import '../../assets/lib/lightbox/css/lightbox.min.css'; // 
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import '../../assets/lib/owlcarousel/assets/owl.carousel.min.css'; // OwlCarousel
import '../../assets/css/bootstrap.min.css'; // Bootstrap
import '../../assets/css/style.css'; // Custom CSS;
function Contact(){
    return(
        <>
        <NavbarLayout/>
        <div className="container-fluid page-header py-5">
            <h1 className="text-center text-white display-6">Liên hệ</h1>
            <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                <li className="breadcrumb-item active text-white">Liên hệ</li>
            </ol>
        </div>

        <div className="container-fluid contact py-5">
            <div className="container py-5">
                <div className="p-5 bg-light rounded">
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="text-center mx-auto" style={{width: '700px'}}>
                                <h1 className="text-primary">Liên lạc với chúng tôi </h1>
                                <p className="mb-4">Để lại thông tin hoặc đến với chúng tôi tại.</p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="h-100 rounded">
                                <iframe className="rounded w-100" 
                                style={{height: '400px;'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd" 
                                loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className="col-lg-7">
                           
                                <input type="text" className="w-100 form-control border-0 py-3 mb-4" placeholder="Tên bạn"/>
                                <input type="email" className="w-100 form-control border-0 py-3 mb-4" placeholder="Nhập email của bạn"/>
                                <textarea className="w-100 form-control border-0 mb-4" rows={5} cols={10} placeholder="Tin nhắn của bạn"></textarea>
                                <button className="w-100 btn form-control border-secondary py-3 bg-white text-primary " type="submit">Gửi</button>
                           
                        </div>
                        <div className="col-lg-5">
                            <div className="d-flex p-4 rounded mb-4 bg-white">
                                <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                                <div>
                                    <h4>Địa chỉ</h4>
                                    <p className="mb-2">Công viên phần mềm Quang Trung,phường Tân Chánh Hiệp, Quận 12, thành phố Hồ Chí Minh</p>
                                </div>
                            </div>
                            <div className="d-flex p-4 rounded mb-4 bg-white">
                                <i className="fas fa-envelope fa-2x text-primary me-4"></i>
                                <div>
                                    <h4>Hộp thư điện tử</h4>
                                    <p className="mb-2">fb98@gmail.com</p>
                                </div>
                            </div>
                            <div className="d-flex p-4 rounded bg-white">
                                <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>
                                <div>
                                    <h4>Điện thoại</h4>
                                    <p className="mb-2">+84 865033560</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterLayout/>
        </>
    )
}
export default Contact;