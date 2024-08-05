import React, { useState, useEffect } from "react";
// CSS Imports
import "../../assets/Phoenix/css/simplebar.min.css";
import "../../assets/Phoenix/css/theme-rtl.min.css";
import "../../assets/Phoenix/css/theme.min.css";
import "../../assets/Phoenix/css/user-rtl.min.css";
import "../../assets/Phoenix/css/user.min.css";
import "../../assets/Phoenix/css/leaflet.css";
import "../../assets/Phoenix/css/MarkerCluster.css";
import "../../assets/Phoenix/css/MarkerCluster.Default.css";

// JavaScript Imports
import "../../assets/Phoenix/js/popper.min.js";
import "../../assets/Phoenix/js/bootstrap.min.js";
import "../../assets/Phoenix/js/all.min.js";
import "../../assets/Phoenix/js/lodash.min.js";
import "../../assets/Phoenix/js/list.min.js";
import "../../assets/Phoenix/js/feather.min.js";
import "../../assets/Phoenix/js/echarts.min.js";
import "../../assets/Phoenix/js/leaflet.js";
import "../../assets/Phoenix/js/leaflet.markercluster.js";
import "../../assets/Phoenix/js/leaflet-tilelayer-colorfilter.min.js";
import { comboDto } from "../../models/combo";
import { useNavigate } from "react-router-dom";
import NavbarVertical from "../../components/Layout/LayoutAdmin";
import ComboService from "../../services/combo";

const ComboTable: React.FC = () => {
  const [combos, setCombos] = useState<comboDto[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Khai báo useNavigate

  useEffect(() => {
    const fetchCombos = async () => {
      try {
        const data = await ComboService.getCombos();
        setCombos(data.sort((a, b) => (a.isDeleted === b.isDeleted ? 0 : a.isDeleted ? 1 : -1)));
      } catch (err) {
        setError("Failed to fetch combos");
      } finally {
        setLoading(false);
      }
    };

    fetchCombos();
  }, []);

  const handleDelete = async (id: string, isDeleted: boolean) => {
    try {
      await ComboService.updateComboIsDeleted(id, !isDeleted);
      setCombos((prevCombos) =>
        prevCombos.map((combo) =>
          combo.id === id ? { ...combo, isDeleted: !isDeleted } : combo
        )
      );
    } catch (error) {
      console.error("Error updating combo status:", error);
    }
  };

  const handleEdit = (id: string) => {
    navigate(`/combo/editcombo/${id}`); // Điều hướng đến trang chỉnh sửa
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const formatCurrency = (price: number) => {
    return (price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  };
  const handleAddNew = () => {
    navigate("/combo/add-combo");
  };

  const filteredCombos = combos.filter((combo) =>
    combo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <NavbarVertical>
      <div className="profile-page">
        <div className="d-flex justify-content-between align-items-center my-3">
          <input
            type="text"
            placeholder="Tìm kiếm combo"
            className="form-control w-25"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="btn btn-success" onClick={handleAddNew}>
            Thêm mới
          </button>
        </div>
        <table className="table fs-9 mb-0">
          <thead>
            <tr>
              <th className="align-middle" scope="col" style={{ width: "70px" }}>
                Ảnh
              </th>
              <th className="align-middle ps-4" scope="col" style={{ width: "350px" }}>
                Tên combo
              </th>
              <th className="align-middle text-end ps-4" scope="col" style={{ width: "150px" }}>
                Giá
              </th>
              <th className="align-middle ps-4" scope="col" style={{ width: "150px" }}>
                Giảm giá
              </th>
              <th className="align-middle ps-4" scope="col" style={{ width: "150px" }}>
                Trạng thái
              </th>
              <th className="align-middle ps-4" scope="col" style={{ width: "150px" }}>
                Hành động
              </th>
            </tr>
          </thead>
          <tbody className="list" id="combos-table-body">
            {filteredCombos.map((combo) => (
              <tr key={combo.id} className="position-static">
                <td className="align-middle white-space-nowrap py-0">
                  <a className="d-block border border-translucent rounded-2" href="#">
                    <img src={combo.image} alt={combo.name} width="53" />
                  </a>
                </td>
                <td className="combo align-middle ps-4">
                  <a className="fw-semibold line-clamp-3 mb-0" href="#">
                    {combo.name}
                  </a>
                </td>
                <td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">
                {formatCurrency(combo.price)}
                </td>
                <td className="discount align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">
                  {Math.round((combo.discount / combo.price)*100 )}%
                </td>
                <td className="status align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">
                  {combo.isDeleted ? "Đã xóa" : "Hoạt động"}
                </td>
                <td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
                  <div className="btn-group" role="group">
                    <button
                      type="button"
                      className="btn btn-sm btn-primary"
                      onClick={() => handleEdit(combo.id)}
                    >
                      Sửa
                    </button>
                    <button
                      type="button"
                      className={`btn btn-sm ${combo.isDeleted ? "btn-success" : "btn-danger"}`}
                      onClick={() => handleDelete(combo.id, combo.isDeleted)}
                    >
                      {combo.isDeleted ? "Khôi phục" : "Xóa"}
                    </button>
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

export default ComboTable;
