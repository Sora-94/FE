import { useEffect, useState } from "react";
import ProductCard from '../../components/Home/ProductCard';
import NavbarLayout from "../../components/Home/Navbar";
import FooterLayout from "../../components/Home/Footer";
import "@fortawesome/fontawesome-free/css/all.css"; // FontAwesome
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "../../assets/lib/owlcarousel/assets/owl.carousel.min.css"; // OwlCarousel
import "../../assets/css/bootstrap.min.css"; // Bootstrap
import "../../assets/css/style.css"; // Custom CSS
import img1 from "../../assets/img/featur-1.jpg";
import img2 from "../../assets/img/featur-2.jpg";
import img3 from "../../assets/img/featur-3.jpg";
import { getAllCategories } from "../../services/category";
import { getProducts, getProductForSearch } from "../../services/product";
import { CategoryDto } from "../../models/category";

function IndexShop() {
  const [categories, setCategories] = useState<CategoryDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<any[]>([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllCategories();
      setCategories(data);
      setLoading(false);
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      fetchProductsBySearch();
    } else {
      fetchProducts(pageIndex);
    }
  }, [searchTerm, pageIndex]);

  const fetchProducts = async (pageIndex: number) => {
    const data = await getProducts(pageIndex);
    setProducts(data.items);
    setTotalPages(data.totalPages);
  };

  const fetchProductsBySearch = async () => {
    const data = await getProductForSearch(searchTerm);
    setProducts(data);
    setTotalPages(1); // Khi tìm kiếm, chỉ hiển thị 1 trang kết quả
  };

  const handlePageChange = (newPageIndex: number) => {
    setPageIndex(newPageIndex);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    fetchProductsBySearch();
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <NavbarLayout />
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Shop</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active text-white">Shop</li>
        </ol>
      </div>
      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <h1 className="mb-4">Fresh fruits shop</h1>
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="row g-4">
                <div className="col-xl-3">
                  <div className="input-group w-100 mx-auto d-flex">
                    <input
                      type="search"
                      className="form-control p-3"
                      placeholder="keywords"
                      aria-describedby="search-icon-1"
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                    <span id="search-icon-1" className="input-group-text p-3" onClick={handleSearchClick}>
                      <i className="fa fa-search"></i>
                    </span>
                  </div>
                </div>
                <div className="col-6"></div>
              </div>
              <div className="row g-4">
                <div className="col-lg-3">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <h4>Categories</h4>
                        <ul className="list-unstyled fruite-categorie">
                          {categories.map((category) => (
                            <li key={category.id}>
                              <div className="d-flex justify-content-between fruite-name">
                                <a href="#">
                                  <i className="fas fa-apple-alt me-2"></i>
                                  {category.name}
                                </a>
                                <span>({category.productCount})</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <h4 className="mb-2">Price</h4>
                        <input
                          type="range"
                          className="form-range w-100"
                          id="rangeInput"
                          name="rangeInput"
                          min="0"
                          max="500"
                          value="0"
                        />
                        <output
                          id="amount"
                          name="amount"
                          min-velue="0"
                          max-value="500"
                          htmlFor="rangeInput"
                        >
                          0
                        </output>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <h4>Additional</h4>
                        <div className="mb-2">
                          <input
                            type="radio"
                            className="me-2"
                            id="Categories-1"
                            name="Categories-1"
                            value="Beverages"
                          />
                          <label htmlFor="Categories-1"> Organic</label>
                        </div>
                        <div className="mb-2">
                          <input
                            type="radio"
                            className="me-2"
                            id="Categories-2"
                            name="Categories-1"
                            value="Beverages"
                          />
                          <label htmlFor="Categories-2"> Fresh</label>
                        </div>
                        <div className="mb-2">
                          <input
                            type="radio"
                            className="me-2"
                            id="Categories-3"
                            name="Categories-1"
                            value="Beverages"
                          />
                          <label htmlFor="Categories-3"> Sales</label>
                        </div>
                        <div className="mb-2">
                          <input
                            type="radio"
                            className="me-2"
                            id="Categories-4"
                            name="Categories-1"
                            value="Beverages"
                          />
                          <label htmlFor="Categories-4"> Discount</label>
                        </div>
                        <div className="mb-2">
                          <input
                            type="radio"
                            className="me-2"
                            id="Categories-5"
                            name="Categories-1"
                            value="Beverages"
                          />
                          <label htmlFor="Categories-5"> Expired</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <h4 className="mb-3">Featured products</h4>
                      <div className="d-flex align-items-center justify-content-start">
                        <div
                          className="rounded me-4"
                          style={{ width: "100px; height: 100px" }}
                        >
                          <img
                            src={img1}
                            className="img-fluid rounded"
                            alt=""
                          />
                        </div>
                        <div>
                          <h6 className="mb-2">Big Banana</h6>
                          <div className="d-flex mb-2">
                            <i className="fa fa-star text-secondary"></i>
                            <i className="fa fa-star text-secondary"></i>
                            <i className="fa fa-star text-secondary"></i>
                            <i className="fa fa-star text-secondary"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <div className="d-flex mb-2">
                            <h5 className="fw-bold me-2">2.99 $</h5>
                            <h5 className="text-danger text-decoration-line-through">
                              4.11 $
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-start">
                        <div
                          className="rounded me-4"
                          style={{ width: "100px; height: 100px" }}
                        >
                          <img
                            src={img2}
                            className="img-fluid rounded"
                            alt=""
                          />
                        </div>
                        <div>
                          <h6 className="mb-2">Big Orange</h6>
                          <div className="d-flex mb-2">
                            <i className="fa fa-star text-secondary"></i>
                            <i className="fa fa-star text-secondary"></i>
                            <i className="fa fa-star text-secondary"></i>
                            <i className="fa fa-star text-secondary"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <div className="d-flex mb-2">
                            <h5 className="fw-bold me-2">2.99 $</h5>
                            <h5 className="text-danger text-decoration-line-through">
                              4.11 $
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-start">
                        <div
                          className="rounded me-4"
                          style={{ width: "100px; height: 100px" }}
                        >
                          <img
                            src={img3}
                            className="img-fluid rounded"
                            alt=""
                          />
                        </div>
                        <div>
                          <h6 className="mb-2">Big Pineapple</h6>
                          <div className="d-flex mb-2">
                            <i className="fa fa-star text-secondary"></i>
                            <i className="fa fa-star text-secondary"></i>
                            <i className="fa fa-star text-secondary"></i>
                            <i className="fa fa-star text-secondary"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <div className="d-flex mb-2">
                            <h5 className="fw-bold me-2">2.99 $</h5>
                            <h5 className="text-danger text-decoration-line-through">
                              4.11 $
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="row g-4">
                    {products.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                      />
                    ))}
                  </div>
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center mt-5">
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
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterLayout />
    </>
  );
}

export default IndexShop;
