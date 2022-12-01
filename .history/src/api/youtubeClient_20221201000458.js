import axios from "axios";

export default class YoutubeClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async #searchByKeyword(keyword) {
    return this.httpClient.get("search", params);
  }

  async #mostPopular() {
    return this.httpClient.get("videos", params);
  }
}
