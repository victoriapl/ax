import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Service from "./pages/Service/Service";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import { primaryColor } from "./data.json";
import ScrollIntoView from "./components/ScrollIntoView/ScrollIntoView";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className='App'>
      {loading ? (
        <SplashScreen />
      ) : (
        <Router>
          <Header />
          <ScrollIntoView>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/services' component={Services} />
              <Route
                exact
                path='/contact'
                component={Contact}
                primaryColor={primaryColor}
              />
              <Route exact path='/:service' component={Service} />
            </Switch>
          </ScrollIntoView>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
