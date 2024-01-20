import SummaryCard from './SummaryCard';
import Topmatches from '../Topmatches';

const Summary = () => {
  return (
    <div className="mt-8">
      <Topmatches />
      <div className="mt-6">
        <p className="border-b border-gray-200 pb-5 text-lg font-semibold text-gray-900">
          Ongoing Program
        </p>
        <SummaryCard
          title="No ongoing program"
          body={{
            __html:
              'Your ongoing program will appear here. Apply to a <br /> mentor tobegin a program',
          }}
        />
      </div>
    </div>
  );
};
export default Summary;
