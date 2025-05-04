import { INav } from '../views/home/interface/ImgInterface';

export const nav: INav[] = [
  {
    label: 'NAV.HOME',
    link: '/',
    icon: 'icons/add_home.svg',
    class: 'fixed-style',
  },
  {
    label: 'NAV.SERVICES',
    link: '/services',
    icon: 'icons/concierge.svg',
  },
  {
    label: 'NAV.FIRM',
    link: '/about',
    icon: 'icons/assured_workload.svg',
    class: 'fixed-style',
  },
  {
    label: 'NAV.CONTACT',
    link: '/team',
    icon: 'icons/forward_to_inbox.svg',
  },
];
