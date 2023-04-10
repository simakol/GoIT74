// **Написати додаток пошуку новин**
// Користувач бачить на екрані інпут ⇒ вводить в нього запит ⇒ отримує на екрані підбірку новин по його запиту.

import { getNews } from "./api.js";

const refs = {
  form: document.getElementById("form"),
  newsWrapper: document.getElementById("newsWrapper"),
};

refs.form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const inputValue = form.elements.news.value;
  getNews(inputValue)
    .then(({ articles }) => {
      console.log(articles);
      if (articles.length === 0) throw new Error("No data!");

      const markup = articles.reduce(
        (markup, article) => markup + createMarkup(article),
        ""
      );
      updateNewsList(markup);
    })
    // .catch((err) => onError(err))
    .catch(onError)
    .finally(() => form.reset());
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
  refs.newsWrapper.innerHTML = markup;
}

function onError(err) {
  console.error(err);
  updateNewsList("<p>Not found!</p>");
}



/*
* CRUD - create read update delete

- POST - create
- створює новий ресурс
- при створенні ресурсу, сервер автоматично дасть йому ID
- цей метод не є ідемпотентим

/user

- PUT - update
- оновлює вже існуючий ресурс, або створює його, якщо на сервері такого не існує
- є ідемпотентним

/user/{id}


*/