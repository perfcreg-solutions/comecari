import {
    Box,
    Flex,
    Text,
    Icon,
    Input,
    Button,
    Modal,
    SimpleGrid,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useColorModeValue,
    useDisclosure,
    FormControl,
    FormLabel,
    Spacer,
    Stack,
    HStack,
    VStack,
    Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/react';

import { ChevronRightIcon } from '@chakra-ui/icons'
// Custom components
import Card from 'components/card/Card';
import IconBox from 'components/icons/IconBox'
import { Image } from 'components/image/Image';
import { useState } from 'react'

export default function Driver(props: {
    id: string;
    name: string;
    image: string;
    dateJoined: string;
    distance: string;
    delivery: string;
    hours: string;
}) {
    const { id, name, image, dateJoined, distance, delivery, hours, ...rest } = props;

    return (
        <Card>
            <Flex justifyContent="space-between" alignItems="center">
                <Flex>
                    <Image src={image} borderRadius="full" boxSize="50px" />
                    <Box pl={2}>
                        <Text fontWeight="500">{name}</Text>
                        <Text color="gray.400" fontSize={{
                            base: 'sm'
                        }}>Last active 3m ago</Text>
                    </Box>
                </Flex>

                <ChevronRightIcon />
            </Flex>
        </Card>
    )
}