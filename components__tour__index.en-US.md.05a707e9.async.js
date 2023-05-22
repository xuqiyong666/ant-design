"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[6176],{263005:function(c,u,n){n.r(u);var p=n(502143),Z=n(968521),v=n(720719),m=n(28840),f=n(759907),o=n(828089),x=n(825673),h=n(902068),g=n(574399),E=n(863942),O=n(316073),P=n(24628),D=n(719260),B=n(956140),s=n(127179),d=n(905388),T=n(104979),U=n(606965),W=n(268696),l=n(424128),C=n(249706),M=n(795127),R=n(116846),y=n(73024),a=n(606641),r=n(667294),t=n(370917);function i(){var _=(0,a.eL)(),e=_.texts;return(0,t.tZ)(a.dY,null,(0,t.tZ)(r.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,e[0].value,(0,t.tZ)("code",null,e[1].value),e[2].value),(0,t.tZ)("h2",{id:"when-to-use"},(0,t.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a"},(0,t.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,t.tZ)("p",null,e[3].value),(0,t.tZ)("h2",{id:"examples"},(0,t.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a"},(0,t.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,t.tZ)(d.Z,{items:[{demo:{id:"components-tour-demo-basic"},previewerProps:{title:"Basic",filename:"components/tour/demo/basic.tsx",jsx:`import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Tour } from 'antd';
import { useRef, useState } from 'react';
const App = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>

      <Divider />

      <Space>
        <Button ref={ref1}> Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>

      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
};
export default App;
`,description:"<p>The most basic usage.</p>"}},{demo:{id:"components-tour-demo-non-modal"},previewerProps:{title:"Non-modal",filename:"components/tour/demo/non-modal.tsx",jsx:`import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Tour } from 'antd';
import { useRef, useState } from 'react';
const App = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin non-modal Tour
      </Button>

      <Divider />

      <Space>
        <Button ref={ref1}> Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>

      <Tour open={open} onClose={() => setOpen(false)} mask={false} type="primary" steps={steps} />
    </>
  );
};
export default App;
`,description:'<p>Use <code>mask={false}</code> to make Tour non-modal. At the meantime it is recommended to use with <code>type="primary"</code> to emphasize the guide itself.</p>'}},{demo:{id:"components-tour-demo-placement"},previewerProps:{title:"Placement",filename:"components/tour/demo/placement.tsx",jsx:`import { Button, Tour } from 'antd';
import { useRef, useState } from 'react';
const App = () => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Center',
      description: 'Displayed in the center of screen.',
      target: null,
    },
    {
      title: 'Right',
      description: 'On the right of target.',
      placement: 'right',
      target: () => ref.current,
    },
    {
      title: 'Top',
      description: 'On the top of target.',
      placement: 'top',
      target: () => ref.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)} ref={ref}>
        Begin Tour
      </Button>

      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
};
export default App;
`,description:"<p>Change the placement of the guide relative to the target, there are 12 placements available. When <code>target={null}</code> the guide will show in the center.</p>"}},{demo:{id:"components-tour-demo-mask"},previewerProps:{title:"custom mask style",filename:"components/tour/demo/mask.tsx",jsx:`import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Tour } from 'antd';
import { useRef, useState } from 'react';
const App = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
      mask: {
        style: {
          boxShadow: 'inset 0 0 15px #fff',
        },
        color: 'rgba(40, 0, 255, .4)',
      },
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
      mask: false,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>

      <Divider />

      <Space>
        <Button ref={ref1}> Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>

      <Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
        mask={{
          style: {
            boxShadow: 'inset 0 0 15px #333',
          },
          color: 'rgba(80, 255, 255, .4)',
        }}
      />
    </>
  );
};
export default App;
`,description:"<p>custom mask style.</p>"}},{demo:{id:"components-tour-demo-indicator"},previewerProps:{title:"custom indicator",filename:"components/tour/demo/indicator.tsx",jsx:`import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Tour } from 'antd';
import { useRef, useState } from 'react';
const App = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>
      <Divider />
      <Space>
        <Button ref={ref1}>Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>
      <Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
        indicatorsRender={(current, total) => (
          <span>
            {current + 1} / {total}
          </span>
        )}
      />
    </>
  );
};
export default App;
`,description:"<p>Custom indicator.</p>"}},{demo:{id:"components-tour-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/tour/demo/render-panel.tsx",jsx:`import { Tour } from 'antd';

