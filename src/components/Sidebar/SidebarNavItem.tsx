import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';
import { SidebarServiceNav, SidebarServiceNavIcon, SidebarServiceNavTitle, SidebarServiceNavWrapper, SidebarServiceUnderNav } from './SidebarStyles';
import DownArrowIcon from '../../data/assets/svg/down_arrow.svg';
import { store } from '../../data/store';
import { INav } from '../../helpers/sidebarConfig';

interface SidebarNavItemProps {
  item: INav;
}
const SidebarNavItem: FC<SidebarNavItemProps> = ({ item }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const routeByPath = (path: string) => {
    store.pageStore.resetOuterPanel();
    router.push(path);
  };

  return (
    <SidebarServiceNavWrapper>
      <SidebarServiceNav onClick={toggleIsOpen}>
        <SidebarServiceNavTitle>{item.title}</SidebarServiceNavTitle>
        <SidebarServiceNavIcon isRotate={isOpen}>
          <DownArrowIcon />
        </SidebarServiceNavIcon>
      </SidebarServiceNav>
      {isOpen && item?.under_navs?.length ? (
        <div>
          {item.under_navs?.map((under_item) => (
            <SidebarServiceUnderNav onClick={() => routeByPath(under_item.href || '')}>{under_item.title}</SidebarServiceUnderNav>
          ))}
        </div>
      ) : null}
    </SidebarServiceNavWrapper>
  );
};

export default SidebarNavItem;
