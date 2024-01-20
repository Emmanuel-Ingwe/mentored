import type { FC } from 'react';
import { useInView } from 'react-hook-inview';

type Props = {
  minHeight?: number | string;
  gridArea?: string;
  placeholder?: JSX.Element;
  children: React.ReactNode;
};

const Lazy: FC<Props> = ({ minHeight, gridArea, placeholder, children }) => {
  const [ref, isVisible] = useInView({ unobserveOnEnter: true });
  return (
    <div
      ref={ref}
      style={{ gridArea, minHeight }}
      className={isVisible ? 'lazyContainer' : ''}
    >
      {isVisible ? children : placeholder}
    </div>
  );
};

export default Lazy;
