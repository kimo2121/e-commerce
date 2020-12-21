import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Account from "./pages/account/account";
import MainHome from "./pages/home/main-home";
import Navbar from "./components/navbar/navbar";
import Shop from "./pages/shop/shop";
import ProductsList from "./pages/ProductsList/ProductsList";
import { Footer } from "antd/lib/layout/layout";

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
