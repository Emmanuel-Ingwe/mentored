type Props = {
  children: React.ReactNode;
};

export const AuthSecondaryLayout = ({ children }: Props) => {
  return (
    <div className="mx-auto flex justify-center px-4 py-12 lg:py-24">
      <div className="w-full lg:w-[22.5rem]">{children}</div>
    </div>
  );
};
