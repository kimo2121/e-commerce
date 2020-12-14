import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import About from "./pages/about/about";
import MainHome from "./pages/home/main-home";
import Navbar from "./components/navbar/navbar";
import Shop from "./pages/shop/shop";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainHome} />
          {/* <Route exact path="/About" component={About} /> */}
          <Route exact path="/Shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
