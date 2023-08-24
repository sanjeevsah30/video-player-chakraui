import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
  flexbox,
  ring,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <Container maxWidth={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'center'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>Video Hub</Heading>
          <Avatar alignItems={'center  '} boxSize={'32'}></Avatar>
          <Input
            required
            placeholder="Name"
            type="name"
            focusBorderColor="purple.500"
          ></Input>
          <Input
            required
            placeholder="Email"
            type="email"
            focusBorderColor="purple.500"
          ></Input>

          <Input
            required
            placeholder="Password"
            type="password"
            focusBorderColor="purple.500"
          ></Input>

          <Button type="submit" colorScheme="purple" textAlign={'right'}>
            Sign Up
          </Button>
          <Text textAlign={'right'}>
            Already Signup?{' '}
            <Button variant={'link'}>
              <Link to={'/signin'}>sign in</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default SignUp;
