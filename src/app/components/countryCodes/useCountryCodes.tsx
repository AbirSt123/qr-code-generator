import { useState } from 'react';
import { countries } from 'countries-list';

const useCountryCodes = () => {
  const [countryCode, setCountryCode] = useState("+1");

  const countriesToRemove = ["Western Sahara", "Israel"];
  
  const getCountriesWithPhoneCodes = () => {
    return Object.entries(countries)
      .map(([code, country]) => ({
        name: country.name,
        phone: country.phone.join(", "),
      }))
      .filter((country) => !countriesToRemove.includes(country.name));
  };

  const countryList = getCountriesWithPhoneCodes();

  return { countryCode, setCountryCode, countryList };
};

export default useCountryCodes;
