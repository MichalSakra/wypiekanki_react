
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom"
import Navigation from "./components/Navigation/Navigation"
import Sets from "./Pages/Sets/Sets"
import Home from "./Pages/Home/Home"
import PageContainer from './containers/PageContainer/PageContainer';

function App() {
  return (
    <div className="App">

      <Router>
        <PageContainer>
          <Navigation />
          <Route path="/zestawy-wypiekanek" component={Sets} />
          <Route path="/" exact={true} component={Home} />
        </PageContainer>
      </Router>

    </div>
  );
}

export default App;
