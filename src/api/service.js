class Service {
  constructor() {
    this.baseUrl = "https://localhost:5001/api";
    this.authToken =
      "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsZXhhbmRlcnZhcmRhbnlhbkB0ZXN0LmNvbSIsImdpdmVuX25hbWUiOiJBbGV4YW5kZXJWYXJkYW55YW4iLCJyb2xlIjoiTWFzdGVyIiwibmJmIjoxNjM4NzIwNDMxLCJleHAiOjE2MzkzMjUyMzEsImlhdCI6MTYzODcyMDQzMSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMSJ9.wfVLXrx3vn_v0oPCyvwofZFVeFkT0NdE1PLr8JI1SlmsHnQ_BpOzv8y9RwklU4ul7RfIkGN9cPVdrJcWzkgTCw";
  }

  _request = (method = "GET", url, data = null) => {
    return fetch(`${this.baseUrl}${url}`, {
      mode: "no-cors",
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer" + this.authToken,
      },
      body: data ? JSON.stringify(data) : null,
    }).then((res) => {
      if (res.status >= 400) {
        const error = new Error("Error status :", res.status);
        throw error;
      }
      console.log("result is function", res);
      return res.json();
    });
  };

  setToken = (token) => {
    this.authToken = token;
  };

  getAllItems = () => {
    // console.log("Entered service");
    // console.log("base url :", this.baseUrl);
    // return this._request("GET", "/warehouses");

    let data = {
      email: "soemethiniw@asda.asd",
      password: "Asda123asd",
    }

    let res = JSON.stringify(data);
    console.log('type : ', typeof res);


    this._request("POST", "/register", res);
  };

  // getItems = (start, limit) => {
  //   return this._request("GET", `/posts?_start=${start}&_limit=${limit}`);
  // };

  // getItem = (id) => {
  //   return this._request("GET", `/posts/${id}`);
  // };

  // createItem = (data) => {
  //   return this._request("POST", "/posts", data);
  // };

  // updateItem = (id, data) => {
  //   return this._request("PATCH", `/posts/${id}`, data);
  // };

  // deleteItem = (id) => {
  //   return this._request("DELETE", `/posts/${id}`);
  // };
}

const service = new Service();
export default service;
