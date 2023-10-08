import {
    Box,
    Button,
    Flex,
    SimpleGrid,
    Text,
    useColorModeValue,

} from '@chakra-ui/react'
import tableJobsData from 'views/admin/job/variables/tableJobsData.json'
import { TableData } from 'views/admin/job/variables/columnsData'

import AdminLayout from 'layouts/admin'
import { columnsJobData } from 'views/admin/job/variables/columnsData';
import JobsTable from 'views/admin/job/components/JobsTable';
import Card from 'components/card/Card';
import HistoryItem from 'views/admin/marketplace/components/HistoryItem';
import Truck from 'img/trucks/van01.png'
import Truck2 from 'img/trucks/van02.png'
import Truck3 from 'img/trucks/van03.png'
import Truck4 from 'img/trucks/van04.png'
import Truck5 from 'img/trucks/van05.png'
import Truck6 from 'img/trucks/van06.png'

export default function Bids() {
    const textColor = useColorModeValue('secondaryGray.900', 'white')
    const textColorBrand = useColorModeValue('brand.500', 'white')

    return (
        <AdminLayout brandtext="My Bids">
            <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
                <>
                    <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>
                        {/* <JobsTable
                            columnsData={columnsJobData}
                            tableData={(tableJobsData as unknown) as TableData[]}
                            tableTitle="All Active Bid"
                        /> */}


                        <Card p='0px'>
                            <Flex
                                align={{ sm: 'flex-start', lg: 'center' }}
                                justify='space-between'
                                w='100%'
                                px='22px'
                                py='18px'
                            >
                                <Text color={textColor} fontSize='xl' fontWeight='600'>
                                    Bids
                                </Text>
                                <Button variant='action'>See all</Button>
                            </Flex>

                            <HistoryItem
                                type='refregirated'
                                date='30s ago'
                                image={Truck}
                                price='2000'
                                location="Sokoto"
                                destination='Kaduna'
                                pickup="24/04/23 (BEFORE 4:30PM)"
                                delivery="25/05/23 (05:00AM)"
                                status="Pending"
                                button="View Bids"
                            />

                            <HistoryItem
                                type='Van'
                                date='30s ago'
                                image={Truck2}
                                price='500'
                                location="Kano"
                                destination='Osun'
                                pickup="12/04/23 (BEFORE 4:30PM)"
                                delivery="12/05/23 (05:00AM)"
                                status="Closed"
                                button="View Bids"
                            />

                            <HistoryItem
                                type='Open roof'
                                date='30s ago'
                                image={Truck3}
                                price='500'
                                location="Ibadan"
                                destination='Lagos'
                                pickup="12/04/23 (BEFORE 4:30PM)"
                                delivery="12/05/23 (05:00AM)"
                                status="Pending"
                                button="View Bids"
                            />
                            <HistoryItem
                                type='Long Truck'
                                date='30s ago'
                                image={Truck6}
                                price='400'
                                location="Kano"
                                destination='Kogi'
                                pickup="12/04/23 (BEFORE 4:30PM)"
                                delivery="12/05/23 (05:00AM)"
                                status="Approved"
                                button="View Bids"
                            />
                            <HistoryItem
                                type='Tanker'
                                date='30s ago'
                                image={Truck5}
                                price='750'
                                location="Anambra"
                                destination='Osun'
                                pickup="12/04/23 (BEFORE 4:30PM)"
                                delivery="12/05/23 (05:00AM)"
                                status="Pending"
                                button="View Bids"
                            />

                            <HistoryItem
                                type='Open roof'
                                date='30s ago'
                                image={Truck4}
                                price='3500'
                                location="Benue"
                                destination='Porthacourt'
                                pickup="12/04/23 (BEFORE 4:30PM)"
                                delivery="12/05/23 (05:00AM)"
                                status="Approved"
                                button="View Bids"
                            />
                        </Card>
                    </SimpleGrid>
                </>
            </Box>
        </AdminLayout>
    )
}