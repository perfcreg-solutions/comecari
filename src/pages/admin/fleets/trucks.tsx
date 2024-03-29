import {
    Box,
    Button,
    Image,
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
    Table,
    Flex,
    Tbody,
    Text,
    FormControl,
    FormLabel,
    useDisclosure,
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
import { AddIcon } from '@chakra-ui/icons'


export default function Trucks() {

    const { isOpen, onOpen, onClose } = useDisclosure()
   
   

    return (
        <AdminLayout brandtext="Trucks">
            <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
                <>
                    <Button colorScheme='blue' mb="15px" onClick={onOpen}> Add Truck &nbsp;
                        <Icon
                            w='14px'
                            h='14px'
                            as={AddIcon}
                        /></Button>


                    <SimpleGrid columns={{ base: 1, md: 3, xl: 3 }} gap='20px' mb='20px'>
                        {TruckData.length > 0 && TruckData.map((data, index) => (
                            // const {id, carrierID, driverID, type, regNumber, capacity, licensePlate, dateCreated, dateModified } = data
                            <TrucksCard
                                key={index}
                                id={data.id}
                                carrierID={data.carrierID}
                                driverID={data.driverID}
                                type={data.type}
                                regNumber={data.vin}
                                capacity={ data.capacity}
                                licensePlate={data.licensePlate}
                                dateCreated={data.created}
                                dateModified={data.dateModified}
                                truck={data.truck}
                                status={data.status}
                                dimensions={data.dimensions}
                            />
                        ))}
                    </SimpleGrid>
                </>
            </Box>

            <Modal onClose={onClose} isOpen={isOpen} size='6xl' motionPreset="slideInBottom" >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Truck</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                        <SimpleGrid columns={2} spacing={10} mb={4}>
                            <SimpleGrid columns={2} spacing={5}>
                                <FormControl>
                                    <FormLabel>Select Truck type</FormLabel>
                                    <Select>
                                        <option selected>Mini Van</option>
                                        <option>Sixteen Wheeler</option>
                                    </Select>
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Vehicle Make</FormLabel>
                                    <Input type="text" placeholder="Volvo" />
                                </FormControl>


                                <FormControl>
                                    <FormLabel>Model</FormLabel>
                                    <Input type="text" placeholder="FH16" />
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Year</FormLabel>
                                    <Input type="text" placeholder="e.g 2017" />
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Plate Number</FormLabel>
                                    <Input type="text" placeholder="BB2345BBG" />
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Active Location</FormLabel>
                                    <Input type="text" placeholder="e.g Ikeja" />
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Assign Driver</FormLabel>
                                    <Select>
                                        <option value='option1'>John Doe</option>
                                        <option value='option2'>Matthew doe</option>
                                        <option value='option3'>Sam Doe</option>
                                    </Select>
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Are you GIT Insured?</FormLabel>
                                    <Select>
                                        <option value='option1'>Select option</option>
                                        <option value='option1'>Yes</option>
                                        <option value='option2'>No</option>
                                    </Select>
                                </FormControl>

                                <FormControl>
                                    <FormLabel>If yes, upload GIT Insurance proof</FormLabel>
                                    <Input type="file" />
                                </FormControl>
                            </SimpleGrid>


                            <Box>
                                {/* <Text fontSize={{
                                        base: 'md'
                                    }}
                                    fontWeight='500' mb={2} color="teal.400">Capacity</Text> */}
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormControl>
                                        <FormLabel>Weight</FormLabel>
                                        <Input type="text" placeholder="2,500KGs" />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Volume</FormLabel>
                                        <Input type="text" placeholder="1,000" />
                                    </FormControl>
                                </SimpleGrid>


                                <SimpleGrid columns={3} spacing={5} mt={4}>
                                    <FormControl>
                                        <FormLabel>Height</FormLabel>
                                        <Input type="text" placeholder="250" />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Width</FormLabel>
                                        <Input type="text" placeholder="100" />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Length</FormLabel>
                                        <Input type="text" placeholder="450" />
                                    </FormControl>
                                </SimpleGrid>

                                {/* <FormControl mt={10}>
                                    <FormLabel>Upload photos of Vehicle</FormLabel>
                                    <Input type="file" />
                                </FormControl> */}
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormControl mt={10}>
                                        <FormLabel>Upload front view of Vehicle</FormLabel>
                                        <Input type="file" />
                                    </FormControl>

                                    <FormControl mt={10}>
                                        <FormLabel>Back View</FormLabel>
                                        <Input type="file" />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Left View</FormLabel>
                                        <Input type="file" />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Right View</FormLabel>
                                        <Input type="file" />
                                    </FormControl>
                                </SimpleGrid>
                            </Box>
                        </SimpleGrid>

                        <hr />

                        <Flex mt={4} justifyContent="flex-end">
                            <Button
                                colorScheme='blue'
                            >
                                Add Truck
                            </Button>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </AdminLayout>
    )
}