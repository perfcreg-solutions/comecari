import {
    Box,
    Button,
    Icon,
    Input,
    Select,
    SimpleGrid} from '@chakra-ui/react'
// Assets
// Custom components

import AdminLayout from 'layouts/admin'
import DriverCard from 'components/card/DriverCard'
import { DriverData } from 'views/admin/drivers/variables/tableDrivers'
import { CgLoadbarSound } from 'react-icons/cg'

export default function Drivers() {
    return(
        <AdminLayout brandtext="Drivers">
            <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
                <>
                    <Button colorScheme='blue' mb="15px"> Filter
                        <Icon
                            w='26px'
                            h='26px'
                            as={CgLoadbarSound}
                        // color={greenColor}
                        /></Button>

                    <SimpleGrid columns={{ base: 1, md: 3, xl: 3 }} gap='20px' mb='20px'>
                        {DriverData.length > 0 && DriverData.map((data, index) => (
                            <DriverCard 
                                id={data.id}
                                name={data.name}
                                image={data.image}
                                hours={data.hours}
                                delivery={data.delivery}
                                distance={data.distance}
                                dateJoined={data.dateJoined} />
                        ))}
                    </SimpleGrid>
                </>
            </Box>
        </AdminLayout>
    )
}