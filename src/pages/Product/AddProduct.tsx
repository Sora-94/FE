// CSS Imports
import '../../assets/Phoenix/css/simplebar.min.css';
import '../../assets/Phoenix/css/theme-rtl.min.css';
import '../../assets/Phoenix/css/theme.min.css';
import '../../assets/Phoenix/css/user-rtl.min.css';
import '../../assets/Phoenix/css/user.min.css';
import '../../assets/Phoenix/css/leaflet.css';
import '../../assets/Phoenix/css/MarkerCluster.css';
import '../../assets/Phoenix/css/MarkerCluster.Default.css';

// JavaScript Imports
import '../../assets/Phoenix/js/popper.min.js';
import '../../assets/Phoenix/js/bootstrap.min.js';
import '../../assets/Phoenix/js/all.min.js';
import '../../assets/Phoenix/js/lodash.min.js';
import '../../assets/Phoenix/js/list.min.js';
import '../../assets/Phoenix/js/feather.min.js';
import '../../assets/Phoenix/js/dayjs.min.js';
// // import '../../assets/Phoenix/js/phoenix.js';
import '../../assets/Phoenix/js/echarts.min.js';
import '../../assets/Phoenix/js/leaflet.js';
import '../../assets/Phoenix/js/leaflet.markercluster.js';
import '../../assets/Phoenix/js/leaflet-tilelayer-colorfilter.min.js';
// // import '../../assets/Phoenix/js/ecommerce-dashboard.js';
import React, { useState } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavbarVertical from '../../components/Layout/LayoutAdmin';

const ProductForm: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [showCategoryForm, setShowCategoryForm] = useState<boolean>(false);
  const [newCategory, setNewCategory] = useState<string>('');

  const handleShowImage = () => {
    const imageUrlInput = $('#imageLinkInput').val()?.toString().trim();
    if (imageUrlInput) {
      setImageUrl(imageUrlInput);
      $('#showImageButton').hide();
    } else {
      alert('Vui lòng điền đường dẫn ảnh vào trước khi hiển thị.');
    }
  };

  const handleEditImage = () => {
    setImageUrl('');
    $('#showImageButton').show();
  };

  const handleAddCategoryClick = () => {
    setShowCategoryForm(true);
  };

  const handleAddCategorySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newCategory.trim()) {
      alert(`Thể loại mới: ${newCategory}`);
      setShowCategoryForm(false);
      setNewCategory('');
    } else {
      alert('Vui lòng nhập tên thể loại.');
    }
  };

  return (
    <NavbarVertical>
                    <div className="profile-page">

      <div className="content"  style={{marginTop:"-100px", marginRight:"0px"}}>
        <nav className="mb-3" aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><a href="#!">Quản Lý</a></li>
            <li className="breadcrumb-item"><a href="#!">Sản phẩm</a></li>
            <li className="breadcrumb-item active">Thêm mới</li>
          </ol>
        </nav>
        <form className="mb-9">
          <div className="row g-3 flex-between-end mb-5">
            <div className="col-auto">
              <h2 className="mb-2">Thêm sản phẩm</h2>
              <h5 className="text-body-tertiary fw-semibold">Đơn hàng đặt trên toàn cửa hàng</h5>
            </div>
            <div className="col-auto">
              <button className="btn btn-phoenix-secondary me-2 mb-2 mb-sm-0" type="button">loại bỏ</button>
              <button className="btn btn-primary mb-2 mb-sm-0" type="submit">Lưu</button>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-12 col-xl-8">
              <h4 className="mb-3">Tên sản phẩm</h4>
              <input className="form-control mb-5" type="text" placeholder="viết tên sản phẩm ở dây..." />
              <div className="mb-6">
                <h4 className="mb-3">Mô tả sản phẩm</h4>
                <textarea
                  name="content"
                  id="content"
                  placeholder="Nhập mô tả sản phẩm..."
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
                />
              </div>
              <h4 className="mb-3">ảnh sản phẩm</h4>
              <div id="imageContainer">
                <div id="imagePreview">
                  {imageUrl && <img src={imageUrl} className="img-fluid" alt="Preview Image" />}
                </div>
                <textarea
                  id="imageLinkInput"
                  className="form-control mt-3"
                  placeholder="Nhập đường dẫn ảnh vào đây..."
                  style={{ height: '200px' }}
                />
                <button id="editImageButton" className="btn btn-primary mt-3" type="button" onClick={handleEditImage}>
                  Chỉnh sửa đường link
                </button>
              </div>
              <button id="showImageButton" className="btn btn-primary mt-3" type="button" onClick={handleShowImage}>
                Hiển thị ảnh
              </button>
            </div>
            <div className="col-12 col-xl-4">
              <div className="row g-2">
                <div className="col-12 col-xl-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <h4 className="card-title mb-4">Thể loại</h4>
                      <div className="row gx-3">
                        <div className="col-12 col-sm-6 col-xl-12">
                          <div className="mb-4">
                            <div className="d-flex flex-wrap mb-2">
                              <h5 className="mb-0 text-body-highlight me-2">Loại</h5>
                              <a className="fw-bold fs-9" href="#!" onClick={handleAddCategoryClick}>Add new category</a>
                            </div>
                            {showCategoryForm && (
                              <form onSubmit={handleAddCategorySubmit} className="mb-3">
                                <input
                                  type="text"
                                  className="form-control mb-2"
                                  placeholder="Nhập tên thể loại mới"
                                  value={newCategory}
                                  onChange={(e) => setNewCategory(e.target.value)}
                                />
                                <button type="submit" className="btn btn-primary">Thêm</button>
                              </form>
                            )}
                            <select className="form-select mb-3" aria-label="category">
                              <option value="men-cloth">Men's Clothing</option>
                              <option value="women-cloth">Women's Clothing</option>
                              <option value="kid-cloth">Kid's Clothing</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-12">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title mb-4">Giá tiền</h4>
                      <div className="row g-3">
                        <div className="col-12 col-sm-6 col-xl-12">
                          <div className="border-bottom border-translucent border-dashed border-sm-0 border-bottom-xl pb-4">
                            <div className="d-flex flex-wrap mb-2">
                              <h5 className="text-body-highlight me-2">Giá gốc</h5>
                            </div>
                            <input className="form-control" type="number" placeholder="Giá chưa giảm" />
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-12">
                          <div className="border-bottom border-translucent border-dashed border-sm-0 border-bottom-xl pb-4">
                            <div className="d-flex flex-wrap mb-2">
                              <h5 className="text-body-highlight me-2">Giảm giá</h5>
                            </div>
                            <input className="form-control" type="number" placeholder="Phần trăm giảm giá" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <h4 className="card-title mb-4">Kho hàng</h4>
                      <div className="row gx-3">
                        <div className="col-12 col-sm-6 col-xl-12">
                          <div className="mb-4">
                            <div className="d-flex flex-wrap mb-2">
                              <h5 className="text-body-highlight me-2">Số lượng</h5>
                            </div>
                            <input className="form-control" type="number" placeholder="Số lượng nhập vào kho" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      </div>
      </NavbarVertical>
  );
};

export default ProductForm;
