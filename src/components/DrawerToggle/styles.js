import styled from 'styled-components'

export const DrawerToggleComponent = styled.button`
  display: flex;
  flex-direction: column;
  background: transparent;
  border: none;

  cursor: pointer;

  &:focus {
    outline: none;
  }

  div {
    width: 16px;
    height: 2px;
    border-radius: 1px;
    background: ${({ fill }) => fill || 'black'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    margin-bottom: 3px;

    :last-child {
      margin-bottom: 0;
    }

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`
