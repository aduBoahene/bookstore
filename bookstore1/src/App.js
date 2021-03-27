import logo from './logo.svg';
import './App.css';
import Header from './Pages/Hearder/Header';
import Hero from './Pages/Hero/Hero';
import CategoryList from './Pages/CategoryList/CategoryList';
import Body from './Pages/Body/Body';

function App() {
  return (
    <div className="app">
      <Header/>
      <Hero/>
      <CategoryList/>
      <Body/>
    </div>
  );
}

export default App;
