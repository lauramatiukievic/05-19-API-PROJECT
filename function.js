export function firstLetterUpperCase(str) {
  const firstLetter = str.at(0).toUpperCase();
  const restOfStr = str.slice(1);
  const output = firstLetter + restOfStr;
  return output;
}

export async function fetchData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export function getUrlParams(param) {
  const queryParams = location.search;
  const urlParams = new URLSearchParams(queryParams);
  const paramValue = urlParams.get(param);

  return paramValue;
}

export default function search() {
  const searchText = document.querySelector("#name-input");
}
