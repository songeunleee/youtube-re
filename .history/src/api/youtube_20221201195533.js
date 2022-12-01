export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }

  async related(id) {
    return this.apiClient
      .related({
        params: {
          part: "snippet",
          relatedToVideoId: id,
          type: "viedo",
          maxResults: 25,
        },
      })
      .then((res) => res.data.items);
  }

  async channel(id) {
    return this.apiClient
      .channel({
        params: {
          part: "snippet",
          id: id,
        },
      })
      .then((res) => res.data.items);
  }
}
