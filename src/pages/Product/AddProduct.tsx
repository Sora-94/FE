// src/components/ProductForm.tsx

import React, { useState, useEffect } from 'react';
import NavbarVertical from '../../components/Layout/LayoutAdmin';
import { getAllCategories } from '../../services/category'; // Import hàm gọi API
import { CategoryDto } from '../../models/category'; // Import hàm gọi API
import { createProduct } from '../../services/product'; // Import hàm tạo sản phẩm
import { useNavigate } from 'react-router-dom';
const ProductForm: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [showCategoryForm, setShowCategoryForm] = useState<boolean>(false);
  const [newCategory, setNewCategory] = useState<string>('');
  const [categories, setCategories] = useState<CategoryDto[]>([]);
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [discount, setDiscount] = useState<number>(0);
  const [stockQuantity, setStockQuantity] = useState<number>(0);
  const [categoryId, setCategoryId] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories = await getAllCategories();
      setCategories(fetchedCategories);
    };

    fetchCategories();
  }, []);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const productData = {
      name,
      price,
      image: imageUrl,
      description,
      discount,
      stockQuantity,
      categoryId
    };

    try {
      const response = await createProduct(productData);
      alert('Sản phẩm đã được tạo thành công!');
      console.log('Response:', response);
      navigate('/product'); // Điều hướng đến trang đăng nhập
    } catch (error) {
      alert('Có lỗi xảy ra khi tạo sản phẩm.');
      console.error('Error:', error);
    }
  };

  return (
    <NavbarVertical>
      <div className="profile-page">
        <div className="content" style={{ marginTop: "-100px", marginRight: "0px" }}>
          <nav className="mb-3" aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="#!">Quản Lý</a></li>
              <li className="breadcrumb-item"><a href="#!">Sản phẩm</a></li>
              <li className="breadcrumb-item active">Thêm mới</li>
            </ol>
          </nav>
          <form className="mb-9" onSubmit={handleSubmit}>
            <div className="row g-3 flex-between-end mb-5">
              <div className="col-auto">
                <h2 className="mb-2">Thêm sản phẩm</h2>
                <h5 className="text-body-tertiary fw-semibold">Đơn hàng đặt trên toàn cửa hàng</h5>
              </div>
              <div className="col-auto">
                <a href="/product" className="btn btn-phoenix-secondary me-2 mb-2 mb-sm-0" type="button">loại bỏ</a>
                <button className="btn btn-primary mb-2 mb-sm-0" type="submit">Lưu</button>
              </div>
            </div>
            <div className="row g-5">
              <div className="col-12 col-xl-8">
                <h4 className="mb-3">Tên sản phẩm</h4>
                <input
                  className="form-control mb-5"
                  type="text"
                  placeholder="viết tên sản phẩm ở dây..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <h4 className="mb-3">Ảnh sản phẩm</h4>
                <div id="imageContainer">
                  <div id="imagePreview">
                    {imageUrl && <img src={imageUrl} className="img-fluid" alt="Preview Image" />}
                  </div>
                  <textarea
                    id="imageLinkInput"
                    className="form-control mt-3"
                    placeholder="Nhập đường dẫn ảnh vào đây..."
                    style={{ height: '200px' }}
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
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
                              <select
                                id="categorySelect"
                                className="form-select"
                                value={categoryId}
                                onChange={(e) => setCategoryId(e.target.value)}
                              >
                                <option value="">Chọn thể loại</option>
                                {categories.map(category => (
                                  <option key={category.id} value={category.id}>{category.name}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-xl-12">
                            <div className="mb-4">
                              <label htmlFor="price" className="form-label">Giá sản phẩm</label>
                              <input
                                type="number"
                                id="price"
                                className="form-control"
                                placeholder="Nhập giá sản phẩm"
                                value={price}
                                onChange={(e) => setPrice(Number(e.target.value))}
                              />
                            </div>
                            <div className="mb-4">
                              <label htmlFor="discount" className="form-label">Giảm giá (%)</label>
                              <input
                                type="number"
                                id="discount"
                                className="form-control"
                                placeholder="Nhập giảm giá"
                                value={discount}
                                onChange={(e) => setDiscount(Number(e.target.value))}
                              />
                            </div>
                            <div className="mb-4">
                              <label htmlFor="stockQuantity" className="form-label">Số lượng tồn kho</label>
                              <input
                                type="number"
                                id="stockQuantity"
                                className="form-control"
                                placeholder="Nhập số lượng tồn kho"
                                value={stockQuantity}
                                onChange={(e) => setStockQuantity(Number(e.target.value))}
                              />
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
