'use client';
import { useCallback, useEffect } from 'react';
import { useDidUserInteract } from '@/shared/store/useDidUserInteractStore';
import setEventListener from './helpers/setEventListener';
const EVENT_TYPES = [
  'keydown',
  'mousedown',
  'touchstart',
  'mousemove',
  'scroll',
];
const useDidInteract = () => {
  const [, setPageInteraction] = useDidUserInteract();

  const setPageInteractionCallback = useCallback(() => {
    setEventListener('remove', EVENT_TYPES, setPageInteractionCallback);
    setPageInteraction();
  }, [setPageInteraction]);

  useEffect(() => {
    const event = () => {
      setPageInteractionCallback();
    };

    setEventListener('add', EVENT_TYPES, event);
    return () => {
      setEventListener('remove', EVENT_TYPES, event);
    };
  });
};
export default useDidInteract;
