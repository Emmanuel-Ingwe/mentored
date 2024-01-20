import React from 'react';
import type { FC } from 'react';

interface Props {
  value: number;
  title: string;
}

const MetricCards: FC<Props> = ({ value, title }) => {
  return (
    <div className="text-center">
      <h2 className="text-5xl font-semibold text-indigo-600">{value}</h2>
      <p className="mt-3 text-lg font-medium text-indigo-950">{title}</p>
    </div>
  );
};

export default MetricCards;
