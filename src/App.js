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

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainHome} />
          <Route exact path="/productsList" component={ProductsList} />
<<<<<<< HEAD
          <Route
            exact
            path="/product/:category/:subcategory"
            component={ProductsList}
          />
          <Route exact path="/product/:productId" component={SingleProduct} />
=======
          <Route exact path="/SingleProduct" component={SingleProduct} />
          {/* <Route exact path="/About" component={About} /> */}
>>>>>>> dbe0e6370e2b29a7e59daff34f20bfc2ca584fb2
          <Route exact path="/Shop" component={Shop} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/account/addressbook" component={Addressbook} />
          <Route exact path="/account/personalinfo" component={PersonalInfo} />
          <Route exact path="/sign-in-up" component={SignInSignUp} />
          <Route exact path="/cartitem" component={CartItem} />
<<<<<<< HEAD
=======
          
>>>>>>> dbe0e6370e2b29a7e59daff34f20bfc2ca584fb2
        </Switch>
      </div>
    </Router>
  );
}

export default App;
