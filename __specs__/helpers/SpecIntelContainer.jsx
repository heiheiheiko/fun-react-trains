import React from 'react';
import { IntlProvider } from 'react-intl';
import locales from "../../src/locales/locales";

const currentLocale = "en"

function SpecIntelContainer(props) {
  return (
    <IntlProvider locale={currentLocale} messages={locales[currentLocale]}>
      <div> {props.children} </div>
    </IntlProvider>
  );
}

export default SpecIntelContainer;
