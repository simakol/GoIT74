import NewsApiService from "./NewsApiService.js";
import LoadMoreBtn from "./components/LoadMoreBtn.js";

const refs = {
  form: document.getElementById("form"),
  newsWrapper: document.getElementById("newsWrapper"),
};

const newsApiService = new NewsApiService();
const loadMoreBtn = new LoadMoreBtn({
  selector: "#loadMore",
  isHidden: true,
});

refs.form.addEventListener("submit", onSubmit);
loadMoreBtn.button.addEventListener("click", fetchArticles);
// function handleScroll() {
//   const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

//   console.log(scrollTop, scrollHeight, clientHeight);
//   if (scrollTop + clientHeight >= scrollHeight - 5) {
//     fetchArticles();
//   }
// }

// window.addEventListener("scroll", handleScroll);

function onSubmit(e) {
  e.preventDefault();
  loadMoreBtn.show();
  const form = e.currentTarget;
  newsApiService.query = form.elements.news.value;

  newsApiService.resetPage();
  clearNewsList();
  fetchArticles().finally(() => form.reset());
}

function fetchArticles() {
  loadMoreBtn.disable();
  return getArticlesMarkup()
    .then((markup) => {
      updateNewsList(markup);
      loadMoreBtn.enable();
    })
    .catch(onError);
}

function getArticlesMarkup() {
  return newsApiService.getNews().then(({ articles }) => {
    if (articles.length === 0) throw new Error("No data!");
    return articles.reduce(
      (markup, article) => markup + createMarkup(article),
      ""
    );
  });
}

function createMarkup({ title, author, url, urlToImage, description }) {
  return `
    <div class="article-card">
        <h2 class="article-title">${title}</h2>
        <h3 class="article-author">${author || "Unknown"}</h3>
        <img src=${
          urlToImage ||
          "https://sun9-43.userapi.com/impf/c637716/v637716451/5754/CZa3BJtbJtg.jpg?size=520x0&quality=95&sign=02df8d0cd8ae78099bc1f50938efd60a"
        } class="article-img">
        <p class="article-description">${description}</p>
        <a href=${url} target="_blank" class="article-link">Read more</a>
    </div>
  `;
}

function updateNewsList(markup) {
  refs.newsWrapper.insertAdjacentHTML("beforeend", markup);
}

function clearNewsList() {
  refs.newsWrapper.innerHTML = "";
}

function onError(err) {
  console.error(err);
  loadMoreBtn.hide();
  clearNewsList();
  updateNewsList("<p>Not found!</p>");
}

/*
  1. Користувач робить запит
  2. Показується 5 перших результатів
  3. Знизу зʼявляється кнопка "Завантажити більше"
  4. Натискає на кнопку
  5. Відбувається новий запит на сервер і підвантажується 5 нових обʼєктів
  6. 5 нових результатів додаються до решти
*/
