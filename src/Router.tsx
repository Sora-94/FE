import { Routes, Route } from "react-router-dom";
import Category from "./pages/Category/ListCategory"
import IndexPage from "./pages/home/index";
import ShopPage from "./pages/home/Shop";
import DonatePage from "./pages/home/donate";
import CartPage from "./pages/home/cart";
import CheckoutPage from "./pages/home/Chackout";
import ContactPage from "./pages/home/Contact";
import ProductDetails from "./pages/home/ProductDetails";
import TestimonialPage from "./pages/home/TestimonialPage";
import ProfilePage from "./pages/profile/profile";
import ProfileUserPage from "./pages/profile/profileuser";
import ProductForm from "./pages/Product/AddProduct";
import ProductEditForm from "./pages/Product/EditProduct";
import OrderListPage from "./pages/Order/Order";

import ProductList from "./pages/Product/ListProduct";
import CusForm from "./pages/Customer/AddCus";
import CusList from "./pages/Customer/ListCus";
import ComboForm from "./pages/Combo/AddCombo";
import ComboList from "./pages/Combo/ListCombo";
import EditCombo from "./pages/Combo/EditCombo";
import Signin from "./pages/Authen/SignIn";
import Signup from "./pages/Authen/SignUp";
import Fogort from "./pages/Authen/ForgotPassword";
import ResetPassword from "./pages/Authen/ResetPassword";
function Router() {
    return (
      <>
      <Routes>
        <Route path="/"element={<IndexPage/>}/>
        <Route path="/shop"element={<ShopPage/>}/>
        <Route path="/cart"element={<CartPage/>}/>
        <Route path="/donate"element={<DonatePage/>}/>
        <Route path="/checkout"element={<CheckoutPage/>}/>
        <Route path="/contact"element={<ContactPage/>}/>
        <Route path="/OrderListPage"element={<OrderListPage/>}/>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/Uprofile" element={<ProfileUserPage />} />
        <Route path="/product/details/:id" element={<ProductDetails />} />
        <Route path="/Testimonial" element={<TestimonialPage />} />
        <Route path="/Signin"element={<Signin/>}/>
        <Route path="/Signup"element={<Signup/>}/>
        <Route path="/ForgotPassword"element={<Fogort/>}/>
        <Route path="/ResetPassword"element={<ResetPassword/>}/>
        <Route path="/product" element={<ProductList />} />
        <Route path="/product/editproduct/:id" element={<ProductEditForm />} />
        <Route path="/product/add-product" element={<ProductForm />} />
        <Route path="/Customer" element={<CusList />} />
        <Route path="/Customer/add-Customer" element={<CusForm />} />
        <Route path="/Combo" element={<ComboList />} />
        <Route path="/Combo/add-Combo" element={<ComboForm />} />
        <Route path="/combo/editcombo/:id" element={<EditCombo />} />
        <Route path="/category"element={<Category/>}/> 
      </Routes>
      </>
    );
  }
  
  export default Router;