
import './App.module.sass';

import { BrowserRouter as Router, Route } from "react-router-dom"
import Navigation from "./components/Navigation/Navigation"
import Sets from "./Pages/Sets/Sets"
import Home from "./Pages/Home/Home"
import Map from "./Pages/Map/Map"
import Gallery from "./Pages/Gallery/Gallery"
import Contact from "./Pages/Contact/Contact"
import PageContainer from './containers/PageContainer/PageContainer';
import Footer from "./components/Footer/Footer"
function App() {


  return (
    <div className="App">

      <Router>
        <PageContainer>
          <Navigation />
          <Route path="/zestawy-wypiekanek" component={Sets} />
          <Route path="/" exact={true} component={Home} />
          <Route path="/gdzie-kupic-wypiekanki" exact={true} component={Map} />
          <Route path="/galeria-wypiekanek" exact={true} component={Gallery} />
          <Route path="/kontakt" exact={true} component={Contact} />
          <Footer />
        </PageContainer>
      </Router>

    </div>
  );
}

export default App;
