type Props = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

export const HowItWorksCard = ({ Icon, title, description }: Props) => {
  return (
    <div className="flex flex-col items-center gap-[1.32rem] text-center lg:-mx-28 lg:w-[22.09144rem]">
      <div className="flex h-28 w-28 items-center justify-center rounded-full border-[18.667px] border-primaryx-50 bg-primaryx-100 ">
        <Icon className="h-14 w-14" />
      </div>
      <div className="space-y-2">
        <h4 className="text-xl font-semibold">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};
