// Chakra imports
import {
	AvatarGroup,
	Avatar,
	Box,
	Button,
	Flex,
	Icon,
	Link,
	Text,
	FormControl,
	FormLabel,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useColorModeValue,
	Spacer,
	AspectRatio,
	useDisclosure
} from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import { NextAvatar } from 'components/image/Avatar';
import { Image } from 'components/image/Image';
// Assets
import { useState } from 'react';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';

export default function NFT(props: {
	image: string;
	name: string;
	author: string;
	bidders: string[];
	download: string;
	currentbid: string | number;
}) {
	const { image, name, author, bidders, download, currentbid } = props;
	const [ like, setLike ] = useState(false);
	const textColor = useColorModeValue('navy.700', 'white');
	const textColorBid = useColorModeValue('brand.500', 'white');

	const OverlayOne = () => (
		<ModalOverlay
			bg='blackAlpha.300'
			backdropFilter='blur(5px)'
		/>
	)

	const { isOpen, onOpen, onClose } = useDisclosure()
	const [overlay, setOverlay] = useState(<OverlayOne />)

	


	return (
		<>
			<Card p='20px'>
				<Flex direction={{ base: 'column' }} justify='center'>
					<Box mb={{ base: '20px', '2xl': '20px' }} position='relative'>
						<AspectRatio ratio={7 / 5}>
							<Image src={image} w={'100%'} borderRadius='20px' alt='' />
						</AspectRatio>
						{/* <Button
							position='absolute'
							bg='white'
							_hover={{ bg: 'whiteAlpha.900' }}
							_active={{ bg: 'white' }}
							_focus={{ bg: 'white' }}
							p='0px !important'
							top='14px'
							right='14px'
							borderRadius='50%'
							minW='36px'
							h='36px'
							onClick={() => {
								setLike(!like);
							}}>
							<Icon
								transition='0.2s linear'
								w='20px'
								h='20px'
								as={like ? IoHeart : IoHeartOutline}
								color='brand.500'
							/>
						</Button> */}
					</Box>
					<Flex flexDirection='column' justify='space-between' h='100%'>
						<Flex
							justify='space-between'
							direction={{
								base: 'row',
								md: 'column',
								lg: 'row',
								xl: 'column',
								'2xl': 'row'
							}}
							mb='auto'>
							<Flex direction='column'>
								<Text
									color={textColor}
									fontSize={{
										base: 'xl',
										md: 'lg',
										lg: 'lg',
										xl: 'lg',
										'2xl': 'md',
										'3xl': 'lg'
									}}
									mb='5px'
									fontWeight='bold'
									me='14px'>
									{name}
								</Text>
								<Text
									color='secondaryGray.600'
									fontSize={{
										base: 'sm'
									}}
									fontWeight='400'
									me='14px'>
									{author}
								</Text>
							</Flex>
							{/* <AvatarGroup
							max={3}
							color={textColorBid}
							size='sm'
							mt={{
								base: '0px',
								md: '10px',
								lg: '0px',
								xl: '10px',
								'2xl': '0px'
							}}
							fontSize='12px'>
							{bidders.map((avt, key) => <NextAvatar key={key} h={'32px'} w={'32px'} src={avt} />)}
						</AvatarGroup> */}
						</Flex>
						<Flex
							align={{
								base: 'center',
								md: 'start',
								lg: 'center',
								xl: 'start',
								'2xl': 'center'
							}}
							justify='space-between'
							direction={{
								base: 'row',
								md: 'column',
								lg: 'row',
								xl: 'column',
								'2xl': 'row'
							}}
							mt='25px'>
							<Text fontWeight='700' fontSize='sm' color={textColorBid}>
								Current Bid: {currentbid}
							</Text>
							<Link
								href={download}
								mt={{
									base: '0px',
									md: '10px',
									lg: '0px',
									xl: '10px',
									'2xl': '0px'
								}}>
								
								<Button
									variant='darkBrand'
									color='white'
									fontSize='sm'
									fontWeight='500'
									borderRadius='70px'
									px='24px'
									py='5px'
									onClick={() => {
										// setOverlay(<OverlayOne />)
										onOpen()
									}}>
									Read More
								</Button>
							</Link>
						</Flex>
					</Flex>
				</Flex>
			</Card>

			<Modal isCentered isOpen={isOpen} size="full" onClose={onClose}>
				{/* {overlay} */}
				<ModalContent>
					<ModalHeader>Lagos to Abuja</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Delectus nam laudantium, sunt totam repudiandae pariatur,
							voluptatum unde, eius in dolores magni porro commodi aut dolore!
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eaque, tenetur laboriosam accusamus architecto atque quae sit
							perspiciatis possimus saepe voluptates corrupti omnis minus ullam ducimus recusandae minima! Error, corporis.
						</p>
						<hr />
						<ul>
							<li>Lorem ipsum mon</li>
							<li>Lorem ipsum mon</li>
							<li>Lorem ipsum mon</li>
							<li>300kg-450kg</li>
						</ul>
						{/* <FormControl>
							<FormLabel>Place Bid</FormLabel>
							<NumberInput max={500} min={300}>
								<NumberInputField />
								<NumberInputStepper>
									<NumberIncrementStepper />
									<NumberDecrementStepper />
								</NumberInputStepper>
							</NumberInput>
						</FormControl> */}
					</ModalBody>

					<ModalFooter>
						<Button colorScheme='green' mx={2} variant='solid'>
							Accept
						</Button>
						<Button colorScheme='blue' mr={3}>
							Place Bid
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
