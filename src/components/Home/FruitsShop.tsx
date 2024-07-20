import ProductCard from './ProductCard';
import { ProductDto } from '../../models/product'; // Điều chỉnh đường dẫn tùy theo cấu trúc của bạn

const FruitsShopLayout = () => {
    const products: ProductDto[] = [
        {
            imgSrc: "fruite-item-5.jpg",
            category: "Fruits",
            title: "Grapes",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
            price: "$4.99 / kg"
        },
        {
            imgSrc: "fruite-item-2.jpg",
            category: "Fruits",
            title: "Raspberries",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
            price: "$4.99 / kg"
        },
        {
            imgSrc: "fruite-item-4.jpg",
            category: "Fruits",
            title: "Apricots",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
            price: "$4.99 / kg"
        },
        {
            imgSrc: "fruite-item-3.jpg",
            category: "Fruits",
            title: "Banana",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
            price: "$4.99 / kg"
        },
        {
            imgSrc: "fruite-item-1.jpg",
            category: "Fruits",
            title: "Oranges",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
            price: "$4.99 / kg"
        },
        {
            imgSrc: "fruite-item-6.jpg",
            category: "Fruits",
            title: "Apple",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
            price: "$4.99 / kg"
        },
        {
            imgSrc: "fruite-item-1.jpg",
            category: "Fruits",
            title: "Oranges",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
            price: "$4.99 / kg"
        },
        {
            imgSrc: "fruite-item-6.jpg",
            category: "Fruits",
            title: "Apple",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
            price: "$4.99 / kg"
        }
        // Thêm các sản phẩm khác nếu cần
    ];

    return (
        <div className="container-fluid fruite py-5">
            <div className="container py-5">
                <div className="tab-class text-center">
                    <div className="row g-4">
                        <div className="col-lg-4 text-start">
                            <h1>Our Organic Products</h1>
                        </div>
                        <div className="col-lg-8 text-end">
                            <ul className="nav nav-pills d-inline-flex text-center mb-5">
                                <li className="nav-item">
                                    <a className="d-flex m-2 py-2 bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                                        <span className="text-dark" style={{ width: "130px" }}>All Products</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex py-2 m-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                                        <span className="text-dark" style={{ width: "130px" }}>Vegetables</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-3">
                                        <span className="text-dark" style={{ width: "130px" }}>Fruits</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-4">
                                        <span className="text-dark" style={{ width: "130px" }}>Bread</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-5">
                                        <span className="text-dark" style={{ width: "130px" }}>Meat</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                {products.map((product, index) => (
                                    <ProductCard key={index} product={product} />
                                ))}
                            </div>
                        </div>

                        <div id="tab-2" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                {/* Hiển thị các sản phẩm của tab 2 nếu có */}
                            </div>
                        </div>

                        <div id="tab-3" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                {/* Hiển thị các sản phẩm của tab 3 nếu có */}
                            </div>
                        </div>

                        <div id="tab-4" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                {/* Hiển thị các sản phẩm của tab 4 nếu có */}
                            </div>
                        </div>

                        <div id="tab-5" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                {/* Hiển thị các sản phẩm của tab 5 nếu có */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FruitsShopLayout;
