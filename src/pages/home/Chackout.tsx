import React, { useEffect, useState } from "react";
import NavbarLayout from "../../components/Home/Navbar";
import FooterLayout from "../../components/Home/Footer";
import "@fortawesome/fontawesome-free/css/all.css"; // FontAwesome
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "../../assets/lib/owlcarousel/assets/owl.carousel.min.css"; // OwlCarousel
import "../../assets/css/bootstrap.min.css"; // Bootstrap
import "../../assets/css/style.css"; // Custom CSS
import { getUserProfile } from "../../services/user"; // Import hàm getUserProfile
import { UserDTO } from "../../models/user"; // Import đúng kiểu dữ liệu
import { useNavigate } from "react-router-dom"; // Để điều hướng

// Interface cho sản phẩm trong giỏ hàng
interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
}

const formatCurrency = (price: number) => {
  return (price).toLocaleString("vi-VN", { style: "currency", currency: "VND" });
};
// Component chính cho trang giỏ hàng
const CartPage: React.FC = () => {
  const navigate = useNavigate(); // Khai báo useNavigate
  const [cartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem("cart");
    return storedCartItems
      ? JSON.parse(storedCartItems).map((item: CartItem) => ({
          ...item,
          total: item.price * item.quantity,
        }))
      : [];
  });

  // State cho thông tin người dùng
  const [userProfile, setUserProfile] = useState<UserDTO>({
    id: "",
    firstName: "",
    lastName: "",
    address: "",

    email: "",
    role: "",
    imagePath: "",
    phoneNumber: ""
  });

  // State cho lỗi
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Lấy thông tin người dùng từ API và điền vào form
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // Nếu không có token, chuyển hướng đến trang đăng nhập
      navigate("/login");
    } else {
      getUserProfile(token)
        .then((data) => {
          setUserProfile(data);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
    }
  }, [navigate]);


  // Tính toán subtotal và total
  const subtotal = cartItems.reduce((sum, item) => sum + item.total, 0);
  const shipping = 30;
  const total = subtotal + shipping;

  // Kiểm tra lỗi cho các trường trong form
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!userProfile.firstName) newErrors.firstName = "First Name is required.";
    if (!userProfile.lastName) newErrors.lastName = "Last Name is required.";
    if (!userProfile.address) newErrors.address = "Address is required.";
    if (!userProfile.phoneNumber) newErrors.phoneNumber = "phoneNumber is required.";
    if (!userProfile.email) newErrors.email = "Email is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Xử lý khi gửi form
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      await submitOrder();
    }
  };

  // Hàm gửi yêu cầu đặt hàng
  const submitOrder = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found");
      return;
    }

    const orderItems = cartItems.map(item => ({
      quantity: item.quantity,
      unitPrice: item.price,
      productId: item.id // Điều chỉnh nếu `productId` không phải là `id`
    }));

    const orderData = {
      orderDate: new Date().toISOString(),
      status: 0, // Bạn có thể thay đổi giá trị status nếu cần
      orderItems
    };

    try {
      const response = await fetch("https://be-gu7h.onrender.com/api/v1/Order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(orderData),
        
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Xử lý kết quả thành công
      alert("Đặt hàng thành công");
      localStorage.removeItem("cart");
      navigate("/"); // Chuyển hướng đến trang thành công
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <>
      <NavbarLayout />
      {/* <!-- Single Page Header start --> */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Checkout</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active text-white">Checkout</li>
        </ol>
      </div>
      {/* <!-- Single Page Header End --> */}

      {/* <!-- Checkout Page Start --> */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <h1 className="mb-4">Billing details</h1>
          <form onSubmit={handleSubmit}>
            <div className="row g-5">
              <div className="col-md-12 col-lg-6 col-xl-6">
                <div className="row">
                  <div className="col-md-12 col-lg-6">
                    <div className="form-item w-100">
                      <label className="form-label my-3">
                        First Name<sup>*</sup>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={userProfile.firstName ?? ""} // Sử dụng chuỗi rỗng thay vì null
                        onChange={(e) => setUserProfile({ ...userProfile, firstName: e.target.value })}
                      />
                      {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="form-item w-100">
                      <label className="form-label my-3">
                        Last Name<sup>*</sup>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={userProfile.lastName ?? ""} // Sử dụng chuỗi rỗng thay vì null
                        onChange={(e) => setUserProfile({ ...userProfile, lastName: e.target.value })}
                      />
                      {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
                    </div>
                  </div>
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Address <sup>*</sup>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="House Number Street Name"
                    value={userProfile.address ?? ""} // Sử dụng chuỗi rỗng thay vì null
                    onChange={(e) => setUserProfile({ ...userProfile, address: e.target.value })}
                  />
                  {errors.address && <div className="text-danger">{errors.address}</div>}
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                  Phone Number<sup>*</sup>
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    value={userProfile.phoneNumber ?? ""} // Sử dụng chuỗi rỗng thay vì null
                    onChange={(e) => setUserProfile({ ...userProfile, phoneNumber: e.target.value })}
                  />
                  {errors.phoneNumber && <div className="text-danger">{errors.phoneNumber}</div>}
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Email Address<sup>*</sup>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    value={userProfile.email ?? ""} // Sử dụng chuỗi rỗng thay vì null
                    onChange={(e) => setUserProfile({ ...userProfile, email: e.target.value })}
                  />
                  {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>
                <hr />
                <div className="form-item">
                  <label className="form-label my-3">
                    Order Notes (Optional)
                  </label>
                  <textarea className="form-control" rows={5} placeholder="Notes about your order..."></textarea>
                </div>
                <div className="form-item w-100">
                  <button className="btn btn-primary py-3 px-4" type="submit">
                    Place Order
                  </button>
                </div>
              </div>
            
              <div className="col-md-12 col-lg-6 col-xl-6">
              <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Products</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems.map((item) => (
                            <tr key={item.id}>
                              <th scope="row">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                                />
                                {item.name}
                              </th>
                              <td>{item.quantity}</td>
                              <td>{formatCurrency(item.price)}</td>
                              <td>{formatCurrency(item.total)}</td>
                            </tr>
                          ))}
                          <tr>
                            <th scope="row"></th>
                            <td className="py-5"></td>
                            <td className="py-5"></td>
                            <td className="py-5">Subtotal:</td>
                            <td className="py-5">{formatCurrency(subtotal)}</td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <td className="py-5"></td>
                            <td className="py-5"></td>
                            <td className="py-5">Shipping:</td>
                            <td className="py-5">{formatCurrency(shipping)}</td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <td className="py-5"></td>
                            <td className="py-5"></td>
                            <td className="py-5">Total:</td>
                            <td className="py-5">{formatCurrency(total)}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                <div className="bg-light rounded p-4">
                  <h4 className="mb-4">Order Summary</h4>
                  <div className="d-flex justify-content-between">
                    <h6 className="mb-3">Subtotal</h6>
                    <p className="mb-3">{formatCurrency(subtotal)}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6 className="mb-3">Shipping</h6>
                    <p className="mb-3">{formatCurrency(shipping)}</p>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <h6 className="mb-3">Total</h6>
                    <p className="mb-3">{formatCurrency(total)}</p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- Checkout Page End --> */}

      <FooterLayout />
    </>
  );
};

export default CartPage;
