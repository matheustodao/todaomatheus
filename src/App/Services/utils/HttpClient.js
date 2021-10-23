class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async post(path, data) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };

    const response = await fetch(`${this.baseURL}${path}`, requestOptions);

    return response?.json();
  }
}

export default HttpClient;
