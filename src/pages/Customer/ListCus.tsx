import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../../services/user'; // Cập nhật đường dẫn theo cấu trúc thư mục của bạn
import NavbarVertical from '../../components/Layout/LayoutAdmin';
import { PaginatedUserResponse, UserDTO } from '../../models/user'; // Cập nhật đường dẫn theo cấu trúc thư mục của bạn

const CustomerTable: React.FC = () => {
  const [customers, setCustomers] = useState<UserDTO[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response: PaginatedUserResponse = await getAllUsers(1, 10, searchTerm);
        setCustomers(response.items);
      } catch (error) {
        console.error('Failed to fetch users', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [searchTerm]); // Fetch users whenever searchTerm changes



  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleAddNew = () => {
    alert("Add new customer functionality goes here.");
  };

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
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="table fs-9 mb-0">
            <thead>
              <tr>
                <th className="align-middle" scope="col" style={{ width: '70px' }}>Ảnh</th>
                <th className="align-middle ps-4" scope="col" style={{ width: '150px' }}>Tên</th>
                <th className="align-middle ps-4" scope="col" style={{ width: '150px' }}>Họ</th>
                <th className="align-middle ps-4" scope="col" style={{ width: '350px' }}>Địa chỉ</th>
                <th className="align-middle ps-4" scope="col" style={{ width: '250px' }}>Email</th>
                <th className="align-middle ps-4" scope="col" style={{ width: '250px' }}>Vai trò</th>

                <th className="align-middle ps-4" scope="col" style={{ width: '150px' }}>Hành động</th>
              </tr>
            </thead>
            <tbody className="list" id="customers-table-body">
              {customers.map((customer) => (
                <tr key={customer.id} className="position-static">
                  <td className="align-middle white-space-nowrap py-0">
                    <a className="d-block border border-translucent rounded-2" href="#">
                      <img src={customer.imagePath || "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"} alt={`${customer.firstName} ${customer.lastName}`} width="53" />
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
                  <td className="email align-middle ps-4">
                    <a className="fw-semibold line-clamp-3 mb-0" href="#">{customer.role}</a>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
                    <div className="btn-group" role="group">
                      <button type="button" className="btn btn-sm btn-danger">Xóa</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </NavbarVertical>
  );
};

export default CustomerTable;
