import { stringify } from "qs";
import configs from "../configs";
import { merge, omit, toUpper } from "lodash";
export type Data =
  | string
  | object
  | Blob
  | ArrayBufferView
  | ArrayBuffer
  | FormData
  | URLSearchParams
  | ReadableStream<Uint8Array>
  | null
  | undefined;

export interface ApiService {
  apiUrl: string;
  apiToken?: string;
  options?: RequestInit;
  get: (endpoint: string, queryParams: object, options?: Settings) => {};
  post: (endpoint: string, data: Data, options?: Settings) => {};
  put: (endpoint: string, data: Data, options?: Settings) => {};
  patch: (endpoint: string, data: Data, options?: Settings) => {};
  delete: (endpoint: string, options: Settings) => {};
}

export interface Settings {
  method?: string;
  headers?: string[][] | Record<string, string> | undefined;
  body?:
    | string
    | Blob
    | ArrayBufferView
    | ArrayBuffer
    | FormData
    | URLSearchParams
    | ReadableStream<Uint8Array>
    | null
    | undefined;
  contentType?: string;
}

export interface ParseOptions extends Settings {
  data?: Data;
  locale?: string;
  contentType?: string;
  defaultUrl?: string;
}

class ApiServiceImpl implements ApiService {
  public apiUrl: string;
  public apiKey: string;
  public options: { [name: string]: any };

  constructor(url: string, apiKey: string) {
    this.apiUrl = url;
    this.apiKey = apiKey;

    this.options = {};
  }

  private parseOptions({
    method = "get",
    data,
    locale,
    ...options
  }: ParseOptions) {
    // If request is multipart, adjust content type
    const isMultipart = options.contentType === "multipart/form-data";

    const settings: RequestInit | any = merge(
      {
        body: data ? JSON.stringify(data) : undefined,
        method: toUpper(method),
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
          "private-key": this.apiKey,
        },
      },
      options
    );

    if (isMultipart) {
      settings.body = data as FormData;
      settings.headers = omit(settings.headers, ["Content-Type"]) as Record<
        string,
        string
      >;
    }

    return settings;
  }

  private parseEndpoint(endpoint: string, queryParams?: object) {
    const url =
      endpoint.indexOf("http") === 0 ? endpoint : `${this.apiUrl}${endpoint}`;
    const queryString = queryParams ? `?${stringify(queryParams)}` : "";
    return `${url}${queryString}`;
  }

  public checkStatus(response: Response): Promise<Response> {
    return new Promise((resolve, reject) => {
      if (response.ok) return resolve(response);

      response
        .json()
        .then((jsonError) => {
          let errorMessage;
          if (jsonError.message && jsonError.description) {
            errorMessage = `${jsonError.message}, ${jsonError.description}.`;
          } else if (jsonError.message) {
            errorMessage = `${jsonError.message}`;
          } else {
            errorMessage = `${response.status} ${response.statusText}`;
          }
          jsonError.message = errorMessage;
          reject(jsonError);
        })
        .catch(() => {
          const error = new Error(`${response.status} ${response.statusText}`);
          reject(error);
        });
    });
  }

  private convertToJson(response: Response) {
    try {
      const result = response.json();
      return result;
    } catch (jsonError: any) {
      let errorMessage;
      if (jsonError.message && jsonError.description) {
        errorMessage = `${jsonError.message}, ${jsonError.description}.`;
      } else if (jsonError.message) {
        errorMessage = `${jsonError.message}`;
      } else {
        errorMessage = `${response.status} ${response.statusText}`;
      }
      const error = new Error(errorMessage);
      throw error;
    }
  }

  private async request(endpointUrl: string, options: RequestInit = {}) {
    return fetch(endpointUrl, {
      ...options,
    })
      .then(this.checkStatus)
      .then(this.convertToJson);
  }

  public async get(endpoint: string, queryParams?: object, options?: Settings) {
    const url = this.parseEndpoint(endpoint, queryParams);

    const parsedOptions = this.parseOptions({
      method: "get",
      ...options,
    });

    return this.request(url, parsedOptions);
  }

  public async post(endpoint: string, data: Data, options?: Settings) {
    const url = this.parseEndpoint(endpoint);
    const parsedOptions = this.parseOptions({
      method: "post",
      data,
      ...options,
    });
    return this.request(url, parsedOptions);
  }

  public async put(endpoint: string, data: Data, options?: Settings) {
    const url = this.parseEndpoint(endpoint);
    const parsedOptions = this.parseOptions({
      method: "put",
      data,
      ...options,
    });
    return this.request(url, parsedOptions);
  }

  public async patch(endpoint: string, data: Data, options?: Settings) {
    const url = this.parseEndpoint(endpoint);
    const parsedOptions = this.parseOptions({
      method: "patch",
      data,
      ...options,
    });
    return this.request(url, parsedOptions);
  }

  public async delete(endpoint: string, data: Data, options?: Settings) {
    const url = this.parseEndpoint(endpoint);
    const parsedOptions = this.parseOptions({
      method: "delete",
      data,
      ...options,
    });
    return this.request(url, parsedOptions);
  }
}

export const apiService = new ApiServiceImpl(configs.apiUrl, configs.apiKey);
