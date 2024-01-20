import React from 'react';
import Image from 'next/image';

interface SearchResultProps {
  roleTitle: string;
  profilePictureUrl: string;
  firstName: string;
  lastName: string;
}

interface SearchResultsProps {
  results: User[];
}

const SearchResult: React.FC<SearchResultProps> = ({
  roleTitle,
  profilePictureUrl,
  firstName,
  lastName,
}) => {
  return (
    <div className="flex items-center space-x-4 ">
      <Image
        className="h-12 w-12 rounded-full"
        src={profilePictureUrl}
        width={48}
        height={48}
        alt={`${firstName} ${lastName}`}
      />
      <div>
        <p className="text-lg font-medium text-gray-900">{`${firstName} ${lastName}`}</p>
        <p className="text-sm font-medium text-gray-500">{roleTitle}</p>
      </div>
    </div>
  );
};

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div className="space-y-4">
      {results.map((result, index) => {
        return (
          <SearchResult
            key={index}
            firstName={result.firstName}
            lastName={result.lastName}
            profilePictureUrl={result.profilePicture ?? ''}
            roleTitle={result.jobTitle ?? ''}
          />
        );
      })}
      <hr />
    </div>
  );
};

export default SearchResults;
