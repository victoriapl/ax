import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Service from "./pages/Service/Service";
import { NAV, TITLE } from "./constants";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header title={TITLE} navLinks={NAV} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/:service' component={Service} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
