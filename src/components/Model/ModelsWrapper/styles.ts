import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;

  .colored-1 {
    background: linear-gradient(81.18deg, #030208 28.05%, rgba(1, 0, 31, 0) 105.15%), url("/background/c1-homepage-desktop.jpg");
    background-position: center 50% ;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }

  .colored-2 {
    background: linear-gradient(81.18deg, #030208 28.05%, rgba(1, 0, 31, 0) 105.15%), url("/background/c2-homepage-desktop.jpg");
    background-position: center 50% ;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }

  .colored-3 {
    background: linear-gradient(81.18deg, #030208 28.05%, rgba(1, 0, 31, 0) 105.15%), url("/background/c3-homepage-desktop.jpg");
    background-position: center 50% ;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
  .colored-4 {
    background: linear-gradient(81.18deg, #030208 28.05%, rgba(1, 0, 31, 0) 105.15%), url("/background/c4-homepage-desktop.jpg");
    background-position: center 50% ;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }

  @media (max-width: 1006px ) {
  .colored-1 {
    background-size: cover;
  }

  .colored- + .colored- {
    background-size: cover;
  }
}
`

export const OverlaysRoot = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`; 

