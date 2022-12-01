import axios from "axios";

export default class FakeYoutubeClient {
  async search() {
    console.log("search");
    return axios.get("videos/search.json");
  }
  async videos() {
    return axios.get("videos/popular.json");
  }
}
