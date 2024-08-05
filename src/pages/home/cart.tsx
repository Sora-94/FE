import React, { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import NavbarLayout from "../../components/Home/Navbar";
import FooterLayout from "../../components/Home/Footer";

// Component cho Header trang
const PageHeader: React.FC = () => (
  <div className="container-fluid page-header py-5">
    <h1 className="text-center text-white display-6">Cart</h1>
    <ol className="breadcrumb justify-content-center mb-0">
      <li className="breadcrumb-item"><a href="#">Home</a></li>
      <li className="breadcrumb-item"><a href="#">Pages</a></li>
      <li className="breadcrumb-item active text-white">Cart</li>
    </ol>
  </div>
);

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
  return (price * 1000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};

// Component cho từng hàng trong bảng giỏ hàng
const CartTableRow: React.FC<{ item: CartItem; onUpdateQuantity: (id: number, quantity: number) => void; onRemove: (id: number) => void }> = ({ item, onUpdateQuantity, onRemove }) => (
  <tr>
    <th scope="row">
      <div className="d-flex align-items-center">
        <img src={item.image} className="img-fluid me-5 rounded-circle" style={{ width: '80px', height: '80px' }} alt="" />
      </div>
    </th>
    <td>
      <p className="mb-0 mt-4">{item.name}</p>
    </td>
    <td>
      <p className="mb-0 mt-4">{formatCurrency(item.price)}</p>
    </td>
    <td>
      <div className="input-group quantity mt-4" style={{ width: '100px' }}>
        <div className="input-group-btn">
          <button className="btn btn-sm btn-minus rounded-circle bg-light border" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
            <i className="fa fa-minus"></i>
          </button>
        </div>
        <input type="text" className="form-control form-control-sm text-center border-0" value={item.quantity} readOnly />
        <div className="input-group-btn">
          <button className="btn btn-sm btn-plus rounded-circle bg-light border" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </div>
    </td>
    <td>
      <p className="mb-0 mt-4">{formatCurrency(item.total)}</p>
    </td>
    <td>
      <button className="btn btn-md rounded-circle bg-light border mt-4" onClick={() => onRemove(item.id)}>
        <i className="fa fa-times text-danger"></i>
      </button>
    </td>
  </tr>
);

// Component chính cho trang giỏ hàng
const CartPage: React.FC = () => {
  const history = useNavigate ();

  // Kiểm tra token khi trang được tải
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history('/signin'); // Chuyển hướng đến trang đăng nhập nếu không có token
    }
  }, [history]);

  // State cho các sản phẩm trong giỏ hàng
  const [cartItems, setCartItems] = React.useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem('cart');
    return storedCartItems ? JSON.parse(storedCartItems).map((item: CartItem) => ({
      ...item,
      total: item.price * item.quantity,
    })) : [];
  });

  // Lưu giỏ hàng vào localStorage
  const saveCartItemsToLocalStorage = (items: CartItem[]) => {
    localStorage.setItem('cart', JSON.stringify(items));
  };

  // Hàm cập nhật số lượng sản phẩm
  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    const updatedItems = cartItems.map(item =>
      item.id === id
        ? { ...item, quantity, total: item.price * quantity }
        : item
    );
    setCartItems(updatedItems);
    saveCartItemsToLocalStorage(updatedItems);
  };

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const handleRemove = (id: number) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    saveCartItemsToLocalStorage(updatedItems);
  };

  // Tính toán subtotal và total
  const subtotal = cartItems.reduce((sum, item) => sum + item.total, 0);
  const shipping = 30;
  const total = subtotal + shipping;

  return (
    <>
      <NavbarLayout />
      <PageHeader />
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Products</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <CartTableRow
                    key={item.id}
                    item={item}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemove={handleRemove}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <div className="row g-4 justify-content-end">
            <div className="col-8"></div>
            <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
              <div className="bg-light rounded">
                <div className="p-4">
                  <h1 className="display-6 mb-4">Cart <span className="fw-normal">Total</span></h1>
                  <div className="d-flex justify-content-between mb-4">
                    <h5 className="mb-0 me-4">Subtotal:</h5>
                    <p className="mb-0">{formatCurrency(subtotal)}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 className="mb-0 me-4">Shipping</h5>
                    <div>
                      <p className="mb-0">{formatCurrency(shipping)}</p>
                    </div>
                  </div>
                </div>
                <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                  <h5 className="mb-0 ps-4 me-4">Total</h5>
                  <p className="mb-0 pe-4">{formatCurrency(total)}</p>
                </div>
                <a href='checkout' className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4" type="button">
                  Proceed Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterLayout />
    </>
  );
};

export default CartPage;
