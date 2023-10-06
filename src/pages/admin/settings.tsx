import {
    Box,
    Button,
    Flex,
    Text,
    Link,
    Input,
    Image,
    SimpleGrid,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
    useToast,
    Tabs, TabList, TabPanels, Tab, TabPanel,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import { FaUser, FaUsers } from 'react-icons/fa'
import AdminLayout from 'layouts/admin'
import Avatar from 'img/avatars/avatar9.png'

export default function Settings() {
    const toast = useToast();

    return (
        <AdminLayout brandtext={"Settings"}>
            <Box bg='#fff' p={5} mt={{ base: '130px', md: '80px', xl: '80px' }}>
                <Tabs>
                    <TabList>
                        <Tab>Profile Settings</Tab>
                        <Tab>Account Settings</Tab>
                        <Tab>Company Settings</Tab>
                        <Tab>Security</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Text fontWeight='700' fontSize='2xl'>Profile</Text>

                            <Image src={Avatar.src} width="120px" borderRadius="full" mt={8} />
                            <Input
                                placeholder="Upload"
                                size="md"
                                type="file"
                                id="file-input"
                                display="none"
                            />
                            <label for="file-input">
                                <Button type="button" backgroundColor="blue.400" color="#fff" mt={2}
                                    _hover={{
                                        bg: 'blue.600', // Change the background color on hover
                                        cursor: 'pointer', // Change the cursor to a pointer on hover
                                    }}>Browse</Button>
                            </label>

                            <SimpleGrid spacing={8} columns={{ base: 1, md: 2 }} mt={2}>
                                <FormControl>
                                    <FormLabel>First name</FormLabel>
                                    <Editable defaultValue='John' fontSize="lg" border='1px' borderColor='gray.200' borderRadius="12px">
                                        <EditablePreview p={3} />
                                        <EditableInput p={3} />
                                    </Editable>
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Last name</FormLabel>
                                    <Editable defaultValue='Doe' fontSize="lg" border='1px' borderColor='gray.200' borderRadius="12px">
                                        <EditablePreview p={3} />
                                        <EditableInput p={3} />
                                    </Editable>
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Email Address</FormLabel>
                                    <Editable defaultValue='johndoe@gmail.com' fontSize="lg" border='1px' borderColor='gray.200' borderRadius="12px">
                                        <EditablePreview p={3} />
                                        <EditableInput p={3} />
                                    </Editable>
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Phone Number</FormLabel>
                                    <Editable defaultValue='0892737623762' fontSize="lg" border='1px' borderColor='gray.200' borderRadius="12px">
                                        <EditablePreview p={3} />
                                        <EditableInput p={3} />
                                    </Editable>
                                </FormControl>
                            </SimpleGrid>

                            <Button type="button" backgroundColor="green.400" p={6} color="#fff" mt={2}
                                _hover={{
                                    bg: 'green.600', // Change the background color on hover
                                    cursor: 'pointer', // Change the cursor to a pointer on hover
                                }}
                                onClick={() =>
                                    toast({
                                        title: 'Profile Updated.',
                                        position: 'top-right',
                                        description: "Your profile details has been updated successfully.",
                                        status: 'success',
                                        duration: 5000,
                                        isClosable: true,
                                    })
                                }>Update</Button>
                            
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>three!</p>
                        </TabPanel>
                        <TabPanel>
                            <Text fontWeight='700' fontSize='2xl'>Security</Text>
                            
                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                                <FormControl>
                                    <FormLabel>Recovery email</FormLabel>
                                    <Editable defaultValue='secondjohndoe@gmail.com' fontSize="lg" border='1px' borderColor='gray.200' borderRadius="12px">
                                        <EditablePreview p={3} />
                                        <EditableInput p={3} />
                                    </Editable>
                                </FormControl>

                                <Button width="150px" backgroundColor="green.400" p={6} color="#fff" mb={1} alignSelf="end"
                                    _hover={{
                                        bg: 'green.600', // Change the background color on hover
                                        cursor: 'pointer', // Change the cursor to a pointer on hover
                                    }}>Change</Button>
                            </SimpleGrid>

                            <Text fontWeight='700' fontSize='lg' mt={4}>Change Password</Text>

                            <SimpleGrid columns={{ base: 1, md: 3, xl: 3 }} spacing={5}>
                                <FormControl mb={4}>
                                    <FormLabel>Password</FormLabel>
                                    <Input type='password' size='lg' />
                                </FormControl>

                                <FormControl mb={4}>
                                    <FormLabel>New Password</FormLabel>
                                    <Input type='password' size='lg' />
                                </FormControl>

                                <FormControl mb={4}>
                                    <FormLabel>Confirm New Password</FormLabel>
                                    <Input type='password' size='lg' />
                                </FormControl>
                            </SimpleGrid>

                            <Button backgroundColor="green.400" p={6} color="#fff" mb={1} alignSelf="end"
                                _hover={{
                                    bg: 'green.600',
                                    cursor: 'pointer',
                                }}
                                onClick={() =>
                                    toast({
                                        title: 'Password Updated.',
                                        position: 'top-right',
                                        description: "Your password has been updated successfully.",
                                        status: 'success',
                                        duration: 5000,
                                        isClosable: true,
                                    })
                                }>Update Password</Button>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </AdminLayout>
    )
}