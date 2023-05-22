"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[6984],{70635:function(_,d,l){l.r(d);var c=l(502143),Z=l(968521),v=l(720719),x=l(28840),u=l(759907),a=l(828089),P=l(825673),h=l(902068),k=l(574399),f=l(863942),g=l(316073),T=l(24628),E=l(719260),C=l(956140),o=l(127179),s=l(905388),O=l(104979),A=l(606965),D=l(268696),n=l(424128),y=l(249706),M=l(795127),U=l(116846),W=l(73024),i=l(606641),r=l(667294),e=l(370917);function m(){var p=(0,i.eL)(),t=p.texts;return(0,e.tZ)(i.dY,null,(0,e.tZ)(r.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,t[0].value),(0,e.tZ)("h2",{id:"when-to-use"},(0,e.tZ)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,e.tZ)("p",null,t[1].value),(0,e.tZ)("h2",{id:"examples"},(0,e.tZ)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,e.tZ)(s.Z,{items:[{demo:{id:"components-time-picker-demo-basic"},previewerProps:{title:"Basic",filename:"components/time-picker/demo/basic.tsx",jsx:`import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const onChange = (time, timeString) => {
  console.log(time, timeString);
};
const App = () => (
  <TimePicker onChange={onChange} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
);
export default App;
`,description:"<p>Click <code>TimePicker</code>, and then we could select or input a time in panel.</p>"}},{demo:{id:"components-time-picker-demo-value"},previewerProps:{title:"Under Control",filename:"components/time-picker/demo/value.tsx",jsx:`import { TimePicker } from 'antd';
import { useState } from 'react';
const App = () => {
  const [value, setValue] = useState(null);
  const onChange = (time) => {
    setValue(time);
  };
  return <TimePicker value={value} onChange={onChange} />;
};
export default App;
`,description:"<p><code>value</code> and <code>onChange</code> should be used together,</p>"}},{demo:{id:"components-time-picker-demo-size"},previewerProps:{title:"Three Sizes",filename:"components/time-picker/demo/size.tsx",jsx:`import { Space, TimePicker } from 'antd';
import dayjs from 'dayjs';
const App = () => (
  <Space wrap>
    <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="large" />
    <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} />
    <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="small" />
  </Space>
);
export default App;
`,description:"<p>The input box comes in three sizes. large is used in the form, while the medium size is the default.</p>"}},{demo:{id:"components-time-picker-demo-disabled"},previewerProps:{title:"disabled",filename:"components/time-picker/demo/disabled.tsx",jsx:`import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const App = () => <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} disabled />;
export default App;
`,description:"<p>A disabled state of the <code>TimePicker</code>.</p>"}},{demo:{id:"components-time-picker-demo-hide-column"},previewerProps:{title:"Hour and minute",filename:"components/time-picker/demo/hide-column.tsx",jsx:`import { TimePicker } from 'antd';
import dayjs from 'dayjs';
const format = 'HH:mm';
const App = () => <TimePicker defaultValue={dayjs('12:08', format)} format={format} />;
export default App;
`,description:"<p>While part of <code>format</code> is omitted, the corresponding column in panel will disappear, too.</p>"}},{demo:{id:"components-time-picker-demo-interval-options"},previewerProps:{title:"interval option",filename:"components/time-picker/demo/interval-options.tsx",jsx:`import { TimePicker } from 'antd';
const App = () => <TimePicker minuteStep={15} secondStep={10} hourStep={1} />;
export default App;
`,description:"<p>Show stepped options by <code>hourStep</code> <code>minuteStep</code> <code>secondStep</code>.</p>"}},{demo:{id:"components-time-picker-demo-addon"},previewerProps:{title:"Addon",filename:"components/time-picker/demo/addon.tsx",jsx:`import { Button, TimePicker } from 'antd';
import { useState } from 'react';
const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <TimePicker
      open={open}
      onOpenChange={setOpen}
      renderExtraFooter={() => (
        <Button size="small" type="primary" onClick={() => setOpen(false)}>
          OK
        </Button>
      )}
    />
  );
};
export default App;
`,description:"<p>Render addon contents to time picker panel's bottom.</p>"}},{demo:{id:"components-time-picker-demo-12hours"},previewerProps:{title:"12 hours",filename:"components/time-picker/demo/12hours.tsx",jsx:`import { Space, TimePicker } from 'antd';
const onChange = (time, timeString) => {
  console.log(time, timeString);
};
const App = () => (
  <Space wrap>
    <TimePicker use12Hours onChange={onChange} />
    <TimePicker use12Hours format="h:mm:ss A" onChange={onChange} />
    <TimePicker use12Hours format="h:mm a" onChange={onChange} />
  </Space>
);
export default App;
`,description:"<p>TimePicker of 12 hours format, with default format <code>h:mm:ss a</code>.</p>"}},{demo:{id:"components-time-picker-demo-colored-popup"},previewerProps:{debug:!0,title:"Colored Popup",filename:"components/time-picker/demo/colored-popup.tsx",jsx:`import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const onChange = (time, timeString) => {
  console.log(time, timeString);
};
const App = () => (
  <TimePicker
    onChange={onChange}
    defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
    popupClassName="myCustomClassName"
  />
);
export default App;
`,description:"<p>Passing custom class to <code>TimePicker</code> popup.</p>"}},{demo:{id:"components-time-picker-demo-range-picker"},previewerProps:{title:"Time Range Picker",filename:"components/time-picker/demo/range-picker.tsx",jsx:`import { TimePicker } from 'antd';
const App = () => <TimePicker.RangePicker />;
export default App;
`,description:"<p>Use time range picker with <code>TimePicker.RangePicker</code>.</p>"}},{demo:{id:"components-time-picker-demo-bordered"},previewerProps:{title:"Bordered-less",filename:"components/time-picker/demo/bordered.tsx",jsx:`import { TimePicker } from 'antd';
const { RangePicker } = TimePicker;
const App = () => (
  <>
    <TimePicker bordered={false} />
    <RangePicker bordered={false} />
  </>
);
export default App;
`,description:"<p>Bordered-less style component.</p>"}},{demo:{id:"components-time-picker-demo-status"},previewerProps:{title:"Status",filename:"components/time-picker/demo/status.tsx",jsx:`import { Space, TimePicker } from 'antd';
const App = () => (
  <Space direction="vertical">
    <TimePicker status="error" />
    <TimePicker status="warning" />
    <TimePicker.RangePicker status="error" />
    <TimePicker.RangePicker status="warning" />
  </Space>
);
export default App;
`,description:"<p>Add status to TimePicker with <code>status</code>, which could be <code>error</code> or <code>warning</code>.</p>"}},{demo:{id:"components-time-picker-demo-suffix"},previewerProps:{debug:!0,title:"Suffix",filename:"components/time-picker/demo/suffix.tsx",jsx:`import { SmileOutlined } from '@ant-design/icons';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const onChange = (time, timeString) => {
  console.log(time, timeString);
};
const App = () => (
  <TimePicker
    suffixIcon={<SmileOutlined />}
    onChange={onChange}
    defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
  />
);
export default App;
`,description:"<p>Click <code>TimePicker</code>, and then we could select or input a time in panel.</p>"}},{demo:{id:"components-time-picker-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/time-picker/demo/render-panel.tsx",jsx:`import { TimePicker } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalTimePicker } = TimePicker;
const App = () => <InternalTimePicker />;
export default App;
`,description:"<p>Debug usage. Do not use in your production.</p>"}}]}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"api"},(0,e.tZ)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)("hr",null),(0,e.tZ)(u.Z,{lang:"jsx"},t[2].value),(0,e.tZ)(a.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,t[3].value),(0,e.tZ)("th",null,t[4].value),(0,e.tZ)("th",null,t[5].value),(0,e.tZ)("th",null,t[6].value),(0,e.tZ)("th",null,t[7].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[8].value),(0,e.tZ)("td",null,t[9].value),(0,e.tZ)("td",null,t[10].value),(0,e.tZ)("td",null,t[11].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[12].value),(0,e.tZ)("td",null,t[13].value),(0,e.tZ)("td",null,t[14].value),(0,e.tZ)("td",null,t[15].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[16].value),(0,e.tZ)("td",null,t[17].value),(0,e.tZ)("td",null,t[18].value),(0,e.tZ)("td",null,t[19].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[20].value),(0,e.tZ)("td",null,t[21].value,(0,e.tZ)("code",null,t[22].value),t[23].value),(0,e.tZ)("td",null,t[24].value),(0,e.tZ)("td",null,t[25].value),(0,e.tZ)("td",null,t[26].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[27].value),(0,e.tZ)("td",null,t[28].value),(0,e.tZ)("td",null,t[29].value),(0,e.tZ)("td",null,t[30].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[31].value),(0,e.tZ)("td",null,t[32].value),(0,e.tZ)("td",null,t[33].value),(0,e.tZ)("td",null,t[34].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[35].value),(0,e.tZ)("td",null,t[36].value),(0,e.tZ)("td",null,t[37].value),(0,e.tZ)("td",null,t[38].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[39].value),(0,e.tZ)("td",null,t[40].value),(0,e.tZ)("td",null,(0,e.tZ)(n.Z,{href:"http://day.js.org/",sourceType:"a"},t[41].value)),(0,e.tZ)("td",null,t[42].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[43].value),(0,e.tZ)("td",null,t[44].value),(0,e.tZ)("td",null,t[45].value),(0,e.tZ)("td",null,t[46].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[47].value),(0,e.tZ)("td",null,t[48].value),(0,e.tZ)("td",null,(0,e.tZ)(n.Z,{to:"#disabledtime",sourceType:"Link"},t[49].value)),(0,e.tZ)("td",null,t[50].value),(0,e.tZ)("td",null,t[51].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[52].value),(0,e.tZ)("td",null,t[53].value),(0,e.tZ)("td",null,t[54].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,t[55].value)),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[56].value),(0,e.tZ)("td",null,t[57].value),(0,e.tZ)("td",null,t[58].value),(0,e.tZ)("td",null,t[59].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[60].value),(0,e.tZ)("td",null,t[61].value),(0,e.tZ)("td",null,t[62].value),(0,e.tZ)("td",null,t[63].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[64].value),(0,e.tZ)("td",null,t[65].value),(0,e.tZ)("td",null,t[66].value),(0,e.tZ)("td",null,t[67].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[68].value),(0,e.tZ)("td",null,t[69].value,(0,e.tZ)("code",null,t[70].value),t[71].value),(0,e.tZ)("td",null,t[72].value),(0,e.tZ)("td",null,t[73].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[74].value),(0,e.tZ)("td",null,t[75].value),(0,e.tZ)("td",null,t[76].value),(0,e.tZ)("td",null,t[77].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[78].value),(0,e.tZ)("td",null,t[79].value),(0,e.tZ)("td",null,t[80].value),(0,e.tZ)("td",null,t[81].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[82].value),(0,e.tZ)("td",null,t[83].value),(0,e.tZ)("td",null,t[84].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,t[85].value)),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[86].value),(0,e.tZ)("td",null,t[87].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,t[88].value),t[89].value,(0,e.tZ)("code",null,t[90].value),t[91].value,(0,e.tZ)("code",null,t[92].value),t[93].value,(0,e.tZ)("code",null,t[94].value)),(0,e.tZ)("td",null,t[95].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[96].value),(0,e.tZ)("td",null,t[97].value),(0,e.tZ)("td",null,t[98].value),(0,e.tZ)("td",null,t[99].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[100].value),(0,e.tZ)("td",null,t[101].value),(0,e.tZ)("td",null,t[102].value),(0,e.tZ)("td",null,t[103].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[104].value),(0,e.tZ)("td",null,t[105].value),(0,e.tZ)("td",null,t[106].value),(0,e.tZ)("td",null,t[107].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[108].value),(0,e.tZ)("td",null,t[109].value),(0,e.tZ)("td",null,t[110].value),(0,e.tZ)("td",null,t[111].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[112].value),(0,e.tZ)("td",null,t[113].value,(0,e.tZ)("code",null,t[114].value),t[115].value),(0,e.tZ)("td",null,t[116].value),(0,e.tZ)("td",null,t[117].value),(0,e.tZ)("td",null,t[118].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[119].value),(0,e.tZ)("td",null,t[120].value,(0,e.tZ)("code",null,t[121].value),t[122].value,(0,e.tZ)("code",null,t[123].value),t[124].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,t[125].value),t[126].value,(0,e.tZ)("code",null,t[127].value),t[128].value,(0,e.tZ)("code",null,t[129].value)),(0,e.tZ)("td",null,t[130].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[131].value),(0,e.tZ)("td",null,t[132].value),(0,e.tZ)("td",null,t[133].value),(0,e.tZ)("td",null,t[134].value),(0,e.tZ)("td",null,t[135].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[136].value),(0,e.tZ)("td",null,t[137].value),(0,e.tZ)("td",null,t[138].value),(0,e.tZ)("td",null,t[139].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[140].value),(0,e.tZ)("td",null,t[141].value,(0,e.tZ)("code",null,t[142].value)),(0,e.tZ)("td",null,t[143].value),(0,e.tZ)("td",null,t[144].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[145].value),(0,e.tZ)("td",null,t[146].value),(0,e.tZ)("td",null,(0,e.tZ)(n.Z,{href:"http://day.js.org/",sourceType:"a"},t[147].value)),(0,e.tZ)("td",null,t[148].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[149].value),(0,e.tZ)("td",null,t[150].value),(0,e.tZ)("td",null,t[151].value),(0,e.tZ)("td",null,t[152].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[153].value),(0,e.tZ)("td",null,t[154].value),(0,e.tZ)("td",null,t[155].value),(0,e.tZ)("td",null,t[156].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[157].value),(0,e.tZ)("td",null,t[158].value),(0,e.tZ)("td",null,t[159].value),(0,e.tZ)("td",null,t[160].value),(0,e.tZ)("td",null)))),(0,e.tZ)("h4",{id:"disabledtime"},(0,e.tZ)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#disabledtime",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"DisabledTime"),(0,e.tZ)(u.Z,{lang:"typescript"},t[161].value),(0,e.tZ)("h2",{id:"methods"},(0,e.tZ)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#methods",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Methods"),(0,e.tZ)(a.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,t[162].value),(0,e.tZ)("th",null,t[163].value),(0,e.tZ)("th",null,t[164].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[165].value),(0,e.tZ)("td",null,t[166].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[167].value),(0,e.tZ)("td",null,t[168].value),(0,e.tZ)("td",null)))),(0,e.tZ)("h3",{id:"rangepicker"},(0,e.tZ)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#rangepicker",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"RangePicker"),(0,e.tZ)("p",null,t[169].value,(0,e.tZ)(n.Z,{to:"/components/date-picker/#rangepicker",sourceType:"Link"},t[170].value),t[171].value),(0,e.tZ)(a.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,t[172].value),(0,e.tZ)("th",null,t[173].value),(0,e.tZ)("th",null,t[174].value),(0,e.tZ)("th",null,t[175].value),(0,e.tZ)("th",null,t[176].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[177].value),(0,e.tZ)("td",null,t[178].value),(0,e.tZ)("td",null,(0,e.tZ)(n.Z,{to:"#rangedisabledtime",sourceType:"Link"},t[179].value)),(0,e.tZ)("td",null,t[180].value),(0,e.tZ)("td",null,t[181].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[182].value),(0,e.tZ)("td",null,t[183].value),(0,e.tZ)("td",null,t[184].value),(0,e.tZ)("td",null,t[185].value),(0,e.tZ)("td",null,t[186].value)))),(0,e.tZ)("h3",{id:"rangedisabledtime"},(0,e.tZ)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#rangedisabledtime",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"RangeDisabledTime"),(0,e.tZ)(u.Z,{lang:"typescript"},t[187].value),(0,e.tZ)("h2",{id:"design-token"},(0,e.tZ)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Design Token")),(0,e.tZ)(o.Z,{component:"DatePicker"}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"faq"},(0,e.tZ)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,(0,e.tZ)(n.Z,{to:"/docs/react/use-custom-date-library#timepicker",sourceType:"Link"},t[188].value))))))}d.default=m}}]);
