export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const loadFromLocalStorage = (key, defaultValue) => {
  const value = localStorage.getItem(key);
  return value !== null ? value : defaultValue;
};