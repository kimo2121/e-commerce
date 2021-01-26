import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
// import About from "./pages/about/about";
import Account from "./pages/account/account";
import MainHome from "./pages/home/main-home";
import Navbar from "./components/navbar/navbar";
import Shop from "./pages/shop/shop";
import ProductsList from "./pages/ProductsList/ProductsList";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Addressbook from "./pages/addressbook/addressbook";
import PersonalInfo from "./pages/personalinfo/personalinfo";
import SignInSignUp from "./pages/sign-page/sign-page";
import CartItem from "./components/cart-item/cart-item";
import Checkout from "./pages/checkout/checkout";
import OrdersPage from "./pages/orders/OrdersPage";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";

function App() {
  let width = window.innerWidth;

  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        {width > 900 ? <Navbar /> : <PrimarySearchAppBar />}
        <Switch>
          <Route exact path="/" component={MainHome} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/account/addressbook" component={Addressbook} />
          <Route exact path="/account/personalinfo" component={PersonalInfo} />
          <Route exact path="/account/orders" component={OrdersPage} />
          <Route exact path="/sign-in-up" component={SignInSignUp} />
          <Route exact path="/cartitem" component={CartItem} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/product/:productId" component={SingleProduct} />
          <Route
            exact
            path="/:category/:subcategory"
            component={ProductsList}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
