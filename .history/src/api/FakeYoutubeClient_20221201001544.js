import axios from "axios";

export default class FakeYoutubeClient {
  async search() {
    return axios.get("videos/popular.json");
  }
  async videos() {
    return axios.get("videos/popular.json");
  }
}
