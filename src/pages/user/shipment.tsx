import { useState, useRef } from 'react'
import {
    Box,
    Flex,
    Button,
    SimpleGrid,
    useColorModeValue,
    Text,
    Textarea,
    useToast,
    Input,
    Select,
    FormControl,
    FormLabel,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
// Assets
// Custom components
import ShipmentHistoryComplexTable from 'views/admin/default/components/ShipmentHistoryComplexTable'
import {
    ShipmentHistoryDataComplex,
    TableData} from 'views/admin/default/variables/columnsData'
import tableShipmentData from 'views/admin/default/variables/tableShipmentData.json'
import UserLayout from 'layouts/user'
import Card from 'components/card/Card';

import MarketplaceCard from 'components/card/MarketplaceCard'

import Truck2 from 'img/trucks/van02.png'


export default function UserShipment() {
    // Chakra Color Mode

    const brandColor = useColorModeValue('brand.500', 'white')
    const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
    const toast = useToast();

    const [isLoaded, setIsLoaded] = useState(true);

    const [isOpenModal1, setIsOpenModal1] = useState(false);
    const [isOpenModal2, setIsOpenModal2] = useState(false);
    const [size, setSize] = useState('xl');

    const openModal1 = () => {
        setIsOpenModal1(true);
    };

    const closeModal1 = () => {
        setIsOpenModal1(false);
    };

    const openModal2 = () => {
        setIsOpenModal1(false); // Close Modal 1
        setIsOpenModal2(true); // Open Modal 2
    };

    const closeModal2 = () => {
        setIsOpenModal2(false);
    };

    // Upload Document
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileInputChange = () => {
        // Access the selected file using fileInputRef.current.files
        if (fileInputRef.current && fileInputRef.current.files) {
            const selectedFile = fileInputRef.current.files[0];
            // You can handle the selected file here
            console.log('Selected File:', selectedFile);
        }
    };

    return (
        <UserLayout brandtext={"Shipment"}>
            <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
                <>

                    <Flex mt={8} justify="end">
                        <Button backgroundColor="blue.400" p={6} color="#fff" mb={2} onClick={openModal1}
                            _hover={{
                                bg: 'blue.600',
                                cursor: 'pointer',
                            }}>Book Shipment</Button>
                    </Flex>
                    <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
                        <Card>
                            <Text fontSize="xl" fontWeight="600">Current Shipment</Text>
                            <MarketplaceCard
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

                        <ShipmentHistoryComplexTable
                            columnsData={ShipmentHistoryDataComplex}
                            tableData={(tableShipmentData as unknown) as TableData[]}
                            tableTitle="Recent Shipment"

                        />
                    </SimpleGrid>

                    <Modal closeOnOverlayClick={false} size={size} isOpen={isOpenModal1} onClose={closeModal1}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Book Shipment</ModalHeader>
                            <ModalCloseButton />

                            <ModalBody pb={6}>
                                <FormControl mb={4}>
                                    <FormLabel>Select truck type</FormLabel>
                                    <Select size="lg">
                                        <option value='option1'>Flatbed</option>
                                        <option value='option2'>Pickup truck</option>
                                        <option value='option3'>16 Wheeler truck</option>
                                    </Select>
                                </FormControl>

                                <FormControl mb={4}>
                                    <FormLabel>Pickup location</FormLabel>
                                    <Input type='text' size='lg' />
                                </FormControl>

                                <FormControl mb={4}>
                                    <FormLabel>Delivery location</FormLabel>
                                    <Input type='text' size='lg' />
                                </FormControl>

                                <FormControl mb={4}>
                                    <FormLabel>Weight (KG)</FormLabel>
                                    <Input type='text' size='lg' placeholder='2,000' />
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Other documents</FormLabel>
                                    <Input
                                        ref={fileInputRef}
                                        type="file"
                                        id="file-input"
                                        style={{ display: 'none' }}
                                        onChange={handleFileInputChange}
                                    />
                                    <label htmlFor="file-input">
                                        <Button type="button" w="100%"
                                            onClick={() => fileInputRef.current?.click()}
                                            backgroundColor="blue.400"
                                            color="#fff" mt={2}
                                            _hover={{
                                                bg: 'blue.600',
                                                cursor: 'pointer',
                                            }}>Browse</Button>
                                    </label>
                                </FormControl>
                            </ModalBody>
                            <ModalFooter>
                                <Button backgroundColor="#0f2dd6" color="#fff"
                                    p={4} px={7}
                                    borderRadius="lg"
                                    onClick={openModal2}

                                    _hover={{
                                        bg: 'blue.500', // Change the background color on hover
                                        cursor: 'pointer', // Change the cursor to a pointer on hover
                                        color: 'white'
                                    }}>
                                    Proceed
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>

                    <Modal isOpen={isOpenModal2} size={size} onClose={closeModal2}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Book Shipment</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <form action="#">
                                    <FormControl mb={4}>
                                        <FormLabel>Tag driver (optional)</FormLabel>
                                        <Input type='text' size='lg' />
                                    </FormControl>

                                    <FormControl mb={4}>
                                        <FormLabel>Special Instruction</FormLabel>
                                        <Textarea />
                                    </FormControl>

                                    <FormControl mb={4}>
                                        <FormLabel>Make a bid (&#x20A6;)</FormLabel>
                                        <Input type='text' size='lg' />
                                    </FormControl>
                                </form>
                            </ModalBody>
                            <ModalFooter>
                                <Button backgroundColor="#0f2dd6" color="#fff"
                                    p={4} px={7}
                                    borderRadius="lg"
                                    // onClick={openModal3}

                                    _hover={{
                                        bg: 'blue.500', // Change the background color on hover
                                        cursor: 'pointer', // Change the cursor to a pointer on hover
                                        color: 'white'
                                    }}>
                                    Proceed
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>

                </>
            </Box>

        </UserLayout>
    )
}