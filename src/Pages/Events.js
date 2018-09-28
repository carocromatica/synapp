import React from 'react';
import IconNav from '../Components/Navs/IconNav'
import PostAEvent from '../Components/eventPost/PostAEvent'

const Events = () => (
  <div className="Container">
    <div className="row">
      <div className="col s12 m4 offset-m4">
        <IconNav />
        <div>
         
        <PostAEvent />
        </div>
      </div>
    </div>
  </div>
)

export default Events; 