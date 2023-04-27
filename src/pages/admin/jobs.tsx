import {
    Box,
    Button,
    Flex,
    FormLabel,
    Icon,
    Select,
    SimpleGrid,
    useColorModeValue,
    useDisclosure
} from '@chakra-ui/react'
// Assets
import {
    columnsJobData
} from 'views/admin/job/variables/columnsData'
// import tableDataComplex from 'views/admin/default/variables/tableDataComplex.json'
import tableJobsData from 'views/admin/job/variables/tableJobsData.json'
import AdminLayout from 'layouts/admin'
import JobsTable from 'views/admin/job/components/JobsTable'
import { TableData } from 'views/admin/job/variables/columnsData'
import MiniStatistics from 'components/card/MiniStatistics'
import IconBox from 'components/icons/IconBox'
import { FcCancel } from 'react-icons/fc'
import { MdBarChart, MdFireTruck, MdAddTask, MdFileCopy } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'
import JobCard from 'components/card/JobCard'
import { CgLoadbarSound } from 'react-icons/cg'
import { shipmentData } from 'views/admin/marketplace/variables/tableMarketplace'

import Truck from 'img/trucks/van01.png'
import Truck2 from 'img/trucks/van02.png'
import Truck3 from 'img/trucks/van03.png'
import Truck4 from 'img/trucks/van04.png'
import Truck5 from 'img/trucks/van05.png'
import Truck6 from 'img/trucks/van06.png'


   
export default function Jobs() {
    const brandColor = useColorModeValue('brand.500', 'white')
    const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100')
    const truckImageMapping = {
        Truck1: Truck.src,
        Truck2: Truck2,
        Truck3: Truck3,
        Truck4: Truck4,
        Truck5: Truck5,
        Truck6: Truck6,
    };

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <AdminLayout brandtext="Jobs">
            <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
                <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }}
                    gap='20px'
                    mb='20px'
                >


                    <MiniStatistics
                        startContent={
                            <IconBox
                                w='56px'
                                h='56px'
                                bg={boxBg}
                                icon={
                                    <Icon
                                        w='32px'
                                        h='32px'
                                        as={TbTruckDelivery}
                                        color={brandColor}
                                    />
                                }
                            />
                        }
                        name='Completed Orders'
                        value='23'
                    />

                    <MiniStatistics
                        startContent={
                            <IconBox
                                w='56px'
                                h='56px'
                                bg={boxBg}
                                icon={
                                    <Icon
                                        w='32px'
                                        h='32px'
                                        as={MdFireTruck}
                                        color={brandColor}
                                    />
                                }
                            />
                        }
                        name='Approved (Today)'
                        value='05'
                    />

                    <MiniStatistics
                        startContent={
                            <IconBox
                                w='56px'
                                h='56px'
                                bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
                                icon={<Icon w='28px' h='28px' as={MdAddTask} color='white' />}
                            />
                        }
                        name='Revenue this month'
                        value='$15400'
                    />

                </SimpleGrid>

                <>
                    <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>
                        {/* <JobsTable
                            columnsData={columnsJobData}
                            tableData={(tableJobsData as unknown) as TableData[]}
                            tableTitle="Active Jobs"
                        /> */}
{/* 
                        <Button colorScheme='blue' mb="15px"
                            onClick={onOpen}> Filter
                            <Icon
                                w='26px'
                                h='26px'
                                as={CgLoadbarSound}
                            // color={greenColor}
                            /></Button> */}
                        <SimpleGrid columns={{ base: 1, md: 3, xl: 3 }} gap='20px' mb='20px'>
                            {tableJobsData.length > 0 && tableJobsData.map((data, index) => (
                                <JobCard
                                    key={index}
                                    status={data.status}
                                    date={data.date}
                                    shipmentId={data.id}
                                    pickupLocation={data.pickup}
                                    deliveryLocation={data.destination}
                                    driver={data.driver} truck={''} pickupDetails={''} deliveryDetails={''} ownerName={''} price={''}
                                    
                                />
                            ))}
                        </SimpleGrid>

                    </SimpleGrid>
                </>
            </Box>
        </AdminLayout>
    )
}