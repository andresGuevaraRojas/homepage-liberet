import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home/Home';
import ShoppingCart from './pages/ShoppingCart';
import Profile from './pages/Profile';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='shoppingcart' element={<ShoppingCart/>}/>
        <Route path='profile' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
