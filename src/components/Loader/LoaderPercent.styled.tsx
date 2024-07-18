import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  inset: 0px;
  background-color: var(--green);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div`
  animation: spin 3s linear infinite;
  transform-origin: center;

  border: 2px solid var(--white);
  border-top: 2px solid transparent;
  border-radius: 50%;
  width: 300px;
  height: 300px;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Text = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-weight: 700;
  font-size: 80px;
  line-height: 100%;
  letter-spacing: -0.04em;
  color: var(--white);
`;
