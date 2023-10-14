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
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi'
import Maps from '../../../public/maps.png'
// Assets

export default function Default(props: {
    truck: string;
    shipmentId: string;
    pickupLocation: string;
    pickupDetails: string;
    deliveryLocation: string;
    deliveryDetails: string;
    ownerName: string;
    price: string
}) {
    const { truck, shipmentId, pickupLocation, pickupDetails, deliveryLocation, deliveryDetails, ownerName, price, ...rest } = props

    const greenColor = useColorModeValue('green.500', 'white')
    const greenBg = useColorModeValue('green.100', 'whiteAlpha.100')
    const redColor = useColorModeValue('red.500', 'white')
    const redBg = useColorModeValue('red.100', 'whiteAlpha.100')

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (

        <Card p="20px">
            <Flex>
                <Box p='4'>
                    <Text
                        color='secondaryGray.700'
                        fontSize={{
                            base: 'md'
                        }}
                        fontWeight='400'
                        me='14px'
                    >Shipment number</Text>

                    <Text
                        color='BlackAlpha.800'
                        fontSize={{
                            base: 'xl'
                        }}
                        fontWeight='700'
                        me='14px'
                        pb="10px"
                    >{shipmentId}</Text>
                </Box>
                <Spacer />
                <Box pt="1">
                    <Image src={truck} w='75px' h='75px' borderRadius='20px' me='16px' />
                </Box>
            </Flex>
            <hr />

            <Flex alignItems="center" pt="15px">
                {/* <Box backgroundColor='BlackAlpha.800' p="15px">
                    <FiArrowUpRight color='Green.400' />
                </Box> */}
                <IconBox
                    w='40px'
                    h='40px'
                    bg={greenBg}
                    icon={
                        <Icon
                            w='22px'
                            h='22px'
                            as={FiArrowUpRight}
                            color={greenColor}
                        />
                    }
                />
                <Box pl="10px">
                    <Text color='BlackAlpha.800'
                        fontSize={{
                            base: 'md'
                        }}
                        fontWeight='700'>{pickupLocation}</Text>
                    <Text color='secondaryGray.700'>{pickupDetails}</Text>
                </Box>
            </Flex>

            <Flex alignItems="center" pt="10px" pb="15px">
                {/* <Box backgroundColor='BlackAlpha.800' p="15px">
                    <FiArrowUpRight color='Green.400' />
                </Box> */}
                <IconBox
                    w='40px'
                    h='40px'
                    bg={redBg}
                    icon={
                        <Icon
                            w='22px'
                            h='22px'
                            as={FiArrowDownRight}
                            color={redColor}
                        />
                    }
                />
                <Box pl="10px">
                    <Text color='BlackAlpha.800'
                        fontSize={{
                            base: 'md'
                        }}
                        fontWeight='700'>{deliveryLocation}</Text>
                    <Text color='secondaryGray.700'>{deliveryDetails}</Text>
                </Box>
            </Flex>

            <hr />

            <Flex pt="15px">
                <Box>
                    <Text color='BlackAlpha.800'
                        fontSize={{
                            base: 'md'
                        }}
                        fontWeight='700'>Owner</Text>
                    <Text>{ownerName}</Text>
                </Box>
                <Spacer />
                <Box>
                    <Button colorScheme='blue' onClick={onOpen}>View Details</Button>
                </Box>
            </Flex>

            <Modal onClose={onClose} isOpen={isOpen} size='6xl' motionPreset="slideInBottom" >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Shipment Number: {shipmentId}</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>

                        <SimpleGrid
                            columns={{ base: 1, md: 2, lg: 3, '2xl': 3 }}
                            gap='20px'>

                            <Box>
                                <Text color='BlackAlpha.800'
                                    fontSize={{
                                        base: 'md'
                                    }}
                                    fontWeight='700'>Special Instruction</Text>
                                <Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. culpa velit amet labore. Animi, perferendis. Est molestiae animi nemo saepe, alias laboriosam iusto, rerum esse perferendis, distinctio culpa totam corrupti architecto accusantium ducimus?
                                </Text>

                                <Flex alignItems="center" pt="15px">
                                    <IconBox
                                        w='40px'
                                        h='40px'
                                        bg={greenBg}
                                        icon={
                                            <Icon
                                                w='22px'
                                                h='22px'
                                                as={FiArrowUpRight}
                                                color={greenColor}
                                            />
                                        }
                                    />
                                    <Box pl="10px">
                                        <Text color='BlackAlpha.800'
                                            fontSize={{
                                                base: 'md'
                                            }}
                                            fontWeight='700'>{pickupLocation}</Text>
                                        <Text color='secondaryGray.700'>{pickupDetails}</Text>
                                    </Box>
                                </Flex>

                                <Flex alignItems="center" pt="10px" pb="15px">
                                    <IconBox
                                        w='40px'
                                        h='40px'
                                        bg={redBg}
                                        icon={
                                            <Icon
                                                w='22px'
                                                h='22px'
                                                as={FiArrowDownRight}
                                                color={redColor}
                                            />
                                        }
                                    />
                                    <Box pl="10px">
                                        <Text color='BlackAlpha.800'
                                            fontSize={{
                                                base: 'md'
                                            }}
                                            fontWeight='700'>{deliveryLocation}</Text>
                                        <Text color='secondaryGray.700'>{deliveryDetails}</Text>
                                    </Box>
                                </Flex>

                                <Box>
                                    <Text color='BlackAlpha.800'
                                        fontSize={{
                                            base: 'xl'
                                        }}
                                        fontWeight='700'>Truck Size</Text>
                                    <Image src={truck} w='200px' h='200px' borderRadius='20px' me='16px' />
                                </Box>
                                <Box>
                                    <Text color='BlackAlpha.800'
                                        fontSize={{
                                            base: 'xl'
                                        }}
                                        fontWeight='700'>Price: {price}</Text>
                                </Box>
                            </Box>

                            <Box>
                                <Image src={Maps.src} w="700px" h="600px" />
                            </Box>
                        </SimpleGrid>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Card>

    )
}