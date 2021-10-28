import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Component/Pages/Header/Header';
import Login from './Component/Pages/Login/Login';
import Footer from './Component/Pages/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>

        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
