import {
    Box,
    Flex,
    Text,
    Icon,
    Input,
    Select,
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
// Custom components
import Card from 'components/card/Card';
import IconBox from 'components/icons/IconBox'
import { Image } from 'components/image/Image';
import { useState } from 'react'
import SimpleImageSlider from "react-simple-image-slider";

import Slider1 from 'img/trucks/truck1.jpg'
import Slider2 from 'img/trucks/truck2.jpg'
import Slider3 from 'img/trucks/truck3.jpg'
import Headshot from 'img/profile/headshot.jpg'
import Map from 'components/gmap/Map';

interface Capacity {
    volume: number;
    weight: number
  }

  interface Dimension {
    length: number;
    width: number;
    height: number;
  }

     interface Coordinate {
        lat: number;
        lng: number;
      }
    const path: Coordinate[] = [
        { lat: 37.772, lng: -122.214 },
        { lat: 21.291, lng: -157.821 },
        { lat: -18.142, lng: 178.431 },
        { lat: -27.467, lng: 153.027 },
      ];
export default function Truck(props: {
    carrierID: string;
    truck: string;
    id: string;
    driverID: string;
    type: string;
    regNumber: string;
    capacity: Capacity;
    licensePlate: string;
    dateCreated: string;
    dateModified: string;
    status: string;
    dimensions: Dimension;
}) {
    const { id, carrierID, driverID, type, regNumber, capacity, licensePlate, dateCreated, dateModified, truck, status, dimensions, ...rest } = props
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [imageNum, setImageNum] = useState(1);
    const sliderImages = [
        {
            url: Slider1.src,
        },
        {
            url: Slider2.src,
        },
        {
            url: Slider3.src,
        }
    ];

    const [deletePrompt, setDeletePrompt] = useState(false)
    const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA5Lt3E5gYb-lfogvaSpCrvCpocLqHwNOI`;

 

    return (
        <Card position="relative">
            <Flex>
                <Box pt="1" mx="auto" onClick={onOpen}>
                    <Image src={truck} w='250px' h='150px' />
                </Box>
            </Flex>
            <Box pl="10px">
                <Text
                    color='BlackAlpha.800'
                    fontSize={{
                        base: 'xl'
                    }}
                    fontWeight='700'
                >{id}</Text>

                <Text
                    color='secondaryGray.700'
                    fontSize={{
                        base: 'md'
                    }}
                    fontWeight='500'
                    me='14px'
                    pb="10px"
                >{type} &#x2022; {capacity.volume} tonnes</Text>


                {status &&

                    <Box position="absolute" top="10px" right="10px">
                        <Text bg="#333" py={1} px={2} borderRadius="0.5rem" color="#fff" fontSize={{
                            base: 'sm'
                        }}>{status}</Text>
                    </Box>
                }

            </Box>
            {/* <hr /> */}

            <Modal onClose={onClose} isOpen={isOpen} size='6xl' motionPreset="slideInBottom" >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Truck type: {type}</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} spacing={10}>
                            <Box>
                                <Text color='secondaryGray.700'
                                    fontSize={{
                                        base: 'md'
                                    }}
                                    fontWeight='500' mb={2}>
                                    Active trip
                                </Text>
                                <Map 
                                paths={path}
                                containerElement={<div style={{ height: `400px`, width: "500px" }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                                googleMapURL={mapURL} 
                                loadingElement={<div style={{ height: `100%` }} />}
                                />
                            </Box>
                            <Box>
                                <Text color='secondaryGray.700'
                                    fontSize={{
                                        base: 'md'
                                    }}
                                    fontWeight='500' mb={2}>
                                    Truck Details
                                </Text>

                                <Box mb={3}>
                                    <SimpleImageSlider

                                        width={530}
                                        height={300}
                                        images={sliderImages}
                                        showBullets={false}
                                        showNavs={true}
                                        autoPlay={true}
                                        onStartSlide={(index) => {
                                            setImageNum(index);
                                        }}
                                        autoPlayDelay={3}
                                    />
                                </Box>


                                <SimpleGrid columns={5} spacing={5}>
                                    <Box py={5} textAlign="center" bg='gray.200' borderRadius="0.25rem">
                                        <Text fontWeight='500'
                                            fontSize={{
                                                base: 'lg'
                                            }}>{capacity.weight}</Text>
                                        <Text fontSize={{
                                            base: 'sm'
                                        }} color="gray.500">Weight</Text>
                                    </Box>

                                    <Box py={5} textAlign="center" bg='gray.200' borderRadius="0.25rem">
                                        <Text fontWeight='500'
                                            fontSize={{
                                                base: 'lg'
                                            }}>{capacity.volume}</Text>
                                        <Text fontSize={{
                                            base: 'sm'
                                        }} color="gray.500">Volume</Text>
                                    </Box>

                                    <Box py={5} px={3} textAlign="center" bg='gray.200' borderRadius="0.25rem">
                                        <Text fontWeight='500'
                                            fontSize={{
                                                base: 'lg'
                                            }}>{dimensions.length} ft</Text>
                                        <Text fontSize={{
                                            base: 'sm'
                                        }} color="gray.500">Length</Text>
                                    </Box>

                                    <Box py={5} px={3} textAlign="center" bg='gray.200' borderRadius="0.25rem">
                                        <Text fontWeight='500'
                                            fontSize={{
                                                base: 'lg'
                                            }}>{dimensions.width} ft</Text>
                                        <Text fontSize={{
                                            base: 'sm'
                                        }} color="gray.500">Width</Text>
                                    </Box>

                                    <Box py={5} px={3} textAlign="center" bg='gray.200' borderRadius="0.25rem">
                                        <Text fontWeight='500'
                                            fontSize={{
                                                base: 'lg'
                                            }}>{dimensions.height} ft</Text>
                                        <Text fontSize={{
                                            base: 'sm'
                                        }} color="gray.500">Height</Text>
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

                                <Tabs isFitted variant='enclosed'>
                                    <TabList mb='1em'>
                                        <Tab>Details</Tab>
                                        <Tab>Update</Tab>
                                    </TabList>
                                    <TabPanels>
                                        <TabPanel>
                                            <FormControl mb={2}>
                                                <FormLabel>Plate Number</FormLabel>
                                                <Input type='text' placeholder="AB123456BB" isDisabled />
                                            </FormControl>

                                            <Box>
                                                <Text fontWeight="600">Driver</Text>
                                                <Flex alignItems="center">
                                                    <Image src={Headshot.src} borderRadius='full' boxSize='40px' mt={2} />
                                                    <Text pl={2} fontWeight="600" >Mr John Doe</Text>
                                                </Flex>
                                            </Box>
                                        </TabPanel>
                                        <TabPanel>
                                            <SimpleGrid columns={2} spacing={5}>
                                                <FormControl mb={2}>
                                                    <FormLabel>Active Location</FormLabel>
                                                    <Input type='text' placeholder="AB123456BB" />
                                                </FormControl>

                                                <FormControl mb={2}>
                                                    <FormLabel>Status</FormLabel>
                                                    <Select placeholder='Select option'>
                                                        <option value='option1'>Active</option>
                                                        <option value='option2'>Inactive</option>
                                                    </Select>
                                                </FormControl>

                                                <FormControl mb={2}>
                                                    <FormLabel>Assign New Driver</FormLabel>
                                                    <Select placeholder='Select option'>
                                                        <option value='option1'>John Doe</option>
                                                        <option value='option2'>Matthew doe</option>
                                                        <option value='option3'>Sam Doe</option>
                                                    </Select>
                                                </FormControl>
                                            </SimpleGrid>
                                            

                                            <Flex>
                                                <Button colorScheme='blue'>
                                                    Update
                                                </Button>
                                                <Button colorScheme='red' ml={1} onClick={() => setDeletePrompt(!deletePrompt)}>
                                                    Delete Truck
                                                </Button>
                                            </Flex>

                                            {deletePrompt && <Box mt={6}>
                                                <Text>Are you sure you want to delete this truck?</Text>
                                                <Flex>
                                                    <Button colorScheme='blue' onClick={() => setDeletePrompt(!deletePrompt)}>
                                                        No. Take me back.
                                                    </Button>
                                                    <Button colorScheme='red' ml={1}>
                                                        Yes, I want to.
                                                    </Button>
                                                </Flex>
                                            </Box> }
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
