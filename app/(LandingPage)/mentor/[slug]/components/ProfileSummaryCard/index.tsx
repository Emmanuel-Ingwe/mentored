import { Clock } from '@/shared/components/Icons/Clock';
import { LocationIcon } from '@/shared/components/Icons/LocationIcon';
import { MessagesSquare } from '@/shared/components/Icons/MessagesSquare';
import { OverviewCardWrapper } from '../OverviewCardWrapper';

type Props = {
  summary: string;
  location: string;
  completedSessions: number;
  commitment: string;
};

export const ProfileSummaryCard = ({
  summary,
  commitment,
  completedSessions,
  location,
}: Props) => {
  return (
    <OverviewCardWrapper title="Profile Summary">
      <p>{summary}</p>

      <div className="mt-5 space-y-2">
        <div className="flex items-center gap-3">
          <LocationIcon />
          <span className="text-grizzly-300">{location}</span>
        </div>
        <div className="flex items-center gap-3">
          <MessagesSquare />
          <span className="text-grizzly-300">
            {completedSessions} completed sessions
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Clock />
          <span className="text-grizzly-300">Can commit {commitment}</span>
        </div>
      </div>
    </OverviewCardWrapper>
  );
};
