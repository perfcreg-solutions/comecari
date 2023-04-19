import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
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
import ShipmentOverviewComplexTable from 'views/admin/default/components/ShipmentOverviewComplexTable'
import ShipmentHistoryComplexTable from 'views/admin/default/components/ShipmentHistoryComplexTable'
import DailyTraffic from 'views/admin/default/components/DailyTraffic'
import PieCard from 'views/admin/default/components/PieCard'
import Tasks from 'views/admin/default/components/Tasks'
import TotalSpent from 'views/admin/default/components/TotalSpent'
import WeeklyRevenue from 'views/admin/default/components/WeeklyRevenue'
import {
  columnsDataCheck,
  ShipmentOverviewDataComplex,
  ShipmentHistoryDataComplex,
  TableData,
  shipmentData
} from 'views/admin/default/variables/columnsData'
import tableDataCheck from 'views/admin/default/variables/tableDataCheck.json'
// import tableDataComplex from 'views/admin/default/variables/tableDataComplex.json'
import tableShipmentData from 'views/admin/default/variables/tableShipmentData.json'
import { isWindowAvailable } from 'utils/navigation'
import AdminLayout from 'layouts/admin'
import { Image } from 'components/image/Image'
import Usa from 'img/dashboards/usa.png'

export default function UserReports() {
  // Chakra Color Mode

  const brandColor = useColorModeValue('brand.500', 'white')
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100')

  return (
    <AdminLayout>
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }}
            gap='20px'
            mb='20px'
          >

            <MiniStatistics
              endContent={
                <Flex me='-16px' mt='10px'>
                  <FormLabel htmlFor='balance'>
                    <Box boxSize={'12'}>
                      <Image src={Usa} alt='' w={'100%'} h={'100%'} />
                    </Box>
                  </FormLabel>
                  <Select
                    id='balance'
                    variant='mini'
                    mt='5px'
                    me='0px'
                    defaultValue='usd'
                  >
                    <option value='usd'>USD</option>
                    <option value='eur'>EUR</option>
                    <option value='gba'>GBA</option>
                  </Select>
                </Flex>
              }
              name='Total Revenue'
              value='$1,000'
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
                      as={MdBarChart}
                      color={brandColor}
                    />
                  }
                />
              }
              name='Shipments this month'
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
                      as={MdFireTruck}
                      color={brandColor}
                    />
                  }
                />
              }
              name='Delivered (Today)'
              value='05'
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
              name='Delivered this month'
              value='154'
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
                      as={MdFileCopy}
                      color={brandColor}
                    />
                  }
                />
              }
              name='Total Shipments'
              value='2935'
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
                      as={FcCancel}
                      color={brandColor}
                    />
                  }
                />
              }
              name='Cancelled Orders (this month)'
              value='13'
            />

            {/* <MiniStatistics growth='+23%' name='Sales' value='$574.34' /> */}

          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
            <WeeklyRevenue />
            {/* <TotalSpent /> */}
            <ShipmentOverviewComplexTable
              columnsData={ShipmentOverviewDataComplex}
              tableData={(tableShipmentData as unknown) as shipmentData[]}
              tableTitle="Shipment Overview"
            />
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>
            <ShipmentHistoryComplexTable
              columnsData={ShipmentHistoryDataComplex}
              tableData={(tableShipmentData as unknown) as TableData[]}
              tableTitle="Shipment History"

            />

            {/* <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
              <DailyTraffic />
              <PieCard />
            </SimpleGrid> */}
          </SimpleGrid>

          {/* <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
            <ComplexTable
              columnsData={columnsDataComplex}
              tableData={(tableDataComplex as unknown) as TableData[]}
            />
            <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
              <Tasks />
              <MiniCalendar h='100%' minW='100%' selectRange={false} />
            </SimpleGrid>
          </SimpleGrid> */}

        </>
      </Box>
    </AdminLayout>
  )
}
