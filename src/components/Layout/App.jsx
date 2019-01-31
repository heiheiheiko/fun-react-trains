import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import appNavItems from "../../config/AppNav"

function App(){
  return (
    <Router>
      <div>
        <nav>
          {appNavItems.map((navItem) =>
            <NavLink 
              to={navItem.path} 
              key={navItem.id} 
              activeClassName="is-active"> 
              {navItem.title} 
            </NavLink>  
          )}
        </nav>
        
        {appNavItems.map((navItem) =>
          <Route path={navItem.path} component={navItem.component} key={navItem.id}/>
        )}
      </div>
    </Router>
  );
}

export default App;
