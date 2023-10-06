import {
    Box,
    Button,
    Flex,
    Text,
    Link,
    Input,
    SimpleGrid,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import { FaUser, FaUsers } from 'react-icons/fa'
import AdminLayout from 'layouts/admin'
import Check from 'img/dashboards/check.png'

export default function Welcome() {
    const [size, setSize] = useState('xl')
    const handleSizeClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }

    const [isOpenModal1, setIsOpenModal1] = useState(false);
    const [isOpenModal2, setIsOpenModal2] = useState(false);

    const openModal1 = () => {
        setIsOpenModal1(true);
    };

    const closeModal1 = () => {
        setIsOpenModal1(false);
    };

    const openModal2 = () => {
        setIsOpenModal1(false); // Close Modal 1
        setIsOpenModal2(true); // Open Modal 2
    };

    const closeModal2 = () => {
        setIsOpenModal2(false);
    };


    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']

    return (
        <AdminLayout brandtext={""}>
            <Flex alignItems="center" justifyContent="center" height="90vh">
                <Box textAlign='center'>
                    <Text fontSize='4xl'>Welcome!</Text>
                    <Text fontSize='lg'>We noticed you're signed in as a User. </Text>
                    <Text fontSize='lg'>Would you like to sign up as a Company or continue as a User?</Text>

                    <SimpleGrid spacing={8} columns={2} pt="50px">
                        <Button backgroundColor="#0f2dd6" p={8} borderRadius="lg" justifyContent="space-around" alignItems="center" onClick={openModal1}
                            _hover={{
                                bg: 'blue.500', // Change the background color on hover
                                transform: 'scale(1.05)', // Apply a scaling effect on hover
                                cursor: 'pointer', // Change the cursor to a pointer on hover
                            }}>
                            <FaUsers color="#fff" />
                            <Text color="#fff">Sign up as Company</Text>
                        </Button>

                        <Button backgroundColor="#fff" p={8} borderRadius="lg" justifyContent="space-around" alignItems="center"
                            _hover={{
                                bg: 'gray.800', // Change the background color on hover
                                transform: 'scale(1.05)', // Apply a scaling effect on hover
                                cursor: 'pointer', // Change the cursor to a pointer on hover
                                color: 'white'
                            }}>
                            <FaUser />
                            <Text fontWeight="500">Continue as a User</Text>
                        </Button>
                    </SimpleGrid>

                    <Modal closeOnOverlayClick={false} size={size} isOpen={isOpenModal1} onClose={closeModal1}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Company Details</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <FormControl mb={4}>
                                    <FormLabel>Truck Company Name</FormLabel>
                                    <Input type='text' size='lg' />
                                </FormControl>

                                <FormControl mb={4}>
                                    <FormLabel>Company Address</FormLabel>
                                    <Input type='text' size='lg' />
                                </FormControl>

                                <FormControl mb={4}>
                                    <FormLabel>Registration Number</FormLabel>
                                    <Input type='text' size='lg' />
                                </FormControl>
                            </ModalBody>
                            <ModalFooter>
                                <Button backgroundColor="#0f2dd6" color="#fff" p={4} px={7} borderRadius="lg" onClick={openModal2}
                                    _hover={{
                                        bg: 'blue.500', // Change the background color on hover
                                        cursor: 'pointer', // Change the cursor to a pointer on hover
                                        color: 'white'
                                    }}>
                                    Continue
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>

                    <Modal isOpen={isOpenModal2} size={size} onClose={closeModal2}>
                        <ModalOverlay />
                        <ModalContent pb={8}>
                            <ModalHeader></ModalHeader>
                            <ModalCloseButton />
                            <ModalBody textAlign="center">
                                <Flex align='center' justify='center'>
                                    <img src={Check.src} />
                                </Flex>
                                <Text fontSize="lg" fontWeight="600">Your details have been received.</Text>
                                <Text fontSize="lg">Kindly give us sometime to review it. We'll get back to you via email.</Text>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                </Box>

            </Flex>
        </AdminLayout>
    )
}