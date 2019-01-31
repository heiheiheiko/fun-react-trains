import React from "react";
import { FormattedMessage } from 'react-intl'

const appNavItems = [
  {
    id: "home",
    title: "Home",
    path: "/",
    component: () => (<h1><FormattedMessage id="home"/></h1>)
  }
];

export default appNavItems;