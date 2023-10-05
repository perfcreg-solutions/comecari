import {
    Avatar,
    Box,
    Flex,
    Icon,
    Text,
    Select,
    Link,
    SimpleGrid,
    useColorModeValue,
    Skeleton,
    SkeletonCircle,
    SkeletonText,
} from '@chakra-ui/react'
import { FaUser, FaUsers } from 'react-icons/fa'
import AdminLayout from 'layouts/admin'

export default function Welcome() {
    return(
        <AdminLayout>
            <Flex alignItems="center" justifyContent="center" height="90vh">
                <Box textAlign='center'>
                    <Text fontSize='4xl'>Welcome!</Text>
                    <Text fontSize='lg'>Would you like to sign up as a Company or continue as a User?</Text>


                    <SimpleGrid spacing={10} columns={2} pt="50px">
                        <Link href="/">
                            <Flex>
                                <FaUsers color="blue.400" />
                                <Text>Sign up as a Company</Text>
                            </Flex>
                        </Link>
                        
                        <Link href="/">
                            <Flex backgroundColor="#fff" p={5} borderRadius="lg" justifyContent="space-around" alignItems="center">
                                <FaUser />
                                <Text fontSize="md" fontWeight="500">Continue as a User</Text>
                            </Flex>
                        </Link>
                    </SimpleGrid>
                </Box>

            </Flex>
        </AdminLayout>
    )
}