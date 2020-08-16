import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import delivery from "./delivery";
import Pickup from "./Pickup";
import Resturants from "./Resturant";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
          <div class="header">
             <h1>Doordash</h1>
             <p>"It's Our Pleasure"</p>
          </div>
          <div>
          <ul className="header">
            <li><NavLink exact to="/">Resturants</NavLink></li>
            <li><NavLink to="/delivery">Delivery</NavLink></li>
            <li><NavLink to="/Pickup">In-store Pickup</NavLink> </li>
            
            
          </ul>
          <div className="content">
            <Route exact path="/" component={Resturants}/>
            <Route path="/Pickup" component={Pickup}/>
            <Route path="/delivery" component={delivery}/>
            
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;