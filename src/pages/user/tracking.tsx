import { useState } from 'react'
import {
    Box,
    SimpleGrid,
    useColorModeValue,
    Text,
    Image,
    useToast,
} from '@chakra-ui/react'
// Assets
import UserLayout from 'layouts/user'
import Card from 'components/card/Card';
import Maps from '../../../public/maps.png'
import MapComponent from 'views/admin/default/components/MapComponent';


export default function Dashboard() {
    // Chakra Color Mode

    const brandColor = useColorModeValue('brand.500', 'white')
    const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
    const toast = useToast();
    const textColor = useColorModeValue('secondaryGray.900', 'white')
    const textColorBrand = useColorModeValue('brand.500', 'white')

    const [isLoaded, setIsLoaded] = useState(true);

    const pickupPoint = { lat: 6.6050, lng: 3.3498 };
    const destination = { lat: 9.0820, lng: 7.4951 };
    const activeLocation = { lat: 7.8435, lng: 5.4225 };

    return (
        <UserLayout brandtext={"Tracking"}>
            <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
                <>
                    <Card>
                        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
                            <Box>
                                <Text fontSize="md" color="gray.400" textTransform="uppercase">Status</Text>
                                <Text fontSize="2xl" fontWeight="bold">In Transit</Text>
                            </Box>

                            <Box>
                                <Text fontSize="md" color="gray.400" textTransform="uppercase">Tracking number</Text>
                                <Text fontSize="2xl" fontWeight="bold">2930384734BT</Text>
                            </Box>

                            <Box>
                                <Text fontSize="md" color="gray.400" textTransform="uppercase">Pickup location</Text>
                                <Text fontSize="2xl" fontWeight="bold">Ikeja, Lagos</Text>
                                <Text fontSize="sm" letterSpacing="1px">Jun 20, 2019 &#8226; 2 days ago</Text>
                            </Box>

                            <Box>
                                <Text fontSize="md" color="gray.400" textTransform="uppercase">Destination</Text>
                                <Text fontSize="2xl" fontWeight="bold">Gwagwalada, Abuja</Text>
                                <Text fontSize="sm" letterSpacing="1px">To be delivered: Jun 23, 2019 &#8226; Tomorrow</Text>
                            </Box>

                            <Box>
                                <Text fontSize="md" color="gray.400" textTransform="uppercase">Tracking number</Text>
                                <Text fontSize="2xl" fontWeight="bold">2930384734BT</Text>
                            </Box>
                        </SimpleGrid>
                    </Card>

                    <Card mt="15px">
                        {/* <Image src={Maps.src} /> */}
                        <MapComponent pickupPoint={pickupPoint} destination={destination} activeLocation={activeLocation} />
                    </Card>
                </>
            </Box>

        </UserLayout>
    )
}