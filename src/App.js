import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { NAV, TITLE } from "./constants";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Service from "./pages/Service/Service";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header title={TITLE} navLinks={NAV} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/:service' component={Service} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
