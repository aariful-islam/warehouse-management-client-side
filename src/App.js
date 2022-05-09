
import { ToastContainer } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './Pages/AddItem/AddItem';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Products from './Pages/Home/Products/Products/Products';
import Inventory from './Pages/Inventory/Inventory';
import LogIn from './Pages/LogIn/LogIn/LogIn';
import Registration from './Pages/LogIn/Registration/Registration';
import RequireAuth from './Pages/LogIn/RequireAuth/RequireAuth';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import ManageItems from './Pages/ManageItems/ManageItems';
import MyItem from './Pages/MyItem/MyItem';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';



function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      <Header></Header>
     
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <Inventory></Inventory>

          </RequireAuth>
        }></Route>
        <Route path='/additem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>

        }>

        </Route>
        <Route path='/myitem' element={
          <RequireAuth>
           <MyItem></MyItem>
          </RequireAuth>

        }>

        </Route>
        <Route path='/manageinventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>

          </RequireAuth>
        
        }></Route>
        <Route path='/manageitem' element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>
        }></Route>
        
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
      
    </div>
  );
}

export default App;

