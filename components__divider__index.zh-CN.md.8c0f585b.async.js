"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[4053],{782443:function(m,l,t){t.r(l);var p=t(502143),c=t(968521),v=t(720719),x=t(28840),Z=t(759907),o=t(828089),D=t(825673),h=t(902068),E=t(574399),P=t(863942),M=t(316073),g=t(24628),O=t(719260),f=t(956140),_=t(127179),a=t(905388),T=t(104979),W=t(606965),U=t(268696),i=t(424128),L=t(249706),R=t(795127),C=t(116846),A=t(73024),d=t(606641),s=t(667294),e=t(370917);function r(){var u=(0,d.eL)(),n=u.texts;return(0,e.tZ)(d.dY,null,(0,e.tZ)(s.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,n[0].value),(0,e.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,e.tZ)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,n[1].value),(0,e.tZ)("li",null,n[2].value)),(0,e.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,e.tZ)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,e.tZ)(a.Z,{items:[{demo:{id:"components-divider-demo-horizontal"},previewerProps:{title:"\u6C34\u5E73\u5206\u5272\u7EBF",filename:"components/divider/demo/horizontal.tsx",jsx:`import { Divider } from 'antd';
const App = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider dashed />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
  </>
);
export default App;
`,description:"<p>\u9ED8\u8BA4\u4E3A\u6C34\u5E73\u5206\u5272\u7EBF\uFF0C\u53EF\u5728\u4E2D\u95F4\u52A0\u5165\u6587\u5B57\u3002</p>"}},{demo:{id:"components-divider-demo-with-text"},previewerProps:{title:"\u5E26\u6587\u5B57\u7684\u5206\u5272\u7EBF",filename:"components/divider/demo/with-text.tsx",jsx:`import { Divider } from 'antd';
const App = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider>Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="left">Left Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="right">Right Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="left" orientationMargin="0">
      Left Text with 0 orientationMargin
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="right" orientationMargin={50}>
      Right Text with 50px orientationMargin
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
  </>
);
export default App;
`,description:"<p>\u5206\u5272\u7EBF\u4E2D\u5E26\u6709\u6587\u5B57\uFF0C\u53EF\u4EE5\u7528 <code>orientation</code> \u6307\u5B9A\u6587\u5B57\u4F4D\u7F6E\u3002</p>"}},{demo:{id:"components-divider-demo-plain"},previewerProps:{title:"\u5206\u5272\u6587\u5B57\u4F7F\u7528\u6B63\u6587\u6837\u5F0F",filename:"components/divider/demo/plain.tsx",jsx:`import { Divider } from 'antd';
const App = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider plain>Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="left" plain>
      Left Text
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="right" plain>
      Right Text
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
  </>
);
export default App;
`,description:"<p>\u4F7F\u7528 <code>plain</code> \u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u66F4\u8F7B\u91CF\u7684\u5206\u5272\u6587\u5B57\u6837\u5F0F\u3002</p>"}},{demo:{id:"components-divider-demo-vertical"},previewerProps:{title:"\u5782\u76F4\u5206\u5272\u7EBF",filename:"components/divider/demo/vertical.tsx",jsx:`import { Divider } from 'antd';
const App = () => (
  <>
    Text
    <Divider type="vertical" />
    <a href="#">Link</a>
    <Divider type="vertical" />
    <a href="#">Link</a>
  </>
);
export default App;
`,description:'<p>\u4F7F\u7528 <code>type="vertical"</code> \u8BBE\u7F6E\u4E3A\u884C\u5185\u7684\u5782\u76F4\u5206\u5272\u7EBF\u3002</p>'}},{demo:{id:"components-divider-demo-customize-style"},previewerProps:{debug:!0,title:"\u6837\u5F0F\u81EA\u5B9A\u4E49",filename:"components/divider/demo/customize-style.tsx",jsx:`import { Divider } from 'antd';
const App = () => (
  <>
    <Divider
      style={{
        borderWidth: 2,
        borderColor: '#7cb305',
      }}
    />
    <Divider
      style={{
        borderColor: '#7cb305',
      }}
      dashed
    />
    <Divider
      style={{
        borderColor: '#7cb305',
      }}
      dashed
    >
      Text
    </Divider>
    <Divider
      type="vertical"
      style={{
        height: 60,
        borderColor: '#7cb305',
      }}
    />
    <Divider
      type="vertical"
      style={{
        height: 60,
        borderColor: '#7cb305',
      }}
      dashed
    />

    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: 50,
        boxShadow: '0 0 1px red',
      }}
    >
      <Divider
        style={{
          background: 'rgba(0,255,0,0.05)',
        }}
        orientation="left"
      >
        Text
      </Divider>
    </div>
  </>
);
export default App;
`,description:"<p>\u6D4B\u8BD5\u4E00\u4E9B <code>style</code> \u4FEE\u6539\u6837\u5F0F\u7684\u884C\u4E3A\u3002</p>"}}]}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"api"},(0,e.tZ)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)(o.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[3].value),(0,e.tZ)("th",null,n[4].value),(0,e.tZ)("th",null,n[5].value),(0,e.tZ)("th",null,n[6].value),(0,e.tZ)("th",null,n[7].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[8].value),(0,e.tZ)("td",null,n[9].value),(0,e.tZ)("td",null,n[10].value),(0,e.tZ)("td",null,n[11].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[12].value),(0,e.tZ)("td",null,n[13].value),(0,e.tZ)("td",null,n[14].value),(0,e.tZ)("td",null,n[15].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[16].value),(0,e.tZ)("td",null,n[17].value),(0,e.tZ)("td",null,n[18].value),(0,e.tZ)("td",null,n[19].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[20].value),(0,e.tZ)("td",null,n[21].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[22].value),n[23].value,(0,e.tZ)("code",null,n[24].value),n[25].value,(0,e.tZ)("code",null,n[26].value)),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[27].value)),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[28].value),(0,e.tZ)("td",null,n[29].value,(0,e.tZ)("code",null,n[30].value),n[31].value,(0,e.tZ)("code",null,n[32].value),n[33].value,(0,e.tZ)("code",null,n[34].value)),(0,e.tZ)("td",null,n[35].value),(0,e.tZ)("td",null,n[36].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[37].value),(0,e.tZ)("td",null,n[38].value),(0,e.tZ)("td",null,n[39].value),(0,e.tZ)("td",null,n[40].value),(0,e.tZ)("td",null,n[41].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[42].value),(0,e.tZ)("td",null,n[43].value),(0,e.tZ)("td",null,n[44].value),(0,e.tZ)("td",null,n[45].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[46].value),(0,e.tZ)("td",null,n[47].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[48].value),n[49].value,(0,e.tZ)("code",null,n[50].value)),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[51].value)),(0,e.tZ)("td",null)))),(0,e.tZ)("h2",{id:"design-token"},(0,e.tZ)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Design Token")),(0,e.tZ)(_.Z,{component:"Divider"})))}l.default=r}}]);
