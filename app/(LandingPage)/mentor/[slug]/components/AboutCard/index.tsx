import { OverviewCardWrapper } from '../OverviewCardWrapper';

type Props = { about: string };

export const AboutCard = ({ about }: Props) => {
  return (
    <OverviewCardWrapper title="About">
      <p className="text-sm text-gray-600">{about}</p>
      <button className="mt-2 text-sm font-semibold text-primaryx-700">
        Read more
      </button>
    </OverviewCardWrapper>
  );
};
