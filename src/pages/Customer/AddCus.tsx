import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getUserProfile } from '../../services/user';
import { useNavigate } from 'react-router-dom'; // Để chuyển hướng

export interface UserDTO {
  id: string;
  role: string | null;
  firstName: string;
  lastName: string;
  address: string | null;
  imagePath: string | null;
  email: string;
  phoneNumber: string;
}

const EditCustomer: React.FC = () => {
  const [user, setUser] = useState<UserDTO | null>(null);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const navigate = useNavigate(); // Để chuyển hướng

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/signin'); // Chuyển hướng đến trang đăng nhập nếu không có token
        return;
      }

      try {
        const userProfile = await getUserProfile(token);
        setUser(userProfile);
        setFirstName(userProfile.firstName);
        setLastName(userProfile.lastName);
        setAddress(userProfile.address ?? ''); // Handle null values
        setEmail(userProfile.email);
        setPhone(userProfile.phoneNumber);
        setImageUrl(userProfile.imagePath ?? ''); // Handle null values
      } catch (error) {
        console.error('Failed to fetch user profile', error);
      }
    };

    fetchUserProfile();
  }, [navigate]);

  const validateForm = () => {
    let isValid = true;

    if (!firstName.trim()) {
      alert('Họ không được để trống.');
      isValid = false;
    }

    if (!lastName.trim()) {
      alert('Tên không được để trống.');
      isValid = false;
    }

    if (!email.trim()) {
      alert('Email không được để trống.');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Email không đúng định dạng.');
      isValid = false;
    }

    if (!phone.trim()) {
      alert('Số điện thoại không được để trống.');
      isValid = false;
    } else if (!/^\d{10,11}$/.test(phone)) {
      alert('Số điện thoại không đúng định dạng.');
      isValid = false;
    }

    return isValid;
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await axios.post(
          'https://localhost:7104/api/v1/User/profile',
          {
            firstName,
            lastName,
            address,
            imagePath: imageUrl,
            email,
            phoneNumber: phone,
            isDeleted: false
          },
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        );
        alert('Đã chỉnh sửa thông tin người dùng thành công!');
        navigate('/profile');
        console.log(response.data); // Log response if needed
      } catch (error) {
        console.error('Failed to update user profile', error);
        alert('Lỗi khi cập nhật thông tin người dùng.');
      }
    }
  };

  if (!user) return <p>Loading...</p>;

  return (

      <div className="profile-page">
        <div className="content" style={{ marginTop: "-100px", marginRight: "0px" }}>
          <form onSubmit={handleFormSubmit}>
            <h2>Chỉnh sửa thông tin người dùng</h2>
            <div className="mb-3">
              <label className="form-label">Họ</label>
              <input
                type="text"
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Tên</label>
              <input
                type="text"
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Địa chỉ</label>
              <textarea
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Số điện thoại</label>
              <input
                type="tel"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Ảnh đại diện</label>
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
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Lưu
            </button>
          </form>
        </div>
      </div>
  );
};

export default EditCustomer;
