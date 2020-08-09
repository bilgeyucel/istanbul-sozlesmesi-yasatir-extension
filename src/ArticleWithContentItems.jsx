import React from "react";

function ArticleWithContentItems({contentItems}) {
  return (
    <ul className={"article-content-items"}>
      {contentItems.map((contentItem, index) => (
        <li key={index} className={"article-content-item"}>
          <p>
            <span className={"article-content-item-prefix"}>{contentItem.prefix}</span>

            {contentItem.subContent}
          </p>

          {Boolean(contentItem.subContentItems.length) && (
            <ArticleWithContentItems contentItems={contentItem.subContentItems} />
          )}
        </li>
      ))}
    </ul>
  );
}

export {ArticleWithContentItems};
