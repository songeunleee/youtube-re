import axios from "axios";

export default class FakeYoutube {
  constructor() {
    export async function search(keyword) {
      return axios
        .get(`/videos/${keyword ? "search" : "popular"}.json`)
        .then((res) => res.data.items);
    }
  }
}
