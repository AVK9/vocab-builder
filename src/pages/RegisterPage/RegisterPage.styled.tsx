import styled from 'styled-components';

export const Phone = styled.div`
  height: calc(100vh - 88px);
  width: 100vw;
  /* height: 100vh; */
  background-color: #f8f8f8;
`;

export const Box = styled.div`
  /* height: calc(100vh - 88px); */
  /* background-color: #f8f8f8; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin-left: 100px;
    margin-right: 100px;
    flex-direction: row;
    gap: 80px;
  }
`;

export const Images = styled.img`
  margin-top: 12px;
  margin-bottom: 6px;
  max-width: 247px;
  @media (min-width: calc(${({ theme }) => theme.breakpoints.mobileX} + 1px)) {
    display: none;
  }
`;
export const ImageBig = styled.img`
  z-index: 100;
  /* margin-bottom: 6px;
  max-width: 247px; */
  @media (min-width: calc(${({ theme }) => theme.breakpoints.mobileX} + 1px)) {
    display: none;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    display: block;
  }
`;

export const BulletListBox = styled.div`
  position: relative;
  display: none;

  @media (min-width: calc(${({ theme }) => theme.breakpoints.mobileX} + 1px)) {
    display: block;
    margin-top: 98px;
    z-index: 100;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`;
export const Bgr = styled.img`
  position: absolute;
  bottom: -282px;
  right: -246px;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    bottom: -300px;
    right: -300px;
    width: 400px;
    height: 700px;
    /* overflow: hidden; */
    /* border: black solid; */
    /* z-index: 2; */
    /* display: none; */
  }
`;
export const BoxBack = styled.div`
  position: absolute;
  margin-left: 400px;
  width: 597px;
  height: 843px;
  /* background-color: #f8f8f8; */
  /* background-color: blue; */
  rotate: -65deg;
  bottom: -272px;
  right: -246px;
  z-index: 3;
`;

export const ContentBox = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    /* width: 1205px; */
  }
`;
export const Triug = styled.div`
  z-index: 1;
  position: absolute;
  width: 527px;
  height: 693px;

  /* background: linear-gradient(
    to bottom,
    rgba(133, 170, 159, 0.01) 60%,
    rgba(133, 170, 159, 0.05) 70%,
    rgba(133, 170, 159, 0.08) 80%,
    rgba(133, 170, 159, 0.12) 90%,
    rgba(133, 170, 159, 0.21) 95%,
    rgba(133, 170, 159, 0.12) 98%,
    rgba(133, 170, 159, 0.08) 0%,
    rgba(255, 255, 255, 0) 100%
  ); */
  /* background: red; */
  clip-path: polygon(25% 10%, 75% 10%, 100% 100%, 20% 100%);

  flex-shrink: 0;

  opacity: 0.4;
  background: rgba(133, 170, 159, 0.51);
  filter: blur(400px);
`;
// 292deg,
// rgba(133, 170, 159, 0.51) 0%,
// rgba(255, 255, 255, 0) 100%

// rgba(133, 170, 159, 0.08) 60%,
// rgba(133, 170, 159, 0.1) 70%,
// rgba(133, 170, 159, 0.12) 80%,
// rgba(133, 170, 159, 0.51) 90%,
// rgba(133, 170, 159, 0.51) 0%,
// rgba(255, 255, 255, 0) 100%

export const Decorite = styled.div`
  z-index: -100;
  width: 600px;
  height: 400px;
  border-radius: 50%;
  position: absolute;
  top: 300px;

  /* bottom: -300px; */
  /* left: 0px; */
  transform: rotate(30deg);
  flex-shrink: 0;
  border-radius: 50%;
  opacity: 0.8;
  background: rgba(133, 170, 159, 0.51);

  filter: blur(70px);

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    bottom: -300px;
    right: -300px;

    /* overflow: hidden; */
    /* border: black solid; */
    /* z-index: 2; */
    /* display: none; */
  }
`;
