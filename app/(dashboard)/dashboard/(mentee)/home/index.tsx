'use client';
import React from 'react';
import Summary from './components/Summary';
import SummaryCard from './components/Summary/SummaryCard';
import Header from '../../shared/components/header';

export const MenteeDashboard = () => {
  return (
    <div className="flex flex-col justify-between gap-8 lg:flex-row">
      <div className="w-full">
        <Header />
        <Summary />
      </div>
      <div className="mt-6 w-full bg-white lg:w-[328px]">
        <div className="mt-8 px-4">
          <p className="pb-5 text-lg font-semibold text-gray-900">Activity</p>
          <div className="border-b border-gray-300" />
          <SummaryCard
            title="No activity yet"
            body={{
              __html:
                'When you get new notifications or tasks, your activity will show up here. Apply to a mentor to get started.',
            }}
          />
        </div>
      </div>
    </div>
  );
};
