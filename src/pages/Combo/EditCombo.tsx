import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavbarVertical from '../../components/Layout/LayoutAdmin';
import { ComboForUpdate } from '../../models/combo';
import { getAllProductsNoDeletea } from '../../services/product';
import { useNavigate } from 'react-router-dom';
import ComboService from "../../services/combo";

const EditCombo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [combo, setCombo] = useState<ComboForUpdate | null>(null);
  const [products, setProducts] = useState<{ id: string, name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCombo = async () => {
      if (id) {
        try {
          const comboData = await  ComboService.getComboById(id);
          setCombo(comboData);
        } catch (error) {
          console.error('Error fetching combo data:', error);
        } finally {
          setLoading(false);
        }
      } else {
        console.error('Invalid ID');
        setLoading(false);
      }
    };

    const fetchProducts = async () => {
      try {
        const productData = await getAllProductsNoDeletea();
        setProducts(productData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchCombo();
    fetchProducts();
  }, [id]);

  const validateForm = () => {
    const newErrors: string[] = [];
  
    // Check for duplicate products
    const productIds = combo?.productCombos.map(pc => pc.productId) || [];
    const uniqueProductIds = new Set(productIds);
    if (uniqueProductIds.size !== productIds.length) {
      newErrors.push('Có sản phẩm bị trùng lặp trong combo.');
    }
  
    // Check if price and quantity are valid
    if (!combo?.price || combo.price <= 0) {
      newErrors.push('Giá tiền phải lớn hơn 0 và không được để trống.');
    }
  
    if (combo?.productCombos.some(pc => pc.quantity <= 0)) {
      newErrors.push('Số lượng sản phẩm phải lớn hơn 0.');
    }
  
    // Check if at least 2 products are selected
    // if (combo?.productCombos.length < 2) {
    //   newErrors.push('Combo phải có ít nhất 2 sản phẩm.');
    // }
  
    // Check if name is empty
    if (!combo?.name || combo.name.trim() === '') {
      newErrors.push('Tên combo không được để trống.');
    }
  
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return; // Không gửi nếu có lỗi



    if (combo && validateForm()) {
      try {
        await ComboService.updateCombo(combo);
        window.alert('Chỉnh sửa combo thành công');
        navigate('/combo'); // Điều hướng đến trang đăng nhập

      } catch (error) {
        console.error('Error updating combo:', error);
        window.alert('Chỉnh sửa combo thất bại');
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!combo) {
    return <div>No combo data found.</div>;
  }

  return (
    <NavbarVertical>
      <div className="content profile-page" style={{ marginTop: '-100px', marginRight: '0px' }}>
        <nav className="mb-3" aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><a href="#!">Quản Lý</a></li>
            <li className="breadcrumb-item"><a href="#!">Combo</a></li>
            <li className="breadcrumb-item active">Chỉnh sửa</li>
          </ol>
        </nav>
        <form className="mb-9" onSubmit={handleFormSubmit}>
          <div className="row g-3 flex-between-end mb-5">
            <div className="col-auto">
              <h2 className="mb-2">Chỉnh sửa Combo</h2>
              <h5 className="text-body-tertiary fw-semibold">Cập nhật thông tin combo</h5>
            </div>
            <div className="col-auto">
              <button className="btn btn-phoenix-secondary me-2 mb-2 mb-sm-0" type="button">Hủy</button>
              <button className="btn btn-primary mb-2 mb-sm-0" type="submit">Lưu</button>
            </div>
          </div>
          {errors.length > 0 && (
            <div className="alert alert-danger">
              <ul>
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="row g-5">
            <div className="col-12 col-xl-8">
              <h4 className="mb-3">Tên Combo</h4>
              <input
                className="form-control mb-5"
                type="text"
                placeholder="Tên combo"
                value={combo.name}
                onChange={(e) => setCombo({ ...combo, name: e.target.value })}
              />
              <div className="mb-6">
                <h4 className="mb-3">Mô tả Combo</h4>
                <textarea
                  name="content"
                  id="content"
                  placeholder="Nhập mô tả combo..."
                  style={{ display: 'block', width: '100%', height: '200px', padding: '.5rem 1rem', fontSize: '0.8rem', fontWeight: 600, lineHeight: 1.49, color: 'var(--phoenix-body-color)', backgroundColor: 'var(--phoenix-emphasis-bg)', border: 'var(--phoenix-border-width) solid var(--phoenix-border-color)', borderRadius: 'var(--phoenix-border-radius)' }}
                  value={combo.description}
                  onChange={(e) => setCombo({ ...combo, description: e.target.value })}
                />
              </div>
              <h4 className="mb-3">Ảnh Combo</h4>
              <div id="imageContainer">
                <div id="imagePreview">
                  {combo.image && <img src={combo.image} className="img-fluid" alt="Preview Image" />}
                </div>
                <input
                  id="imageLinkInput"
                  className="form-control mt-3"
                  placeholder="Nhập đường dẫn ảnh vào đây..."
                  type="text"
                  value={combo.image}
                  onChange={(e) => setCombo({ ...combo, image: e.target.value })}
                />
              </div>
            </div>
            <div className="col-12 col-xl-4">
              <div className="card mb-3">
                <div className="card-body">
                  <h4 className="mb-3">Sản phẩm trong Combo</h4>
                  {combo.productCombos.map((productCombo, index) => (
                    <div key={index} className="mb-4">
                      <h5 className="mb-3">Sản phẩm {index + 1}</h5>
                      <select
                        className="form-select mb-3"
                        aria-label={`product-${index}`}
                        value={productCombo.productId}
                        onChange={(e) => {
                          const updatedCombos = [...combo.productCombos];
                          updatedCombos[index].productId = e.target.value;
                          setCombo({ ...combo, productCombos: updatedCombos });
                        }}
                      >
                        <option value="">Chọn sản phẩm</option>
                        {products.map((product) => (
                          <option key={product.id} value={product.id}>{product.name}</option>
                        ))}
                      </select>
                      <h5 className="mb-3">Số lượng</h5>
                      <input
                        className="form-control mb-3"
                        type="number"
                        placeholder="Số lượng"
                        value={productCombo.quantity}
                        onChange={(e) => {
                          const updatedCombos = [...combo.productCombos];
                          updatedCombos[index].quantity = parseInt(e.target.value);
                          setCombo({ ...combo, productCombos: updatedCombos });
                        }}
                      />
                      <button
                        className="btn btn-danger"
                        type="button"
                        onClick={() => {
                          const updatedCombos = combo.productCombos.filter((_, i) => i !== index);
                          setCombo({ ...combo, productCombos: updatedCombos });
                        }}
                      >
                        Xóa 
                      </button>
                    </div>
                  ))}
                  <button className="btn btn-primary" type="button" onClick={() => {
                    setCombo({ ...combo, productCombos: [...combo.productCombos, { productId: '', quantity: 0 }] });
                  }}>
                    Thêm sản phẩm
                  </button>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <h4 className="mb-3">Giá Tiền</h4>
                  <input
                    className="form-control mb-3"
                    type="number"
                    placeholder="Giá tiền"
                    value={combo.price}
                    onChange={(e) => setCombo({ ...combo, price: parseFloat(e.target.value) })}
                  />
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <h4 className="mb-3">Giảm Giá</h4>
                  <input
                    className="form-control mb-3"
                    type="number"
                    placeholder="Giảm giá"
                    value={combo.discount}
                    onChange={(e) => setCombo({ ...combo, discount: parseFloat(e.target.value) })}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </NavbarVertical>
  );
};

export default EditCombo;
