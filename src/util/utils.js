import {TEXT_DISPLAY_CHARACTER_LIMIT} from "./constants";

function truncateTextWithEllipsis(text, characterLimit = TEXT_DISPLAY_CHARACTER_LIMIT) {
  let truncated = "-";

  if (text) {
    truncated =
      text.length > characterLimit ? `${text.slice(0, characterLimit)}...` : text;
  }

  return truncated;
}

export {truncateTextWithEllipsis};
