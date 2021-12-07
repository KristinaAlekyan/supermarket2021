class Service {
  constructor() {
    this.baseUrl = "https://localhost:5001/api";
    this.authToken = "";
  }

  _request = (method = "GET", url, data = null) => {
    return fetch(`${this.baseUrl}${url}`, {
      mode: "no-cors",
      method,
      headers: {
        Authorization: "Bearer" + this.authToken,
      },
      body: data ? JSON.stringify(data) : null,
    }).then((res) => {
      console.log("res in then: ", res);
      if (res.status >= 400) {
        const error = new Error("Error status :", res.status);
        throw error;
      }
      return res;
    });
  };

  setToken = (token) => {
    this.authToken = token;
  };

  login = (credentials) => {
    this._request("Post", "/api/account/login", credentials);
  };

  getWarehouses = () => {
    return this._request("GET", "/warehouses");
  };

  getProducts = (id) => {
    return this._request("GET", `/warehouses/${id}`);
  };
}

const service = new Service();
export default service;
