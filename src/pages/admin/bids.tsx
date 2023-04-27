import {
    Avatar,
    Badge,
    Box,
    Button,
    Flex,
    SimpleGrid,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import tableJobsData from 'views/admin/job/variables/tableJobsData.json'
import { TableData } from 'views/admin/job/variables/columnsData'

// Assets
// Custom components

import AdminLayout from 'layouts/admin'
import NFT from 'components/card/NFT'
import Nft1 from 'img/nfts/Nft1.png'
import { columnsJobData } from 'views/admin/job/variables/columnsData';
import JobsTable from 'views/admin/job/components/JobsTable';


export default function Bids() {
 const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");
  const captions =[
    "Order Id", "Customer Id"
  ]

  const data = [{
    logo: "image"
  }]
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