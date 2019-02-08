import React from 'react';
import { FormattedMessage } from 'react-intl'
import WorldMap from '../components/Maps/WorldMap';
import CountryMap from '../components/Maps/CountryMap';

const pages = [
  {
    id: "world",
    title: <FormattedMessage id="pages.world"/>,
    path: "/world",
    component: <WorldMap/>,
  },
  {
    id: "finnland",
    title: <FormattedMessage id="pages.finnland"/>,
    path: "/finnland",
    component: <CountryMap countries={["FIN"]}/>,
  }
];

export default pages;