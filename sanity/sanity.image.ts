import createImageUrlBuilder from '@sanity/image-url';
import { dataset, projectId } from './sanity.api';

const imageBuilder = createImageUrlBuilder({
  dataset: dataset || '',
  projectId: projectId || '',
});

export const urlForImage = (source: string) => {
  return imageBuilder?.image(source);
};
