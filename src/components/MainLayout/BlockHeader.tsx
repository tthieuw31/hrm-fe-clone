import { Button, Drawer, Image, Layout, Menu } from 'antd';
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { ecoPharmaLogo, logo } from 'assets/images';
import { useNavigate } from 'react-router-dom';
import headerMenu from 'constants/menu';
import { DownOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { MenuDownOutline, NewSearchIcon } from 'assets/svg';

const BlockHeader = (): React.ReactElement => {
  const { Header } = Layout;
  const navigate = useNavigate();
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const [logoUrl, setLogoUrl] = useState<string>(ecoPharmaLogo);

  useEffect(() => {
    const domain = window.location.hostname;
    setLogoUrl(domain.includes('eco') ? ecoPharmaLogo : logo);
  }, []);

  const showDrawer = useCallback(() => {
    setDrawerVisible(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerVisible(false);
  }, []);

  const handleMenuClick = useCallback(
    (e: { key: string }) => {
      const currentPath = window.location.pathname;

      const selectedItem = headerMenu
        .flatMap((item) => item.children || item)
        .find((item) => item.key === e.key);

      if (selectedItem?.key === currentPath) {
        navigate(currentPath);
        window.location.reload();
      } else {
        navigate(selectedItem?.key || '/');
      }
    },
    [navigate]
  );

  const menuItems = useMemo(() => {
    return headerMenu.map((item) => {
      if (item.children) {
        return {
          ...item,
          label: (
            <span className="flex">
              {item.label}{' '}
              <MenuDownOutline className="ml-2 self-center hidden lg:block" />
            </span>
          ),
          children: item.children.map((subItem) => ({
            ...subItem,
          })),
        };
      }
      return item;
    });
  }, []);

  return (
    <>
      <Header
        style={{
          background: '#FFFFFF',
          zIndex: 40,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
          height: 70,
        }}
        className="flex items-center justify-between sticky top-0 w-full px-2 md:px-4 bg-white"
      >
        <div className="container max-w-screen-xl md:px-16 2xl:px-8 mx-auto flex justify-between w-full items-center">
          <a href="/" className="flex items-center">
            <Image src={logoUrl} width={127} alt="Logo" preview={false} />
          </a>
          <div className="flex md:order-2">
            <Button
              id="navbar-icon"
              type="text"
              className="inline-flex items-center pr-2 w-11 lg:hidden md:hidden"
              icon={<MenuOutlined />}
              onClick={showDrawer}
            />
            {/* <Button id="search-icon" type="text" icon={<NewSearchIcon />} /> */}
          </div>
          <div
            className="hidden md:flex md:w-full md:justify-end w-full md:pr-0 md:pt-1"
            style={{ height: '70px', float: 'right' }}
          >
            <Menu
              mode="horizontal"
              // inlineCollapsed={false}
              items={menuItems}
              onClick={handleMenuClick}
              style={{
                fontWeight: 400,
                fontSize: 15,
                width: '60%',
              }}
              expandIcon={<DownOutlined />}
            />
          </div>
        </div>
      </Header>

      <Drawer
        title="Menu"
        placement="top"
        onClose={closeDrawer}
        open={drawerVisible}
        className="lg:hidden"
      >
        <Menu mode="inline" items={menuItems} onClick={handleMenuClick} />
      </Drawer>
    </>
  );
};

export default React.memo(BlockHeader);
