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

// User Import
import UserDashboard from 'pages/user/default'

// Auth Imports
import SignInCentered from 'pages/auth/sign-in'
import { IRoute } from 'types/navigation'

const userRoutes: IRoute[] = [
    {
        name: 'Dashboard',
        layout: '/user',
        path: '/default',
        icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
        component: UserDashboard
    },
    {
        name: 'Shipments',
        layout: '/user',
        path: '/shipment',
        icon: <Icon as={MdOutlineShoppingCart} width='20px' height='20px' color='inherit' />,
        component:() => returns (
            <SignInCentered />
        )},
]

export default userRoutes;