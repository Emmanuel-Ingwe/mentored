import MetricItem from './MetricItem';

const MetricSection: React.FC = () => {
  return (
    <div className="container px-4 lg:px-28">
      <div className="flex flex-col items-center justify-around gap-8 rounded-2xl bg-indigo-50 px-6 py-10 md:flex-row">
        <MetricItem value={400} title="Expert mentors" />
        <MetricItem value={600} title="Mentorship sessions" />
        <MetricItem value={10} title="Community members" />
      </div>
    </div>
  );
};

export default MetricSection;
