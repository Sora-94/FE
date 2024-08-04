import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById, updateProduct } from '../../services/product';
import { getAllCategories } from '../../services/category'; // Thêm import này
import NavbarVertical from '../../components/Layout/LayoutAdmin';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { ProductDto } from '../../models/product';
import { CategoryDto } from '../../models/category'; // Thêm import này
import { useNavigate } from 'react-router-dom';
const ProductForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductDto | null>(null);
  const [categories, setCategories] = useState<CategoryDto[]>([]);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [showCategoryForm, setShowCategoryForm] = useState<boolean>(false);
  const [newCategory, setNewCategory] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchProduct(id);
    }
    fetchCategories();
  }, [id]);

  const fetchProduct = async (productId: string) => {
    try {
      const fetchedProduct = await getProductById(productId);
      setProduct(fetchedProduct);
      setImageUrl(fetchedProduct.image);
    } catch (error) {
      console.error('Lỗi khi tải sản phẩm:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const fetchedCategories = await getAllCategories();
      setCategories(fetchedCategories);
    } catch (error) {
      console.error('Lỗi khi tải danh mục:', error);
    }
  };

  const handleShowImage = () => {
    const imageUrlInput = (document.getElementById('imageLinkInput') as HTMLInputElement).value.trim();
    if (imageUrlInput) {
      setImageUrl(imageUrlInput);
      (document.getElementById('showImageButton') as HTMLButtonElement).style.display = 'none';
    } else {
      alert('Vui lòng điền đường dẫn ảnh vào trước khi hiển thị.');
    }
  };

  const handleEditImage = () => {
    setImageUrl('');
    (document.getElementById('showImageButton') as HTMLButtonElement).style.display = 'block';
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

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (product) {
      const name = (document.getElementById('name') as HTMLInputElement).value;
      const description = (document.getElementById('description') as HTMLTextAreaElement).value;
      const price = parseFloat((document.getElementById('price') as HTMLInputElement).value);
      const discount = parseFloat((document.getElementById('discount') as HTMLInputElement).value);
      const stockQuantity = parseInt((document.getElementById('stockQuantity') as HTMLInputElement).value, 10);
      const categoryId = (document.getElementById('category') as HTMLSelectElement).value;
      
      // Kiểm tra các điều kiện
      if (!name.trim()) {
        alert('Tên sản phẩm không được để trống.');
        return;
      }
      if (!categoryId) {
        alert('Danh mục không được để trống.');
        return;
      }
      if (isNaN(price) || price <= 0) {
        alert('Giá phải là một số dương.');
        return;
      }
      if (isNaN(discount) || discount < 0) {
        alert('Giảm giá phải là một số không âm.');
        return;
      }
      if (discount > price) {
        alert('Giảm giá không được lớn hơn giá.');
        return;
      }
  
      const updatedProduct = {
        ...product,
        name,
        description,
        price,
        discount,
        stockQuantity,
        categoryId,
        image: imageUrl,
        isDeleted: false // Hoặc giá trị thích hợp cho isDeleted nếu cần
      };
  
      try {
        await updateProduct(id!, updatedProduct);
        alert('Sản phẩm đã được cập nhật thành công.');
        navigate('/product');
      } catch (error) {
        console.error('Lỗi khi cập nhật sản phẩm:', error);
        alert('Đã xảy ra lỗi khi cập nhật sản phẩm.');
      }
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
              <li className="breadcrumb-item active" aria-current="page">Chỉnh sửa sản phẩm</li>
            </ol>
          </nav>
          <div className="container">
            {product ? (
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Chỉnh sửa sản phẩm</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Tên sản phẩm</label>
                      <input type="text" className="form-control" id="name" defaultValue={product.name} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">Mô tả</label>
                      <textarea className="form-control" id="description" rows={3} defaultValue={product.description}></textarea>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="price" className="form-label">Giá</label>
                      <input type="number" className="form-control" id="price" defaultValue={product.price} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="discount" className="form-label">Giảm giá</label>
                      <input type="number" className="form-control" id="discount" defaultValue={product.discount} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="stockQuantity" className="form-label">Số lượng tồn kho</label>
                      <input type="number" className="form-control" id="stockQuantity" defaultValue={product.stockQuantity} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="category" className="form-label">Danh mục</label>
                      <select className="form-control" id="category" defaultValue={product.categoryId}>
                        {categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                      <button type="button" className="btn btn-link" onClick={handleAddCategoryClick}>
                        Thêm thể loại mới
                      </button>
                      {showCategoryForm && (
                        <form onSubmit={handleAddCategorySubmit} className="mt-2">
                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Tên thể loại mới"
                              value={newCategory}
                              onChange={(e) => setNewCategory(e.target.value)}
                            />
                          </div>
                          <button type="submit" className="btn btn-primary">Thêm</button>
                        </form>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="image" className="form-label">Hình ảnh</label>
                      <input
                        type="text"
                        className="form-control"
                        id="imageLinkInput"
                        placeholder="Nhập URL của hình ảnh"
                        defaultValue={product.image||product.imgSrc}
                        onChange={(e) => setImageUrl(e.target.value)}
                      />
                      <button type="button" className="btn btn-primary mt-2" id="showImageButton" onClick={handleShowImage}>
                        Hiển thị
                      </button>
                      <button type="button" className="btn btn-secondary mt-2" onClick={handleEditImage}>
                        Chỉnh sửa ảnh
                      </button>
                      {imageUrl && (
                        <div className="mt-2">
                          <img src={imageUrl} alt="Product" style={{ maxWidth: "200px" }} />
                        </div>
                      )}
                    </div>
                    <div className="d-flex justify-content-end">
                      <button type="submit" className="btn btn-success">Lưu</button>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <p>Đang tải dữ liệu sản phẩm...</p>
            )}
          </div>
        </div>
      </div>
    </NavbarVertical>
  );
};

export default ProductForm;
