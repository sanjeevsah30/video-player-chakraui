import {
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

const SingIn = () => {
  return (
    <Container maxWidth={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'center'}
          spacing={'8'}
          w={["full",'96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>welcome back</Heading>
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

          <Button alignSelf={'flex-end'}>
            <Link to={'/forgetPassword'}>Forgot Password?</Link>
          </Button>
          <Button type="submit" colorScheme="purple" textAlign={'right'}>
            Login
          </Button>
          <Text textAlign={'right'}>
            New user?{' '}
            <Button variant={'link'}>
              <Link to={'/signup'}>sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default SingIn;
