import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import CartPage from "./pages/CartPage";
import SigninPage from "./pages/SigninPage";
import RegisterPage from "./pages/RegisterPage";
import { signout } from "./actions/UserActions";
import AdminRoute from "./components/AdminRoute";
import PrivateRoute from "./components/PrivateRoute";
import ShippingAddressPage from "./pages/ShippingAddressPage";
import PaymentMethodPage from "./pages/PaymentMethodPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import ProductListPage from "./pages/ProductListPage";
import OrderPage from "./pages/OrderPage";
import ProductEditPage from "./pages/ProductEditPage";
import OrderListPage from "./pages/OrderListPage";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  <img src="C:\Users\mathi\Downloads\Football Wears\template\images\MainLogo.png" height={50} width={50}/>
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}}>
            <Link className="maintitle" to="/">
              Football Accessories
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/orderHistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  {/* <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li> */}
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  {/* <li>
                    <Link to="/userlist">Users</Link>
                  </li> */}
                </ul>
              </div>
            )}
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartPage}></Route>
          <Route path="/product/:id" component={ProductPage} exact></Route>
          <Route
            path="/product/:id/edit"
            component={ProductEditPage}
            exact
          ></Route>
          <Route path="/signin" component={SigninPage}></Route>
          <Route path="/register" component={RegisterPage}></Route>
          <Route path="/shipping" component={ShippingAddressPage}></Route>
          <Route path="/payment" component={PaymentMethodPage}></Route>
          <Route path="/placeorder" component={PlaceOrderPage}></Route>
          <Route path="/order/:id" component={OrderPage}></Route>
          <Route path="/orderHistory" component={OrderHistoryPage}></Route>
          <PrivateRoute path="/profile" component={ProfilePage}></PrivateRoute>
          <AdminRoute
            path="/productlist"
            component={ProductListPage}
          ></AdminRoute>
          <AdminRoute path="/orderlist" component={OrderListPage}></AdminRoute>
          <Route path="/" component={HomePage} exact></Route>
        </main>
        <footer className="row center foot">&#169; 2023 All Rights Reserved, Design by &nbsp;<Link className="brand1" to={`/`}>Blue Lock.</Link></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
