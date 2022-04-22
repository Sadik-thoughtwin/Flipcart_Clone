import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../../App";
import Notification from "../More/Notification";
import Seller from "../More/Seller";
import Signup from "../Signup/Signup";
import Details from "../Details/Details";
import { Header } from "../Header/Header";
import { SellerLogin } from "../More/SellerLogin";
import { SellerList } from "../../AdminPanel/AllSeller/SellerList";
import { UserList } from "../../AdminPanel/UserList/UserList";
import { ProductList } from "../../AdminPanel/ProductList/ProductList";
import { Dashboard } from "../../AdminPanel/Dashboard";
import { ChartLine } from "../../AdminPanel/Chart/ChartLine";
import { AddProduct } from "../../AdminPanel/AddProduct/AddProduct";
import Checkout from "../../Pages/Checkout/Checkout";
import { PageNotFound } from "../../Pages/PageNotFound/PageNotFound";
import { PrivateRoute } from "../../Pages/PrivateRoute/PrivateRoute";
import { Payment } from "../../Pages/Payment/Payment";
function GetRoutes() {
  const PublicRoutes = [
   
    { path: "/", Component: App },
    { path: "/header", Component: Header },
    { path: "*", Component: PageNotFound },
    { path: "/signup", Component: Signup },
    { path: "/details", Component: Details },
    {path:"/payment",Component:Payment}
   
  ];

  const PrivateRoutes = [
    { path: "/notification", Component: Notification },
    { path: "/checkout", Component: Checkout },
    { path: "/userlist", Component: UserList },
    { path: "/dash", Component: Dashboard },
    { path: "/dashboard", Component: ChartLine },
    { path: "/seller", Component: Seller },
    { path: "/sellersign", Component: Seller },
    { path: "/sellerlogin", Component: SellerLogin },
    { path: "/sellerlist", Component: SellerList },
    { path: "/productlist", Component: ProductList },
    { path: "/add", Component: AddProduct },
    { path: "/userlist", Component: UserList },
    { path: "/dash", Component: Dashboard },
    { path: "/dashboard", Component: ChartLine },
    { path: "/seller", Component: Seller },
    { path: "/sellersign", Component: Seller },
    { path: "/sellerlogin", Component: SellerLogin },
    { path: "/sellerlist", Component: SellerList },
    { path: "/productlist", Component: ProductList },
    { path: "/add", Component: AddProduct },
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          {PublicRoutes?.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                element={<item.Component />}
              />
            );
          })}
          {PrivateRoutes?.map((value, index) => {
            return (
              <Route
                key={index}
                path={value.path}
                element={<PrivateRoute Component={value.Component} />}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default GetRoutes;
