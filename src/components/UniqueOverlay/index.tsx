import { useTransform } from 'framer-motion';
import React from 'react';
import useWrapperScroll from '../Model/useWrapperScroll';
import { Burger, Container, Footer, Header, Logo } from './styles';

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />
        
        {/* <HeaderOptions /> */}
        
        <Burger />
      </Header>

      <Footer style={{opacity}}>
        <ul>
          <li>
            <a href="/#">© Copyright 2023 Spartans.</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
