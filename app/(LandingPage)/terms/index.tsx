import { termsData } from './contents';
import LegalContent from '../shared/components/legalContent';
import LegalHeader from '../shared/components/legalHeader';

const Terms = () => {
  return (
    <div className="font-['Inter']">
      <LegalHeader
        date="20 Jan 2022"
        title="Terms and conditions"
        content="These Terms and Conditions (“Terms”) govern your use of the MentorsHub platform. By accessing or using the MentorsHub platform, you agree to be bound by these Terms."
      />
      <div className="mb-12 flex flex-col px-4 md:items-center md:px-0 ">
        {termsData.map((item) => {
          return (
            <LegalContent
              key={item.title}
              title={item.title}
              body={{ __html: item.body }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Terms;
