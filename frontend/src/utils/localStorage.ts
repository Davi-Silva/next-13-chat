export const setLocalStorage = (key: string, value: object) => {
  const sValue = JSON.stringify(value);
  localStorage.setItem(key, sValue);
};

export const getLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);
  if (!item) return null;
  return JSON.parse(item);
};
