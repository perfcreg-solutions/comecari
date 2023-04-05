import {
    Avatar,
    Box,
    Flex,
    FormLabel,
    Icon,
    Select,
    SimpleGrid,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useColorModeValue
} from '@chakra-ui/react'
// Assets
// Custom components
import MiniCalendar from 'components/calendar/MiniCalendar'
import MiniStatistics from 'components/card/MiniStatistics'
import IconBox from 'components/icons/IconBox'
import { FcCancel } from 'react-icons/fc'
import {
    MdAddTask,
    MdAttachMoney,
    MdBarChart,
    MdFileCopy,
    MdFireTruck
} from 'react-icons/md'
import CheckTable from 'views/admin/default/components/CheckTable'
import ComplexTable from 'views/admin/default/components/ComplexTable'
import DailyTraffic from 'views/admin/default/components/DailyTraffic'
import PieCard from 'views/admin/default/components/PieCard'
import Tasks from 'views/admin/default/components/Tasks'
import TotalSpent from 'views/admin/default/components/TotalSpent'
import WeeklyRevenue from 'views/admin/default/components/WeeklyRevenue'
import {
    columnsDataDevelopment,
    columnsDataCheck,
    columnsDataColumns,
    columnsDataComplex
} from 'views/admin/dataTables/variables/columnsData'
import tableDataCheck from 'views/admin/default/variables/tableDataCheck.json'
import tableDataComplex from 'views/admin/default/variables/tableDataComplex.json'
import tableDataDevelopment from 'views/admin/dataTables/variables/tableDataDevelopment.json'
import { isWindowAvailable } from 'utils/navigation'
import AdminLayout from 'layouts/admin'
import { Image } from 'components/image/Image'
import Usa from 'img/dashboards/usa.png'

import NFT from 'components/card/NFT'
import Card from 'components/card/Card'

// Assets
import Nft1 from 'img/nfts/Nft1.png'
import Nft2 from 'img/nfts/Nft2.png'
import Nft3 from 'img/nfts/Nft3.png'
import Nft4 from 'img/nfts/Nft4.png'
import Nft5 from 'img/nfts/Nft5.png'
import Nft6 from 'img/nfts/Nft6.png'
import Avatar1 from 'img/avatars/avatar1.png'
import Avatar2 from 'img/avatars/avatar2.png'
import Avatar3 from 'img/avatars/avatar3.png'
import Avatar4 from 'img/avatars/avatar4.png'

export default function Bids() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <AdminLayout>
            <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
                <>
                    <SimpleGrid columns={{ base: 1, md: 3, xl: 4 }} gap='20px' mb='20px'>
                        <NFT
                            name='Lagos to Abuja Cargo'
                            author='By Mr Joe'
                            // bidders={[
                            //     Avatar1,
                            //     Avatar2,
                            //     Avatar3,
                            //     Avatar4,
                            //     Avatar1,
                            //     Avatar1,
                            //     Avatar1,
                            //     Avatar1
                            // ]}
                            image={Nft1}
                            currentbid='300k'
                            download='#'
                        />
                    </SimpleGrid>

                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Modal Title</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Lorem count={2} />
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                    Close
                                </Button>
                                <Button variant='ghost'>Secondary Action</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </>
            </Box>
        </AdminLayout>
    )
}