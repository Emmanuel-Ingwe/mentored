import { useDidUserInteract } from '@/shared/store/useDidUserInteractStore';
import Lazy from './LazyView';

type Props = {
  minHeight?: number | string;
  gridArea?: string;
  placeholder?: JSX.Element;
  children: React.ReactNode;
  shouldWaitForInteraction?: boolean;
};

const Lazyload = ({ minHeight, placeholder, children }: Props) => {
  const [didUserInteract] = useDidUserInteract();
  if (!didUserInteract) {
    return <>{placeholder}</>;
  }
  return (
    <Lazy minHeight={minHeight} placeholder={placeholder}>
      {children}
    </Lazy>
  );
};
export default Lazyload;
