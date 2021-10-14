import styled from 'styled-components';

interface Props {
  theme: any;
}

export const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 95px;
  color: #fff;
  background-color: ${({ theme }: Props) => theme.color.primary};
  z-index: 3;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    font-size: 80px;
    transform: scale(-1, 1);
  }

  h1 {
    font-size: 2.5rem;
    color: #fff;
  }

  ul {
    display: flex;
    flex-direction: row;
    height: 100%;
  }

  li {
    margin: 0 10px;
    &.active {
      border-top: 4px solid #fff;
      border-bottom: 4px solid #fff;
    }
    &:hover {
      border-top: 4px solid #fff;
      border-bottom: 4px solid #fff;
    }
  }

  a {
    display: inline-flex;
    align-items: center;
    height: 100%;
    color: #fff;
  }
`;
