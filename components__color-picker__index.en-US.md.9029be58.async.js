"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[3419],{471835:function(_,o,l){l.r(o);var c=l(502143),m=l(968521),Z=l(720719),v=l(28840),g=l(759907),a=l(828089),p=l(825673),f=l(902068),x=l(574399),C=l(863942),P=l(316073),E=l(24628),h=l(719260),D=l(956140),b=l(127179),i=l(905388),k=l(104979),M=l(606965),R=l(268696),n=l(424128),O=l(249706),U=l(795127),W=l(116846),T=l(73024),r=l(606641),s=l(667294),e=l(370917);function d(){var u=(0,r.eL)(),t=u.texts;return(0,e.tZ)(r.dY,null,(0,e.tZ)(s.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,t[0].value,(0,e.tZ)("code",null,t[1].value),t[2].value),(0,e.tZ)("h2",{id:"when-to-use"},(0,e.tZ)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,e.tZ)("p",null,t[3].value),(0,e.tZ)("h2",{id:"examples"},(0,e.tZ)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,e.tZ)(i.Z,{items:[{demo:{id:"components-color-picker-demo-base"},previewerProps:{title:"Basic Usage",filename:"components/color-picker/demo/base.tsx",jsx:`import { ColorPicker } from 'antd';
const Demo = () => <ColorPicker />;
export default Demo;
`,description:"<p>Basic Usage.</p>"}},{demo:{id:"components-color-picker-demo-controlled"},previewerProps:{title:"controlled mode",filename:"components/color-picker/demo/controlled.tsx",jsx:`import { ColorPicker, theme } from 'antd';
import { useState } from 'react';
const Demo = () => {
  const { token } = theme.useToken();
  const [color, setColor] = useState(token.colorPrimary);
  return <ColorPicker value={color} onChange={setColor} />;
};
export default Demo;
`,description:"<p>Set the component to controlled mode.</p>"}},{demo:{id:"components-color-picker-demo-disabled"},previewerProps:{debug:!0,title:"Disable",filename:"components/color-picker/demo/disabled.tsx",jsx:`import { ColorPicker } from 'antd';
export default () => <ColorPicker disabled />;
`,description:"<p>Set to disabled state.</p>"}},{demo:{id:"components-color-picker-demo-allowclear"},previewerProps:{title:"Clear Color",filename:"components/color-picker/demo/allowClear.tsx",jsx:`import { ColorPicker } from 'antd';
export default () => <ColorPicker allowClear />;
`,description:"<p>Clear Color.</p>"}},{demo:{id:"components-color-picker-demo-trigger"},previewerProps:{title:"Custom Trigger",filename:"components/color-picker/demo/trigger.tsx",jsx:`import { ColorPicker, Space, theme } from 'antd';
import { useMemo, useState } from 'react';
export default () => {
  const { token } = theme.useToken();
  const [color, setColor] = useState(token.colorPrimary);
  const bgColor = useMemo(() => (typeof color === 'string' ? color : color.toHexString()), [color]);
  const divStyle = {
    width: token.sizeMD,
    height: token.sizeMD,
    borderRadius: token.borderRadiusSM,
    backgroundColor: bgColor,
  };
  return (
    <ColorPicker value={color} onChange={setColor}>
      <Space>
        <div style={divStyle} />
        <span>{bgColor}</span>
      </Space>
    </ColorPicker>
  );
};
`,description:"<p>Triggers for customizing color panels.</p>"}},{demo:{id:"components-color-picker-demo-format"},previewerProps:{title:"Color Format",filename:"components/color-picker/demo/format.tsx",jsx:`import { Col, ColorPicker, Row, Space } from 'antd';
import { useMemo, useState } from 'react';
export default () => {
  const [colorHex, setColorHex] = useState('#1677ff');
  const [colorHsb, setColorHsb] = useState('hsb(215, 91%, 100%)');
  const [colorRgb, setColorRgb] = useState('rgb(22, 119, 255)');
  const [formatHex, setFormatHex] = useState('hex');
  const [formatHsb, setFormatHsb] = useState('hsb');
  const [formatRgb, setFormatRgb] = useState('rgb');
  const hexString = useMemo(
    () => (typeof colorHex === 'string' ? colorHex : colorHex.toHexString()),
    [colorHex],
  );
  const hsbString = useMemo(
    () => (typeof colorHsb === 'string' ? colorHsb : colorHsb.toHsbString()),
    [colorHsb],
  );
  const rgbString = useMemo(
    () => (typeof colorRgb === 'string' ? colorRgb : colorRgb.toRgbString()),
    [colorRgb],
  );
  return (
    <Space
      direction="vertical"
      size="middle"
      style={{
        display: 'flex',
      }}
    >
      <Row align="middle">
        <Space>
          <Col>
            <ColorPicker
              format={formatHex}
              value={colorHex}
              onChange={setColorHex}
              onFormatChange={setFormatHex}
            />
          </Col>
          <Col>
            HEX: <span>{hexString}</span>
          </Col>
        </Space>
      </Row>
      <Row align="middle">
        <Space>
          <Col>
            <ColorPicker
              format={formatHsb}
              value={colorHsb}
              onChange={setColorHsb}
              onFormatChange={setFormatHsb}
            />
          </Col>
          <Col>
            HSB: <span>{hsbString}</span>
          </Col>
        </Space>
      </Row>
      <Row align="middle">
        <Space>
          <Col>
            <ColorPicker
              format={formatRgb}
              value={colorRgb}
              onChange={setColorRgb}
              onFormatChange={setFormatRgb}
            />
          </Col>
          <Col>
            RGB: <span>{rgbString}</span>
          </Col>
        </Space>
      </Row>
    </Space>
  );
};
`,description:"<p>Encoding formats, support <code>HEX</code>, <code>HSB</code>, <code>RGB</code>.</p>"}},{demo:{id:"components-color-picker-demo-presets"},previewerProps:{title:"Preset Colors",filename:"components/color-picker/demo/presets.tsx",jsx:`import { ColorPicker } from 'antd';
export default () => (
  <ColorPicker
    presets={[
      {
        label: 'Recommended',
        colors: [
          '#000000',
          '#000000E0',
          '#000000A6',
          '#00000073',
          '#00000040',
          '#00000026',
          '#0000001A',
          '#00000012',
          '#0000000A',
          '#00000005',
          '#F5222D',
          '#FA8C16',
          '#FADB14',
          '#8BBB11',
          '#52C41A',
          '#13A8A8',
          '#1677FF',
          '#2F54EB',
          '#722ED1',
          '#EB2F96',
          '#F5222D4D',
          '#FA8C164D',
          '#FADB144D',
          '#8BBB114D',
          '#52C41A4D',
          '#13A8A84D',
          '#1677FF4D',
          '#2F54EB4D',
          '#722ED14D',
          '#EB2F964D',
        ],
      },
      {
        label: 'Recent',
        colors: [],
      },
    ]}
  />
);
`,description:"<p>Set the presets color of the color picker.</p>"}},{demo:{id:"components-color-picker-demo-pure-panel"},previewerProps:{debug:!0,title:"Pure Render",filename:"components/color-picker/demo/pure-panel.tsx",jsx:`import { ColorPicker, theme } from 'antd';
import { useState } from 'react';
const PureRenderColorPicker = ColorPicker._InternalPanelDoNotUseOrYouWillBeFired;
export default () => {
  const { token } = theme.useToken();
  const [color, setColor] = useState(token.colorPrimary);
  return (
    <div
      style={{
        paddingLeft: 100,
      }}
    >
      <PureRenderColorPicker value={color} onChange={setColor} />
    </div>
  );
};
`,description:"<p>Pure Panel</p>"}}]}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"api"},(0,e.tZ)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)("blockquote",null,(0,e.tZ)("p",null,t[4].value,(0,e.tZ)("code",null,t[5].value),t[6].value)),(0,e.tZ)(a.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",{align:"left"},t[7].value),(0,e.tZ)("th",{align:"left"},t[8].value),(0,e.tZ)("th",{align:"left"},t[9].value),(0,e.tZ)("th",{align:"left"},t[10].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[11].value),(0,e.tZ)("td",{align:"left"},t[12].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[13].value),t[14].value,(0,e.tZ)("code",null,t[15].value),t[16].value,(0,e.tZ)("code",null,t[17].value)),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[18].value))),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[19].value),(0,e.tZ)("td",{align:"left"},t[20].value,(0,e.tZ)("code",null,t[21].value),t[22].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[23].value)),(0,e.tZ)("td",{align:"left"},t[24].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[25].value),(0,e.tZ)("td",{align:"left"},t[26].value),(0,e.tZ)("td",{align:"left"},t[27].value,(0,e.tZ)("code",null,t[28].value)),(0,e.tZ)("td",{align:"left"},t[29].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[30].value),(0,e.tZ)("td",{align:"left"},t[31].value),(0,e.tZ)("td",{align:"left"},t[32].value,(0,e.tZ)("code",null,t[33].value)),(0,e.tZ)("td",{align:"left"},t[34].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[35].value),(0,e.tZ)("td",{align:"left"},t[36].value,(0,e.tZ)("code",null,t[37].value),t[38].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[39].value)),(0,e.tZ)("td",{align:"left"},t[40].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[41].value),(0,e.tZ)("td",{align:"left"},t[42].value),(0,e.tZ)("td",{align:"left"},t[43].value),(0,e.tZ)("td",{align:"left"},t[44].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[45].value),(0,e.tZ)("td",{align:"left"},t[46].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[47].value)),(0,e.tZ)("td",{align:"left"},t[48].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[49].value),(0,e.tZ)("td",{align:"left"},t[50].value),(0,e.tZ)("td",{align:"left"},t[51].value),(0,e.tZ)("td",{align:"left"},t[52].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[53].value),(0,e.tZ)("td",{align:"left"},t[54].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[55].value),t[56].value,(0,e.tZ)("code",null,t[57].value)),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[58].value))),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[59].value),(0,e.tZ)("td",{align:"left"},t[60].value),(0,e.tZ)("td",{align:"left"},t[61].value),(0,e.tZ)("td",{align:"left"},t[62].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[63].value),(0,e.tZ)("td",{align:"left"},t[64].value,(0,e.tZ)("code",null,t[65].value),t[66].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[67].value)),(0,e.tZ)("td",{align:"left"},t[68].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[69].value),(0,e.tZ)("td",{align:"left"},t[70].value),(0,e.tZ)("td",{align:"left"},t[71].value),(0,e.tZ)("td",{align:"left"},t[72].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[73].value),(0,e.tZ)("td",{align:"left"},t[74].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[75].value),t[76].value,(0,e.tZ)("code",null,t[77].value),t[78].value,(0,e.tZ)("code",null,t[79].value),t[80].value,(0,e.tZ)("code",null,t[81].value),t[82].value,(0,e.tZ)("code",null,t[83].value),t[84].value,(0,e.tZ)("code",null,t[85].value)),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[86].value))),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[87].value),(0,e.tZ)("td",{align:"left"},t[88].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[89].value)),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[90].value))))),(0,e.tZ)("h3",{id:"color"},(0,e.tZ)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#color",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Color"),(0,e.tZ)(a.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",{align:"left"},t[91].value),(0,e.tZ)("th",{align:"left"},t[92].value),(0,e.tZ)("th",{align:"left"},t[93].value),(0,e.tZ)("th",{align:"left"},t[94].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[95].value),(0,e.tZ)("td",{align:"left"},t[96].value,(0,e.tZ)("code",null,t[97].value),t[98].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[99].value)),(0,e.tZ)("td",{align:"left"},t[100].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[101].value),(0,e.tZ)("td",{align:"left"},t[102].value,(0,e.tZ)("code",null,t[103].value),t[104].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[105].value)),(0,e.tZ)("td",{align:"left"},t[106].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[107].value),(0,e.tZ)("td",{align:"left"},t[108].value,(0,e.tZ)("code",null,t[109].value),t[110].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[111].value)),(0,e.tZ)("td",{align:"left"},t[112].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[113].value),(0,e.tZ)("td",{align:"left"},t[114].value,(0,e.tZ)("code",null,t[115].value),t[116].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[117].value)),(0,e.tZ)("td",{align:"left"},t[118].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[119].value),(0,e.tZ)("td",{align:"left"},t[120].value,(0,e.tZ)("code",null,t[121].value),t[122].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[123].value)),(0,e.tZ)("td",{align:"left"},t[124].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[125].value),(0,e.tZ)("td",{align:"left"},t[126].value,(0,e.tZ)("code",null,t[127].value),t[128].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[129].value)),(0,e.tZ)("td",{align:"left"},t[130].value)))),(0,e.tZ)("h2",{id:"faq"},(0,e.tZ)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,e.tZ)("h3",{id:"questions-about-color-assignment"},(0,e.tZ)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#questions-about-color-assignment",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Questions about color assignment"),(0,e.tZ)("p",null,t[131].value,(0,e.tZ)("code",null,t[132].value),t[133].value,(0,e.tZ)("code",null,t[134].value),t[135].value))))}o.default=d}}]);
