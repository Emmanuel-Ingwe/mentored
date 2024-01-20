export const ProgressLine = ({
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className="-mx-40 mt-3.5 h-[1.125px] w-[35%] shrink-0 self-start bg-gray-200 data-[active=true]:bg-primaryx-500"
      {...props}
    />
  );
};
