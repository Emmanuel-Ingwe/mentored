import { useCallback } from 'react';
import { create } from 'zustand';

type DidUserInteractStore = {
  didUserInteract: boolean;
  setPageInteraction: () => void;
};

export const useDidUserInteractStore = create<DidUserInteractStore>((set) => {
  return {
    didUserInteract: false,
    setPageInteraction: () => {
      return set(() => {
        return { didUserInteract: true };
      });
    },
  };
});

export const useDidUserInteract = () => {
  const { didUserInteract, setPageInteraction } = useDidUserInteractStore();
  const setPageInteractionCallback = useCallback(() => {
    return setPageInteraction();
  }, [setPageInteraction]);
  return [didUserInteract, setPageInteractionCallback] as const;
};
