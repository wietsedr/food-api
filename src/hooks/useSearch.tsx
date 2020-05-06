import { useEffect, useState, useMemo } from 'react';

import { YelpApi } from '../api/YelpApi';
import { yelpApiConfig } from '../api/YelpApi.config';

import { business } from '../interfaces/business';

export const useSearch = (): [(searchTerm: string) => void, business[], string] => {
  const yelpApi = useMemo(() => new YelpApi(yelpApiConfig), []);

  const [results, setResults] = useState<business[]>([]);
  const [errorMessage, setErrorMessage] = useState<string> ('');

	const onSearch = async (searchTerm: string): Promise<void> => {
    try {
      const response = await yelpApi.search(searchTerm, 'los angeles', 50);

      console.log('searching for', searchTerm);

      if (response) {
        setResults(response.data.businesses);
        setErrorMessage('');
      }
    } catch (err) {
      setErrorMessage(`Something went wrong: ${err}`);
    }
  };
  
  useEffect(() => {
    onSearch('pasta');
  }, []);

  return [onSearch, results, errorMessage];
};
