import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import delivery from "./orderNow";
import followUs from "./followUs";
import Resturants from "./Resturant";
 
class Main extends Component {
  render() {
    return (



      
        <HashRouter>

          <div class="logo">
          <a href="/Restaurants"><img src="https://logos-download.com/wp-content/uploads/2019/07/Doordash_Logo.png" alt="" width="80" height="80" class="center"></img>
          </a>
          </div>
          <div>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/followUs">About Us</NavLink> </li>
            <li><NavLink to="/orderNow">Order Now!</NavLink></li>
           
            
            
          </ul>
          <div className="content">
            <Route exact path="/" component={Resturants}/>
            <Route path="/followUs" component={followUs}/>
            <Route path="/orderNow" component={delivery}/>
            
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;