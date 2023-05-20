import {
    Box,
    SimpleGrid,
    Table,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue,
} from '@chakra-ui/react'
// Assets
// Custom components

import AdminLayout from 'layouts/admin'
// import TruckData from 'views/admin/truck/variables/tableTrucksData.json'
import Truck from 'img/trucks/van01.png'
import Truck2 from 'img/trucks/van02.png'
import Truck3 from 'img/trucks/van03.png'
import Truck4 from 'img/trucks/van04.png'
import Truck5 from 'img/trucks/van05.png'
import Truck6 from 'img/trucks/van06.png'

import TrucksCard from 'components/card/TrucksCard'
import { TruckData } from 'views/admin/truck/variables/tableTruckData'


export default function Trucks() {

    return(
        <AdminLayout brandtext="Trucks">
            <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
                <>
                    <SimpleGrid columns={{ base: 1, md: 3, xl: 3 }} gap='20px' mb='20px'>
                        {TruckData.length > 0 && TruckData.map((data, index) => (
                            // const {id, carrierID, driverID, type, regNumber, capacity, licensePlate, dateCreated, dateModified } = data
                            <TrucksCard
                                id = {data.id}
                                carrierID = {data.carrierID}
                                driverID = {data.driverId}
                                type = {data.type}
                                regNumber={data.regNumber}
                                capacity={data.capacity}
                                licensePlate={data.licensePlate}
                                dateCreated={data.created}
                                dateModified={data.dateModified}
                                truck= {data.truck}
                                status={data.status}
                            />
                        ))}
                    </SimpleGrid>
                </>
            </Box>
        </AdminLayout>
    )
}