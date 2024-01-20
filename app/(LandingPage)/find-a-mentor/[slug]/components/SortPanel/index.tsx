import { SwitchVertical } from '@/shared/components/Icons/SwitchVertical';
import { Button } from '@/shared/components/ui/button';
import { cn } from '@/shared/lib/utils';
import { useFindAMentorContext } from '../../context/useFindAMentorContext';
import {
  Panel,
  PanelContent,
  PanelFooter,
  PanelHeader,
  PanelTrigger,
} from '../Panel';

export const SortPanel = () => {
  const { sortValues, setSortValues } = useFindAMentorContext();

  const handleSort = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    const newData = sortValues.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }

      return { ...item, checked: false };
    });
    setSortValues(newData);
  };

  return (
    <Panel>
      <PanelTrigger asChild>
        <Button variant={'outline'} className="h-10 gap-2 px-4 max-lg:w-full">
          <SwitchVertical />
          <span className="text-sm">Sort</span>
        </Button>
      </PanelTrigger>
      <PanelContent>
        <div className="space-y-6 p-6">
          <PanelHeader primaryText={'Sort'} secondaryText={'Sort by'} />
          <div className="flex flex-col items-start gap-3 text-sm font-medium text-gray-700 [&>*]:cursor-pointer hover:[&>*]:text-primaryx-500">
            {sortValues.map((item) => {
              return (
                <button
                  id={item.id}
                  key={item.id}
                  className={cn(item.checked && 'text-primaryx-500')}
                  onClick={handleSort}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
        <PanelFooter />
      </PanelContent>
    </Panel>
  );
};
