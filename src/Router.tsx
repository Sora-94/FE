import { Routes, Route } from "react-router-dom";
import Category from "./pages/Category/ListCategory"
import IndexPage from "./pages/home/index";
import ShopPage from "./pages/home/Shop";
import ProductDetails from "./pages/home/ProductDetails";
import TestimonialPage from "./pages/home/TestimonialPage";
import ProfilePage from "./pages/profile/profile";
import ProductForm from "./pages/Product/AddProduct";
import ProductList from "./pages/Product/ListProduct";
import CusForm from "./pages/Customer/AddCus";
import CusList from "./pages/Customer/ListCus";
import ComboForm from "./pages/Combo/AddCombo";
import ComboList from "./pages/Combo/ListCombo";
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
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/TestimonialPage" element={<TestimonialPage />} />
        <Route path="/Signin"element={<Signin/>}/>
        <Route path="/Signup"element={<Signup/>}/>
        <Route path="/ForgotPassword"element={<Fogort/>}/>
        <Route path="/ResetPassword"element={<ResetPassword/>}/>
        <Route path="/product" element={<ProductList />} />
        <Route path="/product/add-product" element={<ProductForm />} />
        <Route path="/Customer" element={<CusList />} />
        <Route path="/Customer/add-Customer" element={<CusForm />} />
        <Route path="/Combo" element={<ComboList />} />
        <Route path="/Combo/add-Combo" element={<ComboForm />} />
        <Route path="/category"element={<Category/>}/> 
      </Routes>
      </>
    );
  }
  
  export default Router;