import { Button } from '@/shared/components/ui/button';

type Props = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
  name: string;
};

export const AuthSocialButton = ({ Icon, name }: Props) => {
  return (
    <Button variant="outline" className="h-11 w-full gap-3" type="button">
      {name === 'LinkedIn' ? <Icon className="fill-linkedin" /> : <Icon />}
      <span className="font-semibold text-gray-700">
        Sign up with <span className="capitalize">{name}</span>
      </span>
    </Button>
  );
};
