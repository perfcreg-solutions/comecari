import React, { useEffect } from 'react';
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
	useToast,

} from '@chakra-ui/react';
// Custom components
import { HSeparator } from 'components/separator/Separator';
import DefaultAuthLayout from 'layouts/auth/Default';
// Assets
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';
import Background from 'img/auth/banner2.jpg'
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from 'contexts/AuthContext';
import { useRouter } from 'next/router';
type PageProps = {}

type PageRef = React.ForwardedRef<HTMLDivElement>
export default function SignIn(props: PageProps, ref: PageRef) {
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
	const toast = useToast();

	const { login, isAuthenticated,  isAuthLoading, error, authError} = useAuth();
	const router = useRouter();

	useEffect(()=> {
	if (isAuthenticated){
		toast({
			position: 'top-right',
			description: `User Login successfull`,
			status: 'success',
			duration: 5000,
			isClosable: true,
		})
		router.push("/welcome")
	}
	}, [isAuthenticated, router])

	useEffect(()=> {
		if (error){
			toast({
			position: 'top-right',
			description: `${authError}`,
			status: 'error',
			duration: 5000,
			isClosable: true,
			})
		}
		}, [error])


	const onSubmit = async (data : any) => {
		await login(data)
	};
	


	const { handleSubmit, control, formState: { errors }, register } = useForm();
	return (
		// <PageTransition ref={ref}>
			<DefaultAuthLayout illustrationBackground={Background.src}>
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
					mt={{ base: '40px', md: '4vh' }}
					flexDirection='column'
				>
					<Box me='auto'>
						<Heading color={textColor} fontSize='36px' mb='10px'>
							Sign In
						</Heading>
						<Text mb='36px' ms='4px' color={textColorSecondary} fontWeight='400' fontSize='md'>
							Enter your email and password to sign in!
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
						<Button
							fontSize='sm'
							me='0px'
							mb='26px'
							py='15px'
							h='50px'
							borderRadius='16px'
							bgColor={googleBg}
							color={googleText}
							fontWeight='500'
							_hover={googleHover}
							_active={googleActive}
							_focus={googleActive}>
							<Icon as={FcGoogle} w='20px' h='20px' me='10px' />
							Sign in with Google
						</Button>
						<Flex align='center' mb='25px'>
							<HSeparator />
							<Text color='gray.400' mx='14px'>
								or
							</Text>
							<HSeparator />
						</Flex>
						<form onSubmit={handleSubmit(onSubmit)}>
							<FormControl>
								<FormLabel display='flex' ms='4px' fontSize='sm' fontWeight='500' color={textColor} mb='8px'>
									Email<Text color={brandStars}>*</Text>
								</FormLabel>
								<Controller
									name="email"
									defaultValue="" // Provide an initial value here
									control={control}
									render={({ field }) =>
										<Input
											isRequired={true}
											variant='auth'
											fontSize='sm'
											ms={{ base: '0px', md: '0px' }}
											type="email"
											disabled={isAuthenticated || isAuthLoading}

											placeholder='mail@simmmple.com'
											mb='24px'
											fontWeight='500'
											size='lg'
											{...field}
										/>
									}
								/>
							</FormControl>

							<FormControl>
								<FormLabel ms='4px' fontSize='sm' fontWeight='500' color={textColor} display='flex'>
									Password<Text color={brandStars}>*</Text>
								</FormLabel>
								<InputGroup size='md'>
									<Controller
										name="password"
										defaultValue="" // Provide an initial value here
										control={control}
										render={({ field }) =>
											<Input
												isRequired={true}
												fontSize='sm'
												placeholder='Min. 8 characters'
												mb='24px'
												size='lg'
												type={show ? 'text' : 'password'}
												variant='auth'
												disabled={isAuthenticated || isAuthLoading}
												{...field}
											/>
										}
									/>
									<InputRightElement display='flex' alignItems='center' mt='4px'>
										<Icon
											color={textColorSecondary}
											_hover={{ cursor: 'pointer' }}
											as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
											onClick={handleClick}
										/>
									</InputRightElement>
								</InputGroup>
							</FormControl>

							<FormControl>
								<Flex justifyContent='space-between' align='center' mb='24px'>
									<FormControl display='flex' alignItems='center'>
										<Checkbox id='remember-login' colorScheme='brandScheme' me='10px' />
										<FormLabel
											htmlFor='remember-login'
											mb='0'
											fontWeight='normal'
											color={textColor}
											fontSize='sm'>
											Keep me logged in
										</FormLabel>
									</FormControl>
									<Link href='/auth/reset'>
										<a>
											<Text color={textColorBrand} fontSize='sm' w='124px' fontWeight='500'>
												Forgot password?
											</Text>
										</a>
									</Link>
								</Flex>
								<Button 
								fontSize='sm' 
								variant='brand'
								fontWeight='500' 
								w='100%' 
								h='50' 
								mb='24px' 
								type="submit"
								isLoading={isAuthLoading || isAuthenticated}
								loadingText='Submiting....'
								>
									Sign In
								</Button>
							</FormControl>
						</form>
						<Flex flexDirection='column' justifyContent='center' alignItems='start' maxW='100%' mt='0px'>
							<Text color={textColorDetails} fontWeight='400' fontSize='14px'>
								Not registered yet?
								<Link href='/auth/phone'>
									<a>
										<Text color={textColorBrand} as='span' ms='5px' fontWeight='500'>
											Create an Account
										</Text>
									</a>
								</Link>
							</Text>
						</Flex>
					</Flex>
				</Flex>
			</DefaultAuthLayout>
	);
}
