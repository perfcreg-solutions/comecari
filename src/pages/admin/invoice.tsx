import {
    Box,
    SimpleGrid,
    useColorModeValue,

} from '@chakra-ui/react'

import AdminLayout from 'layouts/admin'
import InvoiceRow from 'components/invoiceRow'
import { invoicesData } from 'variables/general'
import Card from 'components/card/Card'

export default function Invoice() {
    const textColor = useColorModeValue('secondaryGray.900', 'white')
    const textColorBrand = useColorModeValue('brand.500', 'white')

    return (
        <AdminLayout brandtext="Invoice">
            <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
                <>
                    <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>
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