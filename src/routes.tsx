import { Icon } from '@chakra-ui/react'
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdLocalShipping,
  MdMoney,
  MdNoteAlt,
  MdOutlineSettings
} from 'react-icons/md'
import { RiBriefcaseFill, RiExchangeDollarLine } from 'react-icons/ri'
import { GiBarracksTent } from 'react-icons/gi'

// Admin Imports
import MainDashboard from 'pages/admin/default'
import NFTMarketplace from 'pages/admin/nft-marketplace'
import Jobs from 'pages/admin/jobs'
import Postjob from 'pages/admin/postjob'
import Profile from 'pages/admin/profile'
import DataTables from 'pages/admin/data-tables'
import RTL from 'pages/rtl/rtl-default'

// Auth Imports
import SignInCentered from 'pages/auth/sign-in'
import { IRoute } from 'types/navigation'

const routes: IRoute[] = [
  {
    name: 'Dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard
  },
  {
    name: 'My fleet',
    layout: '/admin',
    path: '/nft-marketplace',
    icon: (
      <Icon
        as={MdLocalShipping}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: NFTMarketplace,
    children: [
     { 
      name: 'Trucks',
      path: '/fleet/truck',
    },
    { 
      name: 'Drivers',
      path: '/fleet/drivers',
    },
    ]
    // secondary: true
  },
  {
    name: 'Jobs',
    layout: '/admin',
    path: '/jobs',
    icon: <Icon as={RiBriefcaseFill} width='20px' height='20px' color='inherit' />,
    component: Jobs
  },
  // {
  //   name: 'Post Jobs',
  //   layout: '/admin',
  //   path: '/postjob',
  //   icon: <Icon as={RiBriefcaseFill} width='20px' height='20px' color='inherit' />,
  //   component: Postjob
  // },
  {
    name: 'Bids',
    layout: '/admin',
    path: '/bids',
    icon: <Icon as={MdMoney} width='20px' height='20px' color='inherit' />,
    component: MainDashboard
  },
  {
    name: 'Marketplace',
    layout: '/admin',
    path: '/marketplace',
    icon: <Icon as={GiBarracksTent} width='20px' height='20px' color='inherit' />,
    component: MainDashboard
  },
  {
    name: 'Invoice',
    layout: '/admin',
    path: '/invoice',
    icon: <Icon as={RiExchangeDollarLine} width='20px' height='20px' color='inherit' />,
    component: MainDashboard
  },
  {
    name: 'Reports',
    layout: '/admin',
    path: '/report',
    icon: <Icon as={MdNoteAlt} width='20px' height='20px' color='inherit' />,
    component: MainDashboard
  },
  {
    name: 'Settings',
    layout: '/admin',
    path: '/settings',
    icon: <Icon as={MdOutlineSettings} width='20px' height='20px' color='inherit' />,
    component: MainDashboard
  }
  // {
  //   name: 'Data Tables',
  //   layout: '/admin',
  //   icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
  //   path: '/data-tables',
  //   component: DataTables
  // },
  // {
  //   name: 'Profile',
  //   layout: '/admin',
  //   path: '/profile',
  //   icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
  //   component: Profile
  // },
  // {
  //   name: 'Sign In',
  //   layout: '/auth',
  //   path: '/sign-in',
  //   icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
  //   component: SignInCentered
  // },
  // {
  //   name: 'RTL Admin',
  //   layout: '/rtl',
  //   path: '/rtl-default',
  //   icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
  //   component: RTL
  // }
]

export default routes