/** Test usage. Do not use in your production. */
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPanel } = Tour;
export default () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      rowGap: 16,
      background: 'rgba(50,0,0,0.65)',
      padding: 8,
    }}
  >
    <InternalPanel title="Hello World!" description="Hello World?!" />
    <InternalPanel
      title="Hello World!"
      description="Hello World?!"
      cover={
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      }
      current={5}
      total={7}
    />
    <InternalPanel
      title="Hello World!"
      description="Hello World?!"
      type="primary"
      current={4}
      total={5}
    />
  </div>
);
`,description:"<p>Debug usage. Do not use in your production.</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)("h3",{id:"tour"},(0,t.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#tour",sourceType:"a"},(0,t.tZ)("span",{className:"icon icon-link"})),"Tour"),(0,t.tZ)(o.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[4].value),(0,t.tZ)("th",null,e[5].value),(0,t.tZ)("th",null,e[6].value),(0,t.tZ)("th",null,e[7].value),(0,t.tZ)("th",null,e[8].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[9].value),(0,t.tZ)("td",null,e[10].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[11].value),e[12].value,(0,t.tZ)("code",null,e[13].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[14].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[15].value),(0,t.tZ)("td",null,e[16].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[17].value),e[18].value,(0,t.tZ)("code",null,e[19].value),e[20].value,(0,t.tZ)("code",null,e[21].value),e[22].value,(0,t.tZ)("code",null,e[23].value),e[24].value,(0,t.tZ)("code",null,e[25].value),e[26].value,(0,t.tZ)("code",null,e[27].value),e[28].value,(0,t.tZ)("code",null,e[29].value),e[30].value,(0,t.tZ)("code",null,e[31].value),e[32].value,(0,t.tZ)("code",null,e[33].value),e[34].value,(0,t.tZ)("code",null,e[35].value),e[36].value,(0,t.tZ)("code",null,e[37].value),e[38].value,(0,t.tZ)("code",null,e[39].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[40].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[41].value),(0,t.tZ)("td",null,e[42].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[43].value)),(0,t.tZ)("td",null,e[44].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[45].value),(0,t.tZ)("td",null,e[46].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[47].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[48].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[49].value),(0,t.tZ)("td",null,e[50].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[51].value),e[52].value,(0,t.tZ)("code",null,e[53].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[54].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[55].value),(0,t.tZ)("td",null,e[56].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[57].value)),(0,t.tZ)("td",null,e[58].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[59].value),(0,t.tZ)("td",null,e[60].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[61].value)),(0,t.tZ)("td",null,e[62].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[63].value),(0,t.tZ)("td",null,e[64].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[65].value)),(0,t.tZ)("td",null,e[66].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[67].value),(0,t.tZ)("td",null,e[68].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[69].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[70].value)),(0,t.tZ)("td",null,e[71].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[72].value),(0,t.tZ)("td",null,e[73].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[74].value)),(0,t.tZ)("td",null,e[75].value),(0,t.tZ)("td",null,e[76].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[77].value),(0,t.tZ)("td",null,e[78].value),(0,t.tZ)("td",null,e[79].value),(0,t.tZ)("td",null,e[80].value),(0,t.tZ)("td",null,e[81].value)))),(0,t.tZ)("h3",{id:"tourstep"},(0,t.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#tourstep",sourceType:"a"},(0,t.tZ)("span",{className:"icon icon-link"})),"TourStep"),(0,t.tZ)(o.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[82].value),(0,t.tZ)("th",null,e[83].value),(0,t.tZ)("th",null,e[84].value),(0,t.tZ)("th",null,e[85].value),(0,t.tZ)("th",null,e[86].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[87].value),(0,t.tZ)("td",null,e[88].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[89].value),e[90].value,(0,t.tZ)("code",null,e[91].value)),(0,t.tZ)("td",null,e[92].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[93].value),(0,t.tZ)("td",null,e[94].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[95].value),e[96].value,(0,t.tZ)("code",null,e[97].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[98].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[99].value),(0,t.tZ)("td",null,e[100].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[101].value)),(0,t.tZ)("td",null,e[102].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[103].value),(0,t.tZ)("td",null,e[104].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[105].value)),(0,t.tZ)("td",null,e[106].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[107].value),(0,t.tZ)("td",null,e[108].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[109].value)),(0,t.tZ)("td",null,e[110].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[111].value),(0,t.tZ)("td",null,e[112].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[113].value),e[114].value,(0,t.tZ)("code",null,e[115].value),e[116].value,(0,t.tZ)("code",null,e[117].value),e[118].value,(0,t.tZ)("code",null,e[119].value),e[120].value,(0,t.tZ)("code",null,e[121].value),e[122].value,(0,t.tZ)("code",null,e[123].value),e[124].value,(0,t.tZ)("code",null,e[125].value),e[126].value,(0,t.tZ)("code",null,e[127].value),e[128].value,(0,t.tZ)("code",null,e[129].value),e[130].value,(0,t.tZ)("code",null,e[131].value),e[132].value,(0,t.tZ)("code",null,e[133].value),e[134].value,(0,t.tZ)("code",null,e[135].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[136].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[137].value),(0,t.tZ)("td",null,e[138].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[139].value)),(0,t.tZ)("td",null,e[140].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[141].value),(0,t.tZ)("td",null,e[142].value,(0,t.tZ)("code",null,e[143].value),e[144].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[145].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[146].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[147].value),(0,t.tZ)("td",null,e[148].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[149].value),e[150].value,(0,t.tZ)("code",null,e[151].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[152].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[153].value),(0,t.tZ)("td",null,e[154].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[155].value)),(0,t.tZ)("td",null,e[156].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[157].value),(0,t.tZ)("td",null,e[158].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[159].value)),(0,t.tZ)("td",null,e[160].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[161].value),(0,t.tZ)("td",null,e[162].value,(0,t.tZ)("code",null,e[163].value),e[164].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[165].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[166].value)),(0,t.tZ)("td",null,e[167].value)))),(0,t.tZ)("h2",{id:"design-token"},(0,t.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a"},(0,t.tZ)("span",{className:"icon icon-link"})),"Design Token")),(0,t.tZ)(s.Z,{component:"Tour"})))}u.default=i}}]);
