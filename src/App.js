import { SessionProvider } from "context/session.context";
import QuizPageA from "pages/quizPageA";
import QuizPageS from "pages/quizPageS";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <SessionProvider>
        <div className="App">
          <Switch>
            <Route path="/a" exact component={QuizPageA} />
            <Route path="/s" exact component={QuizPageS} />
          </Switch>
        </div>
      </SessionProvider>
    </Router>
  );
}

export default App;
