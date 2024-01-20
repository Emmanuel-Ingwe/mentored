export const findAMentorSubMenus = [
  {
    header: 'Engineering',
    links: [
      {
        name: 'Frontend Development',
        path: '/frontend-developer',
      },
      {
        name: 'Backend Development',
        path: '/backend-developer',
      },
      {
        name: 'Fullstack Development',
        path: '/fullstack-developer',
      },
      {
        name: 'QA Engineering',
        path: '/qa-engineer',
      },
      {
        name: 'Blockchain',
        path: '/blockchain',
      },
    ],
  },
  {
    header: 'Design',
    links: [
      {
        name: 'Graphic Design',
        path: '/graphic-design',
      },
      {
        name: 'UX Design',
        path: '/ux-design',
      },
    ],
  },
  {
    header: 'Management',
    links: [
      {
        name: 'Project Management',
        path: '/project-management',
      },
    ],
  },
];

export const companySubMenus = [
  {
    name: 'About us',
    path: '/about-us',
  },
  {
    name: 'Contact us',
    path: '/contact',
  },
  {
    name: 'Pricing',
    path: '/#',
  },
  {
    name: 'Support',
    path: '/#',
  },
];

export const navItems = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Find a Mentor',
    path: '/find-a-mentor',
    subMenus: findAMentorSubMenus,
  },
  {
    name: 'Become a Mentor',
    path: '/become-a-mentor',
  },
  {
    name: 'Company',
    path: '/#',
    subMenus: companySubMenus,
  },
];
