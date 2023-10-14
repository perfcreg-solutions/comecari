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
import { useForm, Controller } from 'react-hook-form'

import Truck from 'img/trucks/van01.png'
import Truck2 from 'img/trucks/van02.png'
import Truck3 from 'img/trucks/van03.png'
import Truck4 from 'img/trucks/van04.png'
import Truck5 from 'img/trucks/van05.png'
import Truck6 from 'img/trucks/van06.png'

import { shipmentData } from 'views/admin/marketplace/variables/tableMarketplace'

export default function Marketplace() {
    // const truckImageMapping = {
    //     Truck1: Truck.src,
    //     Truck2: Truck2,
    //     Truck3: Truck3,
    //     Truck4: Truck4,
    //     Truck5: Truck5,
    //     Truck6: Truck6,
    // };

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { handleSubmit, control } = useForm();
    const onFilterJobs = (data: any) => {
        // Handle form submission for Form 1 here
        console.log('Filter Jobs Data:', data);
    };

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
                                truck={data.truck}
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
                    <form action="#" onSubmit={handleSubmit(onFilterJobs)}>
                        <ModalHeader>Filter</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <FormControl>
                                <FormLabel>Enter Pickup Location</FormLabel>
                                <Controller
                                    name="pickupLocation"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            isRequired={true}
                                            variant='auth'
                                            fontSize='sm'
                                            ms={{ base: '0px', md: '0px' }}
                                            type="text"
                                            // placeholder='Volvo'
                                            mb='18px'
                                            fontWeight='500'
                                            size='lg'
                                            {...field}
                                        />
                                    )}
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Enter Delivery Location</FormLabel>
                                <Controller
                                    name="deliveryLocation"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            isRequired={true}
                                            variant='auth'
                                            fontSize='sm'
                                            ms={{ base: '0px', md: '0px' }}
                                            type="text"
                                            mb='18px'
                                            fontWeight='500'
                                            size='lg'
                                            {...field}
                                        />
                                    )}
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Select Truck type</FormLabel>

                                <Controller
                                    name="truckType"
                                    control={control}
                                    render={({ field }) => (

                                        <Select isRequired={true}
                                            variant='auth'
                                            fontSize='sm'
                                            ms={{ base: '0px', md: '0px' }}
                                            type="text"
                                            placeholder='Volvo'
                                            mb='18px'
                                            fontWeight='500'
                                            size='lg'
                                            {...field}>

                                            <option value="1">Mini van</option>
                                            <option value="2">Sixteen wheeler</option>
                                        </Select>
                                    )}
                                />

                                <img src={Truck2.src} />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} type="submit" onClick={onClose}>
                                Show 16 results
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </AdminLayout>
    )
}