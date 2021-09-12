import APage from "pages/a";
import SPage from "pages/s";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/a" exact component={APage} />
          <Route path="/s" exact component={SPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
