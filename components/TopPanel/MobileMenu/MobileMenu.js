import ReactModal from 'react-modal';
import styled, { useTheme } from 'styled-components';
import { MenuList } from '../TopPanelStyles';

export const MobileMenuWrapper = styled.div`
  height: 100%;

  & ${MenuList} {
    flex-direction: column;
    align-items: flex-start;

    & > * {
      flex-direction: row-reverse;

      &:after {
        display: flex;
        margin-right: 6px;
        margin-top: 0;
      }
    }
  }
`;

export function MobileMenu({ open, children, onRequestClose }) {
  const theme = useTheme();

  const customStyles = {
    content: {
      top: '15%',
      left: '0px',
      bottom: '0px',
      right: '0px',
      borderRadius: '0',
      background: theme.bgPromo,
      border: 'none',
      padding: '45px 16px 0',
      backgroundImage: "url('/img/mobile-menu-bg.png')",
      backgroundPosition: 'center',
      backgroundSize: '300%',
    },
    overlay: {
      background: theme.overlay,
      zIndex: '100',
    },
  };

  return (
    <ReactModal isOpen={open} style={customStyles} onRequestClose={onRequestClose}>
      <MobileMenuWrapper>{children}</MobileMenuWrapper>
    </ReactModal>
  );
}
