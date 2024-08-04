import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { ProductDto } from '../../models/product';
import { get4Categories } from '../../services/category';
import { getAllProductsNoDelete, getProductsByCategorya } from '../../services/product';

const FruitsShopLayout = () => {
    const [categories, setCategories] = useState<string[]>([]);
    const [products, setProducts] = useState<ProductDto[]>([]);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    useEffect(() => {
        const fetchCategories = async () => {
            const categoryNames: string[] = await get4Categories();
            setCategories(categoryNames);
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = activeCategory ? await getProductsByCategorya(activeCategory) : await getAllProductsNoDelete();
            setProducts(data);
        };
       
        fetchProducts();
    }, [activeCategory]);

    return (
        <div className="container-fluid fruite py-5" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
            <div className="container py-5">
                <div className="tab-class text-center">
                    <div className="row g-4">
                        <div className="col-lg-4 text-start">
                            <h1>Sản phẩm </h1>
                        </div>
                        <div className="col-lg-8 text-end" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                            <ul className="nav nav-pills d-inline-flex text-center mb-5">
                                <li className="nav-item">
                                    <a className={`d-flex m-2 py-2 bg-light rounded-pill ${!activeCategory ? 'active' : ''}`} data-bs-toggle="pill" href="#tab-1" onClick={() => setActiveCategory(null)}>
                                        <span className="text-dark" style={{ width: "130px" }}>All Products</span>
                                    </a>
                                </li>
                                {categories.map((category, index) => (
                                    <li className="nav-item" key={index}>
                                        <a className={`d-flex py-2 m-2 bg-light rounded-pill ${activeCategory === category ? 'active' : ''}`} data-bs-toggle="pill" href={`#tab-${index + 2}`} onClick={() => setActiveCategory(category)}>
                                            <span className="text-dark" style={{ width: "130px" }}>{category}</span>
                                        </a>
                                    </li>
                                ))}
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

                        {categories.map((category, index) => (
                            <div id={`tab-${index + 2}`} key={index} className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    {products
                                        .filter(product => product.categoryName === category)
                                        .map((product, i) => (
                                            <ProductCard key={i} product={product} />
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FruitsShopLayout;
