/* eslint-disable */

// chakra imports
import { Icon, Box, Flex, HStack, VStack, Text, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { IRoute } from 'types/navigation'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { useState } from 'react';
interface SidebarLinksProps {
  routes: IRoute[]
}

export function SidebarLinks(props: SidebarLinksProps) {
  const { routes } = props


  //   Chakra color mode
  const router = useRouter()

  let activeColor = useColorModeValue('gray.700', 'white')
  let inactiveColor = useColorModeValue(
    'secondaryGray.600',
    'secondaryGray.600'
  )
  let activeIcon = useColorModeValue('brand.500', 'white')
  let textColor = useColorModeValue('secondaryGray.500', 'white')
  let brandColor = useColorModeValue('brand.500', 'brand.400')

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName: string) => {
    return router.pathname.includes(routeName)
  }

  const [isOpen, setIsOpen] = useState(false);
  // const hasChildren = !!children;

  const toggleChildren = () => {
    setIsOpen(!isOpen);
  };

  // this function creates the links from the secondary accordions (for example auth -> sign-in -> default)
  const createLinks = (routes: IRoute[]) => {
    return routes.map((route, index: number) => {
      const hasChildren = route.children;

      const renderChildren = () => {
        return (
          <>
            {isOpen &&
              <VStack mt={2}spacing={1}>
                {hasChildren.map((childRoute, childIndex) => (
                      <Link key={childIndex} href={childRoute.layout + childRoute.path}>
                        <Text
                          me='auto'
                          color={
                            activeRoute(route.path.toLowerCase())
                              ? activeColor
                              : inactiveColor
                          }
                          fontWeight={
                            activeRoute(route.path.toLowerCase())
                              ? 'bold'
                              : 'normal'
                          }
                        >
                          {childRoute.name}
                        </Text>
                      </Link>
                ))}
              </VStack>
            }
          </>
        )
      }


      const handleClick = (e: React.MouseEvent) => {
        if (hasChildren) {
          e.preventDefault();
          toggleChildren();
        }
      };


      if (
        route.layout === '/admin' ||
        route.layout === '/auth' ||
        route.layout === '/rtl'
      ) {
        return (
          <Link key={index} href={route.layout + route.path}>
            <a onClick={handleClick}>
              {route.icon ? (
                <Box>
                  <HStack
                    spacing={
                      activeRoute(route.path.toLowerCase()) ? '22px' : '26px'
                    }
                    py='5px'
                    ps='10px'
                  >
                    <Flex w='100%' alignItems='center' justifyContent='center'>
                      <Box
                        color={
                          activeRoute(route.path.toLowerCase())
                            ? activeIcon
                            : textColor
                        }
                        me='18px'
                      >
                        {route.icon}
                      </Box>
                      <Text
                        me='auto'
                        color={
                          activeRoute(route.path.toLowerCase())
                            ? activeColor
                            : textColor
                        }
                        fontWeight={
                          activeRoute(route.path.toLowerCase())
                            ? 'bold'
                            : 'normal'
                        }
                      >
                        {route.name}
                      </Text>
                      {hasChildren && isOpen && renderChildren()}

                    </Flex>


                    <Box
                      h='36px'
                      w='4px'
                      bg={
                        activeRoute(route.path.toLowerCase())
                          ? brandColor
                          : 'transparent'
                      }
                      borderRadius='5px'
                    />
                  </HStack>

                </Box>
              ) : (
                <Box>
                  <HStack
                    spacing={
                      activeRoute(route.path.toLowerCase()) ? '22px' : '26px'
                    }
                    py='5px'
                    ps='10px'
                  >
                    <Text
                      me='auto'
                      color={
                        activeRoute(route.path.toLowerCase())
                          ? activeColor
                          : inactiveColor
                      }
                      fontWeight={
                        activeRoute(route.path.toLowerCase())
                          ? 'bold'
                          : 'normal'
                      }
                    >
                      {route.name}
                    </Text>
                    {hasChildren && isOpen && renderChildren()}


                    <Box h='36px' w='4px' bg='brand.400' borderRadius='5px' />
                  </HStack>


                </Box>
              )}
            </a>
          </Link>
        )
      }
    })
  }

  return <>{createLinks(routes)}</>
}

export default SidebarLinks
