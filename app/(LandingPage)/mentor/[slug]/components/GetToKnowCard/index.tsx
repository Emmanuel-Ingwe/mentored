import { InnerCard } from './InnerCard';
import { OverviewCardWrapper } from '../OverviewCardWrapper';

type Props = {
  name: string;
};

export const GetToKnowCard = ({ name }: Props) => {
  return (
    <OverviewCardWrapper title={`Get to Know ${name}`}>
      <div className="grid gap-4 lg:grid-cols-2">
        <InnerCard />
        <InnerCard />
      </div>
    </OverviewCardWrapper>
  );
};
