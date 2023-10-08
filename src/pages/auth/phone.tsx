import React from 'react';
// Chakra imports
import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Text,
	useColorModeValue,
	useToast
} from '@chakra-ui/react';
// Custom components
import DefaultAuthLayout from 'layouts/auth/Default';
// Assets
import Background from 'img/auth/banner3.jpg'
import { useForm, Controller } from 'react-hook-form';
import { useAddNumber } from 'services'
import { useMutation } from "@tanstack/react-query"
import { useRouter } from 'next/router';



export default function Phone() {
	// Chakra color mode
	const textColor = useColorModeValue('navy.700', 'white');
	const textColorSecondary = 'gray.400';
	const brandStars = useColorModeValue('brand.500', 'brand.400');
	const [show, setShow] = React.useState(false);
	const router = useRouter();
	const toast = useToast();

	const addNumber = useMutation(useAddNumber, {
		onMutate:()=> {
			setShow(true),
			toast({
				position: 'top-right',
				description: `Processing data`,
				status: 'info',
				duration: 5000,
				isClosable: true,
			})
		},
		onSuccess:() => {
			toast({
				position: 'top-right',
				description: `User Login successfull`,
				status: 'success',
				duration: 5000,
				isClosable: true,
			})
			setShow(false),
			router.push("otp")
		},
		onError: (e) => {
			console.log(e)
			toast({
				position: 'top-right',
				description: `${e?.response?.data?.message !== undefined ? e?.response?.data?.message : "Network Error"}`,
				status: 'warning',
				duration: 5000,
				isClosable: true,
			}),
			setShow(false)
		}
	})
	const onSubmit = async (data: any) => {
		await addNumber.mutateAsync(data)
	}



	const { handleSubmit, control, formState: { errors } } = useForm();
	return (
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
				mt={{ base: '40px', md: '14vh' }}
				flexDirection='column'>
				<Box me='auto'>
					<Heading color={textColor} fontSize='36px' mb='10px'>
						Add Phone
					</Heading>
					<Text mb='36px' ms='4px' color={textColorSecondary} fontWeight='400' fontSize='md'>
						Enter your phone number we can verify!!
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
						</FormControl>
						<FormControl>

							<Button fontSize='sm' variant='brand' fontWeight='500' w='100%' h='50' mb='24px' type="submit"
							isLoading={show}
							loadingText='Submiting....'
							>
								Confirm Phone Number
							</Button>
						</FormControl>
					</form>
				</Flex>
			</Flex>
		</DefaultAuthLayout>
	);
}
