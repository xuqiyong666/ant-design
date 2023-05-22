"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[7519],{734875:function(p,l,n){n.r(l);var m=n(502143),v=n(968521),g=n(720719),Z=n(28840),x=n(759907),s=n(828089),f=n(825673),d=n(902068),h=n(574399),E=n(863942),P=n(316073),C=n(24628),R=n(719260),D=n(956140),i=n(127179),_=n(905388),M=n(104979),O=n(606965),U=n(268696),o=n(424128),W=n(249706),T=n(795127),A=n(116846),I=n(73024),a=n(606641),r=n(667294),e=n(370917);function u(){var c=(0,a.eL)(),t=c.texts;return(0,e.tZ)(a.dY,null,(0,e.tZ)(r.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,t[0].value,(0,e.tZ)("code",null,t[1].value),t[2].value)),(0,e.tZ)(d.Z,{message:"If the QR code cannot be scanned for identification, it may be because the link address is too long, which leads to too dense pixels. You can configure the QR code to be larger through size, or shorten the link through short link services."}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"when-to-use"},(0,e.tZ)(o.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,e.tZ)("p",null,t[3].value),(0,e.tZ)("h2",{id:"examples"},(0,e.tZ)(o.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,e.tZ)(_.Z,{items:[{demo:{id:"components-qrcode-demo-base"},previewerProps:{title:"base",filename:"components/qrcode/demo/base.tsx",jsx:`import { Input, QRCode, Space } from 'antd';
import React from 'react';
const App = () => {
  const [text, setText] = React.useState('https://ant.design/');
  return (
    <Space direction="vertical" align="center">
      <QRCode value={text || '-'} />
      <Input
        placeholder="-"
        maxLength={60}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </Space>
  );
};
export default App;
`,description:"<p>Basic Usage.</p>"}},{demo:{id:"components-qrcode-demo-icon"},previewerProps:{title:"With Icon",filename:"components/qrcode/demo/icon.tsx",jsx:`import { QRCode } from 'antd';
const App = () => (
  <QRCode
    errorLevel="H"
    value="https://ant.design/"
    icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
  />
);
export default App;
`,description:"<p>QRCode with Icon.</p>"}},{demo:{id:"components-qrcode-demo-status"},previewerProps:{title:"other status",filename:"components/qrcode/demo/status.tsx",jsx:`import { QRCode, Space } from 'antd';
const App = () => (
  <Space wrap>
    <QRCode value="https://ant.design/" status="loading" />
    <QRCode value="https://ant.design/" status="expired" onRefresh={() => console.log('refresh')} />
  </Space>
);
export default App;
`,description:"<p>The status can be controlled by the value <code>status</code>.</p>"}},{demo:{id:"components-qrcode-demo-customsize"},previewerProps:{title:"Custom Size",filename:"components/qrcode/demo/customSize.tsx",jsx:`import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, QRCode } from 'antd';
import { useState } from 'react';
const App = () => {
  const [size, setSize] = useState(160);
  const increase = () => {
    setSize((prevSize) => {
      const newSize = prevSize + 10;
      if (newSize > 300) {
        return 300;
      }
      return newSize;
    });
  };
  const decline = () => {
    setSize((prevSize) => {
      const newSize = prevSize - 10;
      if (newSize < 48) {
        return 48;
      }
      return newSize;
    });
  };
  return (
    <>
      <Button.Group
        style={{
          marginBottom: 16,
        }}
      >
        <Button onClick={decline} disabled={size <= 48} icon={<MinusOutlined />}>
          Smaller
        </Button>
        <Button onClick={increase} disabled={size >= 300} icon={<PlusOutlined />}>
          Larger
        </Button>
      </Button.Group>
      <QRCode
        errorLevel="H"
        size={size}
        iconSize={size / 4}
        value="https://ant.design/"
        icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      />
    </>
  );
};
export default App;
`,description:"<p>Custom Size.</p>"}},{demo:{id:"components-qrcode-demo-customcolor"},previewerProps:{title:"Custom Color",filename:"components/qrcode/demo/customColor.tsx",jsx:`import { QRCode, Space, theme } from 'antd';
const { useToken } = theme;
const App = () => {
  const { token } = useToken();
  return (
    <Space>
      <QRCode value="https://ant.design/" color={token.colorSuccessText} />
      <QRCode
        value="https://ant.design/"
        color={token.colorInfoText}
        bgColor={token.colorBgLayout}
      />
    </Space>
  );
};
export default App;
`,description:"<p>Custom Color.</p>"}},{demo:{id:"components-qrcode-demo-download"},previewerProps:{title:"Download QRCode",filename:"components/qrcode/demo/download.tsx",jsx:`import { Button, QRCode } from 'antd';
const downloadQRCode = () => {
  const canvas = document.getElementById('myqrcode')?.querySelector('canvas');
  if (canvas) {
    const url = canvas.toDataURL();
    const a = document.createElement('a');
    a.download = 'QRCode.png';
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};
const App = () => (
  <div id="myqrcode">
    <QRCode
      value="https://ant.design/"
      style={{
        marginBottom: 16,
      }}
    />
    <Button type="primary" onClick={downloadQRCode}>
      Download
    </Button>
  </div>
);
export default App;
`,description:"<p>A way to download QRCode.</p>"}},{demo:{id:"components-qrcode-demo-errorlevel"},previewerProps:{title:"Error Level",filename:"components/qrcode/demo/errorlevel.tsx",jsx:`import { QRCode, Segmented } from 'antd';
import { useState } from 'react';
const App = () => {
  const [level, setLevel] = useState('L');
  return (
    <>
      <QRCode
        style={{
          marginBottom: 16,
        }}
        errorLevel={level}
        value="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      />
      <Segmented options={['L', 'M', 'Q', 'H']} value={level} onChange={setLevel} />
    </>
  );
};
export default App;
`,description:"<p>set Error Level.</p>"}},{demo:{id:"components-qrcode-demo-popover"},previewerProps:{title:"Advanced Usage",filename:"components/qrcode/demo/Popover.tsx",jsx:`import { Popover, QRCode } from 'antd';
const src = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';
const App = () => (
  <Popover
    overlayInnerStyle={{
      padding: 0,
    }}
    content={<QRCode value={src} bordered={false} />}
  >
    <img width={100} height={100} src={src} alt="icon" />
  </Popover>
);
export default App;
`,description:"<p>With Popover.</p>"}}]}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"api"},(0,e.tZ)(o.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)("blockquote",null,(0,e.tZ)("p",null,t[4].value,(0,e.tZ)("code",null,t[5].value))),(0,e.tZ)(s.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",{align:"left"},t[6].value),(0,e.tZ)("th",{align:"left"},t[7].value),(0,e.tZ)("th",{align:"left"},t[8].value),(0,e.tZ)("th",{align:"left"},t[9].value),(0,e.tZ)("th",{align:"left"},t[10].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[11].value),(0,e.tZ)("td",{align:"left"},t[12].value),(0,e.tZ)("td",{align:"left"},t[13].value),(0,e.tZ)("td",{align:"left"},t[14].value),(0,e.tZ)("td",{align:"left"})),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[15].value),(0,e.tZ)("td",{align:"left"},t[16].value),(0,e.tZ)("td",{align:"left"},t[17].value),(0,e.tZ)("td",{align:"left"},t[18].value),(0,e.tZ)("td",{align:"left"})),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[19].value),(0,e.tZ)("td",{align:"left"},t[20].value),(0,e.tZ)("td",{align:"left"},t[21].value),(0,e.tZ)("td",{align:"left"},t[22].value),(0,e.tZ)("td",{align:"left"})),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[23].value),(0,e.tZ)("td",{align:"left"},t[24].value),(0,e.tZ)("td",{align:"left"},t[25].value),(0,e.tZ)("td",{align:"left"},t[26].value),(0,e.tZ)("td",{align:"left"})),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[27].value),(0,e.tZ)("td",{align:"left"},t[28].value),(0,e.tZ)("td",{align:"left"},t[29].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[30].value)),(0,e.tZ)("td",{align:"left"})),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[31].value),(0,e.tZ)("td",{align:"left"},t[32].value),(0,e.tZ)("td",{align:"left"},t[33].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[34].value)),(0,e.tZ)("td",{align:"left"},t[35].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[36].value),(0,e.tZ)("td",{align:"left"},t[37].value),(0,e.tZ)("td",{align:"left"},t[38].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[39].value)),(0,e.tZ)("td",{align:"left"})),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[40].value),(0,e.tZ)("td",{align:"left"},t[41].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[42].value)),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[43].value)),(0,e.tZ)("td",{align:"left"})),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[44].value),(0,e.tZ)("td",{align:"left"},t[45].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[46].value)),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[47].value)),(0,e.tZ)("td",{align:"left"})),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[48].value),(0,e.tZ)("td",{align:"left"},t[49].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[50].value)),(0,e.tZ)("td",{align:"left"},t[51].value),(0,e.tZ)("td",{align:"left"})))),(0,e.tZ)("h2",{id:"design-token"},(0,e.tZ)(o.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Design Token")),(0,e.tZ)(i.Z,{component:"QRCode"}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"faq"},(0,e.tZ)(o.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,e.tZ)("h3",{id:"about-qrcode-errorlevel"},(0,e.tZ)(o.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#about-qrcode-errorlevel",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"About QRCode ErrorLevel"),(0,e.tZ)("p",null,t[52].value),(0,e.tZ)("p",null,t[53].value,(0,e.tZ)("code",null,t[54].value),t[55].value,(0,e.tZ)("code",null,t[56].value),t[57].value,(0,e.tZ)("code",null,t[58].value),t[59].value,(0,e.tZ)("code",null,t[60].value),t[61].value,(0,e.tZ)("code",null,t[62].value),t[63].value,(0,e.tZ)("code",null,t[64].value),t[65].value,(0,e.tZ)("code",null,t[66].value),t[67].value,(0,e.tZ)("code",null,t[68].value),t[69].value),(0,e.tZ)("blockquote",null,(0,e.tZ)("p",null,t[70].value,(0,e.tZ)(o.Z,{href:"https://www.qrcode.com/en/about/error_correction.html",sourceType:"a"},t[71].value))))))}l.default=u}}]);
