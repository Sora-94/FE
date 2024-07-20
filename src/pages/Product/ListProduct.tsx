import React, { useState, useEffect } from 'react';
import api from "../../api/api";
import '../../assets/Phoenix/css/simplebar.min.css';
import '../../assets/Phoenix/css/theme-rtl.min.css';
import '../../assets/Phoenix/css/theme.min.css';
import '../../assets/Phoenix/css/user-rtl.min.css';
import '../../assets/Phoenix/css/user.min.css';
import '../../assets/Phoenix/css/leaflet.css';
import '../../assets/Phoenix/css/MarkerCluster.css';
import '../../assets/Phoenix/css/MarkerCluster.Default.css';
import '../../assets/Phoenix/js/popper.min.js';
import '../../assets/Phoenix/js/bootstrap.min.js';
import '../../assets/Phoenix/js/all.min.js';
import '../../assets/Phoenix/js/lodash.min.js';
import '../../assets/Phoenix/js/list.min.js';
import '../../assets/Phoenix/js/feather.min.js';
import '../../assets/Phoenix/js/dayjs.min.js';
import '../../assets/Phoenix/js/echarts.min.js';
import '../../assets/Phoenix/js/leaflet.js';
import '../../assets/Phoenix/js/leaflet.markercluster.js';
import '../../assets/Phoenix/js/leaflet-tilelayer-colorfilter.min.js';
import NavbarVertical from '../../components/Layout/LayoutAdmin';
import { ProductDto } from "../../models/product";

const ProductTable: React.FC = () => {
  const [products, setProducts] = useState<ProductDto[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get('/api/v1/product');
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleDelete = (index: number) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
  };

  const handleEdit = (index: number) => {
    alert(`Editing product: ${products[index].name}`);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleAddNew = () => {
    alert("Add new product functionality goes here.");
  };

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <NavbarVertical>
      <div className="profile-page">      
        <div className="d-flex justify-content-between align-items-center my-3" >
          <input 
            type="text" 
            placeholder="Tìm kiếm sản phẩm" 
            className="form-control w-25" 
            value={searchTerm} 
            onChange={handleSearch} 
          />
          <a href='/product/add-product' className="btn btn-success" onClick={handleAddNew}>Thêm mới</a>
        </div>
        <table className="table fs-9 mb-0" >
          <thead>
            <tr>
              <th className="align-middle" scope="col" style={{ width: '70px' }}>Ảnh</th>
              <th className="align-middle ps-4" scope="col" style={{ width: '350px' }}>Tên sản phẩm</th>
              <th className="align-middle text-end ps-4" scope="col" style={{ width: '150px' }}>Giá</th>
              <th className="align-middle text-end ps-4" scope="col" style={{ width: '150px' }}>Giảm giá</th>
              <th className="align-middle ps-4" scope="col" style={{ width: '150px' }}>Thể loại</th>
              <th className="align-middle ps-4" scope="col" style={{ width: '150px' }}>Số lượng</th>
              <th className="align-middle ps-4" scope="col" style={{ width: '150px' }}>Ngày nhập</th>
              <th className="align-middle ps-4" scope="col" style={{ width: '150px' }}>Ngày public</th>
              <th className="align-middle ps-4" scope="col" style={{ width: '150px' }}>Hành động</th>
            </tr>
          </thead>
          <tbody className="list" id="products-table-body">
            {filteredProducts.map((product, index) => (
              <tr key={product.id} className="position-static">
                <td className="align-middle white-space-nowrap py-0">
                  <a className="d-block border border-translucent rounded-2" href={`product/details/${product.id}`}>
                    <img src={product.image} alt={product.name} width="53" />
                  </a>
                </td>
                <td className="product align-middle ps-4">
                  <a className="fw-semibold line-clamp-3 mb-0" href={`product/details/${product.id}`}>{product.name}</a>
                </td>
                <td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">${product.price}</td>
                <td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">{product.discount}%</td>
                <td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">Plants</td>
                <td className="stock align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">{product.stockQuantity}</td>
                <td className="added-on align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">Nov 12, 10:45 PM</td>
                <td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">Oct 10, 12:00 PM</td>
                <td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
                  <div className="btn-group" role="group">
                    <button type="button" className="btn btn-sm btn-primary" onClick={() => handleEdit(index)}>Sửa</button>
                    <button type="button" className="btn btn-sm btn-danger" onClick={() => handleDelete(index)}>Xóa</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </NavbarVertical>
  );
};

export default ProductTable;
