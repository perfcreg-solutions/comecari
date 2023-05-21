import {
    Box,
    Button,
    Image,
    Icon,
    Input,
    Select,
    SimpleGrid,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Table,
    Flex,
    Tbody,
    Text,
    FormControl,
    FormLabel,
    useDisclosure,
    Th,
    Thead,
    Tr,
    useColorModeValue,

} from '@chakra-ui/react'

import AdminLayout from 'layouts/admin'
import InvoiceRow from 'components/invoiceRow'
import { invoicesData } from 'variables/general'
import Card from 'components/card/Card'
import MiniStatistics from 'components/card/MiniStatistics'
import IconBox from 'components/icons/IconBox'

import {
    MdAddTask,
    MdAttachMoney,
    MdBarChart,
    MdFileCopy,
    MdFireTruck,
    MdSupervisedUserCircle
} from 'react-icons/md'
import { FcCancel } from 'react-icons/fc'
import { TbFileInvoice } from 'react-icons/tb'

export default function Invoice() {
    const textColor = useColorModeValue('secondaryGray.900', 'white')
    const textColorBrand = useColorModeValue('brand.500', 'white')
    const brandColor = useColorModeValue('brand.500', 'white')
    const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100')

    return (
        <AdminLayout brandtext="Invoice">

            <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
                <>
                    <SimpleGrid
                        columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }}
                        gap='20px'
                        mb='20px'
                    >

                        <MiniStatistics
                            startContent={
                                <IconBox
                                    w='56px'
                                    h='56px'
                                    bg={boxBg}
                                    icon={
                                        <Icon
                                            w='32px'
                                            h='32px'
                                            as={MdSupervisedUserCircle}
                                            color={brandColor}
                                        />
                                    }
                                />
                            }
                            name='Customers this month'
                            value='23'
                        />

                        <MiniStatistics
                            startContent={
                                <IconBox
                                    w='56px'
                                    h='56px'
                                    bg={boxBg}
                                    icon={
                                        <Icon
                                            w='32px'
                                            h='32px'
                                            as={TbFileInvoice}
                                            color={brandColor}
                                        />
                                    }
                                />
                            }
                            name='Invoices Sent'
                            value='11'
                        />

                        <MiniStatistics
                            startContent={
                                <IconBox
                                    w='56px'
                                    h='56px'
                                    bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
                                    icon={<Icon w='28px' h='28px' as={MdAddTask} color='white' />}
                                />
                            }
                            name='Invoiced'
                            value='275K'
                        />

                        <MiniStatistics growth='+23%' name='Sales' value='$574.34' />

                    </SimpleGrid>

                    <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>
                        <Text fontSize={{
                            base: 'lg'
                        }} fontWeight="600">Recent Transactions</Text>
                        <Card p='22px'
                            my={{ sm: "24px", lg: "0px" }}
                            ms={{ sm: "0px", lg: "24px" }}>
                            {
                                invoicesData.map((data, idx) => (
                                    <InvoiceRow
                                        key={idx}
                                        date={data.date}
                                        code={data.code}
                                        price={data.price}
                                        logo={data.logo}
                                        format={data.format}
                                    />
                                )
                                )
                            }
                        </Card>
                    </SimpleGrid>
                </>
            </Box>
        </AdminLayout>
    )
}