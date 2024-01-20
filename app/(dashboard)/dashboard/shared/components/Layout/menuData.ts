import type { MenuData } from '../../types';
import {
  CheckDone,
  HomeLine,
  InfoCircle,
  LifeBuoy,
  MessageTextSquare,
  Settings,
  Users,
  VideoRecorder,
} from '../Icons';

export const menuData: MenuData[] = [
  {
    Icon: HomeLine,
    childlinks: ['/find-a-mentor'],
    link: '/dashboard',
    title: 'Dashboard',
  },
  {
    Icon: Users,
    link: '/dashboard/programs',
    title: 'Programs',
  },
  {
    Icon: LifeBuoy,
    link: '/dashboard/goals',
    title: 'Goals',
  },
  {
    Icon: CheckDone,
    link: '/dashboard/tasks-and-reviews',
    title: 'Tasks and reviews',
  },
  {
    Icon: VideoRecorder,
    link: '/dashboard/meetings',
    title: 'Meetings',
  },
  {
    Icon: MessageTextSquare,
    link: '/dashboard/messages',
    title: 'Messages',
  },
  {
    Icon: InfoCircle,
    link: '/dashboard/support',
    title: 'Support',
  },
  {
    Icon: Settings,
    link: '/dashboard/settings',
    title: 'Settings',
  },
];
