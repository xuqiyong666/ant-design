"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8288],{413111:function(c,u,_){_.r(u);var m=_(502143),x=_(968521),E=_(720719),Z=_(28840),s=_(759907),i=_(828089),p=_(825673),v=_(902068),h=_(574399),D=_(863942),P=_(316073),M=_(24628),g=_(719260),C=_(956140),l=_(127179),O=_(905388),A=_(104979),W=_(606965),T=_(268696),t=_(424128),U=_(249706),I=_(795127),f=_(116846),B=_(73024),a=_(606641),o=_(667294),e=_(370917);function d(){var r=(0,a.eL)(),n=r.texts;return(0,e.tZ)(a.dY,null,(0,e.tZ)(o.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,n[0].value),(0,e.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,e.tZ)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,n[1].value,(0,e.tZ)("code",null,n[2].value),n[3].value,(0,e.tZ)("code",null,n[4].value),n[5].value,(0,e.tZ)("code",null,n[6].value),n[7].value,(0,e.tZ)("code",null,n[8].value),n[9].value),(0,e.tZ)("li",null,n[10].value,(0,e.tZ)("code",null,n[11].value),n[12].value)),(0,e.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,e.tZ)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,e.tZ)(a.Dl,{demo:{id:"components-app-demo-basic"},previewerProps:{title:"\u57FA\u672C\u7528\u6CD5",filename:"components/app/demo/basic.tsx",jsx:`import { App, Button, Space } from 'antd';

// Sub page
const MyPage = () => {
  const { message, modal, notification } = App.useApp();
  const showMessage = () => {
    message.success('Success!');
  };
  const showModal = () => {
    modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  };
  const showNotification = () => {
    notification.info({
      message: \`Notification topLeft\`,
      description: 'Hello, Ant Design!!',
      placement: 'topLeft',
    });
  };
  return (
    <Space>
      <Button type="primary" onClick={showMessage}>
        Open message
      </Button>
      <Button type="primary" onClick={showModal}>
        Open modal
      </Button>
      <Button type="primary" onClick={showNotification}>
        Open notification
      </Button>
    </Space>
  );
};

// Entry component
export default () => (
  <App>
    <MyPage />
  </App>
);
`,description:"<p>\u83B7\u53D6 <code>message</code>, <code>notification</code>, <code>modal</code> \u9759\u6001\u65B9\u6CD5\u3002</p>"}}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"\u5982\u4F55\u4F7F\u7528"},(0,e.tZ)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5982\u4F55\u4F7F\u7528",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u5982\u4F55\u4F7F\u7528"),(0,e.tZ)("h3",{id:"\u57FA\u7840\u7528\u6CD5"},(0,e.tZ)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u7840\u7528\u6CD5",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u57FA\u7840\u7528\u6CD5"),(0,e.tZ)("p",null,n[13].value,(0,e.tZ)("code",null,n[14].value),n[15].value),(0,e.tZ)(s.Z,{lang:"tsx"},n[16].value),(0,e.tZ)("p",null,n[17].value),(0,e.tZ)("h3",{id:"\u4E0E-configprovider-\u5148\u540E\u987A\u5E8F"},(0,e.tZ)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E0E-configprovider-\u5148\u540E\u987A\u5E8F",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u4E0E ConfigProvider \u5148\u540E\u987A\u5E8F"),(0,e.tZ)("p",null,n[18].value,(0,e.tZ)("code",null,n[19].value),n[20].value),(0,e.tZ)(s.Z,{lang:"tsx"},n[21].value),(0,e.tZ)("h3",{id:"\u5185\u5D4C\u4F7F\u7528\u573A\u666F\u5982\u65E0\u5FC5\u8981\u5C3D\u91CF\u4E0D\u505A\u5D4C\u5957"},(0,e.tZ)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5185\u5D4C\u4F7F\u7528\u573A\u666F\u5982\u65E0\u5FC5\u8981\u5C3D\u91CF\u4E0D\u505A\u5D4C\u5957",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u5185\u5D4C\u4F7F\u7528\u573A\u666F\uFF08\u5982\u65E0\u5FC5\u8981\uFF0C\u5C3D\u91CF\u4E0D\u505A\u5D4C\u5957\uFF09"),(0,e.tZ)(s.Z,{lang:"tsx"},n[22].value),(0,e.tZ)("h3",{id:"\u5168\u5C40\u573A\u666Fredux-\u573A\u666F"},(0,e.tZ)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5168\u5C40\u573A\u666Fredux-\u573A\u666F",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u5168\u5C40\u573A\u666F\uFF08redux \u573A\u666F\uFF09"),(0,e.tZ)(s.Z,{lang:"tsx"},n[23].value),(0,e.tZ)(s.Z,{lang:"tsx"},n[24].value),(0,e.tZ)("h2",{id:"api"},(0,e.tZ)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)("h3",{id:"app"},(0,e.tZ)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#app",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"App"),(0,e.tZ)(i.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[25].value),(0,e.tZ)("th",null,n[26].value),(0,e.tZ)("th",null,n[27].value),(0,e.tZ)("th",null,n[28].value),(0,e.tZ)("th",null,n[29].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[30].value),(0,e.tZ)("td",null,n[31].value),(0,e.tZ)("td",null,(0,e.tZ)(t.Z,{to:"/components/message-cn/#messageconfig",sourceType:"Link"},n[32].value)),(0,e.tZ)("td",null,n[33].value),(0,e.tZ)("td",null,n[34].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[35].value),(0,e.tZ)("td",null,n[36].value),(0,e.tZ)("td",null,(0,e.tZ)(t.Z,{to:"/components/notification-cn/#notificationconfig",sourceType:"Link"},n[37].value)),(0,e.tZ)("td",null,n[38].value),(0,e.tZ)("td",null,n[39].value)))),(0,e.tZ)("h2",{id:"design-token"},(0,e.tZ)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Design Token")),(0,e.tZ)(l.Z,{component:"App"})))}u.default=d}}]);
