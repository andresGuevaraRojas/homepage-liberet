import style from'./App.module.css';
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home/Home';
import ShoppingCart from './pages/ShoppingCart';
import Profile from './pages/Profile';
import BottomTabBar from './components/BottomTabBar';
import { AppProvider } from './providers/AppProvider';
function App() {
  return (
    <div className={style.container}>
      <AppProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='shoppingcart' element={<ShoppingCart/>}/>
          <Route path='profile' element={<Profile/>}/>
        </Routes>
      </AppProvider>      
      <BottomTabBar/>
    </div>
  );
}

export default App;
