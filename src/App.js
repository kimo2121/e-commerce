import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
// import About from "./pages/about/about";
import MainHome from "./pages/home/main-home";
import Navbar from "./components/navbar/navbar";
import Shop from "./pages/shop/shop";
import ProductsList from "./pages/ProductsList/ProductsList";
import SingleProduct from "./pages/SingleProduct/SingleProduct";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainHome} />
          <Route exact path="/productsList" component={ProductsList} />
          <Route exact path="/SingleProduct" component={SingleProduct} />
          {/* <Route exact path="/About" component={About} /> */}
          <Route exact path="/Shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
