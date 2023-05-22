"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[9653],{17343:function(m,i,t){t.r(i);var c=t(502143),Z=t(968521),v=t(720719),h=t(28840),a=t(759907),o=t(828089),x=t(825673),b=t(902068),E=t(574399),P=t(863942),f=t(316073),A=t(24628),D=t(719260),g=t(956140),s=t(127179),u=t(905388),L=t(104979),T=t(606965),O=t(268696),l=t(424128),U=t(249706),M=t(795127),I=t(116846),k=t(73024),r=t(606641),d=t(667294),e=t(370917);function _(){var p=(0,r.eL)(),n=p.texts;return(0,e.tZ)(r.dY,null,(0,e.tZ)(d.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,n[0].value),(0,e.tZ)("h2",{id:"when-to-use"},(0,e.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,n[1].value),(0,e.tZ)("li",null,n[2].value),(0,e.tZ)("li",null,n[3].value)),(0,e.tZ)(a.Z,{lang:"jsx"},n[4].value),(0,e.tZ)("h2",{id:"examples"},(0,e.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,e.tZ)(u.Z,{items:[{demo:{id:"components-breadcrumb-demo-basic"},previewerProps:{title:"Basic Usage",filename:"components/breadcrumb/demo/basic.tsx",jsx:`import { Breadcrumb } from 'antd';
const App = () => (
  <Breadcrumb
    items={[
      {
        title: 'Home',
      },
      {
        title: <a href="">Application Center</a>,
      },
      {
        title: <a href="">Application List</a>,
      },
      {
        title: 'An Application',
      },
    ]}
  />
);
export default App;
`,description:"<p>The simplest use.</p>"}},{demo:{id:"components-breadcrumb-demo-withicon"},previewerProps:{title:"With an Icon",filename:"components/breadcrumb/demo/withIcon.tsx",jsx:`import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
const App = () => (
  <Breadcrumb
    items={[
      {
        href: '',
        title: <HomeOutlined />,
      },
      {
        href: '',
        title: (
          <>
            <UserOutlined />
            <span>Application List</span>
          </>
        ),
      },
      {
        title: 'Application',
      },
    ]}
  />
);
export default App;
`,description:"<p>The icon should be placed in front of the text.</p>"}},{demo:{id:"components-breadcrumb-demo-react-router"},previewerProps:{iframe:"200",title:"react-router V6",filename:"components/breadcrumb/demo/react-router.tsx",jsx:`import { Alert, Breadcrumb } from 'antd';
import { HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
const Apps = () => (
  <ul className="app-list">
    <li>
      <Link to="/apps/1">Application1</Link>\uFF1A<Link to="/apps/1/detail">Detail</Link>
    </li>
    <li>
      <Link to="/apps/2">Application2</Link>\uFF1A<Link to="/apps/2/detail">Detail</Link>
    </li>
  </ul>
);
const breadcrumbNameMap = {
  '/apps': 'Application List',
  '/apps/1': 'Application1',
  '/apps/2': 'Application2',
  '/apps/1/detail': 'Detail',
  '/apps/2/detail': 'Detail',
};
const Home = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = \`/\${pathSnippets.slice(0, index + 1).join('/')}\`;
    return {
      key: url,
      title: <Link to={url}>{breadcrumbNameMap[url]}</Link>,
    };
  });
  const breadcrumbItems = [
    {
      title: <Link to="/">Home</Link>,
      key: 'home',
    },
  ].concat(extraBreadcrumbItems);
  return (
    <div className="demo">
      <div className="demo-nav">
        <Link to="/">Home</Link>
        <Link to="/apps">Application List</Link>
      </div>
      <Routes>
        <Route path="/apps" element={<Apps />} />
        <Route path="*" element={<span>Home Page</span>} />
      </Routes>
      <Alert
        style={{
          margin: '16px 0',
        }}
        message="Click the navigation above to switch:"
      />
      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
};
const App = () => (
  <HashRouter>
    <Home />
  </HashRouter>
);
export default App;
`,description:"<p>Used together with <code>react-router@6+</code>.</p>",style:`.demo {
  margin: 16px;
}
.demo-nav {
  height: 30px;
  margin-bottom: 16px;
  line-height: 30px;
  background: #f8f8f8;
}
.demo-nav a {
  padding: 0 8px;
  line-height: 30px;
}
.app-list {
  margin-top: 16px;
}`}},{demo:{id:"components-breadcrumb-demo-separator"},previewerProps:{title:"Configuring the Separator",filename:"components/breadcrumb/demo/separator.tsx",jsx:`import { Breadcrumb } from 'antd';
const App = () => (
  <Breadcrumb
    separator=">"
    items={[
      {
        title: 'Home',
      },
      {
        title: 'Application Center',
        href: '',
      },
      {
        title: 'Application List',
        href: '',
      },
      {
        title: 'An Application',
      },
    ]}
  />
);
export default App;
`,description:'<p>The separator can be customized by setting the separator property: <code>separator=">"</code>.</p>'}},{demo:{id:"components-breadcrumb-demo-overlay"},previewerProps:{title:"Bread crumbs with drop down menu",filename:"components/breadcrumb/demo/overlay.tsx",jsx:`import { Breadcrumb } from 'antd';
const menuItems = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        General
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Layout
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Navigation
      </a>
    ),
  },
];
const App = () => (
  <Breadcrumb
    items={[
      {
        title: 'Ant Design',
      },
      {
        title: <a href="">Component</a>,
      },
      {
        title: <a href="">General</a>,
        menu: {
          items: menuItems,
        },
      },
      {
        title: 'Button',
      },
    ]}
  />
);
export default App;
`,description:"<p>Breadcrumbs support drop down menu.</p>"}},{demo:{id:"components-breadcrumb-demo-separator-component"},previewerProps:{title:"Configuring the Separator Independently",filename:"components/breadcrumb/demo/separator-component.tsx",jsx:`import { Breadcrumb } from 'antd';
const App = () => (
  <Breadcrumb
    separator=""
    items={[
      {
        title: 'Location',
      },
      {
        type: 'separator',
        separator: ':',
      },
      {
        href: '',
        title: 'Application Center',
      },
      {
        type: 'separator',
      },
      {
        href: '',
        title: 'Application List',
      },
      {
        type: 'separator',
      },
      {
        title: 'An Application',
      },
    ]}
  />
);
export default App;
`,description:"<p>Customize separator for each other.</p>"}},{demo:{id:"components-breadcrumb-demo-debug-routes"},previewerProps:{title:"Debug Routes",filename:"components/breadcrumb/demo/debug-routes.tsx",jsx:`import { Breadcrumb } from 'antd';
export default () => (
  <Breadcrumb
    routes={[
      {
        path: '/home',
        breadcrumbName: 'Home',
      },
      {
        path: '/user',
        breadcrumbName: 'User',
        children: [
          {
            path: '/user1',
            breadcrumbName: 'User1',
          },
          {
            path: '/user2',
            breadcrumbName: 'User2',
          },
        ],
      },
    ]}
  />
);
`,description:"<p>Origin <code>routes</code> debug.</p>"}}]}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"api"},(0,e.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)("h3",{id:"breadcrumb"},(0,e.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#breadcrumb",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Breadcrumb"),(0,e.tZ)(o.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[5].value),(0,e.tZ)("th",null,n[6].value),(0,e.tZ)("th",null,n[7].value),(0,e.tZ)("th",null,n[8].value),(0,e.tZ)("th",null,n[9].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[10].value),(0,e.tZ)("td",null,n[11].value),(0,e.tZ)("td",null,n[12].value),(0,e.tZ)("td",null,n[13].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[14].value),(0,e.tZ)("td",null,n[15].value),(0,e.tZ)("td",null,n[16].value),(0,e.tZ)("td",null,n[17].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[18].value),(0,e.tZ)("td",null,n[19].value),(0,e.tZ)("td",null,(0,e.tZ)(l.Z,{to:"#ItemType",sourceType:"Link"},n[20].value)),(0,e.tZ)("td",null,n[21].value),(0,e.tZ)("td",null,n[22].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[23].value),(0,e.tZ)("td",null,n[24].value),(0,e.tZ)("td",null,n[25].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[26].value)),(0,e.tZ)("td",null)))),(0,e.tZ)("h3",{id:"itemtype"},(0,e.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#itemtype",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"ItemType"),(0,e.tZ)("blockquote",null,(0,e.tZ)("p",null,n[27].value,(0,e.tZ)(l.Z,{to:"#RouteItemType",sourceType:"Link"},n[28].value),n[29].value,(0,e.tZ)(l.Z,{to:"#SeparatorType",sourceType:"Link"},n[30].value))),(0,e.tZ)("h3",{id:"routeitemtype"},(0,e.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#routeitemtype",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"RouteItemType"),(0,e.tZ)(o.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[31].value),(0,e.tZ)("th",null,n[32].value),(0,e.tZ)("th",null,n[33].value),(0,e.tZ)("th",null,n[34].value),(0,e.tZ)("th",null,n[35].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[36].value),(0,e.tZ)("td",null,n[37].value),(0,e.tZ)("td",null,n[38].value),(0,e.tZ)("td",null,n[39].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[40].value),(0,e.tZ)("td",null,n[41].value),(0,e.tZ)("td",null,(0,e.tZ)(l.Z,{to:"/components/dropdown",sourceType:"Link"},n[42].value)),(0,e.tZ)("td",null,n[43].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[44].value),(0,e.tZ)("td",null,n[45].value,(0,e.tZ)("code",null,n[46].value)),(0,e.tZ)("td",null,n[47].value),(0,e.tZ)("td",null,n[48].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[49].value),(0,e.tZ)("td",null,n[50].value,(0,e.tZ)("code",null,n[51].value)),(0,e.tZ)("td",null,n[52].value),(0,e.tZ)("td",null,n[53].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[54].value),(0,e.tZ)("td",null,n[55].value),(0,e.tZ)("td",null,(0,e.tZ)(l.Z,{to:"/components/menu/#api",sourceType:"Link"},n[56].value)),(0,e.tZ)("td",null,n[57].value),(0,e.tZ)("td",null,n[58].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[59].value),(0,e.tZ)("td",null,n[60].value),(0,e.tZ)("td",null,n[61].value),(0,e.tZ)("td",null,n[62].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[63].value),(0,e.tZ)("td",null,n[64].value),(0,e.tZ)("td",null,n[65].value),(0,e.tZ)("td",null,n[66].value),(0,e.tZ)("td",null)))),(0,e.tZ)("h3",{id:"separatortype"},(0,e.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#separatortype",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"SeparatorType"),(0,e.tZ)(a.Z,{lang:"ts"},n[67].value),(0,e.tZ)(o.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[68].value),(0,e.tZ)("th",null,n[69].value),(0,e.tZ)("th",null,n[70].value),(0,e.tZ)("th",null,n[71].value),(0,e.tZ)("th",null,n[72].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[73].value),(0,e.tZ)("td",null,n[74].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[75].value)),(0,e.tZ)("td",null),(0,e.tZ)("td",null,n[76].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[77].value),(0,e.tZ)("td",null,n[78].value),(0,e.tZ)("td",null,n[79].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[80].value)),(0,e.tZ)("td",null,n[81].value)))),(0,e.tZ)("h3",{id:"use-with-browserhistory"},(0,e.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#use-with-browserhistory",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Use with browserHistory"),(0,e.tZ)("p",null,n[82].value,(0,e.tZ)("code",null,n[83].value),n[84].value,(0,e.tZ)("code",null,n[85].value),n[86].value,(0,e.tZ)("code",null,n[87].value),n[88].value),(0,e.tZ)(a.Z,{lang:"jsx"},n[89].value),(0,e.tZ)("h2",{id:"design-token"},(0,e.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Design Token")),(0,e.tZ)(s.Z,{component:"Breadcrumb"})))}i.default=_}}]);
