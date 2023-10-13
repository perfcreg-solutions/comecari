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
    ModalBody,
    ModalCloseButton,
    Flex,
    FormControl,
    FormLabel,
    useDisclosure,
    useToast,
} from '@chakra-ui/react'
// Assets
// Custom components

import AdminLayout from 'layouts/admin'
// import TruckData from 'views/admin/truck/variables/tableTrucksData.json'
import TrucksCard from 'components/card/TrucksCard'
import { TruckData } from 'views/admin/truck/variables/tableTruckData'
import { AddIcon } from '@chakra-ui/icons'
import { useForm, Controller } from 'react-hook-form'
import { useState } from 'react';


export default function Trucks() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
   
    const { handleSubmit, control} = useForm();
    const onAddTruck = (data: any) => {
        // Handle form submission for Form 1 here
        console.log('Add Truck Data:', data);
    };

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
                        <form action="#" onSubmit={handleSubmit(onAddTruck)}>
                            <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} spacing={10} mb={4}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormControl>
                                        <FormLabel>Select Truck type</FormLabel>
                                        {/* <Select>
                                            <option selected>Mini Van</option>
                                            <option>Sixteen Wheeler</option>
                                        </Select> */}

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
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Vehicle Make</FormLabel>
                                        <Controller
                                            name="vehicleMake"
                                            control={control}
                                            render={({ field }) => (
                                                <Input
                                                    isRequired={true}
                                                    variant='auth'
                                                    fontSize='sm'
                                                    ms={{ base: '0px', md: '0px' }}
                                                    type="text"
                                                    placeholder='Volvo'
                                                    mb='18px'
                                                    fontWeight='500'
                                                    size='lg'
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Model</FormLabel>
                                        <Controller
                                            name="model"
                                            control={control}
                                            render={({ field }) => (
                                                <Input
                                                    isRequired={true}
                                                    variant='auth'
                                                    fontSize='sm'
                                                    ms={{ base: '0px', md: '0px' }}
                                                    type="text"
                                                    placeholder='FH16'
                                                    mb='18px'
                                                    fontWeight='500'
                                                    size='lg'
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Year</FormLabel>
                                        <Controller
                                            name="year"
                                            control={control}
                                            render={({ field }) => (
                                                <Input
                                                    isRequired={true}
                                                    variant='auth'
                                                    fontSize='sm'
                                                    ms={{ base: '0px', md: '0px' }}
                                                    type="text"
                                                    placeholder='2017'
                                                    mb='18px'
                                                    fontWeight='500'
                                                    size='lg'
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Plate Number</FormLabel>
                                        <Controller
                                            name="plateNumber"
                                            control={control}
                                            render={({ field }) => (
                                                <Input
                                                    isRequired={true}
                                                    variant='auth'
                                                    fontSize='sm'
                                                    ms={{ base: '0px', md: '0px' }}
                                                    type="text"
                                                    placeholder='BB3627273'
                                                    mb='18px'
                                                    fontWeight='500'
                                                    size='lg'
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Active Location</FormLabel>
                                        <Controller
                                            name="activeLocation"
                                            control={control}
                                            render={({ field }) => (
                                                <Input
                                                    isRequired={true}
                                                    variant='auth'
                                                    fontSize='sm'
                                                    ms={{ base: '0px', md: '0px' }}
                                                    type="text"
                                                    placeholder='e.g Ikeja'
                                                    mb='18px'
                                                    fontWeight='500'
                                                    size='lg'
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Assign Driver</FormLabel>
                                        <Controller
                                            name="driver"
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

                                                    <option value="1">John Doe</option>
                                                    <option value="2">Matthew Doe</option>
                                                    <option value="3">Sam Doe</option>
                                                </Select>
                                            )}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Are you GIT Insured?</FormLabel>
                                        <Controller
                                            name="gitInsured"
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

                                                    <option value="1">Select option</option>
                                                    <option value="2">Yes</option>
                                                    <option value="3">No</option>
                                                </Select>
                                            )}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>If yes, upload GIT Insurance proof</FormLabel>
                                        <Controller
                                            name="gitDoc"
                                            control={control}
                                            render={({ field }) => (
                                                <Input
                                                    isRequired={true}
                                                    variant='auth'
                                                    fontSize='sm'
                                                    ms={{ base: '0px', md: '0px' }}
                                                    type="file"
                                                    mb='18px'
                                                    fontWeight='500'
                                                    size='lg'
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </FormControl>
                                </SimpleGrid>


                                <Box>
                                    <SimpleGrid columns={2} spacing={5}>
                                        <FormControl>
                                            <FormLabel>Weight</FormLabel>
                                            <Controller
                                                name="weight"
                                                control={control}
                                                render={({ field }) => (
                                                    <Input
                                                        isRequired={true}
                                                        variant='auth'
                                                        fontSize='sm'
                                                        ms={{ base: '0px', md: '0px' }}
                                                        type="text"
                                                        placeholder='2,500 KG'
                                                        mb='18px'
                                                        fontWeight='500'
                                                        size='lg'
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        </FormControl>

                                        <FormControl>
                                            <FormLabel>Volume</FormLabel>
                                            <Controller
                                                name="volume"
                                                control={control}
                                                render={({ field }) => (
                                                    <Input
                                                        isRequired={true}
                                                        variant='auth'
                                                        fontSize='sm'
                                                        ms={{ base: '0px', md: '0px' }}
                                                        type="text"
                                                        placeholder='600 tonnes'
                                                        mb='18px'
                                                        fontWeight='500'
                                                        size='lg'
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        </FormControl>
                                    </SimpleGrid>


                                    <SimpleGrid columns={3} spacing={5} mt={4}>
                                        <FormControl>
                                            <FormLabel>Height</FormLabel>
                                            <Controller
                                                name="height"
                                                control={control}
                                                render={({ field }) => (
                                                    <Input
                                                        isRequired={true}
                                                        variant='auth'
                                                        fontSize='sm'
                                                        ms={{ base: '0px', md: '0px' }}
                                                        type="text"
                                                        placeholder='300m'
                                                        mb='18px'
                                                        fontWeight='500'
                                                        size='lg'
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        </FormControl>

                                        <FormControl>
                                            <FormLabel>Width</FormLabel>
                                            <Controller
                                                name="width"
                                                control={control}
                                                render={({ field }) => (
                                                    <Input
                                                        isRequired={true}
                                                        variant='auth'
                                                        fontSize='sm'
                                                        ms={{ base: '0px', md: '0px' }}
                                                        type="text"
                                                        placeholder='735m'
                                                        mb='18px'
                                                        fontWeight='500'
                                                        size='lg'
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        </FormControl>

                                        <FormControl>
                                            <FormLabel>Length</FormLabel>
                                            <Controller
                                                name="length"
                                                control={control}
                                                render={({ field }) => (
                                                    <Input
                                                        isRequired={true}
                                                        variant='auth'
                                                        fontSize='sm'
                                                        ms={{ base: '0px', md: '0px' }}
                                                        type="text"
                                                        placeholder='400m'
                                                        mb='18px'
                                                        fontWeight='500'
                                                        size='lg'
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        </FormControl>
                                    </SimpleGrid>

                                    {/* <FormControl mt={10}>
                                    <FormLabel>Upload photos of Vehicle</FormLabel>
                                    <Input type="file" />
                                </FormControl> */}
                                    <SimpleGrid columns={2} spacing={5}>
                                        <FormControl mt={10}>
                                            <FormLabel>Upload front view of Vehicle</FormLabel>
                                            <Controller
                                                name="frontView"
                                                control={control}
                                                render={({ field }) => (
                                                    <Input
                                                        isRequired={true}
                                                        variant='auth'
                                                        fontSize='sm'
                                                        ms={{ base: '0px', md: '0px' }}
                                                        type="file"
                                                        mb='18px'
                                                        size='lg'
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        </FormControl>

                                        <FormControl mt={10}>
                                            <FormLabel>Back View</FormLabel>
                                            <Controller
                                                name="backView"
                                                control={control}
                                                render={({ field }) => (
                                                    <Input
                                                        isRequired={true}
                                                        variant='auth'
                                                        fontSize='sm'
                                                        ms={{ base: '0px', md: '0px' }}
                                                        type="file"
                                                        mb='18px'
                                                        size='lg'
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        </FormControl>

                                        <FormControl>
                                            <FormLabel>Left View</FormLabel>
                                            <Controller
                                                name="leftView"
                                                control={control}
                                                render={({ field }) => (
                                                    <Input
                                                        isRequired={true}
                                                        variant='auth'
                                                        fontSize='sm'
                                                        ms={{ base: '0px', md: '0px' }}
                                                        type="file"
                                                        mb='18px'
                                                        size='lg'
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        </FormControl>

                                        <FormControl>
                                            <FormLabel>Right View</FormLabel>
                                            <Controller
                                                name="rightView"
                                                control={control}
                                                render={({ field }) => (
                                                    <Input
                                                        isRequired={true}
                                                        variant='auth'
                                                        fontSize='sm'
                                                        ms={{ base: '0px', md: '0px' }}
                                                        type="file"
                                                        mb='18px'
                                                        size='lg'
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        </FormControl>
                                    </SimpleGrid>
                                </Box>
                            </SimpleGrid>

                            <hr />

                            <Flex mt={4} justifyContent="flex-end">
                                <Button
                                    colorScheme='blue'
                                    type="submit"
                                >
                                    Add Truck
                                </Button>
                            </Flex>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </AdminLayout>
    )
}