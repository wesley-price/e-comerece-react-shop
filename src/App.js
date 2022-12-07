import Home from './routes/home/home.component'
import React from "react";
import {Routes, Route} from 'react-router-dom';
import NavBar from "./routes/nav-bar/nav-bar.component";
import Shop from "./components/shop/shop.component";
import Signin from "./routes/sign-in/sign-in.component";
import SignIn from "./routes/sign-in/sign-in.component";

const App = () =>  {
  return (
      <Routes>
          <Route path='/' element ={<NavBar/>}>
              <Route index element = {<Home/>}/>
              <Route path='shop' element={<Shop />}/>
              <Route path='sign-in' element={<SignIn />}/>
          </Route>
      </Routes>

      );
}

export default App;
