export type MenuData = {
  title: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link: string;
  childlinks?: string[];
};
