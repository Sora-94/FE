import React, { useState } from 'react';
import NavbarVertical from '../../components/Layout/LayoutAdmin';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const UserForm: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');

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

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Xử lý logic lưu thông tin người dùng
    alert(`Đã thêm người dùng: ${firstName} ${lastName}, Địa chỉ: ${address}`);
    // Reset form sau khi submit
    setFirstName('');
    setLastName('');
    setAddress('');
    setImageUrl('');
  };

  return (
    <NavbarVertical>
      <div className="profile-page">
        <div className="content" style={{ marginTop: "-100px", marginRight: "0px" }}>
          <form onSubmit={handleFormSubmit}>
            <h2>Thêm người dùng</h2>
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
                required
              ></textarea>
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
                />
                <button id="editImageButton" className="btn btn-primary mt-3" type="button" onClick={handleEditImage}>
                  Chỉnh sửa đường link
                </button>
              </div>
              <button id="showImageButton" className="btn btn-primary mt-3" type="button" onClick={handleShowImage}>
                Hiển thị ảnh
              </button>
            </div>
            <button type="submit" className="btn btn-primary">
              Lưu
            </button>
          </form>
        </div>
      </div>
    </NavbarVertical>
  );
};

export default UserForm;
