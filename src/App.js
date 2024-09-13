import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Header from './components/layout/Header';
import Dashboard from "./components/dashboard/Dashboard";
import Products from "./components/product/Products";
import Orders from "./components/orders/Orders";
import OrderCalenderview from "./components/delivery/OrderCalenderview";
import Product_layout from "./components/product/Product_layout";
import AddProduct from "./components/product/AddProduct";
import OrderList from "./components/orders/OrderList"
import { ViewOrder } from "./components/orders/ViewOrder";
import Login from "./components/Signupandlogin/login";
import Signin from "./components/Signupandlogin/signin";
import Text from "./components/Signupandlogin/Text";
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/product_layout" element={<Product_layout/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/AddProducts" element={<AddProduct/>}/>
      <Route path="/Orders" element={<Orders/>}/>
      <Route path="/OrderCalenderview" element={<OrderCalenderview/>}/>

      <Route path="/orderlist" element={<OrderList />}/>
      <Route path="/vieworder/:p_id" element={<ViewOrder/>}/>

      <Route path="/login" element={<Login/>}/>
      <Route path="/signin" element={<Signin/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
