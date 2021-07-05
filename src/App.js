import './App.css';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import ProtectedRoute from './Components/Router/ProtectedRoute';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <ProtectedRoute path="/login" component={Login} />
        <ProtectedRoute path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
