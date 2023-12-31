import {
  Box,
  Container,
  Heading,
  Image,
  Img,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Heading
        textTransform={'uppercase'}
        py={2}
        w={'fit-content'}
        borderBottom={'2px solid'}
        m={'auto'}
      >
        Services
      </Heading>

      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Stack
          h="full"
          p={4}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4', '16']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic animi
            modi obcaecati, libero ipsam aut pariatur a ducimus sunt? Beatae
            repellat illum, minus odio architecto quibusdam sed laboriosam
            repudiandae ullam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Hic animi modi obcaecati, libero ipsam aut
            pariatur a ducimus sunt? Beatae repellat illum, minus odio
            architecto quibusdam sed laboriosam repudiandae ullam.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransfor: 'upperCase',
  padding: '4',
  size: '4xl',
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showArrows={false}
    showThumbs={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} h={"full"} w={'full'} objectFit={'cover'}></Image>
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch the Future
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img2} h={"full"} w={'full'} objectFit={'cover'}></Image>
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        future is Gaming
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img3} h={"full"}w={'full'} objectFit={'cover'}></Image>
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        LUCK is Gaming
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img4} h={"full"} w={'full'} objectFit={'cover'}/>
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        future IS RACING
      </Heading>
    </Box>
  </Carousel>
);
