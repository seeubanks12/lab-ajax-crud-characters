class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`);
  }

  getOneRegister(characterId) {
    return axios.get(`${this.BASE_URL}/characters/${characterId}`);
  }

  createOneRegister(characterObj) {
    return axios.post(`{this.BASE_URL}/characters`, characterObj);
  }

  updateOneRegister() {}

  deleteOneRegister() {}
}
