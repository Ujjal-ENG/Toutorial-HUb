import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <Container maxW={'container.xl'} h={'120vh'} p={'16'}>
      <form action="">
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>Sign Up for Toutorial HUB</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />

          <Input
            placeholder="Name"
            type={'text'}
            required
            focusBorderColor={'purple.500'}
          />

          <Input
            placeholder="email"
            type={'email'}
            required
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder="PassWord"
            type={'password'}
            required
            focusBorderColor={'purple.500'}
          />

          <Button colorScheme={'purple'} type={'submit'}>
            Sign Up
          </Button>
          <Text textAlign={'right'} fontSize={'20px'} fontWeight={'bold'}>
            Already Signed Up?{' '}
            <Button
              variant={'link'}
              alignSelf={'flex-end'}
              colorScheme="purple"
            >
              <Link to={'/login'}>Login Here</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default SignUp;
