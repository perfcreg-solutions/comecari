import {
    Avatar,
    Box,
    Flex,
    Icon,
    Text,
    Select,
    SimpleGrid,
    useColorModeValue,
    Skeleton,
    SkeletonCircle,
    SkeletonText,
} from '@chakra-ui/react'
import AdminLayout from 'layouts/admin'

export default function Welcome() {
    return(
        <AdminLayout>
            <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
                <Text fontSize='4xl'>Welcome!</Text>
            </Box>
        </AdminLayout>
    )
}