import {
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
import Avatar from 'img/avatars/holder.png'
import { useAuth } from 'contexts/AuthContext'
import Card from 'components/card/Card';
import { useDisclosure } from '@chakra-ui/react'
import { useForm, Controller } from 'react-hook-form';
import { FaUser, FaUsers } from 'react-icons/fa'
import AdminLayout from 'layouts/admin'
import Logo from 'img/avatars/holder.png'
import { ProtectedRoute, getUserProfile, fileUpdate, profileUpdate } from 'services';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


const AUTH_USER_KEY = 'auth_user';

export default function Settings() {
    const toast = useToast();
    // const [user, setUser] = useState();
    // const [profileData, setProfileData] = useState()
    const { authUser } = useAuth()
    const queryClient = useQueryClient()

    const { data : user , refetch  } = useQuery(["user"])

    const { data: profile } = useQuery(['profile'], getUserProfile, {
        refetchOnWindowFocus: false,
    });
    const updateProfile = useMutation(profileUpdate, {
        onMutate: () => {
            toast({
                position: 'top-right',
                description: `Processing data`,
                status: 'info',
                duration: 5000,
                isClosable: true,
            })
        },
        onSuccess: async() => {
            await queryClient.invalidateQueries(['user']);
            toast({
                title: 'Profile Updated.',
                position: 'top-right',
                description: "Your profile details has been updated successfully.",
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
            await refetch();
            if (typeof localStorage !== 'undefined') {
                console.log(user)
                localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user?.data));
            }

        },
        onError: (e) => {
            toast({
                position: 'top-right',
                description: `${e?.response?.data?.message !== undefined ? e?.response?.data?.message : "Network Error"}`,
                status: 'warning',
                duration: 5000,
                isClosable: true,
            })
        }
    })

    const imageUpload = useMutation(fileUpdate, {
        onMutate: () => {
            toast({
                position: 'top-right',
                description: `Processing data`,
                status: 'info',
                duration: 5000,
                isClosable: true,
            })
        },

        onSuccess: () => {
            toast({
                position: 'top-right',
                description: `User Login successfull`,
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
        },

        onError: (e) => {
            toast({
                position: 'top-right',
                description: `${e?.response?.data?.message !== undefined ? e?.response?.data?.message : "Network Error"}`,
                status: 'warning',
                duration: 5000,
                isClosable: true,
            })
        }
    })

    const { handleSubmit, control, errors } = useForm();
    const onSubmit = async (data: any) => {
        await updateProfile.mutateAsync(data)
    };



    // State variables for each form field
    const [image, setImage] = useState(profile?.data.photo?.completedUrl)
    const [firstName, setFirstName] = useState(profile?.data?.firstName || '');
    const [lastName, setLastName] = useState(profile?.data.lastName || '');
    const [email, setEmail] = useState(profile?.data.email || '');
    const [phoneNumber, setPhoneNumber] = useState(profile?.data.mobileNumber || '');
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileInputChange = async () => {
        if (fileInputRef.current && fileInputRef.current.files) {
            const selectedFile = fileInputRef.current.files[0];
            // Check if a file was selected
            if (selectedFile) {
                const imageUrl = URL.createObjectURL(selectedFile);
                setImage(imageUrl)
                await imageUpload.mutateAsync(selectedFile)
            }
        }
    };

    // onClick={() =>
    //     toast({
    //         title: 'Profile Updated.',
    //         position: 'top-right',
    //         description: "Your profile details has been updated successfully.",
    //         status: 'success',
    //         duration: 5000,
    //         isClosable: true,
    //     })
    // }


    return (
        <ProtectedRoute>
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

                                <Image
                                    src={image || (profile?.data.photo?.completedUrl || Avatar.src)}
                                    width="120px"
                                    height="120px"
                                    borderRadius="full"
                                    mt={8}
                                />

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

                                <form action="#" onSubmit={handleSubmit(onSubmit)}>
                                    <SimpleGrid spacing={8} columns={{ base: 1, md: 2 }} mt={2}>
                                        <FormControl>
                                            <FormLabel>First name</FormLabel>
                                            <Controller
                                                name="firstName"
                                                defaultValue={firstName}
                                                control={control}
                                                render={({ field }) => (
                                                    <Input
                                                        isRequired={true}
                                                        variant='auth'
                                                        fontSize='sm'
                                                        ms={{ base: '0px', md: '0px' }}
                                                        type="text"
                                                        placeholder={firstName}
                                                        mb='24px'
                                                        fontWeight='500'
                                                        size='lg'
                                                        // value={firstName}

                                                        {...field}
                                                    />
                                                )}
                                            />
                                        </FormControl>

                                        <FormControl>
                                            <FormLabel>Last name</FormLabel>
                                            <Controller
                                                name="lastName"
                                                defaultValue={lastName}
                                                control={control}
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
                                                defaultValue={email}
                                                control={control}
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
                                                defaultValue={phoneNumber}
                                                control={control}
                                                render={({ field }) => (
                                                    <Input
                                                        disabled={true}
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
                                            bg: 'green.600',
                                            cursor: 'pointer',
                                        }}
                                    >Update</Button>
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
                                        }}>Change Company Logo</Button>
                                </label>

                                <SimpleGrid spacing={8} columns={{ base: 1, md: 2 }} mt={2}>
                                    <FormControl>
                                        <FormLabel>Company name</FormLabel>
                                        <Editable defaultValue='John Logistics' fontSize="lg" border='1px' borderColor='gray.200' borderRadius="12px">
                                            <EditablePreview p={3} />
                                            <EditableInput p={3} />
                                        </Editable>
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Company address</FormLabel>
                                        <Editable defaultValue='Raven Avenue, Lorem Ipsum' fontSize="lg" border='1px' borderColor='gray.200' borderRadius="12px">
                                            <EditablePreview p={3} />
                                            <EditableInput p={3} />
                                        </Editable>
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Company email</FormLabel>
                                        <Editable defaultValue='help@company.com' fontSize="lg" border='1px' borderColor='gray.200' borderRadius="12px">
                                            <EditablePreview p={3} />
                                            <EditableInput p={3} />
                                        </Editable>
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Customer Care No.</FormLabel>
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
                                            title: 'Company Updated.',
                                            position: 'top-right',
                                            description: "Your company details has been updated successfully.",
                                            status: 'success',
                                            duration: 5000,
                                            isClosable: true,
                                        })
                                    }>Update</Button>
                            </TabPanel>

                            <TabPanel>
                                <Text fontWeight='700' fontSize='2xl' mb={4}>Security</Text>

                                <FormControl display='flex' alignItems='center' mb={4}>
                                    <Switch id='2fa-auth' />
                                    <FormLabel htmlFor='email-alerts' mb='0' ml='15px'>
                                        Enable Two-factor authentication?
                                    </FormLabel>
                                </FormControl>

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
                                    // onClick=
                                    // {() =>
                                    //     toast({
                                    //         title: 'Password Updated.',
                                    //         position: 'top-right',
                                    //         description: "Your password has been updated successfully.",
                                    //         status: 'success',
                                    //         duration: 5000,
                                    //         isClosable: true,
                                    // })}
                                        >Update Password</Button>
                            </TabPanel>
                            
                        </TabPanels>
                    </Tabs>
                </Card>
            </AdminLayout>
        </ProtectedRoute>
    )
}