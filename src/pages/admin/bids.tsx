import {
    Box,
    SimpleGrid,
    useColorModeValue
} from '@chakra-ui/react'
import tableJobsData from 'views/admin/job/variables/tableJobsData.json'
import { TableData } from 'views/admin/job/variables/columnsData'

import AdminLayout from 'layouts/admin'
import { columnsJobData } from 'views/admin/job/variables/columnsData';
import JobsTable from 'views/admin/job/components/JobsTable';


export default function Bids() {

    return (
        <AdminLayout brandtext="My Bids">
            <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
                <>
                    <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>
                        <JobsTable
                            columnsData={columnsJobData}
                            tableData={(tableJobsData as unknown) as TableData[]}
                            tableTitle="All Active Bid"
                        />
                    </SimpleGrid>
                </>
            </Box>
        </AdminLayout>
    )
}