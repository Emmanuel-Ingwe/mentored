import type { PortableTextComponents } from '@portabletext/react';
import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import Link from 'next/link';
import { urlForImage } from '@/sanity/sanity.image';
import { ImgComp } from '@/shared/components/ImgComp';

export function CustomPortableText({
  value,
}: {
  paragraphClasses?: string;
  value: PortableTextBlock[];
}) {
  const components: PortableTextComponents = {
    block: {
      h3: ({ children }) => {
        return (
          <h3 className="my-3 text-lg font-bold leading-6 text-gray-600">
            {children}
          </h3>
        );
      },
      h4: ({ children }) => {
        return (
          <h4 className="my-3 font-bold leading-6 text-gray-600">{children}</h4>
        );
      },

      normal: ({ children }) => {
        return <p className="mb-3 text-gray-600">{children}</p>;
      },
    },
    list: {
      bullet: ({ children }) => {
        return (
          <ul className="ml-6 mt-4 list-disc text-gray-600">{children}</ul>
        );
      },
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <Link
            href={value?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline opacity-80 transition-all duration-300 hover:text-primaryx-500 hover:opacity-100"
          >
            {children}
          </Link>
        );
      },
    },
    types: {
      image: ({
        value,
      }: {
        value: string & {
          alt?: string;
          caption?: string;
          link?: string;
        };
      }) => {
        return (
          <div className="my-3 w-full text-center">
            <ImgComp
              src={urlForImage(value).height(500).width(800)?.url()}
              alt={value.alt || value.caption || ''}
              height={500}
              width={800}
              className="h-[217px] w-full object-cover lg:h-[432px]"
            />
            {value?.caption &&
              (value?.link ? (
                <Link
                  href={value.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto mt-3 whitespace-normal break-words text-sm text-gray-600 underline transition-all duration-300 hover:text-pink-300 hover:opacity-100"
                >
                  {value.caption}
                </Link>
              ) : (
                <p className="mx-auto mt-3 max-w-[35rem] whitespace-normal break-words text-sm text-gray-600">
                  {value.caption}
                </p>
              ))}
          </div>
        );
      },
    },
  };

  return <PortableText components={components} value={value} />;
}
