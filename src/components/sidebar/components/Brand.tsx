// Chakra imports
import { Flex, Image, useColorMode } from '@chakra-ui/react';
import LogoBlack from 'img/logo/comecari-black.png'
import LogoWhite from 'img/logo/comecari-white.png'

// Custom components
import { HSeparator } from 'components/separator/Separator';

export function SidebarBrand() {
	//   Chakra color mode
	let { colorMode } = useColorMode()
	return (
		<Flex alignItems='center' flexDirection='column'>


			{colorMode === 'light' ? <Image src={LogoBlack.src} w='175px' my='32px' /> :
				<Image src={LogoWhite.src} w='175px' my='32px' />}
			<HSeparator mb='20px' />
		</Flex>
	);
}

export default SidebarBrand;
