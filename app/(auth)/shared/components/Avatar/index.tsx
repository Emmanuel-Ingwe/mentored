import Image from 'next/image';

function Avater({ src }: { src: string }) {
  return (
    <div className="relative h-6 w-6 overflow-clip rounded-full border-2 border-white lg:h-10 lg:w-10">
      <Image
        alt="selected animal"
        fill={true}
        src={src}
        className="object-cover"
      />
    </div>
  );
}

export default Avater;
