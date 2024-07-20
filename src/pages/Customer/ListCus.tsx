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

interface Customer {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  image: string;
}

const initialCustomers: Customer[] = [
  {
    firstName: "John",
    lastName: "Doe",
    address: "123 Main St, Anytown, USA",
    email: "john.doe@example.com",
    image: "https://via.placeholder.com/50"
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    address: "456 Elm St, Othertown, USA",
    email: "jane.smith@example.com",
    image: "https://via.placeholder.com/50"
  },
  // Add more customers here
];

const CustomerTable: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleDelete = (index: number) => {
    const newCustomers = [...customers];
    newCustomers.splice(index, 1);
    setCustomers(newCustomers);
  };

  const handleEdit = (index: number) => {
    alert(`Editing customer: ${customers[index].firstName} ${customers[index].lastName}`);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleAddNew = () => {
    alert("Add new customer functionality goes here.");
  };

  const filteredCustomers = customers.filter(customer => 
    customer.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <NavbarVertical>
                    <div className="profile-page">

      <div className="d-flex justify-content-between align-items-center my-3">
        <input 
          type="text" 
          placeholder="Tìm kiếm khách hàng" 
          className="form-control w-25" 
          value={searchTerm} 
          onChange={handleSearch} 
        />
        <a href='/customer/add-customer' className="btn btn-success" onClick={handleAddNew}>Thêm mới</a>
      </div>
      <table className="table fs-9 mb-0">
        <thead>
          <tr>

            <th className="align-middle" scope="col" style={{ width: '70px' }}>Ảnh</th>
            <th className="align-middle ps-4" scope="col" style={{ width: '150px' }}>Tên</th>
            <th className="align-middle ps-4" scope="col" style={{ width: '150px' }}>Họ</th>
            <th className="align-middle ps-4" scope="col" style={{ width: '350px' }}>Địa chỉ</th>
            <th className="align-middle ps-4" scope="col" style={{ width: '250px' }}>Email</th>
            <th className="align-middle ps-4" scope="col" style={{ width: '150px' }}>Hành động</th>
          </tr>
        </thead>
        <tbody className="list" id="customers-table-body">
          {filteredCustomers.map((customer, index) => (
            <tr key={index} className="position-static">
              <td className="align-middle white-space-nowrap py-0">
                <a className="d-block border border-translucent rounded-2" href="#">
                  <img src={customer.image} alt={`${customer.firstName} ${customer.lastName}`} width="53" />
                </a>
              </td>
              <td className="firstName align-middle ps-4">
                <a className="fw-semibold line-clamp-3 mb-0" href="#">{customer.firstName}</a>
              </td>
              <td className="lastName align-middle ps-4">
                <a className="fw-semibold line-clamp-3 mb-0" href="#">{customer.lastName}</a>
              </td>
              <td className="address align-middle ps-4">
                <a className="fw-semibold line-clamp-3 mb-0" href="#">{customer.address}</a>
              </td>
              <td className="email align-middle ps-4">
                <a className="fw-semibold line-clamp-3 mb-0" href="#">{customer.email}</a>
              </td>
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

export default CustomerTable;
