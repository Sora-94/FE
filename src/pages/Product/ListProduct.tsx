import React, { useState, useEffect } from "react";
import { getAllProducts, getProductById, updateProduct } from "../../services/product";
import "../../assets/Phoenix/css/simplebar.min.css";
import "../../assets/Phoenix/css/theme-rtl.min.css";
import "../../assets/Phoenix/css/theme.min.css";
import "../../assets/Phoenix/css/user-rtl.min.css";
import "../../assets/Phoenix/css/user.min.css";
import "../../assets/Phoenix/css/leaflet.css";
import "../../assets/Phoenix/css/MarkerCluster.css";
import "../../assets/Phoenix/css/MarkerCluster.Default.css";
import NavbarVertical from "../../components/Layout/LayoutAdmin";
import { ProductDto, ProductResponse } from "../../models/product";
import img6 from "../../assets/img/fruite-item-2.jpg";
import { useNavigate } from "react-router-dom";

const ProductTable: React.FC = () => {
  const [products, setProducts] = useState<ProductDto[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts(pageIndex);
  }, [pageIndex]);

  const fetchProducts = async (page: number) => {
    const response: ProductResponse = await getAllProducts(page, 10); // 10 sản phẩm mỗi trang
    setProducts(response.items.sort((a, b) => (a.isDeleted === b.isDeleted ? 0 : a.isDeleted ? 1 : -1)));
    setTotalPages(response.totalPages);
  };

  const handleDelete = async (id: string) => {
    try {
      const product = await getProductById(id);
      const updatedProduct = { ...product, isDeleted: !product.isDeleted };
      await updateProduct(id, updatedProduct);
      fetchProducts(pageIndex); // Refetch the product list to update the UI
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleEdit = (id: string) => {
    navigate(`/product/editproduct/${id}`);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleAddNew = () => {
    alert("Add new product functionality goes here.");
  };

  const handlePageChange = (newPageIndex: number) => {
    setPageIndex(newPageIndex);
  };

  const formatCurrency = (price: number) => {
    return (price*1000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <NavbarVertical>
      <div className="profile-page">
        <div className="d-flex justify-content-between align-items-center my-3">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm"
            className="form-control w-25"
            value={searchTerm}
            onChange={handleSearch}
          />
          <a
            href="/product/add-product"
            className="btn btn-success"
            onClick={handleAddNew}
          >
            Thêm mới
          </a>
        </div>
        <table className="table fs-9 mb-0">
          <thead>
            <tr>
              <th className="align-middle" scope="col" style={{ width: "70px" }}>
                Ảnh
              </th>
              <th className="align-middle ps-4" scope="col" style={{ width: "350px" }}>
                Tên sản phẩm
              </th>
              <th className="align-middle text-end ps-4" scope="col" style={{ width: "150px" }}>
                Giá
              </th>
              <th className="align-middle text-end ps-4" scope="col" style={{ width: "150px" }}>
                Giảm giá
              </th>
              <th className="align-middle ps-4" scope="col" style={{ width: "150px" }}>
                Thể loại
              </th>
              <th className="align-middle ps-4" scope="col" style={{ width: "150px" }}>
                Số lượng
              </th>
              <th className="align-middle ps-4" scope="col" style={{ width: "150px" }}>
                Trạng thái
              </th>
              <th className="align-middle ps-4" scope="col" style={{ width: "150px" }}>
                Hành động
              </th>
            </tr>
          </thead>
          <tbody className="list" id="products-table-body">
            {filteredProducts.map((product) => (
              <tr key={product.id} className="position-static">
                <td className="align-middle white-space-nowrap py-0">
                  <a
                    className="d-block border border-translucent rounded-2"
                    href={`productdetails/${product.id}`}
                  >
                    <img src={product.image || img6} alt={product.name} width="53" />
                  </a>
                </td>
                <td className="product align-middle ps-4">
                  <a
                    className="fw-semibold line-clamp-3 mb-0"
                    href={`product/details/${product.id}`}
                  >
                    {product.name}
                  </a>
                </td>
                <td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">
                  {formatCurrency(product.price)}
                </td>
                <td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">
                  {Math.round((product.discount / product.price) * 100)}%
                </td>
                <td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">
                  {product.categoryName}
                </td>
                <td className="stock align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">
                  {product.stockQuantity}
                </td>
                <td className="status align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">
                  {product.isDeleted ? "Đã xóa" : "Còn hoạt động"}
                </td>
                <td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
                  <div className="btn-group" role="group">
                    <button
                      type="button"
                      className="btn btn-sm btn-primary"
                      onClick={() => handleEdit(product.id)}
                    >
                      Sửa
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(product.id)}
                    >
                      {product.isDeleted ? "Khôi phục" : "Xóa"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-center my-3">
          <button
            className="btn btn-secondary me-2"
            onClick={() => handlePageChange(pageIndex - 1)}
            disabled={pageIndex === 1}
          >
            Trước
          </button>
          <span>Trang {pageIndex} / {totalPages}</span>
          <button
            className="btn btn-secondary ms-2"
            onClick={() => handlePageChange(pageIndex + 1)}
            disabled={pageIndex === totalPages}
          >
            Sau
          </button>
        </div>
      </div>
    </NavbarVertical>
  );
};

export default ProductTable;
