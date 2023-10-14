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
    useToast,
    useDisclosure,
    SimpleGrid} from '@chakra-ui/react'
// Assets
// Custom components

import AdminLayout from 'layouts/admin'
import DriverCard from 'components/card/DriverCard'
import { DriverData } from 'views/admin/drivers/variables/tableDrivers'
import { AddIcon } from '@chakra-ui/icons'
import { useForm, Controller } from 'react-hook-form'
import { useState } from 'react';

export default function Drivers() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const toast = useToast();

    const { handleSubmit, control } = useForm();
    const onAddDriver = (data: any) => {
        // Handle form submission for Form 1 here
        console.log('Add Driver Data:', data);
    };


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
                                                        key={index}
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
                    <form action="#" onSubmit={handleSubmit(onAddDriver)}>
                        <ModalHeader>Add Driver</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Controller
                                    name="driverName"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            isRequired={true}
                                            variant='auth'
                                            fontSize='sm'
                                            ms={{ base: '0px', md: '0px' }}
                                            type="text"
                                            placeholder='John Doe'
                                            mb='18px'
                                            fontWeight='500'
                                            size='lg'
                                            {...field}
                                        />
                                    )}
                                />
                            </FormControl>

                            <FormControl mt={2}>
                                <FormLabel>Email</FormLabel>
                                <Controller
                                    name="driverEmail"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            isRequired={true}
                                            variant='auth'
                                            fontSize='sm'
                                            ms={{ base: '0px', md: '0px' }}
                                            type="text"
                                            placeholder='johndoe@company.comecari.com'
                                            mb='18px'
                                            fontWeight='500'
                                            size='lg'
                                            {...field}
                                        />
                                    )}
                                />
                            </FormControl>

                            <FormControl mt={2}>
                                <FormLabel>Mobile No</FormLabel>
                                <Controller
                                    name="driverNumber"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            isRequired={true}
                                            variant='auth'
                                            fontSize='sm'
                                            ms={{ base: '0px', md: '0px' }}
                                            type="number"
                                            placeholder='555 5555 555'
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
                            <Button colorScheme='blue' mr={3} type='submit' onClick={() =>
                                toast({
                                    title: 'Driver added successfully.',
                                    position: 'top-right',
                                    description: "Mr John Doe has been added as a driver.",
                                    status: 'success',
                                    duration: 5000,
                                    isClosable: true,
                                })
                            }>
                                Add Driver
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </AdminLayout>
    )
}