import { Badge } from '@/shared/components/ui/badge';
import { OverviewCardWrapper } from '../OverviewCardWrapper';

type Props = {
  skills: string[];
};

export const SkillsCard = ({ skills }: Props) => {
  return (
    <OverviewCardWrapper title="Skills">
      <div className="flex flex-wrap items-center gap-x-1 gap-y-2">
        {skills && skills.length > 0
          ? skills.map((skill, index) => {
              return (
                <Badge
                  className="hover:bg-gray-300 hover:text-gray-700"
                  key={index}
                >
                  {skill}
                </Badge>
              );
            })
          : 'No skills found'}

        <span className="ml-3 cursor-pointer text-xs font-medium text-gray-700 underline max-lg:self-end">
          +10 more
        </span>
      </div>
    </OverviewCardWrapper>
  );
};
