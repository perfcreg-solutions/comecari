import React from 'react';
// Chakra imports
import {
	Box,
	Button,
	Checkbox,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Icon,
	Input,
	InputGroup,
	InputRightElement,
	Text,
	useColorModeValue,
	FormErrorMessage
} from '@chakra-ui/react';
// Custom components
import { HSeparator } from 'components/separator/Separator';
import DefaultAuthLayout from 'layouts/auth/Default';
// Assets
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';
import Background from 'img/auth/banner.png'
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from 'contexts/AuthContext';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import { addNumber } from 'services'



export default function SignIn() {
	// Chakra color mode
	const textColor = useColorModeValue('navy.700', 'white');
	const textColorSecondary = 'gray.400';
	const textColorDetails = useColorModeValue('navy.700', 'secondaryGray.600');
	const textColorBrand = useColorModeValue('brand.500', 'white');
	const brandStars = useColorModeValue('brand.500', 'brand.400');
	const googleBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.200');
	const googleText = useColorModeValue('navy.700', 'white');
	const googleHover = useColorModeValue({ bg: 'gray.200' }, { bg: 'whiteAlpha.300' });
	const googleActive = useColorModeValue({ bg: 'secondaryGray.300' }, { bg: 'whiteAlpha.200' });
	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);
	
	const [message, setMessage] = React.useState(false);

	const { login, isAuthenticated, isAuthLoading } = useAuth();
	const router = useRouter();


	const onSubmit = async (data) => {
		try {
			// Use the toast.promise function to display loading, success, and error states
			const addNumberPromise = addNumber(data); // Assuming login function sends the login request

			const result : any  = await toast.promise(addNumberPromise, {
				pending: 'Submiting number...',
				success: {
					render({ data : any }) {
						return "working"; // Replace 'username' with the actual user property returned by your login request
					},
				},
				error: {
					render({ data  : any }) {
						// When the promise is rejected, data will contain the error
						return "Invalid phone number";
					},
				},
			});
			
		} catch (error) {
			setMessage(true)
		}
	};


	const { handleSubmit, control, formState: { errors }, register } = useForm();
	return (
		<DefaultAuthLayout illustrationBackground={Background.src}>
			<ToastContainer />
			<Flex
				maxW={{ base: '100%', md: 'max-content' }}
				w='100%'
				mx={{ base: 'auto', lg: '0px' }}
				me='auto'
				h='100%'
				alignItems='start'
				justifyContent='center'
				mb={{ base: '30px', md: '60px' }}
				px={{ base: '25px', md: '0px' }}
				mt={{ base: '40px', md: '14vh' }}
				flexDirection='column'>
				<Box me='auto'>
					<Heading color={textColor} fontSize='36px' mb='10px'>
						Add Phone
					</Heading>
					<Text mb='36px' ms='4px' color={textColorSecondary} fontWeight='400' fontSize='md'>
						Enter your phone nmuber we can verify!!
					</Text>
				</Box>
				<Flex
					zIndex='2'
					direction='column'
					w={{ base: '100%', md: '420px' }}
					maxW='100%'
					background='transparent'
					borderRadius='15px'
					mx={{ base: 'auto', lg: 'unset' }}
					me='auto'
					mb={{ base: '20px', md: 'auto' }}>
					
					<form onSubmit={handleSubmit(onSubmit)}>
						<FormControl>
							<FormLabel display='flex' ms='4px' fontSize='sm' fontWeight='500' color={textColor} mb='8px'>
								Phone Number<Text color={brandStars}>*</Text>
							</FormLabel>
							<Controller
								name="mobileNumber"
								defaultValue="" // Provide an initial value here
								control={control}
								render={({ field }) =>
									<Input
										isRequired={true}
										variant='auth'
										fontSize='sm'
										ms={{ base: '0px', md: '0px' }}
										type="tel"
										placeholder='+2348000000000'
										mb='24px'
										fontWeight='500'
										size='lg'
										{...field}
									/>
								}
							/>
							<FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
						</FormControl>
						<FormControl>
							
							<Button fontSize='sm' variant='brand' fontWeight='500' w='100%' h='50' mb='24px' type="submit">
								Confirm Phone Number
							</Button>
						</FormControl>
					</form>
					
				</Flex>
			</Flex>
		</DefaultAuthLayout>
	);
}
