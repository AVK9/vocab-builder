import styled from 'styled-components';
import illustration from '../../../assets/img/illustration.svg';

interface StyledProps {
  isOpen?: boolean;
}

export const Backdrop = styled.div<StyledProps>`
  position: absolute;
  min-height: 101%;
  inset: 0px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  opacity: ${props => (props.isOpen ? 1 : 0)};
  transition: visibility 0.5s, opacity 0.5s ease-in-out;
  z-index: 1000;
`;

export const Popup = styled.div<StyledProps>`
  z-index: 1001;
  overflow: hidden;
  background: var(--green);
  position: absolute;
  right: 0px;
  top: 0;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0%)' : 'translateX(150%)'};
  transition: all 0.8s;

  padding: 16px;
  width: 185px;
  min-height: 101%;
  overflow-y: auto;

  /* &::-webkit-scrollbar {
    width: 0;
    height: 0;
  } */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobileX}) {
    /* right: -130px; */
    width: 260px;
  }
`;

export const Illustration = styled.div`
  /* position: absolute; */
  /* bottom: 0; */

  width: 363px;
  height: 318px;
  background-image: url(${illustration});
  background-repeat: no-repeat;
  /* background-position: left center; */
  background-size: contain;
`;
