import styled from 'styled-components';

export const Container = styled.div`
  .colored:nth-child(1) {
    background-image: url("/background/c1-homepage-desktop.jpeg");
    background-position: center 50% ;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
  .colored:nth-child(2) {
    background-image: url("/background/c2-homepage-desktop.jpeg");
    background-position: center 50% ;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
  .colored:nth-child(3) {
    background-image: url("/background/c3-homepage-desktop.jpeg");
    background-position: center 50% ;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
  .colored:nth-child(4) {
    background-image: url("/background/c4-homepage-desktop.jpeg");
    background-position: center 50% ;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
  .colored:nth-child(5) {
    background-image: url("/background/Desktop-SolarPanels.jpeg");
    background-position: center 50% ;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
  .colored:nth-child(6) {
    background-image: url("/background/c5-homepage-desktop.jpeg");
    background-position: center 50% ;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
  .colored:nth-child(7) {
    background-image: url("/background/Desktop-Accessories.jpeg");
    background-position: center 50%;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }

  @media (max-width: 1006px ) {
    .colored:nth-child(1) {
      background-size: cover;
    }

    .colored + .colored {
      background-size: cover;
    }
  }
`
export const Spacer = styled.div`
  height: 15vh;
  background-image: url("../../public/background/Desktop-Accessories.jpeg");
`
