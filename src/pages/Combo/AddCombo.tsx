import React, { useState } from 'react';
import NavbarVertical from '../../components/Layout/LayoutAdmin';

const AddCombo: React.FC = () => {
  const [comboName, setComboName] = useState('');
  const [comboDescription, setComboDescription] = useState('');
  const [comboImage, setComboImage] = useState('');
  const [comboPrice, setComboPrice] = useState(0);
  const [comboDiscount, setComboDiscount] = useState(0);
  const [productCombos, setProductCombos] = useState([{ productId: '', quantity: 0 }]);

  const handleAddProductCombo = () => {
    setProductCombos([...productCombos, { productId: '', quantity: 0 }]);
  };

  const handleRemoveProductCombo = (index: number) => {
    const newProductCombos = productCombos.filter((_, i) => i !== index);
    setProductCombos(newProductCombos);
  };

  const handleProductComboChange = (index: number, field: string, value: any) => {
    const newProductCombos = [...productCombos];
    newProductCombos[index] = { ...newProductCombos[index], [field]: value };
    setProductCombos(newProductCombos);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ comboName, comboDescription, comboImage, comboPrice, comboDiscount, productCombos });
  };

  return (
    <NavbarVertical>
    <div className="content profile-page" style={{ marginTop: '-100px', marginRight: '0px' }}>
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="#!">Quản Lý</a></li>
          <li className="breadcrumb-item"><a href="#!">Combo</a></li>
          <li className="breadcrumb-item active">Thêm mới</li>
        </ol>
      </nav>
      <form className="mb-9" onSubmit={handleFormSubmit}>
        <div className="row g-3 flex-between-end mb-5">
          <div className="col-auto">
            <h2 className="mb-2">Thêm Combo</h2>
            <h5 className="text-body-tertiary fw-semibold">Đơn hàng đặt trên toàn cửa hàng</h5>
          </div>
          <div className="col-auto">
            <button className="btn btn-phoenix-secondary me-2 mb-2 mb-sm-0" type="button">loại bỏ</button>
            <button className="btn btn-primary mb-2 mb-sm-0" type="submit">Lưu</button>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-12 col-xl-8">
            <h4 className="mb-3">Tên Combo</h4>
            <input className="form-control mb-5" type="text" placeholder="viết tên combo ở dây..." value={comboName} onChange={(e) => setComboName(e.target.value)} />
            <div className="mb-6">
              <h4 className="mb-3">Mô tả Combo</h4>
              <textarea
                name="content"
                id="content"
                placeholder="Nhập mô tả combo..."
                style={{
                  display: 'block',
                  width: '100%',
                  height: '200px',
                  padding: '.5rem 1rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  lineHeight: 1.49,
                  color: 'var(--phoenix-body-color)',
                  appearance: 'none',
                  backgroundColor: 'var(--phoenix-emphasis-bg)',
                  backgroundClip: 'padding-box',
                  border: 'var(--phoenix-border-width) solid var(--phoenix-border-color)',
                  borderRadius: 'var(--phoenix-border-radius)'
                }}
                value={comboDescription}
                onChange={(e) => setComboDescription(e.target.value)}
              />
            </div>
            <h4 className="mb-3">ảnh Combo</h4>
            <div id="imageContainer">
              <div id="imagePreview">
                {comboImage && <img src={comboImage} className="img-fluid" alt="Preview Image" />}
              </div>
              <textarea
                id="imageLinkInput"
                className="form-control mt-3"
                placeholder="Nhập đường dẫn ảnh vào đây..."
                style={{ height: '200px' }}
                value={comboImage}
                onChange={(e) => setComboImage(e.target.value)}
              />
            </div>
          
          </div>
          <div className="col-12 col-xl-4">
            <div className="card" style={{marginBottom:"20px"}}>
              <div className="card-body">
                <div className="mt-5">
              <h4 className="mb-3">Sản phẩm trong Combo</h4>
              {productCombos.map((productCombo, index) => (
                <div key={index} className="mb-4">
                  <h5 className="mb-3">Sản phẩm {index + 1}</h5>
                  <select
                    className="form-select mb-3"
                    aria-label={`product-${index}`}
                    value={productCombo.productId}
                    onChange={(e) => handleProductComboChange(index, 'productId', e.target.value)}
                  >
                    <option value="">Chọn sản phẩm</option>
                    <option value="product-1">Product 1</option>
                    <option value="product-2">Product 2</option>
                    <option value="product-3">Product 3</option>
                    {/* Thêm các sản phẩm khác tại đây */}
                  </select>
                  <h5 className="mb-3">Số lượng</h5>
                  <input
                    className="form-control mb-3"
                    type="number"
                    placeholder="Số lượng"
                    value={productCombo.quantity}
                    onChange={(e) => handleProductComboChange(index, 'quantity', parseInt(e.target.value))}
                  />
                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={() => handleRemoveProductCombo(index)}
                  >
                    Xóa
                  </button>
                </div>
              ))}
              <button className="btn btn-primary" type="button" onClick={handleAddProductCombo}>
                Thêm sản phẩm
              </button>
            </div>
              </div>
              
            </div>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-4">Giá tiền</h4>
                <div className="row g-3">
                  <div className="col-12 col-sm-6 col-xl-12">
                    <div className="border-bottom border-translucent border-dashed border-sm-0 border-bottom-xl pb-4">
                      <div className="d-flex flex-wrap mb-2">
                        <h5 className="text-body-highlight me-2">Giá gốc</h5>
                      </div>
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Giá chưa giảm"
                        value={comboPrice}
                        onChange={(e) => setComboPrice(parseInt(e.target.value))}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-xl-12">
                    <div className="border-bottom border-translucent border-dashed border-sm-0 border-bottom-xl pb-4">
                      <div className="d-flex flex-wrap mb-2">
                        <h5 className="text-body-highlight me-2">Giảm giá</h5>
                      </div>
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Phần trăm giảm giá"
                        value={comboDiscount}
                        onChange={(e) => setComboDiscount(parseInt(e.target.value))}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </form>
    </div>
    </NavbarVertical>
  );
};

export default AddCombo;

