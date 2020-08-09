import React from "react";

import {ArticleWithContentItems} from "./with-content-items/ArticleWithContentItems";

function Article({article}) {
  return (
    <>
      <h2 className={"article-content-title"} title={article.title}>
        {`Madde ${article.articleNumber} - ${article.title}`}
      </h2>

      {article.content && <p>{article.content}</p>}

      {Boolean(article.contentItems.length) && (
        <ArticleWithContentItems contentItems={article.contentItems} />
      )}
    </>
  );
}

export {Article};
