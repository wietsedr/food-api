import { useState } from "react";

import { YelpApi } from '../api/YelpApi';
import { yelpApiConfig } from '../api/YelpApi.config';

import { business } from "../interfaces/business";

export const useBusiness = (): [
  (businessId: string) => void,
  business,
  string,
] => {
  const [business, setBusiness] = useState<business | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const fetch = async (businessId: string): Promise<void> => {
    try {
      const yelpApi = new YelpApi(yelpApiConfig);
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
