import React, { Component } from "react";
 
class Resturants extends Component {
  render() {
    return (
      <div>
       <a href="https://www.doordash.com/filters/en-US?cuisine=pizza"><img src="https://image.flaticon.com/icons/svg/673/673887.svg" alt="Pizza" width="80" height="80" class="red" ></img>
       <h2 class="white">Pizza</h2>
      <br></br></a>

      <a href="https://www.doordash.com/filters/en-US?cuisine=fast%20food"><img src="https://image.flaticon.com/icons/svg/1046/1046784.svg" alt="Fast food" width="80" height="80" class="red" ></img>
      <h2 class="white">Fast Food</h2>
      <br></br></a>
      
      <a href="https://www.doordash.com/search/store/steak/en-US"> <img src="https://image.flaticon.com/icons/svg/2867/2867672.svg" alt="Steak" width="80" height="80" class="red" ></img>
      <h2 class="white">Steak</h2></a>
      
      </div>

    );
  }
}
 
export default Resturants;