import { useEffect, useState, useCallback } from 'react';
import { getCookie } from 'cookies-next';
import { useToast } from '@/shared/hooks/useToast';

const SCROLL_THRESHOLD = 200; // define this threshold before the hook declaration

const useScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
  const welcomeMessageDissmissed = getCookie('desimisWelcomeMessage');

  const handleScroll = useCallback(() => {
    if (window.scrollY > SCROLL_THRESHOLD && isVisible) {
      return;
    }
    if (window.scrollY > SCROLL_THRESHOLD) {
      setIsVisible(true);
      return;
    }
    setIsVisible(false);
  }, [isVisible]);

  useEffect(() => {
    if (!welcomeMessageDissmissed) {
      toast({
        autoCapitalize: 'sentences',
        className: 'rounded-xl',
        description:
          'Welcome to MentorsHub, we are glad to have you here! Please note The Product is still in development 🧧  and some features may not work as expected.',
        title: 'Hey There 👋😃',
        type: 'foreground',
      });
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, toast, welcomeMessageDissmissed]);

  return isVisible;
};

export default useScrollToTopButton;
