import {
    Box,
    Button,
    Icon,
    Input,
    Select,
    SimpleGrid,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    useDisclosure
} from '@chakra-ui/react'
// Assets
// Custom components
import AdminLayout from 'layouts/admin'
import { CgLoadbarSound } from 'react-icons/cg'

import MarketplaceCard from 'components/card/MarketplaceCard'

import Truck from 'img/trucks/van01.png'
import Truck2 from 'img/trucks/van02.png'
import Truck3 from 'img/trucks/van03.png'
import Truck4 from 'img/trucks/van04.png'
import Truck5 from 'img/trucks/van05.png'
import Truck6 from 'img/trucks/van06.png'

import { shipmentData } from 'views/admin/marketplace/variables/tableMarketplace'


export default function Marketplace() {
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
        <AdminLayout brandtext="Marketplace">
            <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
                <>
                    <Button colorScheme='blue' mb="15px"
                        onClick={onOpen}> Filter 
                        <Icon
                            w='26px'
                            h='26px'
                            as={CgLoadbarSound}
                            // color={greenColor}
                        /></Button>
                    <SimpleGrid columns={{ base: 1, md: 3, xl: 3 }} gap='20px' mb='20px'>
                        {shipmentData.length > 0 && shipmentData.map((data, index) => (
                            <MarketplaceCard
                                key={index}
                                truck={Truck}
                                shipmentId={data.shipmentID}
                                pickupLocation={data.pickupLocation}
                                pickupDetails={data.pickupDetails}
                                deliveryLocation={data.deliveryLocation}
                                deliveryDetails={data.deliveryDetails}
                                ownerName={data.ownerName}
                                price={data.price}
                            />
                        ))}
                    </SimpleGrid>

                </>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Filter</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {/* <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Labore esse, in reiciendis totam vero iste natus, veniam neque molestiae, perspiciatis iusto harum fugiat quod.</Text> */}
                        <FormControl>
                            <FormLabel>Enter Pickup Location</FormLabel>
                            <Input type='text' />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Enter Delivery Location</FormLabel>
                            <Input type='text' />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Select Truck type</FormLabel>
                            <Select>
                                <option selected>Mini Van</option>
                                <option>Sixteen Wheeler</option>
                            </Select>

                            <img src={Truck2.src} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Show 16 results
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </AdminLayout>
    )
}