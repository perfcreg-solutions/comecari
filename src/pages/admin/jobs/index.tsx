import {
    Avatar,
    Box,
    Flex,
    FormLabel,
    Icon,
    Select,
    SimpleGrid,
    useColorModeValue
} from '@chakra-ui/react'
// Assets
// Custom components
import MiniCalendar from 'components/calendar/MiniCalendar'
import MiniStatistics from 'components/card/MiniStatistics'
import IconBox from 'components/icons/IconBox'
import { FcCancel } from 'react-icons/fc'
import {
    MdAddTask,
    MdAttachMoney,
    MdBarChart,
    MdFileCopy,
    MdFireTruck
} from 'react-icons/md'
import CheckTable from 'views/admin/default/components/CheckTable'
import ComplexTable from 'views/admin/default/components/ComplexTable'
import DailyTraffic from 'views/admin/default/components/DailyTraffic'
import PieCard from 'views/admin/default/components/PieCard'
import Tasks from 'views/admin/default/components/Tasks'
import TotalSpent from 'views/admin/default/components/TotalSpent'
import WeeklyRevenue from 'views/admin/default/components/WeeklyRevenue'
import {
    columnsDataDevelopment,
    columnsDataCheck,
    columnsDataColumns,
    columnsDataComplex
} from 'views/admin/dataTables/variables/columnsData'
import tableDataCheck from 'views/admin/default/variables/tableDataCheck.json'
import tableDataComplex from 'views/admin/default/variables/tableDataComplex.json'
import tableDataDevelopment from 'views/admin/dataTables/variables/tableDataDevelopment.json'
import { isWindowAvailable } from 'utils/navigation'
import AdminLayout from 'layouts/admin'
import { Image } from 'components/image/Image'
import Usa from 'img/dashboards/usa.png'
import { TableData } from 'views/admin/default/variables/columnsData'

export default function Jobs() {

    return (
        <AdminLayout>
            <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
                <>
                    <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>
                        <ComplexTable
                            columnsData={columnsDataComplex}
                            tableData={(tableDataComplex as unknown) as TableData[]}
                            tableTitle="Active Jobs"
                            buttonText="Post a Job"
                            buttonLink = {null}
                        />
                    </SimpleGrid>
                </>
            </Box>
        </AdminLayout>
    )
}