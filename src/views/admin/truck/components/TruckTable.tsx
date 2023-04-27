import {
    Flex,
    Table,
    Checkbox,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue,
    Avatar,
    Progress,
} from '@chakra-ui/react'
import { useMemo } from 'react'
import {
    ColumnInstance,
    HeaderGroup,
    Row,
    useGlobalFilter,
    usePagination,
    useSortBy,
    useTable,
    UseTableColumnProps
} from 'react-table'

// Custom components
import Card from 'components/card/Card'
import Menu from 'components/menu/MainMenu'
import { } from 'components/charts/LineAreaChart'
import { TruckDataProps } from '../variables/columnsData'

export default function TruckTable(props: TruckDataProps) {
    const { columnsData, tableData, tableTitle } = props

    const columns = useMemo(() => columnsData, [columnsData])
    const data = useMemo(() => tableData, [tableData])

    const tableInstance = useTable(
        {
            columns,
            data
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        initialState
    } = tableInstance
    initialState.pageSize = 11

    const textColor = useColorModeValue('secondaryGray.900', 'white')
    const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100')
    return (
        <Card
            flexDirection='column'
            w='100%'
            px='0px'
            overflowX={{ sm: 'scroll', lg: 'hidden' }}
        >
            <Flex px='25px' justify='space-between' align='center'>
                <Text
                    color={textColor}
                    fontSize='22px'
                    fontWeight='700'
                    lineHeight='100%'
                >
                    {tableTitle}
                </Text>
                <Menu />
            </Flex>
            <Table {...getTableProps()} variant='simple' color='gray.500' mb='24px'>
                <Thead>
                    {headerGroups.map((headerGroup, index: number) => (
                        <Tr {...headerGroup.getHeaderGroupProps()} key={index} my='.8rem' pl='0px' color='gray.400'>
                            {headerGroup.headers.map(
                                (
                                    column: ColumnInstance & UseTableColumnProps<{}>,
                                    index: number
                                ) => (
                                    <Th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        pe='10px'
                                        key={index}
                                        borderColor={borderColor}
                                    >
                                        <Flex
                                            justify='space-between'
                                            align='center'
                                            fontSize={{ sm: '10px', lg: '12px' }}
                                            color='gray.400'
                                        >
                                            {column.render('Header')}
                                        </Flex>
                                    </Th>
                                )
                            )}
                        </Tr>
                    ))}
                </Thead>
                <Tbody {...getTableBodyProps()}>
                    {page.map((row: Row, index: number) => {
                        prepareRow(row)
                        return (
                            <Tr {...row.getRowProps()} key={index}>
                                {row.cells.map((cell, index: number) => {
                                    let data
                                    if (cell.column.Header === 'Truck') {
                                        data = (

                                            <Flex align='center'>
                                                <Text
                                                    me='10px'
                                                    color={textColor}
                                                    fontSize='sm'
                                                    fontWeight='700'
                                                >
                                                    {cell.value}%
                                                </Text>
                                            </Flex>
                                            // <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                                            //     <Avatar src={image} w="50px" borderRadius="12px" me="18px" />
                                            //     <Flex direction="column">
                                            //         <Text
                                            //             fontSize="md"
                                            //             color={textColor}
                                            //             fontWeight="bold"
                                            //             minWidth="100%"
                                            //         >
                                            //             {`${make} ${model}`}
                                            //         </Text>
                                            //         <Text fontSize="sm" color="gray.400" fontWeight="normal">
                                            //             `${type} ${year}`
                                            //         </Text>
                                            //     </Flex>
                                            // </Flex>
                                        )
                                    } else if (cell.column.Header === 'PROGRESS') {
                                        data = (
                                            <Flex align='center'>
                                                <Text
                                                    me='10px'
                                                    color={textColor}
                                                    fontSize='sm'
                                                    fontWeight='700'
                                                >
                                                    {cell.value}%
                                                </Text>
                                            </Flex>
                                        )
                                    } else if (cell.column.Header === 'QUANTITY') {
                                        data = (
                                            <Text color={textColor} fontSize='sm' fontWeight='700'>
                                                {cell.value}
                                            </Text>
                                        )
                                    } else if (cell.column.Header === 'DATE') {
                                        data = (
                                            <Text color={textColor} fontSize='sm' fontWeight='700'>
                                                {cell.value}
                                            </Text>
                                        )
                                    }
                                    return (
                                        <Td
                                            {...cell.getCellProps()}
                                            key={index}
                                            fontSize={{ sm: '14px' }}
                                            minW={{ sm: '150px', md: '200px', lg: 'auto' }}
                                            borderColor='transparent'
                                        >
                                            {data}
                                        </Td>
                                    )
                                })}
                            </Tr>
                        )
                    })}
                </Tbody>
            </Table>
        </Card>
    )
}
