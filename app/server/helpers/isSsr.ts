export const isSsr = () => {
  return typeof window === 'undefined';
};
