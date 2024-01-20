import { privacyPolicyData } from './contents';
import LegalContent from '../shared/components/legalContent';
import LegalHeader from '../shared/components/legalHeader';

const PrivacyPolicy = () => {
  return (
    <div className="font-['Inter']">
      <LegalHeader
        date="20 Jan 2022"
        title="Privacy Policy"
        content="At MentorsHub, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our platform."
      />
      <div className="mb-12 flex flex-col px-4 md:items-center md:px-0 ">
        {privacyPolicyData.map((item) => {
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

export default PrivacyPolicy;
