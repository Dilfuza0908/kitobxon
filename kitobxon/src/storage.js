// Ma'lumotlar brauzerning localStorage'ida saqlanadi (backend yo'q).
export function load(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
}

export function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* saqlab bo'lmasa, sahifa baribir ishlayveradi */
  }
}