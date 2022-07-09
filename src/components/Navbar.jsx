import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Input,
  Link
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function withAction() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user } = useSelector((u) => u.auth)
  const navigate = useNavigate()
  return (
    <>
      <Box bg="purple.300" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box color="#fff">Connect One</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <Input variant='outline' placeholder='Search for a Post' _placeholder={{ color: '#fff' }} />
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            { user &&
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}>
              Create Post
            </Button>
            }
            {user ? (
              <>
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                      size={'sm'}
                      src={user.avatar}
                    />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>{user.username}</MenuItem>
                    <MenuItem>Link 2</MenuItem>
                    <MenuDivider />
                    <MenuItem>Sign Out</MenuItem>
                  </MenuList>
                </Menu>
              </>
            ) : (
              <>
                <Button margin={5} onClick={() => navigate('/signin')}>Sign In</Button>{' '}
                <Link color="#fff" onClick={() => navigate('/signup')}>Sign Up</Link>
              </>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <Input variant='outline' placeholder='Search for a Post' _placeholder={{ color: '#fff' }} />
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}