import { SessionProvider } from "context/session.context";
import QuizPage from "pages/quizPage";
import UsersPage from "pages/usersPage";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <SessionProvider>
        <div className="App">
          <Switch>
            <Route path="/" exact component={UsersPage} />
            <Route path="/a" exact component={QuizPage} />
            <Route path="/s" exact component={QuizPage} />
          </Switch>
        </div>
      </SessionProvider>
    </Router>
  );
}

export default App;
