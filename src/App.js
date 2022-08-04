import './App.css';
import Calculator from './components/calculator';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className='nav1'>
          <div className="homeDiv">
            <Link to={"/"}>
              <button type="button" className="homeButton" />
            </Link>
          </div>
        </nav>
        <div>
          <Switch>
            <Route exact path={"/"} component={Calculator} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
