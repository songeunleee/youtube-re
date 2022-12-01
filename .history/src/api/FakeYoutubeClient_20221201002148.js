import axios from "axios";

export default class FakeYoutubeClient {
  async search() {
    console.log("search");
    return axios.get("1");
  }
  async videos() {
    return axios.get("videos/popular.json");
  }
}
