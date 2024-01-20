import { SearchInput } from '@/app/(LandingPage)/shared/components/SearchInput';
import type { FilterContentType } from '@/app/(LandingPage)/shared/types/type';
import { Badge } from '@/shared/components/ui/badge';
import { useFilterSection } from '../../../hooks/useFilterSection';
import { CustomCheckbox } from '../../CustomCheckbox';

type Props = {
  header: string;
  content: FilterContentType[];
};

export const Section = ({ header, content }: Props) => {
  const {
    endIndex,
    query,
    data,
    handleShowMore,
    handleCheckboxChange,
    handleSearch,
  } = useFilterSection(header, content);

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium text-gray-700">{header}</h3>
        <SearchInput
          placeholder={`Search ${header.toLowerCase()}`}
          wrapperClassName="lg:w-full h-10 lg:h-10 mt-4"
          onChange={handleSearch}
          value={query}
        />
      </div>

      <div className="space-y-3">
        {data.length > 0 &&
          data.slice(0, endIndex).map((item) => {
            return (
              <div key={item.id} className="flex items-center gap-2">
                <CustomCheckbox
                  id={item.id}
                  onChange={handleCheckboxChange}
                  checked={item.checked}
                />
                {header === 'Expertise' && (
                  <Badge size={'sm'} variant={item.variant as string}>
                    {item.label}
                  </Badge>
                )}
                {header === 'Role' && (
                  <p className="text-sm font-medium text-gray-700">
                    {item.label}
                  </p>
                )}
              </div>
            );
          })}
        {data.length < 1 && <p className="text-xs text-red-400 ">Not Found</p>}

        {header === 'Role' && (
          <button
            className="text-sm font-semibold text-primaryx-500 disabled:cursor-not-allowed disabled:text-gray-400"
            onClick={handleShowMore}
          >
            Show {endIndex >= data.length ? 'less' : 'more'}
          </button>
        )}
      </div>
    </div>
  );
};
