import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure,
  Stack,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

export const Headders = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(onClose)
  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="purple"
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
        zIndex={'overlay'}
      >
        <BiMenuAltLeft size={'20'} />

        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Viedeo Hub</DrawerHeader>
            <VStack alignItems={'flex-start'}>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme="purple"
                w={'100%'}
              >
                <Link to={'/'}> Home</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme="purple"
                w={'100%'}
              >
                <Link to={'/videos'}> videos</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme="purple"
                w={'100%'}
              >
                <Link to={'/videos?category=free'}> free Videos</Link>
              </Button>
              <Button variant={'ghost'} colorScheme="purple" w={'100%'}>
                <Link onClick={onClose} to={'/upload'}>
                  {' '}
                  upload Videos
                </Link>
              </Button>
            </VStack>
            <HStack
              pos={'absolute'}
              bottom={10}
              left={0}
              width={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme="purple">
                <Link to={'/signin'}>Log in</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme="purple"
                variant={'outline'}
              >
                <Link to={'/signup'}>Sign up</Link>
              </Button>
            </HStack>
          </DrawerContent>
        </Drawer>
      </Button>
    </>
  );
};
