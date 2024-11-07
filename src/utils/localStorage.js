export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
  };
  
  export const loadFromLocalStorage = (key, defaultValue) => {
    return localStorage.getItem(key) || defaultValue;
  };