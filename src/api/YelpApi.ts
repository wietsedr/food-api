import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class YelpApi {
  private api: AxiosInstance;

  public constructor (config: AxiosRequestConfig) {
    this.api = axios.create(config);
  }

  public search (term: string, location: string, limit: number = 50): Promise<AxiosResponse> {
    return this.api.get("/search", {
      params: {
        term: term,
        location: location,
        limit: limit,
      },
    });
  }

  public getBusiness (businessId: string): Promise<AxiosResponse> {
    return this.api.get(`/${businessId}`);
  }
}
