// const ENDPOINT = "https://newsapi.org/v2/everything/";
// const API_KEY = "dd82ff3604224bf1b224da3ef75c9135";

// function getNews(query) {
//   return fetch(`${ENDPOINT}?apiKey=${API_KEY}&q=${query}&pageSize=5`).then((data) =>
//     data.json()
//   );
// }

// export { getNews };

export default class NewsApiService {
  static ENDPOINT = "https://newsapi.org/v2/everything/";
  static API_KEY = "dd82ff3604224bf1b224da3ef75c9135";

  constructor() {
    this.query = "";
    this.page = 1;
  }

  getNews() {
    const url = `${NewsApiService.ENDPOINT}?apiKey=${NewsApiService.API_KEY}&q=${this.query}&pageSize=5&page=${this.page}`;

    return fetch(url).then((data) => {
      this.incrementPage();
      return data.json();
    });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
