import { useState, useMemo } from "react";

import { YelpApi } from '../api/YelpApi';
import { yelpApiConfig } from '../api/YelpApi.config';

import { business } from "../interfaces/business";

export const useBusiness = (): [
  (businessId: string) => void,
  business,
  string,
] => {
  const yelpApi = useMemo(() => new YelpApi(yelpApiConfig), []);
  const [business, setBusiness] = useState<business | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const fetch = async (businessId: string): Promise<void> => {
    try {
      const response = await yelpApi.getBusiness(businessId);
  
      if (response) {
        setBusiness(response.data);
      }
    } catch (err) {
      setErrorMessage(`Something went wrong: ${err}`);
    }
  };

  return [fetch, business, errorMessage];
};
