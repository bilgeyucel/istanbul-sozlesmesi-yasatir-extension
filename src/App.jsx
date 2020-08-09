import "./App.css";

import React, {useState} from "react";

import {CONVENTION_ARTICLES} from "./convention";
import {Article} from "./article/Article";

function App() {
  const [state, setArticleState] = useState({
    articleIndex: 0
  });
  const isNextButtonVisible = state.articleIndex < CONVENTION_ARTICLES.length - 1;
  const isPrevButtonVisible = state.articleIndex > 0;

  return (
    <div className={"App"}>
      <header className={"app-header"}>
        <h1 className={"app-header-title"}>{"#istanbulsozlemesiyasatir"}</h1>
      </header>

      <article className={"app-section"}>
        <Article article={CONVENTION_ARTICLES[state.articleIndex]} />
      </article>

      <footer className={"app-footer"}>
        {isPrevButtonVisible && (
          <button className={"footer-button"} onClick={onPrevButtonClick}>
            {"Önceki"}
          </button>
        )}

        {isNextButtonVisible && (
          <button className={"footer-button next"} onClick={onNextButtonClick}>
            {"Sonraki"}
          </button>
        )}
      </footer>
    </div>
  );

  function onNextButtonClick() {
    if (isNextButtonVisible) {
      setArticleState({...state, articleIndex: state.articleIndex + 1});
    }
  }

  function onPrevButtonClick() {
    if (isPrevButtonVisible) {
      setArticleState({...state, articleIndex: state.articleIndex - 1});
    }
  }
}

export default App;
