import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import appNavItems from "../../config/AppNav";
import AppAside from "./AppAside";

function App(){
  return (
    <Router>
      <div className="overlay">
        <nav className="overlay__layer mt-small py-small px-normal has-background-light">
          {appNavItems.map((navItem) =>
            <NavLink 
              className="ml-normal"
              to={navItem.path} 
              key={navItem.id} 
              activeClassName="has-text-primary"> 
              {navItem.title} 
            </NavLink>  
          )}
        </nav>
        
        {appNavItems.map((navItem) =>
          <Route path={navItem.path} render={() => navItem.component} key={navItem.id}/>
        )}

        <AppAside/>
      </div>
    </Router>
  );
}

export default App;
