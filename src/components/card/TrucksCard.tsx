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
    Spacer
} from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import IconBox from 'components/icons/IconBox'
import { Image } from 'components/image/Image';
import { useState } from 'react'

import Maps from '../../../public/maps.png'

export default function Truck(props: {
    carrierID: string;
    truck: string;
    id: string;
    driverID: string;
    type: string;
    regNumber: number;
    capacity: number;
    licensePlate: string;
    dateCreated: string;
    dateModified: string;
    status: string;
})
{
    const { id, carrierID, driverID, type, regNumber, capacity, licensePlate, dateCreated, dateModified, truck, status, ...rest} = props
    const { isOpen, onOpen, onClose } = useDisclosure()

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
                        <SimpleGrid columns={2} spacing={10}>
                            <Box>
                                <Text color='secondaryGray.700'
                                    fontSize={{
                                        base: 'md'
                                    }}
                                    fontWeight='500'>
                                    Active trip
                                </Text>
                                <Image src={Maps.src} w="500px" h="300px" />
                            </Box>
                        </SimpleGrid>
                        
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Card>
    )
}
