import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

import {
  AiOutlineSend,
  AiFillYoutube,
  AiFillFacebook,
  AiFillLinkedin,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column', 'row']}>
          <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading size={'md'} textTransform={'uppercase'}>
              Subscribe to Get More Toutorials Videos
            </Heading>
            <HStack>
              <Input
                placeholder="Enter your Email Here..."
                border={'none'}
                borderRadius={'none'}
                outline={'none'}
                focusBorderColor={'none'}
              />
              <Button
                p={'0'}
                colorScheme={'purple'}
                variant={'ghost'}
                borderRadius={'0 20px 20px 0'}
              >
                <AiOutlineSend size={'30'} />
              </Button>
            </HStack>
          </VStack>
          <VStack
            w={'full'}
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
          >
            <Heading textTransform={'uppercase'} textAlign={'center'}>
              VIDEO HUB
            </Heading>
            <Text>All Rights Reserved By the Developer</Text>
          </VStack>

          <VStack w={'full'}>
            <Heading size={'md'} textTransform={'uppercase'}>
              Social Media
            </Heading>
            <Button variant={'link'} colorScheme={'youtube'}>
              <a href="https://YouTube.com" target={'_blank'}>
                <AiFillYoutube size={'30'} color={'red'} />
              </a>
            </Button>

            <Button variant={'link'} colorScheme={'facebook'}>
              <a href="https://YouTube.com" target={'_blank'}>
                <AiFillFacebook size={'30'} />
              </a>
            </Button>

            <Button variant={'link'} colorScheme={'linkedin'}>
              <a href="https://YouTube.com" target={'_blank'}>
                <AiFillLinkedin size={'30'} />
              </a>
            </Button>
          </VStack>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
