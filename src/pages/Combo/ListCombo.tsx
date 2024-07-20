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

interface Combo {
  name: string;
  image: string;
  price: string;
  discount: string;
  quantity: number;
}

const initialCombos: Combo[] = [
  {
    name: "Combo 1",
    price: "$100",
    discount: "10%",
    image: "https://example.com/combo1.png",
    quantity: 10
  },
  {
    name: "Combo 2",
    price: "$150",
    discount: "15%",
    image: "https://example.com/combo2.png",
    quantity: 5
  },
  // Add more combos here
];

const ComboTable: React.FC = () => {
  const [combos, setCombos] = useState<Combo[]>(initialCombos);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleDelete = (index: number) => {
    const newCombos = [...combos];
    newCombos.splice(index, 1);
    setCombos(newCombos);
  };

  const handleEdit = (index: number) => {
    alert(`Editing combo: ${combos[index].name}`);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleAddNew = () => {
    alert("Add new combo functionality goes here.");
  };

  const filteredCombos = combos.filter(combo => 
    combo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <NavbarVertical>
              <div className="profile-page">
      <div className="d-flex justify-content-between align-items-center my-3" >
        <input 
          type="text" 
          placeholder="Tìm kiếm combo" 
          className="form-control w-25" 
          value={searchTerm} 
          onChange={handleSearch} 
        />
        <a href='/combo/add-combo'  className="btn btn-success" onClick={handleAddNew}>Thêm mới</a>
      </div>
      <table className="table fs-9 mb-0">
        
        <thead>
          <tr>
            <th className="align-middle" scope="col" style={{ width: '70px' }}>Ảnh</th>
            <th className="align-middle ps-4" scope="col" style={{ width: '350px' }}>Tên combo</th>
            <th className="align-middle text-end ps-4" scope="col" style={{ width: '150px' }}>Giá</th>
            <th className="align-middle ps-4" scope="col" style={{ width: '150px' }}>Giảm giá</th>
            <th className="align-middle ps-4" scope="col" style={{ width: '150px' }}>Số lượng</th>
            <th className="align-middle ps-4" scope="col" style={{ width: '150px' }}>Hành động</th>
          </tr>
        </thead>
        <tbody className="list" id="combos-table-body">
          {filteredCombos.map((combo, index) => (
            <tr key={index} className="position-static">
              <td className="align-middle white-space-nowrap py-0">
                <a className="d-block border border-translucent rounded-2" href="#">
                  <img src={combo.image} alt={combo.name} width="53" />
                </a>
              </td>
              <td className="combo align-middle ps-4">
                <a className="fw-semibold line-clamp-3 mb-0" href="#">{combo.name}</a>
              </td>
              <td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">{combo.price}</td>
              <td className="discount align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">{combo.discount}</td>
              <td className="quantity align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">{combo.quantity}</td>
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
}

export default ComboTable;
