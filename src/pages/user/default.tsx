import { useState } from 'react'
import {
    Box,
    Flex,
    Spacer,
    FormLabel,
    FormControl,
    Input,
    Button,
    Icon,
    Select,
    SimpleGrid,
    useColorModeValue,
    Skeleton,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Text,
    useToast,
} from '@chakra-ui/react'
// Assets
// Custom components
import MiniStatistics from 'components/card/MiniStatistics'
import IconBox from 'components/icons/IconBox'
import { FcCancel } from 'react-icons/fc'
import {
    MdAddTask,
    MdBarChart,
    MdFileCopy,
    MdFireTruck
} from 'react-icons/md'
import { LiaTimesSolid } from 'react-icons/lia'
import ShipmentOverviewComplexTable from 'views/admin/default/components/ShipmentOverviewComplexTable'
import ShipmentHistoryComplexTable from 'views/admin/default/components/ShipmentHistoryComplexTable'
import WeeklyRevenue from 'views/admin/default/components/WeeklyRevenue'
import {
    ShipmentOverviewDataComplex,
    ShipmentHistoryDataComplex,
    TableData,
    shipmentData
} from 'views/admin/default/variables/columnsData'
import tableShipmentData from 'views/admin/default/variables/tableShipmentData.json'
import UserLayout from 'layouts/user'
import Card from 'components/card/Card';
import { Image } from 'components/image/Image'
import Usa from 'img/dashboards/usa.png'
import { ProtectedRoute } from 'services'

import ShipmentCard from 'components/card/ShipmentCard'

import Truck from 'img/trucks/van01.png'
import Truck2 from 'img/trucks/van02.png'
import Truck3 from 'img/trucks/van03.png'
import Truck4 from 'img/trucks/van04.png'
import Truck5 from 'img/trucks/van05.png'
import Truck6 from 'img/trucks/van06.png'

import HistoryItem from 'views/admin/marketplace/components/HistoryItem'
import ShipmentHistory from 'views/admin/marketplace/components/ShipmentHistory'
// import ShipmentHistory


export default function Dashboard() {
    // Chakra Color Mode

    const brandColor = useColorModeValue('brand.500', 'white')
    const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
    const toast = useToast();
    const textColor = useColorModeValue('secondaryGray.900', 'white')
    const textColorBrand = useColorModeValue('brand.500', 'white')

    const [isLoaded, setIsLoaded] = useState(true)

    return (
        <UserLayout brandtext={"Dashboard"}>
            <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
                <>

                    <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
                        <Card>
                            <Text fontSize="xl" fontWeight="600">Track your package</Text>
                            <Text>Follow Your Package's Journey in Real-Time</Text>

                            <form action="#">
                                <FormControl mt={8} mb={4}>
                                    <FormLabel>Tracking number</FormLabel>
                                    <Input type='text' size='lg' />
                                </FormControl>

                                <Button backgroundColor="green.400" p={6} color="#fff" mb={1}
                                    _hover={{
                                        bg: 'green.600',
                                        cursor: 'pointer',
                                    }}>Track</Button>
                            </form>
                        </Card>

                        <Card>
                            <Text fontSize="xl" fontWeight="600">Current Shipment</Text>
                            <ShipmentCard
                                // key={index}
                                truck={Truck2.src}
                                shipmentId="2343223782"
                                pickupLocation="Ikeja, Lagos"
                                pickupDetails="Picked up at 5pm, yesterday"
                                deliveryLocation="Abuja"
                                deliveryDetails="Expected delivery in 3 days"
                                ownerName="Mr Khalid"
                                price="200K"
                            />
                        </Card>
                    </SimpleGrid>

                    <SimpleGrid columns={1} gap='20px' mb='20px'>
                        {/* <ShipmentHistoryComplexTable
                            columnsData={ShipmentHistoryDataComplex}
                            tableData={(tableShipmentData as unknown) as TableData[]}
                            tableTitle="Recent Shipment"

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
                                    Recent Shipment
                                </Text>
                                <Button variant='action'>See all</Button>
                            </Flex>

                            <ShipmentHistory
                                date='30s ago'
                                id="67288372CJ"
                                image={Truck}
                                price='2,000,000'
                                pickupLocation="Sokoto"
                                deliveryLocation='Kaduna'
                                pickup="24/04/23 (BEFORE 4:30PM)"
                                delivery="25/05/23 (05:00AM)"
                                button="View Details"
                            />

                            <ShipmentHistory
                                date='30s ago'
                                id="67288372BB"
                                image={Truck2}
                                price='500,000'
                                pickupLocation="Kano"
                                deliveryLocation='Osun'
                                pickup="12/04/23 (BEFORE 4:30PM)"
                                delivery="12/05/23 (05:00AM)"
                                button="View Details"
                            />
                            
                        </Card>
                    </SimpleGrid>

                </>
            </Box>

        </UserLayout>
    )
}