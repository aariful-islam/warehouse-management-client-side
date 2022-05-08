
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Products from './Pages/Home/Products/Products/Products';
import LogIn from './Pages/LogIn/LogIn/LogIn';
import Registration from './Pages/LogIn/Registration/Registration';



function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
     
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
