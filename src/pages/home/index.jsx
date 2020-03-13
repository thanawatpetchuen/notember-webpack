import React from 'react';

import { Container, Image, Title } from './style';

const Home = () => (
  <Container>
    <div>
      <Title>NOTEMBER Webpack</Title>
      <Image src="logo.png" alt="logo" style={{ width: '300px' }} />
    </div>
  </Container>
);

export default Home;
