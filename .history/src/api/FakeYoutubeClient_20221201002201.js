import axios from "axios";

export default class FakeYoutubeClient {
  async search() {
    console.log("search");
    return axios.get("https://tailwindcss.com/docs/installation");
  }
  async videos() {
    return axios.get("videos/popular.json");
  }
}
