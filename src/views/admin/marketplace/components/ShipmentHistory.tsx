import React from 'react';
import { useState } from 'react'
// Chakra imports
import {
    Box, Button, Flex, Icon, Text, useColorModeValue,
    Modal,
    ModalContent,
    ModalBody,
    ModalHeader,
    ModalFooter,
    ModalOverlay,
    ModalCloseButton,
    SimpleGrid,
    useDisclosure,
} from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
// Assets
import { FaDollarSign, FaEthereum } from 'react-icons/fa';
import { Image } from 'components/image/Image';
import { MdCheckCircle, MdCancel, MdOutlineError } from 'react-icons/md';
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi'
import { TbCurrencyNaira } from 'react-icons/tb';
import IconBox from 'components/icons/IconBox';
import Maps from '../../../../../public/maps.png'
import Slider1 from 'img/load/load1.jpg'
import Slider2 from 'img/load/load2.jpg'
import Slider3 from 'img/load/load3.jpg'
import SimpleImageSlider from "react-simple-image-slider";


export default function HistoryItem(props: {
    id: string;
    image: string;
    truck: string;
    date: string;
    price: string | number;
    pickupLocation: string;
    deliveryLocation: string;
    pickup: string;
    delivery: string;
    button: string;
}) {
    const { image, id, pickup, delivery, date, price, pickupLocation, deliveryLocation, truck, button } = props;
    // Chakra Color Mode
    const textColor = useColorModeValue('brands.900', 'white');
    const bgItem = useColorModeValue(
        { bg: 'white', boxShadow: '0 30px 35px 20px rgba(112, 144, 176, 0.2)' },
        { bg: 'navy.700', boxShadow: 'unset' }
    );
    const textColorDate = useColorModeValue('secondaryGray.600', 'white');
    const greenColor = useColorModeValue('green.500', 'white')
    const greenBg = useColorModeValue('green.100', 'whiteAlpha.100')
    const redColor = useColorModeValue('red.500', 'white');
    const redBg = useColorModeValue('red.100', 'whiteAlpha.100')

    const { isOpen, onOpen, onClose } = useDisclosure();
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

    return (
        <>
            <Card _hover={bgItem} bg='transparent' boxShadow='unset' px='24px' py='21px' my='10px' transition='0.2s linear'>
                <Flex direction={{ base: 'column' }} justify='center'>


                    <Flex position='relative' align='center'>
                        <Flex
                            direction='column'
                            w={{ base: '70%', md: '100%' }}
                            me={{ base: '4px', md: '32px', xl: '10px', '3xl': '32px' }}>
                            <Text
                                color={textColor}
                                fontSize={{
                                    base: 'md'
                                }}
                                mb='5px'
                                fontWeight='bold'
                                me='14px'>
                                {pickupLocation} to {deliveryLocation}
                            </Text>
                            <Text
                                color='secondaryGray.600'
                                fontSize={{
                                    base: 'sm'
                                }}
                                fontWeight='400'
                                me='14px'>
                                {truck}
                            </Text>

                            <Text
                                color={textColor}
                                fontSize={{
                                    base: 'md'
                                }}
                                mb='5px'
                                fontWeight='bold'
                                me='14px'>
                                Collection: {pickup}
                            </Text>
                            <Text
                                color={textColor}
                                fontSize={{
                                    base: 'md'
                                }}
                                mb='5px'
                                fontWeight='bold'
                                me='14px'>
                                Delivery: {delivery}
                            </Text>
                        </Flex>

                        <Flex direction="column" w={{ base: '70%', md: '100%' }}
                            me={{ base: '4px', md: '32px', xl: '10px', '3xl': '32px' }}>
                            <Text
                                color='secondaryGray.600'
                                fontSize={{
                                    base: 'sm'
                                }}
                                fontWeight='400'
                                me='14px'>
                                Shipment Price
                            </Text>
                            <Flex w='max-content' me={{ base: '4px', md: '32px', xl: '10px', '3xl': '32px' }} align='center' >
                                <Icon as={TbCurrencyNaira} color={textColor} width='20px' me='7px' />
                                <Text w='max-content' fontWeight='700' fontSize='md' color={textColor}>
                                    {price}
                                </Text>
                            </Flex>
                           


                        </Flex>
                        <Flex direction="column">
                            <Box>
                                <Image src={image} w='66px' h='66px' borderRadius='20px' me='16px' />
                            </Box>
                            <Button colorScheme='green' m="5px" onClick={onOpen}>{button}</Button>
                        </Flex>
                    </Flex>

                </Flex>
            </Card>

            <Modal onClose={onClose} isOpen={isOpen} size='6xl' motionPreset="slideInBottom" >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Shipment ID: {id}</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, '2xl': 3 }}
                            gap='20px'>

                            <Box>
                                <Text
                                    color={textColor}
                                    fontSize={{
                                        base: 'md'
                                    }}
                                    mb='5px'
                                    fontWeight='bold'
                                    me='14px'>
                                    Collection: {pickup}
                                </Text>
                                <Text
                                    color={textColor}
                                    fontSize={{
                                        base: 'md'
                                    }}
                                    mb='5px'
                                    fontWeight='bold'
                                    me='14px'>
                                    Delivery: {delivery}
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
                                        {/* <Text color='secondaryGray.700'>{pickupDetails}</Text> */}
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
                                        {/* <Text color='secondaryGray.700'>{deliveryDetails}</Text> */}
                                    </Box>
                                </Flex>

                                <Text fontSize="lg" fontWeight="bold" mb="10px">Load Images</Text>

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

                                <Flex align="center" mb="10px" mt="10px">
                                    <Text fontSize="lg" fontWeight="bold">You charged:</Text>
                                    <Icon as={TbCurrencyNaira} color={textColor} width='25px' />
                                    <Text fontSize="lg" fontWeight="bold">{price}</Text>
                                </Flex>

                            </Box>
                        </SimpleGrid>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>



    );
}
