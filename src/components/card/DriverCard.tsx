import {
    Box,
    Flex,
    Text,
    Icon,
    Input,
    Button,
    Modal,
    SimpleGrid,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useColorModeValue,
    useDisclosure,
    FormControl,
    FormLabel,
    Spacer,
    Stack,
    HStack,
    VStack,
    Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/react';

import { ChevronRightIcon, StarIcon } from '@chakra-ui/icons'
// Custom components
import Card from 'components/card/Card';
import IconBox from 'components/icons/IconBox'
import { Image } from 'components/image/Image';
import { useState } from 'react'

export default function Driver(props: {
    id: string;
    name: string;
    image: string;
    dateJoined: string;
    distance: string;
    delivery: string;
    hours: string;
    rating: string;
}) {
    const { id, name, image, dateJoined, distance, delivery, hours, rating, ...rest } = props;
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Card onClick={onOpen}>
            <Flex justifyContent="space-between" alignItems="center">
                <Flex>
                    <Image src={image} borderRadius="full" boxSize="50px" />
                    <Box pl={2}>
                        <Text fontWeight="500">{name}</Text>
                        <Text color="gray.400" fontSize={{
                            base: 'sm'
                        }}>Last active 3m ago</Text>
                    </Box>
                </Flex>

                <ChevronRightIcon />
            </Flex>


            <Modal onClose={onClose} isOpen={isOpen} size='6xl' motionPreset="slideInBottom" >
                <ModalOverlay />

                <ModalContent>
                    <ModalHeader>Driver Details</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                        <SimpleGrid columns={2} spacing={10}>
                            <Box textAlign="center">
                                <Image src={image} boxSize="200px" mx="auto" borderRadius="full" mb={2} />
                                <Text fontSize={{
                                    base: '2xl'
                                }} fontWeight="600" mb={5}>{name}</Text>

                                <hr />

                                <SimpleGrid mt={5} columns={3} spacing={10}>
                                    <Box>
                                        <Text fontSize={{
                                            base: 'xl'
                                        }} fontWeight="600">{delivery}</Text>
                                        <Text>Deliveries</Text>
                                    </Box>

                                    <Box borderLeft='1px' borderRight='1px' borderColor='gray.200'>
                                        <Text fontSize={{
                                            base: 'xl'
                                        }} fontWeight="600"><StarIcon w={5} h={4} color="yellow.400" /> {rating}</Text>
                                        <Text>Star Rating</Text>
                                    </Box>

                                    <Box>
                                        <Text fontSize={{
                                            base: 'xl'
                                        }} fontWeight="600">{hours}</Text>
                                        <Text>Driving hours</Text>
                                    </Box>
                                </SimpleGrid>
                            </Box>

                            <Box>
                                <Text color='secondaryGray.700'
                                    fontSize={{
                                        base: 'md'
                                    }}
                                    fontWeight='500' mb={2}>
                                    Recent Trips
                                </Text>
                                <VStack
                                    spacing={4}
                                    align='stretch'
                                >
                                    <Box>
                                        <Flex justifyContent="space-between" alignItems="center" bg="gray.200" py={2} px={3} borderRadius="0.25rem">
                                            <Text fontWeight='700'>1. Lagos to Port Harcourt</Text>

                                            <Box>
                                                <Text fontSize={{
                                                    base: 'sm'
                                                }} fontWeight="500">Collection: 15 Jan, 2023</Text>
                                                <Text fontSize={{
                                                    base: 'sm'
                                                }} fontWeight="500">Delivery: 17 Jan, 2023</Text>
                                            </Box>
                                        </Flex>
                                    </Box>
                                    <Box>
                                        <Flex justifyContent="space-between" alignItems="center" bg="gray.200" py={2} px={3} borderRadius="0.25rem">
                                            <Text fontWeight='700'>2. Sokoto to Lagos</Text>

                                            <Box>
                                                <Text fontSize={{
                                                    base: 'sm'
                                                }} fontWeight="500">Collection: 13 Jan, 2023</Text>
                                                <Text fontSize={{
                                                    base: 'sm'
                                                }} fontWeight="500">Delivery: 15 Jan, 2023</Text>
                                            </Box>
                                        </Flex>
                                    </Box>
                                    <Box>
                                        <Flex justifyContent="space-between" alignItems="center" bg="gray.200" py={2} px={3} borderRadius="0.25rem">
                                            <Text fontWeight='700'>3. Abuja to Sokoto</Text>

                                            <Box>
                                                <Text fontSize={{
                                                    base: 'sm'
                                                }} fontWeight="500">Collection: 11 Jan, 2023</Text>
                                                <Text fontSize={{
                                                    base: 'sm'
                                                }} fontWeight="500">Delivery: 13 Jan, 2023</Text>
                                            </Box>
                                        </Flex>
                                    </Box>

                                    <Box>
                                        <Flex justifyContent="space-between" alignItems="center" bg="gray.200" py={2} px={3} borderRadius="0.25rem">
                                            <Text fontWeight='700'>4. Abuja to Sokoto</Text>

                                            <Box>
                                                <Text fontSize={{
                                                    base: 'sm'
                                                }} fontWeight="500">Collection: 11 Jan, 2023</Text>
                                                <Text fontSize={{
                                                    base: 'sm'
                                                }} fontWeight="500">Delivery: 13 Jan, 2023</Text>
                                            </Box>
                                        </Flex>
                                    </Box>

                                    <Box>
                                        <Flex justifyContent="space-between" alignItems="center" bg="gray.200" py={2} px={3} borderRadius="0.25rem">
                                            <Text fontWeight='700'>5. Abuja to Sokoto</Text>

                                            <Box>
                                                <Text fontSize={{
                                                    base: 'sm'
                                                }} fontWeight="500">Collection: 11 Jan, 2023</Text>
                                                <Text fontSize={{
                                                    base: 'sm'
                                                }} fontWeight="500">Delivery: 13 Jan, 2023</Text>
                                            </Box>
                                        </Flex>
                                    </Box>
                                </VStack>
                            </Box>

                            <Box>
                                {/* <Text color='secondaryGray.700'
                                    fontSize={{
                                        base: 'md'
                                    }}
                                    fontWeight='500' mb={2}>
                                    Updates and Details
                                </Text> */}

                                <Tabs isFitted variant='enclosed'>
                                    <TabList mb='1em'>
                                        <Tab>Details</Tab>
                                        <Tab>Update</Tab>
                                    </TabList>
                                    <TabPanels>
                                        <TabPanel>
                                            <SimpleGrid columns={2} spacing={5}>
                                                <FormControl mb={2}>
                                                    <FormLabel>Email address</FormLabel>
                                                    <Input type='text' placeholder="user@gmail.com" isDisabled />
                                                </FormControl>

                                                <FormControl mb={2}>
                                                    <FormLabel>Mobile No</FormLabel>
                                                    <Input type='text' placeholder="+234 556 4453 344" isDisabled />
                                                </FormControl>
                                            </SimpleGrid>
                                            

                                        </TabPanel>
                                        <TabPanel>
                                            <FormControl mb={2}>
                                                <FormLabel>Email address</FormLabel>
                                                <Input type='text' placeholder="AB123456BB" />
                                            </FormControl>

                                            <Button
                                                colorScheme='teal'>
                                                Update
                                            </Button>
                                        </TabPanel>
                                    </TabPanels>
                                </Tabs>
                            </Box>
                        </SimpleGrid>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Card>
    )
}