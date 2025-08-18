export function saveToLocalStorage(key: string, value: File | string | object) {
  if (value instanceof File) {
    const reader = new FileReader();
    reader.onload = () => {
      localStorage.setItem(key, reader.result as string);
    };
    reader.readAsDataURL(value); // Converts file to base64 string
  } else if (typeof value === "object") {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
}

export function loadFromLocalStorage<T = string>(key: string, parseJson = false): T | null {
  const item = localStorage.getItem(key);
  if (!item) return null;

  if (parseJson) {
    try {
      return JSON.parse(item) as T;
    } catch {
      return null;
    }
  }
  return item as T;
}

export function removeFromLocalStorage(key: string) {
  localStorage.removeItem(key);
}
