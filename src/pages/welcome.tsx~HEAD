import {
    Avatar,
    Box,
    Button,
    Flex,
    Icon,
    Text,
    Select,
    Link,
    Input,
    SimpleGrid,
    useColorModeValue,
    Skeleton,
    SkeletonCircle,
    SkeletonText,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FaUser, FaUsers } from 'react-icons/fa'
import AdminLayout from 'layouts/admin'
import { ProtectedRoute } from 'services'
import { useAuth } from 'contexts/AuthContext'

export default function Welcome() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = useState('xl')
    const [user, setUser] = useState({})

    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']
    const {authUser} = useAuth()
    useEffect(()=>{
        setUser(authUser)
    }, [])

    return (
        <ProtectedRoute>
            <AdminLayout brandtext={""}>
                <Flex alignItems="center" justifyContent="center" height="90vh">
                    <Box textAlign='center'>
                        <Text fontSize='4xl'>Welcome! {user?.firstName?.charAt(0).toUpperCase() + user?.firstName?.slice(1)}</Text>
                        <Text fontSize='lg'>Would you like to sign up as a Company or continue as a User?</Text>

                        <SimpleGrid spacing={8} columns={2} pt="50px">
                            <Button backgroundColor="#0f2dd6" p={8} borderRadius="lg" justifyContent="space-around" alignItems="center" onClick={onOpen}
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

                        <Modal closeOnOverlayClick={false} size={size} isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Company Details</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={6}>
                                    <Input placeholder='Company Name' size='lg' my={2} />
                                    <Input placeholder='Company Address' size='lg' my={2} />
                                    <Input placeholder='Registration Number' size='lg' my={2} />
                                    <Input placeholder='Company Email' />
                                </ModalBody>
                                <ModalFooter>
                                    <Link href="/admin/default" backgroundColor="#0f2dd6" color="#fff" p={4} px={7} borderRadius="lg"
                                        _hover={{
                                            bg: 'blue.500', // Change the background color on hover
                                            cursor: 'pointer', // Change the cursor to a pointer on hover
                                            color: 'white'
                                        }}>
                                        Continue
                                    </Link>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </Box>

                </Flex>
            </AdminLayout>
         </ProtectedRoute>
    )
}