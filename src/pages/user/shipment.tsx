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
    Image,
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
    TableData
} from 'views/admin/default/variables/columnsData'
import tableShipmentData from 'views/admin/default/variables/tableShipmentData.json'
import UserLayout from 'layouts/user'
import Card from 'components/card/Card';

import ShipmentCard from 'components/card/ShipmentCard'
import { useForm, Controller } from 'react-hook-form'

import Truck2 from 'img/trucks/van02.png'
import Check from 'img/dashboards/check.png'


export default function UserShipment() {
    // Chakra Color Mode

    const brandColor = useColorModeValue('brand.500', 'white')
    const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
    const toast = useToast();

    const [isLoaded, setIsLoaded] = useState(true);

    const [isOpenModal1, setIsOpenModal1] = useState(false);
    const [isOpenModal2, setIsOpenModal2] = useState(false);
    const [isOpenModal3, setIsOpenModal3] = useState(false);
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

    const openModal3 = () => {
        setIsOpenModal1(false); // Close Modal 1
        setIsOpenModal2(false); // Open Modal 2
        setIsOpenModal3(true); // Open Modal 3
    };

    const closeModal3 = () => {
        setIsOpenModal3(false);
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

    const { handleSubmit, control } = useForm();
    const onBookShipment = (data: any) => {
        // Handle form submission for Form 1 here
        console.log('Book Shipment Data:', data);
    };

    const { handleSubmit: handleSubmitForm2, control: controlForm2 } = useForm();
    const onBookShipmentForm2 = (data: any) => {
        console.log('Book Shipment Data 2:', data);
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
                            <form action="#" onSubmit={handleSubmit(onBookShipment)}>
                                <ModalBody pb={6}>
                                    <FormControl mb={4}>
                                        <FormLabel>Select truck type</FormLabel>
                                        <Controller
                                            name="truckType"
                                            control={control}
                                            render={({ field }) => (

                                                <Select isRequired={true}
                                                    variant='auth'
                                                    fontSize='sm'
                                                    ms={{ base: '0px', md: '0px' }}
                                                    type="text"
                                                    mb='18px'
                                                    fontWeight='500'
                                                    size='lg'
                                                    {...field}>

                                                    <option value="1">Mini van</option>
                                                    <option value="2">Sixteen wheeler</option>
                                                    <option value="3">Volvo</option>
                                                </Select>
                                            )}
                                        />
                                    </FormControl>

                                    <FormControl mb={4}>
                                        <FormLabel>Pickup location</FormLabel>
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

                                    <FormControl mb={4}>
                                        <FormLabel>Delivery location</FormLabel>
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
                                                    // placeholder='Volvo'
                                                    mb='18px'
                                                    fontWeight='500'
                                                    size='lg'
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </FormControl>

                                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                                        <FormControl mb={4}>
                                            <FormLabel>Weight (KG)</FormLabel>
                                            <Controller
                                                name="weight"
                                                control={control}
                                                render={({ field }) => (
                                                    <Input
                                                        isRequired={true}
                                                        variant='auth'
                                                        fontSize='sm'
                                                        ms={{ base: '0px', md: '0px' }}
                                                        type="number"
                                                        mb='18px'
                                                        fontWeight='500'
                                                        size='lg'
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        </FormControl>

                                        <FormControl mb={4}>
                                            <FormLabel>Height (cm)</FormLabel>
                                            <Controller
                                                name="height"
                                                control={control}
                                                render={({ field }) => (
                                                    <Input
                                                        isRequired={true}
                                                        variant='auth'
                                                        fontSize='sm'
                                                        ms={{ base: '0px', md: '0px' }}
                                                        type="number"
                                                        mb='18px'
                                                        fontWeight='500'
                                                        size='lg'
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        </FormControl>

                                        <FormControl mb={4}>
                                            <FormLabel>Length (cm)</FormLabel>
                                            <Controller
                                                name="length"
                                                control={control}
                                                render={({ field }) => (
                                                    <Input
                                                        isRequired={true}
                                                        variant='auth'
                                                        fontSize='sm'
                                                        ms={{ base: '0px', md: '0px' }}
                                                        type="number"
                                                        mb='18px'
                                                        fontWeight='500'
                                                        size='lg'
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        </FormControl>

                                        <FormControl mb={4}>
                                            <FormLabel>Width (cm)</FormLabel>
                                            <Controller
                                                name="width"
                                                control={control}
                                                render={({ field }) => (
                                                    <Input
                                                        isRequired={true}
                                                        variant='auth'
                                                        fontSize='sm'
                                                        ms={{ base: '0px', md: '0px' }}
                                                        type="number"
                                                        mb='18px'
                                                        fontWeight='500'
                                                        size='lg'
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        </FormControl>

                                    </SimpleGrid>

                                    <FormControl>
                                        <FormLabel>Other documents</FormLabel>
                                        {/* <Controller
                                            name="vehicleMake"
                                            control={control}
                                            render={({ field }) => (
                                                <Input
                                                    isRequired={true}
                                                    variant='auth'
                                                    fontSize='sm'
                                                    ms={{ base: '0px', md: '0px' }}
                                                    mb='18px'
                                                    fontWeight='500'
                                                    size='lg'
                                                    ref={fileInputRef}
                                                    type="file"
                                                    id="file-input"
                                                    style={{ display: 'none' }}
                                                    onChange={handleFileInputChange}
                                                    {...field}
                                                />
                                            )}
                                        /> */}
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
                                        type="submit"

                                        _hover={{
                                            bg: 'blue.500', // Change the background color on hover
                                            cursor: 'pointer', // Change the cursor to a pointer on hover
                                            color: 'white'
                                        }}>
                                        Proceed
                                    </Button>
                                </ModalFooter>
                            </form>
                        </ModalContent>

                    </Modal>


                    <Modal isOpen={isOpenModal2} size={size} onClose={closeModal2}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Book Shipment</ModalHeader>
                            <ModalCloseButton />
                            <form action="#" onSubmit={handleSubmitForm2(onBookShipmentForm2)}>
                                <ModalBody pb={6}>
                                    <FormControl mb={4}>
                                        <FormLabel>Tag driver (optional)</FormLabel>
                                        <Controller
                                            name="driver"
                                            control={controlForm2}
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

                                    <FormControl mb={4}>
                                        <FormLabel>Special Instruction</FormLabel>
                                        <Controller
                                            name="instructions"
                                            control={controlForm2}
                                            render={({ field }) => (
                                                <Textarea
                                                    isRequired={true}
                                                    variant='auth'
                                                    fontSize='sm'
                                                    ms={{ base: '0px', md: '0px' }}
                                                    mb='18px'
                                                    fontWeight='500'
                                                    // size='lg'
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </FormControl>

                                    <FormControl mb={4}>
                                        <FormLabel>Make a bid (&#x20A6;)</FormLabel>
                                        <Controller
                                            name="bid"
                                            control={controlForm2}
                                            render={({ field }) => (
                                                <Input
                                                    isRequired={true}
                                                    variant='auth'
                                                    fontSize='sm'
                                                    ms={{ base: '0px', md: '0px' }}
                                                    type="number"
                                                    mb='18px'
                                                    fontWeight='500'
                                                    size='lg'
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </FormControl>
                                </ModalBody>
                                <ModalFooter>
                                    <Button backgroundColor="#0f2dd6" color="#fff"
                                        p={4} px={7}
                                        borderRadius="lg"
                                        type="submit"
                                        onClick={openModal3}

                                        _hover={{
                                            bg: 'blue.500', // Change the background color on hover
                                            cursor: 'pointer', // Change the cursor to a pointer on hover
                                            color: 'white'
                                        }}>
                                        Proceed
                                    </Button>
                                </ModalFooter>
                            </form>
                        </ModalContent>
                    </Modal>

                    <Modal closeOnOverlayClick={false} size={size} isOpen={isOpenModal3} onClose={closeModal3}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader></ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <Image src={Check.src} boxSize='100px' alt="check icon" mr="auto" ml="auto" />
                                <Text align="center" fontSize="2xl" fontWeight="bold" mt="15px">Shipment Booked</Text>
                            </ModalBody>
                        </ModalContent>

                    </Modal>


                </>
            </Box>

        </UserLayout>
    )
}