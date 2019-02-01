import React from 'react';
import WorldMap from '../components/Maps/WorldMap';
import CountryMap from '../components/Maps/CountryMap';

const appNavItems = [
  {
    id: "world",
    title: "World",
    path: "/world",
    component: <WorldMap/>,
  },
  {
    id: "finnland",
    title: "Finnland",
    path: "/finnland",
    component: <CountryMap countries={["FIN"]}/>,
  }
];

export default appNavItems;