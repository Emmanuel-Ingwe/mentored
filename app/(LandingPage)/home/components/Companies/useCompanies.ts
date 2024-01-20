'use client';

import { CDN_URL } from '@/shared/lib/constants';

export const useCompanies = () => {
  const imgSrc = [
    {
      alt: 'Layers',
      name: 'Layers',
      src: `${CDN_URL}/images/company-layers.svg`,
    },
    {
      alt: 'Sisyphus',
      name: 'Sisyphus',
      src: `${CDN_URL}/images/company-sisyphus.svg`,
    },
    {
      alt: 'circooles',
      name: 'circooles',
      src: `${CDN_URL}/images/company-circooles.svg`,
    },
    {
      alt: 'Catalog',
      name: 'Catalog',
      src: `${CDN_URL}/images/company-catalog.svg`,
    },
    {
      alt: 'Quotient',
      name: 'Quotient',
      src: `${CDN_URL}/images/company-quotient.svg`,
    },
    {
      alt: 'Hourglass',
      name: 'Hourglass',
      src: `${CDN_URL}/images/company-hourglass.svg`,
    },
  ];
  return { imgSrc };
};
