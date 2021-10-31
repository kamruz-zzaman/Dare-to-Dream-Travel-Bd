import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Component/Pages/Header/Header';
import Login from './Component/Pages/Login/Login';
import Footer from './Component/Pages/Footer/Footer';
import Gellery from './Component/Pages/Gellery/Gellery';
import Banner from './Component/Pages/Banner/Banner';
import Error404 from './Component/Pages/Error404/Error404';
import ContuctUs from './Component/Pages/Contuct Us/ContuctUs';
import Packages from './Component/Pages/Packages/Packages';
import AddPackage from './Component/Pages/Add Packages/AddPackage';
import FullPackages from './Component/Pages/Packages/FullPackages';
import Booking from './Component/Pages/Booking/Booking';
import AuthProvider from './Component/Contex/AuthProvider';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import BookNow from './Component/Pages/BookNow/BookNow';
import ALLBookings from './Component/Pages/AllBooking/ALLBookings';
import MyBooking from './Component/Pages/MyBookings/MyBooking';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Banner></Banner>
            <Packages></Packages>
            <Gellery></Gellery>
            <ContuctUs></ContuctUs>
          </Route>
          <Route exact path='/home'>
            <Banner></Banner>
            <Packages></Packages>
            <Gellery></Gellery>
            <ContuctUs></ContuctUs>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/contuct'>
            <ContuctUs></ContuctUs>
          </Route>
          <Route path='/package'>
            <FullPackages></FullPackages>
          </Route>
          <Route path='/gellery'>
            <Gellery></Gellery>
          </Route>
          <Route path='/addpackage'>
            <AddPackage></AddPackage>
          </Route>
          <Route path='/booking'>
            <Booking></Booking>
          </Route>
          <Route path='/mybooking'>
            <MyBooking></MyBooking>
          </Route>
          <Route path='/allBoking'>
            <ALLBookings></ALLBookings>
          </Route>
          <PrivateRoute path='/packages/:id'>
            <BookNow></BookNow>
          </PrivateRoute>
          <Route path='*'>
            <Error404></Error404>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
