const ENDPOINT = "https://newsapi.org/v2/everything/b";
const API_KEY = "dd82ff3604224bf1b224da3ef75c9135";

function getNews(query) {
  return fetch(`${ENDPOINT}?apiKey=${API_KEY}&q=${query}`).then((data) =>
    data.json()
  );
}

export { getNews };

// fetch(`${ENDPOINT}?q=gpt`, {
//   headers: {
//     "X-Api-Key": API_KEY,
//   },
// })
//   .then((data) => data.json())
//   .then(({ articles }) => console.log(articles));
