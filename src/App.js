import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Account from "./pages/account/account";
import MainHome from "./pages/home/main-home";
import Navbar from "./components/navbar/navbar";
import Shop from "./pages/shop/shop";
import ProductsList from "./pages/ProductsList/ProductsList";
import Addressbook from "./pages/addressbook/addressbook";
import PersonalInfo from "./pages/personalinfo/personalinfo";
import SignInSignUp from "./pages/sign-page/sign-page";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainHome} />
          <Route exact path="/productsList" component={ProductsList} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/account/addressbook" component={Addressbook} />
          <Route exact path="/account/personalinfo" component={PersonalInfo} />
          <Route exact path="/sign-in-up" component={SignInSignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
