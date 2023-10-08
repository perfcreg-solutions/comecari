import {
    Box,
    Button,
    Flex,
    Text,
    Input,
    Checkbox,
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
} from '@chakra-ui/react'
import { useState } from 'react'
import { FaUser, FaUsers } from 'react-icons/fa'
import AdminLayout from 'layouts/admin'
import Check from 'img/dashboards/check.png'

export default function Welcome() {
    const [size, setSize] = useState('xl');
    const [scrollBehavior, setScrollBehavior] = useState('inside');
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleSizeClick = (newSize) => {
        setSize(newSize);
        onOpen();
    }

    const [isOpenModal1, setIsOpenModal1] = useState(false);
    const [isOpenModal2, setIsOpenModal2] = useState(false);
    const [isOpenModal3, setIsOpenModal3] = useState(false);

    const openModal1 = () => {
        setIsOpenModal1(true);
        setIsChecked(false);
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

    const openModal3 = () => {
        setIsOpenModal3(true);
        setIsOpenModal2(false);
    }
    const closeModal3 = () => {
        setIsOpenModal3(false)
    }


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

                    <Modal closeOnOverlayClick={false} scrollBehavior={scrollBehavior} size={size} isOpen={isOpenModal1} onClose={closeModal1}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Sign Up as Company</ModalHeader>
                            <ModalCloseButton />

                            <ModalBody pb={6}>
                                <Text fontsize="lg" mb={2}>
                                    Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.

                                    <Text fontsize="lg" mb={2}>Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.</Text>

                                    <Text fontsize="lg" mb={2}>Est velit labore esse esse cupidatat. Velit id elit consequat minim. Mollit enim excepteur ea laboris adipisicing aliqua proident occaecat do do adipisicing adipisicing ut fugiat. Consequat pariatur ullamco aute sunt esse. Irure excepteur eu non eiusmod. Commodo commodo et ad ipsum elit esse pariatur sit adipisicing sunt excepteur enim.</Text>

                                    <Text fontsize="lg" mb={2}>Incididunt duis commodo mollit esse veniam non exercitation dolore occaecat ea nostrud laboris. Adipisicing occaecat fugiat fugiat irure fugiat in magna non consectetur proident fugiat. Commodo magna et aliqua elit sint cupidatat. Sint aute ullamco enim cillum anim ex. Est eiusmod commodo occaecat consequat laboris est do duis. Enim incididunt non culpa velit quis aute in elit magna ullamco in consequat ex proident.</Text>

                                    <Text fontsize="lg" mb={2}>Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.</Text>

                                    <Text fontsize="lg" mb={2}>Est velit labore esse esse cupidatat. Velit id elit consequat minim. Mollit enim excepteur ea laboris adipisicing aliqua proident occaecat do do adipisicing adipisicing ut fugiat. Consequat pariatur ullamco aute sunt esse. Irure excepteur eu non eiusmod. Commodo commodo et ad ipsum elit esse pariatur sit adipisicing sunt excepteur enim.</Text>

                                    <Text fontsize="lg" mb={2}>Cillum proident veniam cupidatat pariatur laborum tempor cupidatat anim eiusmod id nostrud pariatur tempor reprehenderit. Do esse ullamco laboris sunt proident est ea exercitation cupidatat. Do Lorem eiusmod aliqua culpa ullamco consectetur veniam voluptate cillum. Dolor consequat cillum tempor laboris mollit laborum reprehenderit reprehenderit veniam aliqua deserunt cupidatat consequat id.</Text>
                                </Text>

                                <Checkbox isChecked={isChecked} onChange={handleCheckboxChange}>I agree to the following Terms and Conditions.</Checkbox>
                            </ModalBody>
                            <ModalFooter>
                                <Button backgroundColor="#0f2dd6" color="#fff"
                                    p={4} px={7}
                                    borderRadius="lg"
                                    onClick={openModal2}
                                    isDisabled={!isChecked}

                                    _hover={{
                                        bg: 'blue.500', // Change the background color on hover
                                        cursor: 'pointer', // Change the cursor to a pointer on hover
                                        color: 'white'
                                    }}>
                                    Proceed
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>

                    <Modal isOpen={isOpenModal2} size={size} onClose={closeModal2}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Company Details</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <form action="#">
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
                                </form>
                            </ModalBody>
                            <ModalFooter>
                                <Button backgroundColor="#0f2dd6" color="#fff"
                                    p={4} px={7}
                                    borderRadius="lg"
                                    onClick={openModal3}

                                    _hover={{
                                        bg: 'blue.500', // Change the background color on hover
                                        cursor: 'pointer', // Change the cursor to a pointer on hover
                                        color: 'white'
                                    }}>
                                    Proceed
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>

                    <Modal isOpen={isOpenModal3} size={size} onClose={closeModal3}>
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

                    {/* 
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
                    */}
                </Box>
            </Flex>
        </AdminLayout>
    )
}