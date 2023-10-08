import React from 'react';
// Chakra imports
import { Box, Button, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
// Assets
import { FaDollarSign, FaEthereum } from 'react-icons/fa';
import { Image } from 'components/image/Image';
import { MdCheckCircle, MdCancel, MdOutlineError } from 'react-icons/md';

export default function HistoryItem(props: {
	image: string;
	status: string;
	type: string;
	date: string;
	price: string | number;
	location: string;
	destination: string;
	pickup: string;
	delivery: string;
}) {
	const { image, pickup, delivery, date, price, location, destination, type, status, button } = props;
	// Chakra Color Mode
	const textColor = useColorModeValue('brands.900', 'white');
	const bgItem = useColorModeValue(
		{ bg: 'white', boxShadow: '0 30px 35px 20px rgba(112, 144, 176, 0.2)' },
		{ bg: 'navy.700', boxShadow: 'unset' }
	);
	const textColorDate = useColorModeValue('secondaryGray.600', 'white');
	return (
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
							{location} to {destination}
						</Text>
						<Text
							color='secondaryGray.600'
							fontSize={{
								base: 'sm'
							}}
							fontWeight='400'
							me='14px'>
							{type}
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
							<Icon as={FaDollarSign} color={textColor} width='9px' me='7px' />
							<Text w='max-content' fontWeight='700' fontSize='md' color={textColor}>
								{price}
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
						<Button colorScheme='green' m="5px">{button}</Button>
					</Flex>
				</Flex>

			</Flex>
		</Card>
	);
}
