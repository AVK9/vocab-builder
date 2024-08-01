import styled from 'styled-components';
interface StyledProps {
  isOpen?: boolean;
}

export const Backdrop = styled.div<StyledProps>`
  position: fixed;
  inset: 0px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  opacity: ${props => (props.isOpen ? 1 : 0)};
  transition: opacity 0.8s ease-in-out;
  z-index: 1000;
  pointer-events: ${props => (props.isOpen ? 'auto' : 'none')};
`;

export const Popup = styled.div<StyledProps>`
  z-index: 1001;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: ${props =>
    props.isOpen ? 'translate(-50%, -50%)' : 'translate(-50%, -60%)'};
  opacity: ${props => (props.isOpen ? 1 : 0)};
  transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;

  background: var(--green);
  border-radius: 15px;
  padding: 16px 16px 48px 16px;
  width: 90%;
  max-width: 627px;
  /* height: 621px; */
  max-height: 95%;
  overflow-y: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    border-radius: 30px;
    padding: 48px 64px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    /* background-color: var(--primary); */
  }
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  background: transparent;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  transition: background ${({ theme }) => theme.animation.cubicBezier};

  &:hover,
  &:active {
    background: rgba(180, 180, 180, 0.1);
    box-shadow: ${({ theme }) => theme.shadows.small};
  }
`;

export const P = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 137%;
  color: rgba(18, 20, 23, 0.8);
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const TeacherPhoto = styled.img`
  border-radius: 50%;
  width: 44px;
  height: 44px;
`;
export const YourTeacher = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 12px;
  line-height: 133%;
  color: #8a8a89;
`;
export const NameTeacher = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #121417;
`;
