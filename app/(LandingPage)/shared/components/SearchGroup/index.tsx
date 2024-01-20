import { Button } from '@/shared/components/ui/button';
import { SearchInput } from '../SearchInput';

const SearchGroup = () => {
  return (
    <div className="mt-12 flex w-full items-center lg:justify-center">
      <div className="mb-6 flex w-full flex-col items-center gap-4 lg:h-16 lg:flex-row lg:justify-center">
        <SearchInput placeholder="Search mentors by tech stack or location" />
        <Button hasAnimaion size={'lg'} className="w-full lg:w-auto">
          Find a mentor
        </Button>
      </div>
    </div>
  );
};

export default SearchGroup;
