import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, UnorderedList, ListItem, HStack,Text } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
  <Flex p='2' borderBottom='1px' borderColor='gray.100'>
    <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
      <Link href='/' paddingLeft='2'>Realtor</Link>
    </Box>
    <Spacer />
    <Box display={["none","none","flex"]}>
    <UnorderedList alignItems={"center"} listStyleType={"none"} display={"flex"}>
  <HStack>
  <Link href='/' passHref>
  <ListItem cursor={"pointer"} _hover={{background:"gray.100"}} paddingRight={"2"} fontWeight={"medium"} display={"flex"} alignItems={"center"}><IconButton _focus={"outline:none"} fontSize={"18"} width={5} icon={<FcHome />} colorScheme={"white"}/> <Text display={"inline-block"} marginLeft={"-2"}>Home</Text></ListItem>
  </Link>
  <Link href='/search' passHref>
  <ListItem cursor={"pointer"} _hover={{background:"gray.100"}} fontWeight={"medium"} display={"flex"} paddingRight={"2"} alignItems={"center"}><IconButton _focus={"outline:none"} fontSize={"18"} width={5} icon={<BsSearch />} colorScheme={"white"} color={"black"}/> <Text display={"inline-block"} marginLeft={"-2"}>Search</Text></ListItem>
  </Link>
  <Link href='/search?purpose=for-sale' passHref>
  <ListItem cursor={"pointer"} _hover={{background:"gray.100"}} fontWeight={"medium"} display={"flex"} paddingRight={"2"} alignItems={"center"}><IconButton _focus={"outline:none"} fontSize={"18"} width={5} icon={<FcAbout />} colorScheme={"white"}/> <Text display={"inline-block"} marginLeft={"-2"}>Buy Property</Text></ListItem>
  </Link>
  <Link href='/search?purpose=for-rent' passHref>
  <ListItem cursor={"pointer"} _hover={{background:"gray.100"}} fontWeight={"medium"} display={"flex"} paddingRight={"2"} alignItems={"center"}><IconButton _focus={"outline:none"} fontSize={"18"} width={5} icon={<FiKey />} colorScheme={"white"} color={"black"}/> <Text display={"inline-block"} marginLeft={"-2"}>Rent Property</Text></ListItem>
  </Link>
  
  </HStack>
</UnorderedList>
    </Box>
    <Box display={["block","block","none"]}>
      <Menu >
        <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' color='red.400' />
        <MenuList>
          <Link href='/' passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href='/search' passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href='/search?purpose=for-sale' passHref>
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>
          <Link href='/search?purpose=for-rent' passHref>
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;