import { getCookie } from 'cookies-next';

export const shouldShowFeature = (feature: string) => {
  const getFeatureFromCookie = getCookie(feature);

  return !!getFeatureFromCookie;
};
