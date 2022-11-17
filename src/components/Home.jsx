import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '40%',
  top: '20%',
  transform: 'transalte(-50%,-50%)',
  textTransaform: 'uppurCase',
  p: '4',
  s: '4xl',
  borderRadius: '15px',
};

const Home = () => {
  return (
    <>
      <Box>
        <MyCarousel />

        <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
          <Heading
            textTransform={'uppercase'}
            py="2"
            w={'fit-content'}
            borderBottom={'2px solid'}
            m="auto"
          >
            Services
          </Heading>

          <Stack
            h={'full'}
            p={'4'}
            alignItems={'center'}
            direction={['column', 'row']}
          >
            <Image
              src={img5}
              h={['40', '400']}
              filter={'hue-rotate(-130deg)'}
            />
            <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4', '16']} textAlign='center' fontWeight={'extrabold'} fontSize='2ml'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
              quaerat eligendi distinctio sint? Non nihil sit illo a iusto
              voluptatum magnam deleniti magni nobis deserunt suscipit eum omnis
              autem tenetur iure earum minus, aliquam quae, repellat adipisci
              ratione. Deleniti, dicta? Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Laboriosam quidem maxime error saepe voluptates
              quod aspernatur! Voluptates sapiente non accusantium perferendis
              ipsa fugiat beatae quidem numquam doloribus necessitatibus eum
              quaerat voluptatem ratione quis, a aperiam perspiciatis
              consectetur asperiores natus? Fugiat vitae explicabo temporibus ab
              non. Animi nesciunt quaerat repudiandae sed!
            </Text>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

const MyCarousel = () => (
  <>
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showArrows={false}
      showThumbs={false}
    >
      <Box w="full" h={'100vh'}>
        <Image src={img1} />
        <Heading bgColor={'blackAlpha.600'} color={'w'} {...headingOptions}>
          Watch The Future Here
        </Heading>
      </Box>

      <Box w="full" h={'100vh'}>
        <Image src={img2} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Future is Gameing
        </Heading>
      </Box>

      <Box w="full" h={'100vh'}>
        <Image src={img3} />
        <Heading bgColor={'blackAlpha.600'} color={'w'} {...headingOptions}>
          Gaming on Console
        </Heading>
      </Box>

      <Box w="full" h={'100vh'}>
        <Image src={img4} />
        <Heading bgColor={'blackAlpha.600'} color={'w'} {...headingOptions}>
          Night Life is Cool
        </Heading>
      </Box>
    </Carousel>
  </>
);

export default Home;
