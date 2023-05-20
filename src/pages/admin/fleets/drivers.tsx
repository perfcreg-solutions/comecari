import {
    Box,
    Button,
    Icon,
    Input,
    FormControl,
    FormLabel,
    Select,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    SimpleGrid} from '@chakra-ui/react'
// Assets
// Custom components

import AdminLayout from 'layouts/admin'
import DriverCard from 'components/card/DriverCard'
import { DriverData } from 'views/admin/drivers/variables/tableDrivers'
import { AddIcon } from '@chakra-ui/icons'

export default function Drivers() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <AdminLayout brandtext="Drivers">
            <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
                <>
                    <Button colorScheme='blue' mb="15px" onClick={onOpen}> Add Driver &nbsp;
                        <Icon
                            w='14px'
                            h='14px'
                            as={AddIcon}
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
                                dateJoined={data.dateJoined}
                                rating={data.rating} />
                        ))}
                    </SimpleGrid>
                </>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Driver</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input type="text" placeholder="John Doe " />
                        </FormControl>

                        <FormControl mt={2}>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder="user@gmail.com" />
                        </FormControl>

                        <FormControl mt={2}>
                            <FormLabel>Mobile No</FormLabel>
                            <Input type="number" placeholder="+234 567 7564 784" />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Add Driver
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </AdminLayout>
    )
}