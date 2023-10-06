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
import { useAddNumber } from 'services'
import { useMutation } from "@tanstack/react-query"


export default function Phone() {
	// Chakra color mode
	const textColor = useColorModeValue('navy.700', 'white');
	const textColorSecondary = 'gray.400';
	const brandStars = useColorModeValue('brand.500', 'brand.400');
	const [show, setShow] = React.useState(false);

	const [message, setMessage] = React.useState('');
	const addNumber = useMutation(useAddNumber);
	const onSubmit = async (data: any) => {
		await addNumber.mutateAsync(data, {
			onSuccess: (data) => {
				toast.success(data.message, {
					autoClose: 3000,
					closeOnClick: true,

				})
			},

			onError: (error: any) => {
				setMessage(error)
				setShow(true)
				toast.error(error.message)
			}
		});
	}



	const { handleSubmit, control, formState: { errors } } = useForm();
	return (
		<DefaultAuthLayout illustrationBackground={Background.src}>
			<ToastContainer
				theme="light"
			/>
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
							<FormErrorMessage>{show && message}</FormErrorMessage>
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
