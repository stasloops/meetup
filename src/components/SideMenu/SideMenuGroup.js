import { useState } from 'react';
import { DropDownIconContainer, SideMenuGroupItem, SideMenuGroupItemContainer, SideMenuGroupWrapper, SideMenuLink } from './SideMenuStyles';
import DownArrowIcon from '../../data/assets/svg/down_arrow.svg';

export function SideMenuGroup({ items }) {
  const [isOpen, setIsOpen] = useState(false);

  return items.map((item) => (
    <SideMenuGroupWrapper key={item.title}>
      <SideMenuGroupItem onClick={() => setIsOpen(!isOpen)}>
        {item.title}{' '}
        <DropDownIconContainer active={isOpen}>
          <DownArrowIcon />
        </DropDownIconContainer>
      </SideMenuGroupItem>
      <SideMenuGroupItemContainer active={isOpen}>
        {item.links.map((link) => (
          <SideMenuLink key={link.title} href={link.href} onClick={() => setIsOpen(!isOpen)}>
            {link.title}
          </SideMenuLink>
        ))}
      </SideMenuGroupItemContainer>
    </SideMenuGroupWrapper>
  ));
}
