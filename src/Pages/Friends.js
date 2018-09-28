import React from 'react';
import IconNav from '../Components/Navs/IconNav';
import Friendlist from '../Components/misc/Friendlist'

const Friends = () => (
  <div className="Container">
    <div className="row">
      <div className="col s12 m4 offset-m4">
        <IconNav />
        <Friendlist />
      </div>
    </div>
  </div>
)

export default Friends; 