import React from 'react';
type props = {
  error: boolean;
};

const SearchFilterNotFound = ({ error }: props) => {
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="text-1xl text-[crimson]">
          Your search did not return any results.
        </div>
        <div className="text-xm mt-4 text-gray-500">
          Please try again with different keywords.
        </div>
      </div>
    );
  }
};

export default SearchFilterNotFound;
