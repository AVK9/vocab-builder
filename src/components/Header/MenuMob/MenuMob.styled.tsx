import styled from 'styled-components';
import illustration from '../../../assets/img/illustration.svg';

interface StyledProps {
  isOpen?: boolean;
}

export const Backdrop = styled.div<StyledProps>`
  position: fixed;
  inset: 0px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  opacity: ${props => (props.isOpen ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  z-index: 1000;
`;

export const Popup = styled.div<StyledProps>`
  z-index: 1001;
  position: absolute;
  right: -92.5px;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  background: var(--green);
  opacity: ${props => (props.isOpen ? 1 : 0)};
  transition: opacity 0.8s ease-in-out;

  padding: 16px;
  width: 185px;
  min-height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobileX}) {
    right: -125px;
    width: 250px;
  }
`;

export const Illustration = styled.div`
  position: absolute;
  bottom: 0;

  width: 363px;
  height: 318px;
  background-image: url(${illustration});
  background-repeat: no-repeat;
  /* background-position: left center; */
  background-size: contain;
`;
export const Box = styled.div`
  background-color: red;
  margin-top: 92px;
  width: 100%;
  height: 318px;
`;
