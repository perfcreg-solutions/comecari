import {
    Box,
    Button,
    Text,
    Input,
    Image,
    SimpleGrid,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Editable,
    EditableInput,
    EditablePreview,
    useToast,
    Switch,
    Tabs, TabList, TabPanels, Tab, TabPanel,
} from '@chakra-ui/react'
import { useEffect, useState, useRef } from 'react'
import Avatar from 'img/avatars/avatar9.png'
import { useAuth } from 'contexts/AuthContext'
import { useDisclosure } from '@chakra-ui/react'
import { useForm, Controller } from 'react-hook-form';
import { FaUser, FaUsers } from 'react-icons/fa'
import Card from 'components/card/Card';
import AdminLayout from 'layouts/admin'
import Logo from 'img/logo/logo.jpg'

export default function Settings() {
    const toast = useToast();
    const [user, setUser] = useState();
    const { authUser } = useAuth();

    const { handleSubmit: handleSubmitForm1, control: controlForm1 } = useForm();
    const onSubmitForm1 = (data: any) => {
        // Handle form submission for Form 1 here
        console.log('Form 1 Data:', data);
    };

    const { handleSubmit: handleSubmitForm2, control: controlForm2 } = useForm();
    const onSubmitForm2 = (data: any) => {
        // Handle form submission for Form 2 here
        console.log('Form 2 Data:', data);
    };

    const { handleSubmit: handleSubmitForm3, control: controlForm3 } = useForm();
    const onSubmitForm3 = (data: any) => {
        // Handle form submission for Form 2 here
        console.log('Form 3 Data:', data);
    };

    useEffect(() => {
        setUser(authUser);
    }, []);

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileInputChange = () => {
        // Access the selected file using fileInputRef.current.files
        if (fileInputRef.current && fileInputRef.current.files) {
            const selectedFile = fileInputRef.current.files[0];
        }
    };

    return (
        <AdminLayout brandtext={"Settings"}>
            <Card p={5} mt={{ base: '130px', md: '80px', xl: '80px' }}>
                <Tabs>
                    <TabList>
                        <Tab>Profile Settings</Tab>
                        <Tab>Account Settings</Tab>
                        <Tab>Company Settings</Tab>
                        <Tab>Security</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Text fontWeight='700' fontSize='2xl' color='BlackAlpha.800'>Profile</Text>

                            <form action="#" onSubmit={handleSubmitForm1(onSubmitForm1)}>
                                <Image src={Avatar.src} width="120px" borderRadius="full" mt={8} />
                                <Input
                                    ref={fileInputRef}
                                    type="file"
                                    id="file-input"
                                    style={{ display: 'none' }}
                                    onChange={handleFileInputChange}
                                />
                                <label htmlFor="file-input">
                                    <Button type="button"
                                        onClick={() => fileInputRef.current?.click()}
                                        backgroundColor="blue.400"
                                        color="#fff" mt={2}
                                        _hover={{
                                            bg: 'blue.600',
                                            cursor: 'pointer',
                                        }}>Browse</Button>
                                </label>


                                <SimpleGrid spacing={8} columns={{ base: 1, md: 2 }} mt={2}>
                                    <FormControl>
                                        <FormLabel>First name</FormLabel>

                                        <Controller
                                            name="firstName"
                                            // defaultValue={user?.firstName}
                                            control={controlForm1}
                                            render={({ field }) => (
                                                <Input
                                                    isRequired={true}
                                                    variant='auth'
                                                    fontSize='sm'
                                                    ms={{ base: '0px', md: '0px' }}
                                                    type="text"
                                                    // placeholder='John'
                                                    mb='24px'
                                                    fontWeight='500'
                                                    size='lg'
                                                    value={user?.firstName}
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Last name</FormLabel>
                                        <Controller
                                            name="lastName"
                                            defaultValue={user?.lastName}
                                            control={controlForm1}
                                            render={({ field }) => (
                                                <Input
                                                    isRequired={true}
                                                    variant='auth'
                                                    fontSize='sm'
                                                    ms={{ base: '0px', md: '0px' }}
                                                    type="text"
                                                    placeholder='Doe'
                                                    mb='24px'
                                                    fontWeight='500'
                                                    size='lg'
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Email Address</FormLabel>
                                        <Controller
                                            name="email"
                                            defaultValue={user?.email}
                                            control={controlForm1}
                                            render={({ field }) => (
                                                <Input
                                                    isRequired={true}
                                                    variant='auth'
                                                    fontSize='sm'
                                                    ms={{ base: '0px', md: '0px' }}
                                                    type="email"
                                                    placeholder='mail@comecari.com'
                                                    mb='24px'
                                                    fontWeight='500'
                                                    size='lg'
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Phone Number</FormLabel>
                                        <Controller
                                            name="phoneNumber"
                                            defaultValue={user?.phoneNumber}
                                            control={controlForm1}
                                            render={({ field }) => (
                                                <Input
                                                    isRequired={true}
                                                    variant='auth'
                                                    fontSize='sm'
                                                    ms={{ base: '0px', md: '0px' }}
                                                    type="number"
                                                    placeholder='555 5555 555'
                                                    mb='24px'
                                                    fontWeight='500'
                                                    size='lg'
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </FormControl>
                                </SimpleGrid>

                                <Button type="submit" backgroundColor="green.400" p={6} color="#fff" mt={2}
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
                            </form>

                        </TabPanel>
                        <TabPanel>
                            <Text fontWeight='700' fontSize='2xl' mb={4}>Account Settings</Text>

                            <FormControl display='flex' alignItems='center' mb={4}>
                                <Switch id='email-alerts' />
                                <FormLabel htmlFor='email-alerts' mb='0' ml='15px'>
                                    Enable email alerts?
                                </FormLabel>
                            </FormControl>
                        </TabPanel>

                        <TabPanel>
                            <Text fontWeight='700' fontSize='2xl' mb={4}>Company Settings</Text>

                            <Image src={Logo.src} width="120px" borderRadius="full" mt={8} />
                            <form action="#" onSubmit={handleSubmitForm2(onSubmitForm2)}>
                                <Input
                                    ref={fileInputRef}
                                    type="file"
                                    id="file-input"
                                    style={{ display: 'none' }}
                                    onChange={handleFileInputChange}
                                />
                                <label htmlFor="file-input">
                                    <Button type="button"
                                        onClick={() => fileInputRef.current?.click()}
                                        backgroundColor="blue.400"
                                        color="#fff" mt={2}
                                        _hover={{
                                            bg: 'blue.600',
                                            cursor: 'pointer',
                                        }}>Change Company Logo</Button>
                                </label>

                                <SimpleGrid spacing={8} columns={{ base: 1, md: 2 }} mt={2}>
                                    <FormControl>
                                        <FormLabel>Company name</FormLabel>
                                        
                                        <Controller
                                            name="companyName"
                                            // defaultValue={user?.companyName}
                                            control={controlForm2}
                                            render={({ field }) => (
                                                <Input
                                                    isRequired={true}
                                                    variant='auth'
                                                    fontSize='sm'
                                                    ms={{ base: '0px', md: '0px' }}
                                                    type="text"
                                                    // placeholder='John'
                                                    mb='24px'
                                                    fontWeight='500'
                                                    size='lg'
                                                    value={user?.companyName}
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Company address</FormLabel>
                                        <Controller
                                            name="companyAddress"
                                            // defaultValue={user?.companyAddress}
                                            control={controlForm2}
                                            render={({ field }) => (
                                                <Input
                                                    isRequired={true}
                                                    variant='auth'
                                                    fontSize='sm'
                                                    ms={{ base: '0px', md: '0px' }}
                                                    type="text"
                                                    // placeholder='John'
                                                    mb='24px'
                                                    fontWeight='500'
                                                    size='lg'
                                                    value={user?.companyAddress}
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Company email</FormLabel>
                                        <Controller
                                            name="companyEmail"
                                            // defaultValue={user?.companyEmail}
                                            control={controlForm2}
                                            render={({ field }) => (
                                                <Input
                                                    isRequired={true}
                                                    variant='auth'
                                                    fontSize='sm'
                                                    ms={{ base: '0px', md: '0px' }}
                                                    type="email"
                                                    // placeholder='John'
                                                    mb='24px'
                                                    fontWeight='500'
                                                    size='lg'
                                                    value={user?.companyEmail}
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Customer Care No.</FormLabel>
                                        <Controller
                                            name="customerCareNo"
                                            // defaultValue={user?.customerCareNo}
                                            control={controlForm2}
                                            render={({ field }) => (
                                                <Input
                                                    isRequired={true}
                                                    variant='auth'
                                                    fontSize='sm'
                                                    ms={{ base: '0px', md: '0px' }}
                                                    type="text"
                                                    // placeholder='John'
                                                    mb='24px'
                                                    fontWeight='500'
                                                    size='lg'
                                                    value={user?.customerCareNo}
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </FormControl>
                                </SimpleGrid>

                                <Button type="submit" backgroundColor="green.400" p={6} color="#fff" mt={2}
                                    _hover={{
                                        bg: 'green.600', // Change the background color on hover
                                        cursor: 'pointer', // Change the cursor to a pointer on hover
                                    }}
                                    onClick={() =>
                                        toast({
                                            title: 'Company Details Updated.',
                                            position: 'top-right',
                                            description: "Your company details has been updated successfully.",
                                            status: 'success',
                                            duration: 5000,
                                            isClosable: true,
                                        })
                                    }>Update</Button>
                            </form>
                            
                        </TabPanel>

                        <TabPanel>
                            <Text fontWeight='700' fontSize='2xl' mb={4}>Security</Text>

                            <FormControl display='flex' alignItems='center' mb={4}>
                                <Switch id='2fa-auth' />
                                <FormLabel htmlFor='email-alerts' mb='0' ml='15px'>
                                    Enable Two-factor authentication?
                                </FormLabel>
                            </FormControl>

                            {/* <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
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
                            </SimpleGrid> */}

                            <Text fontWeight='700' fontSize='lg' mt={4}>Change Password</Text>

                            <form action="#" onSubmit={handleSubmitForm3(onSubmitForm3)}>
                                <SimpleGrid columns={{ base: 1, md: 3, xl: 3 }} spacing={5}>
                                <FormControl mb={4}>
                                    <FormLabel>Password</FormLabel>
                                        <Controller
                                            name="password"
                                            // defaultValue={user?.password}
                                            control={controlForm3}
                                            render={({ field }) => (
                                                <Input
                                                    isRequired={true}
                                                    variant='auth'
                                                    fontSize='sm'
                                                    ms={{ base: '0px', md: '0px' }}
                                                    type="password"
                                                    // placeholder='John'
                                                    mb='24px'
                                                    fontWeight='500'
                                                    size='lg'
                                                    value={user?.password}
                                                    {...field}
                                                />
                                            )}
                                        />
                                </FormControl>

                                <FormControl mb={4}>
                                    <FormLabel>New Password</FormLabel>
                                    <Controller
                                            name="newPassword"
                                            // defaultValue={user?.newPassword}
                                            control={controlForm3}
                                            render={({ field }) => (
                                                <Input
                                                    isRequired={true}
                                                    variant='auth'
                                                    fontSize='sm'
                                                    ms={{ base: '0px', md: '0px' }}
                                                    type="password"
                                                    // placeholder='John'
                                                    mb='24px'
                                                    fontWeight='500'
                                                    size='lg'
                                                    value={user?.newPassword}
                                                    {...field}
                                                />
                                            )}
                                        />
                                </FormControl>

                                <FormControl mb={4}>
                                    <FormLabel>Confirm New Password</FormLabel>
                                    <Controller
                                            name="confirmPassword"
                                            // defaultValue={user?.confirmPassword}
                                            control={controlForm3}
                                            render={({ field }) => (
                                                <Input
                                                    isRequired={true}
                                                    variant='auth'
                                                    fontSize='sm'
                                                    ms={{ base: '0px', md: '0px' }}
                                                    type="password"
                                                    // placeholder='John'
                                                    mb='24px'
                                                    fontWeight='500'
                                                    size='lg'
                                                    value={user?.confirmPassword}
                                                    {...field}
                                                />
                                            )}
                                        />
                                </FormControl>
                            </SimpleGrid>

                            <Button type="submit" backgroundColor="green.400" p={6} color="#fff" mb={1} alignSelf="end"
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
                            </form>

                            
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Card>
        </AdminLayout>
    )
}