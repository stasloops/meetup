export const storage = {
  set: <T>(key: string, value: T) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  },
  get: (key: string) => {
    if (typeof window === 'undefined') {
      return null;
    }
    const value = localStorage.getItem(key);
    if (value === undefined || value === null) {
      return null;
    }
    return JSON.parse(value);
  },
  remove: () => (key: string) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  },
};
