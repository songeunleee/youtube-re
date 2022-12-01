import axios from "axios";

export default class FakeYoutube {
  constructor() {
    async function search(keyword) {
      return keyword ? this.#searchByKeyword(keyword) : this.#mostpopular();
    }
  }
}
