import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import appNavItems from "../../config/AppNav";
import Controls from "../Controls/Controls";

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

        <div className="overlay__layer overlay__layer--top-right mt-small py-small pr-large pl-normal has-background-light">
          <Controls/>
        </div>
      </div>
    </Router>
  );
}

export default App;
