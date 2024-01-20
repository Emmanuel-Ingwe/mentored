export const isObjEmpty = <T>(obj: T) => {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key as keyof typeof obj];

      if (value === undefined) {
        return true;
      }

      if (typeof value === 'string' && value.trim() === '') {
        return true;
      }

      if (Array.isArray(value) && value.length === 0) {
        return true;
      }

      if (typeof value === 'object' && isObjEmpty(value)) {
        return true;
      }
    }
  }

  return false;
};
