import type { StaticImageData } from 'next/image';
import Image from 'next/image';

type Props = {
  name: string;
  text: string;
  image: StaticImageData | string;
};

export const IdentityWidget = ({ name, text, image }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <Image src={image} alt="avatar" className="h-10 w-10 rounded-full" />
      <div>
        <h3 className="text-sm font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">{text}</p>
      </div>
    </div>
  );
};
