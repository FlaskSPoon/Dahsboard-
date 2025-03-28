import React from 'react';

// Admin Imports

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdLogout,
  MdFolderCopy,
  MdForum,
  MdCalendarMonth,
  MdLiveTv,
  MdChatBubbleOutline,
  MdOutlinePeople,
  MdVideoChat,
  MdNewspaper,
  MdWindow,
  MdChat,
  MdPeopleAlt,
} from 'react-icons/md';

const routes = [
  {
    name: 'Dashboard',
    layout: '/admin',
    path: 'default',
    icon: <MdHome className="h-6 w-6" />,
  },
  {
    name: 'Services',
    layout: '/admin',
    path: 'service',
    icon: <MdWindow className="h-6 w-6" />,

    secondary: true,
  },
  {
    name: 'Utilisateurs',
    layout: '/admin',
    icon: <MdPeopleAlt className="h-6 w-6" />,
    path: 'user',
  },
  {
    name: 'Articles',
    layout: '/admin',
    icon: <MdForum className="h-6 w-6" />,
    path: 'article',
  },
  {
    name: 'Evènements',
    layout: '/admin',
    icon: <MdCalendarMonth className="h-6 w-6" />,
    path: 'evenement',
  },
  {
    name: 'Webinaires',
    layout: '/admin',
    icon: <MdVideoChat className="h-6 w-6" />,
    path: 'webinaire',
  },
  {
    name: 'Newsletters',
    layout: '/admin',
    icon: <MdNewspaper className="h-6 w-6" />,
    path: 'newLetter',
  },
  {
    name: 'Témoignages',
    layout: '/admin',
    icon: <MdChat className="h-6 w-6" />,
    path: 'testimonial',
  },
];
export default routes;
