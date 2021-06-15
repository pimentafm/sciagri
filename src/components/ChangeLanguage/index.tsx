import React, { useState, useEffect, useCallback } from 'react';

import ReactCountryFlag from 'react-country-flag';

import setLanguage from 'next-translate/setLanguage';

import useTranslation from 'next-translate/useTranslation';

const ChangeLanguage = () => {
  const { lang } = useTranslation('about');

  const [flag, setFlag] = useState('BR');

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
    if (lang === 'en') {
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
