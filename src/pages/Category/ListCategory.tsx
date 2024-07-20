import React, { useState } from 'react';
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
import '../../assets/Phoenix/js/echarts.min.js';
import '../../assets/Phoenix/js/leaflet.js';
import '../../assets/Phoenix/js/leaflet.markercluster.js';
import '../../assets/Phoenix/js/leaflet-tilelayer-colorfilter.min.js';

import NavbarVertical from '../../components/Layout/LayoutAdmin';

interface Category {
  name: string;
  productCount: number;
}

const initialCategories: Category[] = [
  {
    name: "Category 1",
    productCount: 20,
  },
  {
    name: "Category 2",
    productCount: 35,
  },
  // Add more categories here
];

const CategoryTable: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [newCategoryName, setNewCategoryName] = useState<string>('');

  const handleDelete = (index: number) => {
    const newCategories = [...categories];
    newCategories.splice(index, 1);
    setCategories(newCategories);
  };

  const handleEdit = (index: number) => {
    alert(`Editing category: ${categories[index].name}`);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleAddNew = () => {
    setShowModal(true);
  };

  const handleSaveNewCategory = () => {
    if (newCategoryName.trim()) {
      setCategories([...categories, { name: newCategoryName, productCount: 0 }]);
      setShowModal(false);
      setNewCategoryName('');
    } else {
      alert('Category name cannot be empty');
    }
  };

  const filteredCategories = categories.filter(category => 
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
  
    <NavbarVertical>
        <div className="profile-page">
      <div className="d-flex justify-content-between align-items-center my-3" >
        <input 
          type="text" 
          placeholder="Tìm kiếm thể loại" 
          className="form-control w-25" 
          value={searchTerm} 
          onChange={handleSearch} 
        />
        <button 
          className="btn btn-success" 
          onClick={handleAddNew}
        >
          Thêm mới
        </button>
      </div>
      <table className="table fs-9 mb-0">
        <thead>
          <tr>
            <th className="align-middle" scope="col" style={{ width: '350px' }}>Tên thể loại</th>
            <th className="align-middle text-end ps-4" scope="col" style={{ width: '150px' }}>Số lượng sản phẩm</th>
            <th className="align-middle ps-4" scope="col" style={{ width: '150px' }}>Hành động</th>
          </tr>
        </thead>
        <tbody className="list" id="categories-table-body">
          {filteredCategories.map((category, index) => (
            <tr key={index} className="position-static">
              <td className="category align-middle ps-4">
                <a className="fw-semibold line-clamp-3 mb-0" href="#">{category.name}</a>
              </td>
              <td className="productCount align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">{category.productCount}</td>
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

      {showModal && (
        <div className="modal show d-block" tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Thêm thể loại mới</h5>
                <button 
                  type="button" 
                  className="close" 
                  onClick={() => setShowModal(false)}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="newCategoryName">Tên thể loại</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="newCategoryName" 
                    value={newCategoryName} 
                    onChange={(e) => setNewCategoryName(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setShowModal(false)}
                >
                  Đóng
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  onClick={handleSaveNewCategory}
                >
                  Lưu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
          </div>
    </NavbarVertical>

  );
}

export default CategoryTable;
