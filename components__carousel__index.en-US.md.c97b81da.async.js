"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[7716],{994695:function(v,_,e){e.r(_);var c=e(502143),m=e(968521),Z=e(720719),h=e(28840),x=e(759907),o=e(828089),p=e(825673),E=e(902068),P=e(574399),g=e(863942),D=e(316073),C=e(24628),f=e(719260),M=e(956140),s=e(127179),d=e(905388),O=e(104979),W=e(606965),y=e(268696),l=e(424128),U=e(249706),T=e(795127),A=e(116846),R=e(73024),a=e(606641),i=e(667294),t=e(370917);function u(){var r=(0,a.eL)(),n=r.texts;return(0,t.tZ)(a.dY,null,(0,t.tZ)(i.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,n[0].value),(0,t.tZ)("h2",{id:"when-to-use"},(0,t.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a"},(0,t.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,n[1].value),(0,t.tZ)("li",null,n[2].value),(0,t.tZ)("li",null,n[3].value)),(0,t.tZ)("h2",{id:"examples"},(0,t.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a"},(0,t.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,t.tZ)(d.Z,{items:[{demo:{id:"components-carousel-demo-basic"},previewerProps:{title:"Basic",filename:"components/carousel/demo/basic.tsx",jsx:`import { Carousel } from 'antd';
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const App = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
};
export default App;
`,description:"<p>Basic usage.</p>"}},{demo:{id:"components-carousel-demo-position"},previewerProps:{title:"Position",filename:"components/carousel/demo/position.tsx",jsx:`import { Carousel, Radio } from 'antd';
import { useState } from 'react';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const App = () => {
  const [dotPosition, setDotPosition] = useState('top');
  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };
  return (
    <>
      <Radio.Group
        onChange={handlePositionChange}
        value={dotPosition}
        style={{
          marginBottom: 8,
        }}
      >
        <Radio.Button value="top">Top</Radio.Button>
        <Radio.Button value="bottom">Bottom</Radio.Button>
        <Radio.Button value="left">Left</Radio.Button>
        <Radio.Button value="right">Right</Radio.Button>
      </Radio.Group>
      <Carousel dotPosition={dotPosition}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </>
  );
};
export default App;
`,description:"<p>There are 4 position options available.</p>"}},{demo:{id:"components-carousel-demo-autoplay"},previewerProps:{title:"Scroll automatically",filename:"components/carousel/demo/autoplay.tsx",jsx:`import { Carousel } from 'antd';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const App = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);
export default App;
`,description:"<p>Timing of scrolling to the next card/picture.</p>"}},{demo:{id:"components-carousel-demo-fade"},previewerProps:{title:"Fade in",filename:"components/carousel/demo/fade.tsx",jsx:`import { Carousel } from 'antd';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const App = () => (
  <Carousel effect="fade">
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);
export default App;
`,description:"<p>Slides use fade for transition.</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)(o.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[4].value),(0,t.tZ)("th",null,n[5].value),(0,t.tZ)("th",null,n[6].value),(0,t.tZ)("th",null,n[7].value),(0,t.tZ)("th",null,n[8].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[9].value),(0,t.tZ)("td",null,n[10].value),(0,t.tZ)("td",null,n[11].value),(0,t.tZ)("td",null,n[12].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[13].value),(0,t.tZ)("td",null,n[14].value,(0,t.tZ)("code",null,n[15].value),n[16].value,(0,t.tZ)("code",null,n[17].value),n[18].value,(0,t.tZ)("code",null,n[19].value),n[20].value,(0,t.tZ)("code",null,n[21].value)),(0,t.tZ)("td",null,n[22].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[23].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[24].value),(0,t.tZ)("td",null,n[25].value,(0,t.tZ)("code",null,n[26].value),n[27].value,(0,t.tZ)("code",null,n[28].value),n[29].value),(0,t.tZ)("td",null,n[30].value),(0,t.tZ)("td",null,n[31].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[32].value),(0,t.tZ)("td",null,n[33].value),(0,t.tZ)("td",null,n[34].value),(0,t.tZ)("td",null,n[35].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[36].value),(0,t.tZ)("td",null,n[37].value),(0,t.tZ)("td",null,n[38].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[39].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[40].value),(0,t.tZ)("td",null,n[41].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[42].value),n[43].value,(0,t.tZ)("code",null,n[44].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[45].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[46].value),(0,t.tZ)("td",null,n[47].value),(0,t.tZ)("td",null,n[48].value),(0,t.tZ)("td",null,n[49].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[50].value),(0,t.tZ)("td",null,n[51].value),(0,t.tZ)("td",null,n[52].value),(0,t.tZ)("td",null,n[53].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h2",{id:"methods"},(0,t.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#methods",sourceType:"a"},(0,t.tZ)("span",{className:"icon icon-link"})),"Methods"),(0,t.tZ)(o.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[54].value),(0,t.tZ)("th",null,n[55].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[56].value),(0,t.tZ)("td",null,n[57].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[58].value),(0,t.tZ)("td",null,n[59].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[60].value),(0,t.tZ)("td",null,n[61].value)))),(0,t.tZ)("p",null,n[62].value,(0,t.tZ)(l.Z,{href:"https://react-slick.neostack.com/docs/api",sourceType:"a"},n[63].value),n[64].value),(0,t.tZ)("h2",{id:"design-token"},(0,t.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a"},(0,t.tZ)("span",{className:"icon icon-link"})),"Design Token")),(0,t.tZ)(s.Z,{component:"Carousel"}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"faq"},(0,t.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a"},(0,t.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,t.tZ)("h3",{id:"how-to-add-custom-arrows"},(0,t.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-add-custom-arrows",sourceType:"a"},(0,t.tZ)("span",{className:"icon icon-link"})),"How to add custom arrows?"),(0,t.tZ)("p",null,n[65].value,(0,t.tZ)(l.Z,{href:"https://github.com/ant-design/ant-design/issues/12479",sourceType:"a"},n[66].value),n[67].value))))}_.default=u}}]);
