"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[2477],{859779:function(c,o,t){t.r(o);var Z=t(502143),v=t(968521),g=t(720719),_=t(28840),i=t(759907),u=t(828089),h=t(825673),O=t(902068),I=t(574399),y=t(863942),b=t(316073),k=t(24628),f=t(719260),x=t(956140),d=t(127179),s=t(905388),M=t(104979),T=t(606965),C=t(268696),l=t(424128),E=t(249706),P=t(795127),S=t(116846),A=t(73024),a=t(606641),r=t(667294),e=t(370917);function m(){var p=(0,a.eL)(),n=p.texts;return(0,e.tZ)(a.dY,null,(0,e.tZ)(r.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,n[0].value),(0,e.tZ)("h2",{id:"when-to-use"},(0,e.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,e.tZ)("p",null,n[1].value),(0,e.tZ)("p",null,n[2].value,(0,e.tZ)(l.Z,{to:"/components/layout",sourceType:"Link"},n[3].value),n[4].value),(0,e.tZ)("h2",{id:"notes-for-developers"},(0,e.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#notes-for-developers",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Notes for developers"),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,n[5].value,(0,e.tZ)("code",null,n[6].value),n[7].value,(0,e.tZ)(l.Z,{href:"https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element",sourceType:"a"},(0,e.tZ)("code",null,n[8].value),n[9].value,(0,e.tZ)("code",null,n[10].value),n[11].value),n[12].value,(0,e.tZ)("code",null,n[13].value),n[14].value),(0,e.tZ)("li",null,n[15].value,(0,e.tZ)("code",null,n[16].value),n[17].value)),(0,e.tZ)("h2",{id:"examples"},(0,e.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,e.tZ)(s.Z,{items:[{demo:{id:"components-menu-demo-horizontal"},previewerProps:{title:"Top Navigation",filename:"components/menu/demo/horizontal.tsx",jsx:`import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
const items = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: 'alipay',
  },
];
const App = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default App;
`,description:"<p>Horizontal top navigation menu.</p>"}},{demo:{id:"components-menu-demo-horizontal-dark"},previewerProps:{debug:!0,title:"Top Navigation (dark)",filename:"components/menu/demo/horizontal-dark.tsx",jsx:`import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
const items = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: 'alipay',
  },
];
const App = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} theme="dark" />
  );
};
export default App;
`,description:"<p>Horizontal top navigation menu.</p>"}},{demo:{id:"components-menu-demo-inline"},previewerProps:{title:"Inline menu",filename:"components/menu/demo/inline.tsx",jsx:`import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  {
    type: 'divider',
  },
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
  getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
];
const App = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};
export default App;
`,description:"<p>Vertical menu with inline submenus.</p>"}},{demo:{id:"components-menu-demo-inline-collapsed"},previewerProps:{title:"Collapsed inline menu",filename:"components/menu/demo/inline-collapsed.tsx",jsx:`import {
  AppstoreOutlined,
  ContainerOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { useState } from 'react';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      style={{
        width: 256,
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};
export default App;
`,description:`<p>Inline menu could be collapsed.</p>
<p>Here is <a href="/components/layout/#components-layout-demo-side">a complete demo</a> with sider layout.</p>`}},{demo:{id:"components-menu-demo-sider-current"},previewerProps:{title:"Open current submenu only",filename:"components/menu/demo/sider-current.tsx",jsx:`import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const App = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{
        width: 256,
      }}
      items={items}
    />
  );
};
export default App;
`,description:"<p>Click the menu and you will see that all the other menus gets collapsed to keep the entire menu compact.</p>"}},{demo:{id:"components-menu-demo-vertical"},previewerProps:{title:"Vertical menu",filename:"components/menu/demo/vertical.tsx",jsx:`import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Item 1', null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];
const onClick = (e) => {
  console.log('click', e);
};
const App = () => (
  <Menu
    onClick={onClick}
    style={{
      width: 256,
    }}
    mode="vertical"
    items={items}
  />
);
export default App;
`,description:"<p>Submenus open as pop-ups.</p>"}},{demo:{id:"components-menu-demo-theme"},previewerProps:{title:"Menu Themes",filename:"components/menu/demo/theme.tsx",jsx:`import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import { useState } from 'react';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];
const App = () => {
  const [theme, setTheme] = useState('dark');
  const [current, setCurrent] = useState('1');
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <>
      <Switch
        checked={theme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <br />
      <br />
      <Menu
        theme={theme}
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </>
  );
};
export default App;
`,description:"<p>There are two built-in themes: <code>light</code> and <code>dark</code>. The default value is <code>light</code>.</p>"}},{demo:{id:"components-menu-demo-submenu-theme"},previewerProps:{title:"Sub-menu theme",filename:"components/menu/demo/submenu-theme.tsx",jsx:`import { MailOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import { useState } from 'react';
function getItem(label, key, icon, children, theme) {
  return {
    key,
    icon,
    children,
    label,
    theme,
  };
}
const App = () => {
  const [theme, setTheme] = useState('light');
  const [current, setCurrent] = useState('1');
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };
  const onClick = (e) => {
    setCurrent(e.key);
  };
  const items = [
    getItem(
      'Navigation One',
      'sub1',
      <MailOutlined />,
      [getItem('Option 1', '1'), getItem('Option 2', '2'), getItem('Option 3', '3')],
      theme,
    ),
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
  ];
  return (
    <>
      <Switch
        checked={theme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <br />
      <br />
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        openKeys={['sub1']}
        selectedKeys={[current]}
        mode="vertical"
        theme="dark"
        items={items}
        getPopupContainer={(node) => node.parentNode}
      />
    </>
  );
};
export default App;
`,description:"<p>You can config SubMenu theme with <code>theme</code> prop to enable different theme color effect. This sample is dark for root and light for SubMenu.</p>"}},{demo:{id:"components-menu-demo-switch-mode"},previewerProps:{title:"Switch the menu type",filename:"components/menu/demo/switch-mode.tsx",jsx:`import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import { Divider, Menu, Switch } from 'antd';
import { useState } from 'react';
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Navigation One', '1', <MailOutlined />),
  getItem('Navigation Two', '2', <CalendarOutlined />),
  getItem('Navigation Two', 'sub1', <AppstoreOutlined />, [
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
    getItem('Submenu', 'sub1-2', null, [getItem('Option 5', '5'), getItem('Option 6', '6')]),
  ]),
  getItem('Navigation Three', 'sub2', <SettingOutlined />, [
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
  ]),
  getItem(
    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
      Ant Design
    </a>,
    'link',
    <LinkOutlined />,
  ),
];
const App = () => {
  const [mode, setMode] = useState('inline');
  const [theme, setTheme] = useState('light');
  const changeMode = (value) => {
    setMode(value ? 'vertical' : 'inline');
  };
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };
  return (
    <>
      <Switch onChange={changeMode} /> Change Mode
      <Divider type="vertical" />
      <Switch onChange={changeTheme} /> Change Style
      <br />
      <br />
      <Menu
        style={{
          width: 256,
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={mode}
        theme={theme}
        items={items}
      />
    </>
  );
};
export default App;
`,description:"<p>Show the dynamic switching mode (between <code>inline</code> and <code>vertical</code>).</p>"}},{demo:{id:"components-menu-demo-style-debug"},previewerProps:{debug:!0,title:"Style debug",filename:"components/menu/demo/style-debug.tsx",jsx:`import { MailOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import React, { useState } from 'react';
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Navigation One Long Long Long Long', 'sub1', <MailOutlined />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Option 11', '11'),
  getItem('Option 12', '12'),
];
const App = () => {
  const [theme, setTheme] = useState('dark');
  const [current, setCurrent] = useState('1');
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <>
      <Switch
        checked={theme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <br />
      <br />
      <Menu
        theme={theme}
        onClick={onClick}
        selectedKeys={[current]}
        mode="inline"
        items={items}
        inlineCollapsed
        // Test only. Remove in future.
        _internalRenderMenuItem={(node) =>
          React.cloneElement(node, {
            style: {
              ...node.props.style,
              textDecoration: 'underline',
            },
          })
        }
        // Test only. Remove in future.
        _internalRenderSubMenuItem={(node) =>
          React.cloneElement(node, {
            style: {
              ...node.props.style,
              background: 'rgba(255,255,255,0.3)',
            },
          })
        }
        // Test only. Remove in future.
        _internalDisableMenuItemTitleTooltip
      />
    </>
  );
};
export default App;
`,description:"<p>buggy!</p>"}},{demo:{id:"components-menu-demo-menu-v4"},previewerProps:{debug:!0,title:"Menu v4",filename:"components/menu/demo/menu-v4.tsx",jsx:`import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import { ConfigProvider, Menu, Switch } from 'antd';
import { useState } from 'react';
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Navigation One', '1', <MailOutlined />),
  getItem('Navigation Two', '2', <CalendarOutlined />),
  getItem('Navigation Two', 'sub1', <AppstoreOutlined />, [
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
    getItem('Submenu', 'sub1-2', null, [getItem('Option 5', '5'), getItem('Option 6', '6')]),
  ]),
  getItem('Navigation Three', 'sub2', <SettingOutlined />, [
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
  ]),
  getItem(
    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
      Ant Design
    </a>,
    'link',
    <LinkOutlined />,
  ),
];
const App = () => {
  const [mode, setMode] = useState('inline');
  const changeMode = (value) => {
    setMode(value ? 'vertical' : 'inline');
  };
  return (
    <>
      <Switch onChange={changeMode} /> Change Mode
      <br />
      <br />
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              radiusItem: 0,
              radiusSubMenuItem: 0,
              colorItemTextHover: '#1890ff',
              colorItemTextSelected: '#1890ff',
              colorItemBgSelected: '#e6f7ff',
              colorActiveBarWidth: 3,
              itemMarginInline: 0,
              colorItemBgHover: 'transparent',
            },
          },
        }}
      >
        <Menu
          style={{
            width: 256,
          }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={mode}
          items={items}
        />
      </ConfigProvider>
    </>
  );
};
export default App;
`,description:"<p>Menu with v4 style.</p>"}}]}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"api"},(0,e.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)("h3",{id:"menu"},(0,e.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#menu",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Menu"),(0,e.tZ)(u.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[18].value),(0,e.tZ)("th",null,n[19].value),(0,e.tZ)("th",null,n[20].value),(0,e.tZ)("th",null,n[21].value),(0,e.tZ)("th",null,n[22].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[23].value),(0,e.tZ)("td",null,n[24].value),(0,e.tZ)("td",null,n[25].value),(0,e.tZ)("td",null,n[26].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[27].value),(0,e.tZ)("td",null,n[28].value),(0,e.tZ)("td",null,n[29].value),(0,e.tZ)("td",null,n[30].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[31].value),(0,e.tZ)("td",null,n[32].value),(0,e.tZ)("td",null,n[33].value,(0,e.tZ)("code",null,n[34].value)),(0,e.tZ)("td",null,n[35].value),(0,e.tZ)("td",null,n[36].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[37].value),(0,e.tZ)("td",null,n[38].value),(0,e.tZ)("td",null,n[39].value),(0,e.tZ)("td",null,n[40].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[41].value),(0,e.tZ)("td",null,n[42].value),(0,e.tZ)("td",null,n[43].value),(0,e.tZ)("td",null,n[44].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[45].value),(0,e.tZ)("td",null,n[46].value),(0,e.tZ)("td",null,n[47].value),(0,e.tZ)("td",null,n[48].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[49].value),(0,e.tZ)("td",null,n[50].value),(0,e.tZ)("td",null,(0,e.tZ)(l.Z,{to:"#itemtype",sourceType:"Link"},n[51].value)),(0,e.tZ)("td",null,n[52].value),(0,e.tZ)("td",null,n[53].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[54].value),(0,e.tZ)("td",null,n[55].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[56].value),n[57].value,(0,e.tZ)("code",null,n[58].value),n[59].value,(0,e.tZ)("code",null,n[60].value)),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[61].value)),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[62].value),(0,e.tZ)("td",null,n[63].value),(0,e.tZ)("td",null,n[64].value),(0,e.tZ)("td",null,n[65].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[66].value),(0,e.tZ)("td",null,n[67].value),(0,e.tZ)("td",null,n[68].value),(0,e.tZ)("td",null,n[69].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[70].value),(0,e.tZ)("td",null,n[71].value),(0,e.tZ)("td",null,n[72].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[73].value)),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[74].value),(0,e.tZ)("td",null,n[75].value),(0,e.tZ)("td",null,n[76].value),(0,e.tZ)("td",null,n[77].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[78].value),(0,e.tZ)("td",null,n[79].value),(0,e.tZ)("td",null,n[80].value),(0,e.tZ)("td",null,n[81].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[82].value),(0,e.tZ)("td",null,n[83].value),(0,e.tZ)("td",null,n[84].value),(0,e.tZ)("td",null,n[85].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[86].value),(0,e.tZ)("td",null,n[87].value),(0,e.tZ)("td",null,n[88].value),(0,e.tZ)("td",null,n[89].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[90].value),(0,e.tZ)("td",null,n[91].value),(0,e.tZ)("td",null,n[92].value),(0,e.tZ)("td",null,n[93].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[94].value),(0,e.tZ)("td",null,n[95].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[96].value),n[97].value,(0,e.tZ)("code",null,n[98].value)),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[99].value)),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[100].value),(0,e.tZ)("td",null,n[101].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[102].value),n[103].value,(0,e.tZ)("code",null,n[104].value)),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[105].value)),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[106].value),(0,e.tZ)("td",null,n[107].value),(0,e.tZ)("td",null,n[108].value),(0,e.tZ)("td",null,n[109].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[110].value),(0,e.tZ)("td",null,n[111].value),(0,e.tZ)("td",null,n[112].value),(0,e.tZ)("td",null,n[113].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[114].value),(0,e.tZ)("td",null,n[115].value),(0,e.tZ)("td",null,n[116].value),(0,e.tZ)("td",null,n[117].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[118].value),(0,e.tZ)("td",null,n[119].value),(0,e.tZ)("td",null,n[120].value),(0,e.tZ)("td",null,n[121].value),(0,e.tZ)("td",null)))),(0,e.tZ)("blockquote",null,(0,e.tZ)("p",null,n[122].value,(0,e.tZ)(l.Z,{href:"https://github.com/react-component/menu#api",sourceType:"a"},n[123].value))),(0,e.tZ)("h3",{id:"itemtype"},(0,e.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#itemtype",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"ItemType"),(0,e.tZ)("blockquote",null,(0,e.tZ)("p",null,n[124].value,(0,e.tZ)(l.Z,{to:"#MenuItemType",sourceType:"Link"},n[125].value),n[126].value,(0,e.tZ)(l.Z,{to:"#SubMenuType",sourceType:"Link"},n[127].value),n[128].value,(0,e.tZ)(l.Z,{to:"#MenuItemGroupType",sourceType:"Link"},n[129].value),n[130].value,(0,e.tZ)(l.Z,{to:"#MenuDividerType",sourceType:"Link"},n[131].value),n[132].value)),(0,e.tZ)("h4",{id:"menuitemtype"},(0,e.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#menuitemtype",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"MenuItemType"),(0,e.tZ)(u.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[133].value),(0,e.tZ)("th",null,n[134].value),(0,e.tZ)("th",null,n[135].value),(0,e.tZ)("th",null,n[136].value),(0,e.tZ)("th",null,n[137].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[138].value),(0,e.tZ)("td",null,n[139].value),(0,e.tZ)("td",null,n[140].value),(0,e.tZ)("td",null,n[141].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[142].value),(0,e.tZ)("td",null,n[143].value),(0,e.tZ)("td",null,n[144].value),(0,e.tZ)("td",null,n[145].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[146].value),(0,e.tZ)("td",null,n[147].value),(0,e.tZ)("td",null,n[148].value),(0,e.tZ)("td",null,n[149].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[150].value),(0,e.tZ)("td",null,n[151].value),(0,e.tZ)("td",null,n[152].value),(0,e.tZ)("td",null,n[153].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[154].value),(0,e.tZ)("td",null,n[155].value),(0,e.tZ)("td",null,n[156].value),(0,e.tZ)("td",null,n[157].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[158].value),(0,e.tZ)("td",null,n[159].value),(0,e.tZ)("td",null,n[160].value),(0,e.tZ)("td",null,n[161].value),(0,e.tZ)("td",null)))),(0,e.tZ)("h4",{id:"submenutype"},(0,e.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#submenutype",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"SubMenuType"),(0,e.tZ)(u.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[162].value),(0,e.tZ)("th",null,n[163].value),(0,e.tZ)("th",null,n[164].value),(0,e.tZ)("th",null,n[165].value),(0,e.tZ)("th",null,n[166].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[167].value),(0,e.tZ)("td",null,n[168].value),(0,e.tZ)("td",null,(0,e.tZ)(l.Z,{to:"#itemtype",sourceType:"Link"},n[169].value)),(0,e.tZ)("td",null,n[170].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[171].value),(0,e.tZ)("td",null,n[172].value),(0,e.tZ)("td",null,n[173].value),(0,e.tZ)("td",null,n[174].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[175].value),(0,e.tZ)("td",null,n[176].value),(0,e.tZ)("td",null,n[177].value),(0,e.tZ)("td",null,n[178].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[179].value),(0,e.tZ)("td",null,n[180].value),(0,e.tZ)("td",null,n[181].value),(0,e.tZ)("td",null,n[182].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[183].value),(0,e.tZ)("td",null,n[184].value),(0,e.tZ)("td",null,n[185].value),(0,e.tZ)("td",null,n[186].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[187].value),(0,e.tZ)("td",null,n[188].value,(0,e.tZ)("code",null,n[189].value)),(0,e.tZ)("td",null,n[190].value),(0,e.tZ)("td",null,n[191].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[192].value),(0,e.tZ)("td",null,n[193].value,(0,e.tZ)("code",null,n[194].value)),(0,e.tZ)("td",null,n[195].value),(0,e.tZ)("td",null,n[196].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[197].value),(0,e.tZ)("td",null,n[198].value),(0,e.tZ)("td",null),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[199].value),n[200].value,(0,e.tZ)("code",null,n[201].value)),(0,e.tZ)("td",null,n[202].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[203].value),(0,e.tZ)("td",null,n[204].value),(0,e.tZ)("td",null,n[205].value),(0,e.tZ)("td",null,n[206].value),(0,e.tZ)("td",null)))),(0,e.tZ)("h4",{id:"menuitemgrouptype"},(0,e.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#menuitemgrouptype",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"MenuItemGroupType"),(0,e.tZ)("p",null,n[207].value,(0,e.tZ)("code",null,n[208].value),n[209].value,(0,e.tZ)("code",null,n[210].value),n[211].value),(0,e.tZ)(i.Z,{lang:"ts"},n[212].value),(0,e.tZ)(u.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[213].value),(0,e.tZ)("th",null,n[214].value),(0,e.tZ)("th",null,n[215].value),(0,e.tZ)("th",null,n[216].value),(0,e.tZ)("th",null,n[217].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[218].value),(0,e.tZ)("td",null,n[219].value),(0,e.tZ)("td",null,(0,e.tZ)(l.Z,{to:"#menuitemtype",sourceType:"Link"},n[220].value)),(0,e.tZ)("td",null,n[221].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[222].value),(0,e.tZ)("td",null,n[223].value),(0,e.tZ)("td",null,n[224].value),(0,e.tZ)("td",null,n[225].value),(0,e.tZ)("td",null)))),(0,e.tZ)("h4",{id:"menudividertype"},(0,e.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#menudividertype",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"MenuDividerType"),(0,e.tZ)("p",null,n[226].value,(0,e.tZ)("code",null,n[227].value),n[228].value,(0,e.tZ)("code",null,n[229].value),n[230].value),(0,e.tZ)(i.Z,{lang:"ts"},n[231].value),(0,e.tZ)(u.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[232].value),(0,e.tZ)("th",null,n[233].value),(0,e.tZ)("th",null,n[234].value),(0,e.tZ)("th",null,n[235].value),(0,e.tZ)("th",null,n[236].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[237].value),(0,e.tZ)("td",null,n[238].value),(0,e.tZ)("td",null,n[239].value),(0,e.tZ)("td",null,n[240].value),(0,e.tZ)("td",null)))),(0,e.tZ)("h2",{id:"faq"},(0,e.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,e.tZ)("h3",{id:"why-will-menus-children-be-rendered-twice"},(0,e.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#why-will-menus-children-be-rendered-twice",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Why will Menu's children be rendered twice?"),(0,e.tZ)("p",null,n[241].value,(0,e.tZ)(l.Z,{href:"https://github.com/react-component/menu/blob/f4684514096d6b7123339cbe72e7b0f68db0bce2/src/Menu.tsx#L543",sourceType:"a"},n[242].value),n[243].value),(0,e.tZ)("h3",{id:"why-menu-do-not-responsive-collapse-in-flex-layout"},(0,e.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#why-menu-do-not-responsive-collapse-in-flex-layout",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Why Menu do not responsive collapse in Flex layout?"),(0,e.tZ)("p",null,n[244].value,(0,e.tZ)(l.Z,{href:"https://codesandbox.io/s/ding-bu-dao-hang-antd-4-21-7-forked-5e3imy?file=/demo.js",sourceType:"a"},n[245].value),n[246].value),(0,e.tZ)(i.Z,{lang:"jsx"},n[247].value),(0,e.tZ)("h2",{id:"design-token"},(0,e.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Design Token")),(0,e.tZ)(d.Z,{component:"Menu"})))}o.default=m}}]);
