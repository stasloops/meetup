import styled from 'styled-components';

export const Link = styled.a`
  color: #ffffff;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  position: relative;
  ::after {
    content: '';
    width: 100%;
    display: block;
    position: absolute;
    height: 1px;
    background: #ffffff;
  }
  :hover {
    background: ${({ theme }) => theme.orangeGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  :hover::after {
    background: ${({ theme }) => theme.orangeGradient};
  }
  :active {
    opacity: 0.8;
  }
`;
