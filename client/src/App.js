import './App.css';
import Home from './Pages/Home/Home';
import Header from '../src/Components/Hearder/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BookView from './Pages/BookView/BookView';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Route path="/" exact component={Home}/>
        <Route path="/dashboard" exact component={Dashboard}/>
        <Route path="/register" component={Register}/>
        <Route path="/BookView/:bookid" component={BookView}/>
        <Route path="/login" component={Login}/>
    </div>
    </Router>
    
  );
}

export default App;
