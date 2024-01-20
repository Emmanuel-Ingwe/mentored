'use client';
import { Analytics } from '@vercel/analytics/react';
import Lazyload from '../../Hydrate/Lazyload';

const Analytic = () => {
  return (
    <Lazyload>
      <Analytics />
    </Lazyload>
  );
};
export default Analytic;
