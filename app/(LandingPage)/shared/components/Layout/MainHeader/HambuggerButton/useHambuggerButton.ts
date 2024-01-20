import { useEffect } from 'react';
import { stagger, useAnimate } from 'framer-motion';
import useDeviceType from '@/shared/hooks/useDeviceType';

const useHambuggerButton = (toggle: boolean) => {
  const [scope, animate] = useAnimate();
  const { isMobile } = useDeviceType();

  useEffect(() => {
    if (!isMobile) {
      return;
    }
    const menuAnimations = toggle
      ? [
          [
            'nav',
            { transform: 'translateX(0%)' },
            { duration: 0.2, ease: [0.14, 0.25, 0.83, 0.46] },
          ],
          [
            'a',
            { filter: 'blur(0px)', opacity: 1, transform: 'scale(1)' },
            { at: '-0.1', delay: stagger(0.06) },
          ],
        ]
      : [
          [
            'a',
            { filter: 'blur(10px)', opacity: 0, transform: 'scale(0.5)' },
            { at: '<', delay: stagger(0.05, { from: 'last' }) },
          ],
          ['nav', { transform: 'translateX(-100%)' }, { at: '-0.1' }],
        ];

    animate([
      [
        'path.top',
        { d: toggle ? 'M 3 16.5 L 17 2.5' : 'M 2 2.5 L 20 2.5' },
        { at: '<' },
      ],
      ['path.middle', { opacity: toggle ? 0 : 1 }, { at: '<' }],
      [
        'path.bottom',
        { d: toggle ? 'M 3 2.5 L 17 16.346' : 'M 2 16.346 L 20 16.346' },
        { at: '<' },
      ],
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      ...menuAnimations,
    ]);
  }, [toggle, animate, isMobile]);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [toggle]);

  return {
    scope,
  };
};
export default useHambuggerButton;
