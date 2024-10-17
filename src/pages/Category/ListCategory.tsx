import React, { useState, useEffect } from 'react';
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
import '../../assets/Phoenix/js/echarts.min.js';
import '../../assets/Phoenix/js/leaflet.js';
import '../../assets/Phoenix/js/leaflet.markercluster.js';
import '../../assets/Phoenix/js/leaflet-tilelayer-colorfilter.min.js';

import NavbarVertical from '../../components/Layout/LayoutAdmin';
import { getAllCategoriesNofilter, deleteCategory, updateCategory, createCategory } from '../../services/category';
import { CategoryDto } from '../../models/category'

const CategoryTable: React.FC = () => {
  const [categories, setCategories] = useState<CategoryDto[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [newCategoryName, setNewCategoryName] = useState<string>('');
  const [editIndex, setEditIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllCategoriesNofilter();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  const handleDelete = async (index: number) => {
    const category = categories[index];
    if (category.id) {
      await deleteCategory(category.id, category.name);
      const updatedCategories = await getAllCategoriesNofilter();
      setCategories(updatedCategories);
    }
  };

  const handleRestore = async (index: number) => {
    const category = categories[index];
    if (category.id) {
      category.isDeleted = false;
      await updateCategory(category.id, category);
      const updatedCategories = await getAllCategoriesNofilter();
      setCategories(updatedCategories);
    }
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setNewCategoryName(categories[index].name);
    setShowModal(true);
  };

  const handleSaveEditCategory = async () => {
    if (newCategoryName.trim() && editIndex !== null) {
      const category = categories[editIndex];
      category.name = newCategoryName;
      if (category.id) {
        await updateCategory(category.id, category);
        const updatedCategories = await getAllCategoriesNofilter();
        setCategories(updatedCategories);
        setShowModal(false);
        setNewCategoryName('');
        setEditIndex(null);
      }
    } else {
      alert('Category name cannot be empty');
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleAddNew = () => {
    setShowModal(true);
    setEditIndex(null);
  };

  const handleSaveNewCategory = async () => {
    if (newCategoryName.trim()) {
      const newCategory: CategoryDto = {
        id: '',
        name: newCategoryName,
        productCount: 0,
        isDeleted: false,
      };
      await createCategory(newCategory);
      const updatedCategories = await getAllCategoriesNofilter();
      setCategories(updatedCategories);
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
        <div className="d-flex justify-content-between align-items-center my-3">
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
              <th className="align-middle " scope="col" style={{ width: '150px' }}>Trạng thái</th>
              <th className="align-middle text-end ps-4" scope="col" style={{ width: '150px' }}>Số lượng sản phẩm</th>
              <th className="align-middle ps-8" scope="col" style={{ width: '150px' }}>Hành động</th>
            </tr>
          </thead>
          <tbody className="list" id="categories-table-body">
            {filteredCategories.map((category, index) => (
              <tr key={index} className="position-static">
                <td className="category align-middle ps-4">
                  <a className="fw-semibold line-clamp-3 mb-0" href="#">{category.name}</a>
                </td>
                <td className="align-middle white-space-nowrap  pe-0 btn-reveal-trigger">
                  <div className="btn-group" role="group">
                    {category.isDeleted ? (
                      <p>đã xoá</p>
                    ) : (
                      <p>Còn hoạt động</p>
                    )}
                  </div>
                </td>
                <td className="productCount align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">{category.productCount}</td>
                <td className="align-middle white-space-nowrap ps-8 pe-0 btn-reveal-trigger">
                  <div className="btn-group" role="group">
                    <button type="button" className="btn btn-sm btn-primary" onClick={() => handleEdit(index)}>Sửa</button>
                    {category.isDeleted ? (
                      <button type="button" className="btn btn-sm btn-success" onClick={() => handleRestore(index)}>Khôi phục</button>
                    ) : (
                      <button type="button" className="btn btn-sm btn-danger" onClick={() => handleDelete(index)}>Xóa</button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showModal && (
          <div className="modal show" tabIndex={-1} role="dialog" style={{ display: 'block' }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{editIndex !== null ? 'Sửa thể loại' : 'Thêm thể loại mới'}</h5>
                  <button type="button" className="close" onClick={() => setShowModal(false)}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <input 
                    type="text" 
                    className="form-control" 
                    value={newCategoryName} 
                    onChange={(e) => setNewCategoryName(e.target.value)} 
                  />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Hủy</button>
                  <button type="button" className="btn btn-primary" onClick={editIndex !== null ? handleSaveEditCategory : handleSaveNewCategory}>
                    {editIndex !== null ? 'Lưu thay đổi' : 'Lưu mới'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </NavbarVertical>
  );
};

export default CategoryTable;
