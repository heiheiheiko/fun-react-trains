import React from "react";
import { FormattedMessage } from 'react-intl'
import WorldMap from '../components/Maps/WorldMap'

const appNavItems = [
  {
    id: "world-map",
    title: "World Map",
    path: "/world-map",
    component: WorldMap,
  }
];

export default appNavItems;