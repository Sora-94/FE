import React, { useState } from 'react';
import NavbarLayout from "../../components/Home/Navbar";
import FooterLayout from "../../components/Home/Footer";
import PaymentForm from '../../services/QRCodeGenerator';

const DonationForm: React.FC = () => {
  const [donationAmount, setDonationAmount] = useState<number>(1000);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [anonymousDonation, setAnonymousDonation] = useState<boolean>(false);
  const [country, setCountry] = useState<string>('vietnam');
  const [showPaymentForm, setShowPaymentForm] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setShowPaymentForm(true);
  };

  return (
    <>
      <NavbarLayout />
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Quyên góp</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Trang chủ</a>
          </li>
          <li className="breadcrumb-item active text-white">Quyên góp</li>
        </ol>
      </div>
      <div className="donate">
        <div className="condition">
          <div className="section">
            <div className="left-section text-center text-md-left mr-md-5">
              <div className="content">
                <h3 className="mb-3 text-uppercase">CHUNG TAY CÙNG CHÚNG TÔI ĐỂ THAY ĐỔI CUỘC SỐNG</h3>
                <h1 style={{ color: "white" }}>100% các khoản đóng góp sẽ được sử dụng để hỗ trợ người thụ hưởng của chúng tôi</h1>
              </div>
            </div>
            <div className="right-section">
              <div className="text-center mb-4">
                <h2>Thông tin Quyên góp</h2>
                <p>Trao quyền cho trẻ em và phụ nữ Việt Nam qua các chương trình y tế và giáo dục</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="donation-amount">Số tiền ủng hộ:</label>
                  <div className="d-flex">
                    <div className="form-group rate position-relative w-100 mr-2">
                      <input
                        type="number"
                        id="donation-amount"
                        name="donation-amount"
                        className="form-control"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(parseInt(e.target.value))}
                      />
                      <span>VND</span>
                    </div>
                  </div>
                </div>

                <fieldset className="form-group">
                  <label>Thông tin cá nhân:</label>
                  <div className="form-group">
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      style={{ marginBottom: 15 }}
                      className="form-control"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      className="form-control"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </fieldset>
                <div className="form-group">
                  <label htmlFor="email">Địa chỉ email để nhận thông tin: *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    id="anonymous-donation"
                    name="anonymous-donation"
                    className="form-check-input"
                    checked={anonymousDonation}
                    onChange={(e) => setAnonymousDonation(e.target.checked)}
                  />
                  <label htmlFor="anonymous-donation" className="form-check-label">Make this an anonymous donation.</label>
                </div>
                <div className="form-group">
                  <label htmlFor="country">Đóng góp tới:</label>
                  <select
                    id="country"
                    name="country"
                    className="form-control"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="vietnam">Việt Nam</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success btn-block">Submit</button>
              </form>
              {showPaymentForm && (
                <PaymentForm
                  amount={donationAmount}
                  bankCode="MSCBVNVX"
                  orderDescription="Donation"
                  orderType="other"
                  language="vn"
                />
              )}
            </div>
          </div>
        </div>
        <section className="py-60px md:py-80px xl:py-100px xxl:py-120px no-pd-bottom">
          <div className="inner mb-50px md:mb-60px xl:mb-80px">
            <div className="text-center wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".1s">
              <span className="block text-18px lg:text-20px leading-26px text-primary font-semibold uppercase mb-5px lg:mb-10px">
                CÁCH THỨC QUYÊN GÓP
              </span>
              <h2 className="h1 text-black-200 mb-20px lg:mb-30px">
                Bạn sẽ giúp đỡ trẻ em và phụ nữ Việt Nam như thế nào
              </h2>
              <div className="copy">
                <p>
                  Mỗi khoản quyên góp, dù lớn hay nhỏ, đều vô cùng quan trọng và có
                  ý nghĩa trong việc hỗ trợ hành trình của VCF. Những đóng góp hào
                  phóng của bạn sẽ hỗ trợ VinaCapital Foundation cứu những trái tim
                  bé bỏng, mang lại cơ hội tiếp cận dịch vụ y tế - giáo dục - nước
                  sạch có chất lượng cho các cộng đồng còn nhiều thiếu thốn cũng như
                  nâng cao năng lực y tế ở những vùng khó khăn. Cùng nhau, chúng ta
                  có thể thay đổi cuộc sống và tạo ra tương lai tốt đẹp hơn cho trẻ
                  em và phụ nữ Việt Nam.
                </p>
              </div>
            </div>
          </div>

          <div className="py-50px md:py-60px xl:py-80px bg-light-orange-100">
            <div className="inner">
              <div className="step-row wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".1s">
                <div className="step-col">
                  <div className="icon">
                    <img
                      src="https://vinacapitalfoundation.org/frontend/VCF/images/svg/icon-donate-step-1.svg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3 className="text-22px md:text-24px text-black-200 font-semibold leading-30px md:leading-32px mb-10px">
                      QUYÊN GÓP
                    </h3>
                    <div className="copy">
                      <p className="mb-0">
                        Đóng góp bằng hình thức chuyển khoản trực tiếp hoặc trực
                        tuyến
                      </p>
                    </div>
                  </div>
                </div>
                <div className="step-col">
                  <div className="icon">
                    <img
                      src="https://vinacapitalfoundation.org/frontend/VCF/images/svg/icon-donate-step-2.svg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3 className="text-22px md:text-24px text-black-200 font-semibold leading-30px md:leading-32px mb-10px">
                      TIẾP NHẬN
                    </h3>
                    <div className="copy">
                      <p className="mb-0">
                        VCF sẽ gửi cho bạn email xác nhận và hóa đơn điện tử
                      </p>
                    </div>
                  </div>
                </div>
                <div className="step-col">
                  <div className="icon">
                    <img
                      src="https://vinacapitalfoundation.org/frontend/VCF/images/svg/icon-donate-step-3.svg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3 className="text-22px md:text-24px text-black-200 font-semibold leading-30px md:leading-32px mb-10px">
                      CẢM ƠN
                    </h3>
                    <div className="copy">
                      <p className="mb-0">
                        Cảm ơn bạn đã chung tay vì trẻ em và phụ nữ Việt Nam
                      </p>
                    </div>
                  </div>
                </div>
                <div className="step-col">
                  <div className="icon">
                    <img
                      src="https://vinacapitalfoundation.org/frontend/VCF/images/svg/icon-donate-step-4.svg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3 className="text-22px md:text-24px text-black-200 font-semibold leading-30px md:leading-32px mb-10px">
                      TÁC ĐỘNG
                    </h3>
                    <div className="copy">
                      <p className="mb-0">
                        Bạn sẽ tạo ra những thay đổi tích cực cho các gia đình
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterLayout />
    </>
  );
};

export default DonationForm;
