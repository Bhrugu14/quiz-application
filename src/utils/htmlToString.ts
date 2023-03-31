export const ConvertString = (str: string) => {
  return new DOMParser().parseFromString(str, "text/html").body.innerText;
};
