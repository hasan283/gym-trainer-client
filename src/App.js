import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Pages/About/About';
import Blog from './components/Pages/Blog/Blog';
import Header from './components/Pages/Homes/Header/Header';
import Footer from './components/Pages/Homes/Footer/Footer';
import Home from './components/Pages/Homes/Home/Home';
import NotFound from './components/Pages/NotFount/NotFound';
import CheckOut from './components/Pages/CheckOut/CheckOut';
import Login from './components/Pages/LoginDetails/Login/Login';
import Register from './components/Pages/LoginDetails/Register/Register';
import RequireAuth from './components/Pages/LoginDetails/RequireAuth/RequireAuth';
import Addservice from './components/Pages/AddServicce/Addservice';
import ManageService from './components/Pages/ManageService/ManageService';
import ServiceCheckOut from './components/Pages/ServiceCheckOut/ServiceCheckOut';
import { ToastContainer } from 'react-toastify';
import Order from './components/Pages/Order/Order';


function App() {

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/checkout/:checkoutId' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/servicecheckout/:checkoutId' element={
          <RequireAuth>
            <ServiceCheckOut></ServiceCheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/addservice' element={
          <RequireAuth>
            <Addservice></Addservice>
          </RequireAuth>
        }></Route>
        <Route path='/manage' element={
          <RequireAuth>
            <ManageService></ManageService>
          </RequireAuth>
        }></Route>
        <Route path='/order' element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
