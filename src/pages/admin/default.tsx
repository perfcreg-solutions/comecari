import { useEffect, useState } from 'react'
import {
  Box,
  Flex,
  Spacer,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
  Skeleton,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription} from '@chakra-ui/react'
// Assets
// Custom components
import MiniStatistics from 'components/card/MiniStatistics'
import IconBox from 'components/icons/IconBox'
import { FcCancel } from 'react-icons/fc'
import {
  MdAddTask,
  MdBarChart,
  MdFileCopy,
  MdFireTruck
} from 'react-icons/md'
import { LiaTimesSolid } from 'react-icons/lia'
import ShipmentOverviewComplexTable from 'views/admin/default/components/ShipmentOverviewComplexTable'
import ShipmentHistoryComplexTable from 'views/admin/default/components/ShipmentHistoryComplexTable'
import WeeklyRevenue from 'views/admin/default/components/WeeklyRevenue'
import {
  ShipmentOverviewDataComplex,
  ShipmentHistoryDataComplex,
  TableData,
  shipmentData
} from 'views/admin/default/variables/columnsData'
// import tableDataComplex from 'views/admin/default/variables/tableDataComplex.json'
import tableShipmentData from 'views/admin/default/variables/tableShipmentData.json'
import AdminLayout from 'layouts/admin'
import { Image } from 'components/image/Image'
import Usa from 'img/dashboards/usa.png'
import { ProtectedRoute } from 'services'


export default function Dashboard() {
  // Chakra Color Mode

  const brandColor = useColorModeValue('brand.500', 'white')
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100')

  const [isLoaded, setIsLoaded] = useState(true)

  useEffect(()=> {
    const timeoutId = setTimeout(() => {
      setIsLoaded(false);
    }, 12000);

    // Clear the timeout if the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, [])

  return (
    <ProtectedRoute>
      <AdminLayout brandtext={"Dashboard"}>
        <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
          <>
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }}
              gap='20px'
              mb='20px'
            >

              <Skeleton borderRadius={15} isLoaded={!isLoaded}>
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
              </Skeleton>

              <Skeleton borderRadius={15} isLoaded={!isLoaded}>
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
              </Skeleton>
              <Skeleton borderRadius={15} isLoaded={!isLoaded}>
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
              </Skeleton>

              <Skeleton borderRadius={15} isLoaded={!isLoaded}>
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
              </Skeleton>

              <Skeleton borderRadius={15} isLoaded={!isLoaded}>
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
              </Skeleton>

              <Skeleton borderRadius={15} isLoaded={!isLoaded}>
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
              </Skeleton>

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
    </ProtectedRoute>
  )
}