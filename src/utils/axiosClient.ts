import axios from "axios";

const singletonEnforcer = Symbol();

class AxiosClient {
  axiosClient: any;
  static axiosClientInstance: any;

  constructor(enforcer: any) {
    if (enforcer !== singletonEnforcer) {
      throw new Error("Cannot initialize Axios client single instance");
    }

    this.axiosClient = axios.create({
      baseURL: process.env.REACT_APP_ENPOINT || "http://localhost:1323/api/v1/",
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.axiosClient.interceptors.request.use(
      (configure: any) => {
        return configure;
      },
      (error: any) => {
        return Promise.reject(error);
      }
    );
  }

  static get instance() {
    if (!this.axiosClientInstance) {
      this.axiosClientInstance = new AxiosClient(singletonEnforcer);
    }

    return this.axiosClientInstance;
  }

  setHeader(userToken = null) {
    this.axiosClient.defaults.headers.common.Authorization = `Bearer ${userToken}`;
  }

  get(resource: string, slug = "", config = {}) {
    const requestURL = !slug ? `${resource}` : `${resource}/${slug}`;
    return this.axiosClient.get(
      requestURL,
      Object.assign({ ...config }, this.axiosClient.defaults.headers)
    );
  }

  post(resource: string, data: object, config = {}) {
    return this.axiosClient.post(
      `${resource}`,
      data,
      Object.assign(config, this.axiosClient.defaults.headers)
    );
  }

  put(resource: string, data: object, config = {}) {
    return this.axiosClient.put(
      `${resource}`,
      data,
      Object.assign(config, this.axiosClient.defaults.headers)
    );
  }

  delete(resource: string, data: object, config = {}) {
    return this.axiosClient.delete(`${resource}`, {
      params: data,
      ...Object.assign(config, this.axiosClient.defaults.headers),
    });
  }
}

export default AxiosClient.instance;
