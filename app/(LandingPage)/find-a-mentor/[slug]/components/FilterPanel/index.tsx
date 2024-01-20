import { FilterLines } from '@/shared/components/Icons/FilterLines';
import { Button } from '@/shared/components/ui/button';

import { Section } from './Section';
import { useFindAMentorContext } from '../../context/useFindAMentorContext';
import {
  Panel,
  PanelContent,
  PanelFooter,
  PanelHeader,
  PanelTrigger,
} from '../Panel';

export const FilterPanel = () => {
  const { roles, expertise } = useFindAMentorContext();

  return (
    <Panel>
      <PanelTrigger asChild>
        <Button variant={'outline'} className="h-10 gap-2 px-4 max-lg:w-full">
          <FilterLines />
          <span className="text-sm">More Filters</span>
        </Button>
      </PanelTrigger>
      <PanelContent className="bottom-0">
        <div className="space-y-6 p-6 ">
          <PanelHeader primaryText={'Filter'} secondaryText={'Apply Filters'} />
          <Section header={'Expertise'} content={expertise} />
          <Section header={'Role'} content={roles} />
        </div>
        <PanelFooter />
      </PanelContent>
    </Panel>
  );
};
