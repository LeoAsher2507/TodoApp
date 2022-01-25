export const getLocalStorage = (key) => {
<<<<<<< HEAD
    return localStorage.getItem(key);
  };
  
  export const setLocalStorage = (key, value) => {
    return localStorage.setItem(key, value);
  };
  
  export const removeLocalStorage = (key) => {
    return localStorage.removeItem(key);
  };
=======
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : '';
};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};
>>>>>>> LeoAsher
