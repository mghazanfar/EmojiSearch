import emojiList from './emojiList.json';

/*
 * Imported emoji list is a json, consisting of each emoji's name, keyword to find with, and symbol.
 * The function (filterEmoji) takes a text (searchText, which is usually received from user as input) and a number (maxResults). The function maps the
 * list and turns it's title to lowerCase to see if the user's entered text contains that or not.
 * Then it checks the same in emoji's keywords. This is happened because we want to map the input to exact name of the emoji and also to keywords
 * of the emoji so relative emojis are shown in the result.
 */

export default function filterEmoji(searchText, maxResults) {
  return emojiList.filter((emoji) => {
    if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }
    if (emoji.keywords.includes(searchText)) {
      return true;
    }
    return false;
  }).slice(0, maxResults);
}
