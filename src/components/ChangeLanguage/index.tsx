import React, { useState, useEffect, useCallback } from 'react';

import ReactCountryFlag from 'react-country-flag';

import setLanguage from 'next-translate/setLanguage';

const ChangeLanguage = () => {
  const [flag, setFlag] = useState('EN');

  const handleFlag = useCallback(() => {
    if (flag === 'US') {
      setFlag('BR');
      setLanguage('en');
    } else {
      setFlag('US');
      setLanguage('pt');
    }
  }, [flag]);

  useEffect(() => {
    const language = window.navigator.language.split('-')[0];

    if (language === 'en') {
      setFlag('BR');
    } else {
      setFlag('US');
    }
  }, []);

  return (
    <ReactCountryFlag
      countryCode={flag}
      svg
      onClick={handleFlag}
      style={{
        fontSize: '25px',
        cursor: 'pointer'
      }}
    />
  );
};

export default ChangeLanguage;
