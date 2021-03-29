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

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Route path="/" exact component={Home}/>
        <Route path="/BookView/:bookid" component={BookView}/>
    </div>
    </Router>
    
  );
}

export default App;
