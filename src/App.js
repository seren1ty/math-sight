import MathComponent from 'components/math.component';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={MathComponent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
