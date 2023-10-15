import React from 'react';
import { useState } from 'react'
// Chakra imports
import { Box, Button, Flex, Icon, Text, useColorModeValue, 
	Modal, 
	ModalContent, 
	ModalBody,
	ModalHeader,
	ModalFooter, 
	ModalOverlay,
	ModalCloseButton,
	SimpleGrid,
	Select,
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	useDisclosure,
} from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import { Image } from 'components/image/Image';
// Assets
import { FaDollarSign, FaEthereum } from 'react-icons/fa';
import { MdCheckCircle, MdCancel, MdOutlineError } from 'react-icons/md';
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi'
import { TbCurrencyNaira } from 'react-icons/tb';
import IconBox from 'components/icons/IconBox';
import Maps from '../../../../../public/maps.png'
import Slider1 from 'img/load/load1.jpg'
import Slider2 from 'img/load/load2.jpg'
import Slider3 from 'img/load/load3.jpg'
import SimpleImageSlider from "react-simple-image-slider";
import Avatar from 'img/avatars/avatar6.png'
import MapComponent from 'views/admin/default/components/MapComponent';


export default function HistoryItem(props: {
	image: string;
	status: string;
	truck: string;
	date: string;
	price: string | number;
	pickupLocation: string;
	deliveryLocation: string;
	pickup: string;
	delivery: string;
	button: string;
}) {
	const { image, pickup, delivery, date, price, pickupLocation, deliveryLocation, truck, status, button } = props;
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
	const redBg = useColorModeValue('red.100', 'whiteAlpha.100');

	const pickupPoint = { lat: 6.6050, lng: 3.3498 };
	const destination = { lat: 9.0820, lng: 7.4951 };
	const activeLocation = { lat: 7.8435, lng: 5.4225 };
	
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

	const [showForm, setShowForm] = useState(false);

	// Function to toggle the form visibility
	const toggleForm = () => {
		setShowForm(!showForm);
	};

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
								You Bid
							</Text>
							<Flex w='max-content' me={{ base: '4px', md: '32px', xl: '10px', '3xl': '32px' }} align='center' >
								{/* <Icon as={TbCurrencyNaira} color={textColor} width='20px' me='7px' /> */}
								<Text w='max-content' fontWeight='700' fontSize='md' color={textColor}>
									&#x20A6;{price}
								</Text>
							</Flex>
							<Flex align='center'>
								<Icon
									w='24px'
									h='24px'
									me='5px'
									color={
										status === 'Approved'
											? 'green.500'
											: status === 'Closed'
												? 'red.500'
												: status === 'Pending'
													? 'orange.500'
													: null
									}
									as={
										status === 'Approved'
											? MdCheckCircle
											: status === 'Closed'
												? MdCancel
												: status === 'Pending'
													? MdOutlineError
													: null
									}
								/>
								<Text color={textColor} fontSize='sm' fontWeight='500'>
									{status}
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
					<ModalHeader>Bid Details - Status: {status}</ModalHeader>
					<ModalCloseButton />

					<ModalBody>
						<SimpleGrid spacing={4} columns={{ base: 1, md: 2}}>
							
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
									<Text fontSize="lg" fontWeight="bold">You bid:</Text>
									<Text fontSize="lg" fontWeight="bold">&nbsp; &#x20A6;{price}</Text>
								</Flex>

							</Box>

							<Box>
								<MapComponent pickupPoint={pickupPoint} destination={destination} activeLocation={activeLocation} height="550px" />
							</Box>
						</SimpleGrid>
						<hr />
						<SimpleGrid spacing={4} columns={{ base: 1, md: 2 }}>
							<Box>
								<Text fontWeight="bold" fontSize="2xl" mt="15px">Assigned driver:</Text>

								<Image boxSize="150px" borderRadius="full" mt="15px" mb="15px" src={Avatar.src} />
								<Text>Mr John Doe</Text>
								<Button colorScheme='green' mt="10px" onClick={toggleForm}>
									{showForm ? 'Close Form' : 'Assign new driver'}
								</Button>
							</Box>
							{showForm && (
								<Box>
									<Text fontSize="xl" fontWeight="bold" mt="15px">Assign New Driver</Text>
									{/* Your form section here */}
									<form action="#">
										<FormControl>
											<FormLabel>Drivers</FormLabel>
											<Select >
												<option>John Doe</option>
												<option>Sam Doe</option>
											</Select>
										</FormControl>

										<Button type='submit' colorScheme='green' mt="5px">Assign</Button>
									</form>
								</Box>
							)}
						</SimpleGrid>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>



	);
}
