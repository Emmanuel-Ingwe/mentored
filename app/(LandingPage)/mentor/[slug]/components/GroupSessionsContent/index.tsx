import { GroupSessionCard } from '../GroupSessionCard';

export const GroupSessionsContent = () => {
  return (
    <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:gap-8">
      <GroupSessionCard />
      <GroupSessionCard />
    </div>
  );
};
