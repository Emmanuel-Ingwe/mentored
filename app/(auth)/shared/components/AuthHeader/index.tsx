type Props = {
  h1: string;
  p: string | React.ReactNode;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export const AuthHeader = ({ Icon, h1, p }: Props) => {
  return (
    <div className="mb-8 flex flex-col items-center text-center">
      <Icon />
      <h1 className="mt-6 text-2xl font-semibold text-gray-900 lg:text-3xl">
        {h1}
      </h1>
      <p className="mt-3 text-gray-600">{p}</p>
    </div>
  );
};
