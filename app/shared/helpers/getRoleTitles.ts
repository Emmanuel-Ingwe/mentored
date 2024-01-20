import { filterContentRole } from '@/app/(LandingPage)/shared/contents';
import { roleTitleFilerLabels } from './roleTitleFilerLabels';

type RoleTitles = {
  res: User[];
};
export const getRoleTitles = ({ res }: RoleTitles) => {
  const roleTitles = roleTitleFilerLabels(res ?? []);
  return roleTitles.flatMap((role) => {
    return filterContentRole
      ?.map((prop) => {
        const { ...rest } = prop;
        const mergedFilters = { ...rest, ...role };
        return mergedFilters;
      })
      .filter((filter) => {
        return filter.label.toLowerCase() === role.jobTitle.toLowerCase();
      });
  });
};
