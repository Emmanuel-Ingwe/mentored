import React, { useState } from 'react';
import { CloseIcon } from '@/shared/components/Icons/CloseIcon';
import { VerifyIcon, RejectedIcon } from '@/shared/components/Svgs/Verify';

interface NotificationPopUpProps {
  trigger: React.ReactElement;
  variant: 'error' | 'success' | 'pending';
  content: React.ReactNode;
}

const NotificationPopUp: React.FC<NotificationPopUpProps> = ({
  trigger,
  variant,
  content,
}) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  const getIcon = () => {
    switch (variant) {
      case 'error':
        return <RejectedIcon width="50px" />;
      case 'success':
        return <VerifyIcon width="50px" />;
      case 'pending':
        return <CloseIcon width="50px" />;
      default:
        return null;
    }
  };

  return (
    <div className="relative inline-block">
      {React.cloneElement(trigger, {
        onClick: () => {
          togglePopUp();
        },
      })}

      {showPopUp && (
        <div className="fixed right-8 top-6 flex gap-x-8 rounded-xl bg-white p-4 shadow-lg">
          {getIcon()}
          <button onClick={togglePopUp} className="absolute right-2 top-2">
            <CloseIcon />
          </button>
          <div className="mr-12">{content}</div>
        </div>
      )}
    </div>
  );
};

export default NotificationPopUp;
