import styled from 'styled-components';

export const Phone = styled.div`
  width: 100vw;
  min-height: calc(100vh - 90px);
  background-color: #f8f8f8;
`;

export const Box = styled.div`
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
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 106px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`;

export const Decorite = styled.div`
  display: none;
  z-index: -100;
  width: 600px;
  height: 400px;
  border-radius: 50%;
  position: absolute;

  transform: rotate(30deg);
  flex-shrink: 0;
  border-radius: 50%;
  opacity: 0.8;
  background: rgba(133, 170, 159, 0.51);

  filter: blur(70px);
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
    bottom: -450px;
    right: -650px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    top: 300px;
    right: -300px;
  }
`;
