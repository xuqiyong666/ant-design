"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[4142],{330309:function(c,a,t){t.r(a);var _=t(502143),p=t(968521),m=t(720719),h=t(28840),o=t(759907),u=t(828089),x=t(825673),f=t(902068),g=t(574399),D=t(863942),T=t(316073),E=t(24628),P=t(719260),C=t(956140),r=t(127179),s=t(905388),S=t(104979),w=t(606965),y=t(268696),n=t(424128),L=t(249706),A=t(795127),I=t(116846),M=t(73024),d=t(606641),Z=t(667294),e=t(370917);function v(){var i=(0,d.eL)(),l=i.texts;return(0,e.tZ)(d.dY,null,(0,e.tZ)(Z.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,l[0].value),(0,e.tZ)("h2",{id:"when-to-use"},(0,e.tZ)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,e.tZ)("p",null,(0,e.tZ)("code",null,l[1].value),l[2].value,(0,e.tZ)("code",null,l[3].value),l[4].value),(0,e.tZ)("h2",{id:"examples"},(0,e.tZ)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,e.tZ)(s.Z,{items:[{demo:{id:"components-tree-select-demo-basic"},previewerProps:{title:"Basic",filename:"components/tree-select/demo/basic.tsx",jsx:`import { TreeSelect } from 'antd';
import { useState } from 'react';
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: (
              <b
                style={{
                  color: '#08c',
                }}
              >
                leaf3
              </b>
            ),
          },
        ],
      },
    ],
  },
];
const App = () => {
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <TreeSelect
      showSearch
      style={{
        width: '100%',
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
    />
  );
};
export default App;
`,description:"<p>The most basic usage.</p>"}},{demo:{id:"components-tree-select-demo-multiple"},previewerProps:{title:"Multiple Selection",filename:"components/tree-select/demo/multiple.tsx",jsx:`import { TreeSelect } from 'antd';
import { useState } from 'react';
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'my leaf',
          },
          {
            value: 'leaf2',
            title: 'your leaf',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'sss',
            title: (
              <b
                style={{
                  color: '#08c',
                }}
              >
                sss
              </b>
            ),
          },
        ],
      },
    ],
  },
];
const App = () => {
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <TreeSelect
      showSearch
      style={{
        width: '100%',
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      placeholder="Please select"
      allowClear
      multiple
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
    />
  );
};
export default App;
`,description:"<p>Multiple selection usage.</p>"}},{demo:{id:"components-tree-select-demo-treedata"},previewerProps:{title:"Generate from tree data",filename:"components/tree-select/demo/treeData.tsx",jsx:`import { TreeSelect } from 'antd';
import { useState } from 'react';
const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
  },
];
const App = () => {
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <TreeSelect
      style={{
        width: '100%',
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      treeData={treeData}
      placeholder="Please select"
      treeDefaultExpandAll
      onChange={onChange}
    />
  );
};
export default App;
`,description:"<p>The tree structure can be populated using <code>treeData</code> property. This is a quick and easy way to provide the tree content.</p>"}},{demo:{id:"components-tree-select-demo-checkable"},previewerProps:{title:"Checkable",filename:"components/tree-select/demo/checkable.tsx",jsx:`import { TreeSelect } from 'antd';
import { useState } from 'react';
const { SHOW_PARENT } = TreeSelect;
const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];
const App = () => {
  const [value, setValue] = useState(['0-0-0']);
  const onChange = (newValue) => {
    console.log('onChange ', value);
    setValue(newValue);
  };
  const tProps = {
    treeData,
    value,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: 'Please select',
    style: {
      width: '100%',
    },
  };
  return <TreeSelect {...tProps} />;
};
export default App;
`,description:"<p>Multiple and checkable.</p>"}},{demo:{id:"components-tree-select-demo-async"},previewerProps:{title:"Asynchronous loading",filename:"components/tree-select/demo/async.tsx",jsx:`import { TreeSelect } from 'antd';
import { useState } from 'react';
const App = () => {
  const [value, setValue] = useState();
  const [treeData, setTreeData] = useState([
    {
      id: 1,
      pId: 0,
      value: '1',
      title: 'Expand to load',
    },
    {
      id: 2,
      pId: 0,
      value: '2',
      title: 'Expand to load',
    },
    {
      id: 3,
      pId: 0,
      value: '3',
      title: 'Tree Node',
      isLeaf: true,
    },
  ]);
  const genTreeNode = (parentId, isLeaf = false) => {
    const random = Math.random().toString(36).substring(2, 6);
    return {
      id: random,
      pId: parentId,
      value: random,
      title: isLeaf ? 'Tree Node' : 'Expand to load',
      isLeaf,
    };
  };
  const onLoadData = ({ id }) =>
    new Promise((resolve) => {
      setTimeout(() => {
        setTreeData(
          treeData.concat([genTreeNode(id, false), genTreeNode(id, true), genTreeNode(id, true)]),
        );
        resolve(undefined);
      }, 300);
    });
  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <TreeSelect
      treeDataSimpleMode
      style={{
        width: '100%',
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      placeholder="Please select"
      onChange={onChange}
      loadData={onLoadData}
      treeData={treeData}
    />
  );
};
export default App;
`,description:"<p>Asynchronous loading tree node.</p>"}},{demo:{id:"components-tree-select-demo-treeline"},previewerProps:{title:"Show Tree Line",filename:"components/tree-select/demo/treeLine.tsx",jsx:`import { Space, Switch, TreeSelect } from 'antd';
import { useState } from 'react';
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'sss',
            title: 'sss',
          },
        ],
      },
    ],
  },
];
const App = () => {
  const [treeLine, setTreeLine] = useState(true);
  const [showLeafIcon, setShowLeafIcon] = useState(false);
  return (
    <Space direction="vertical">
      <Switch
        checkedChildren="treeLine"
        unCheckedChildren="treeLine"
        checked={treeLine}
        onChange={() => setTreeLine(!treeLine)}
      />
      <Switch
        disabled={!treeLine}
        checkedChildren="showLeafIcon"
        unCheckedChildren="showLeafIcon"
        checked={showLeafIcon}
        onChange={() => setShowLeafIcon(!showLeafIcon)}
      />
      <TreeSelect
        treeLine={
          treeLine && {
            showLeafIcon,
          }
        }
        style={{
          width: 300,
        }}
        treeData={treeData}
      />
    </Space>
  );
};
export default App;
`,description:"<p>Use <code>treeLine</code> to show the line style.</p>"}},{demo:{id:"components-tree-select-demo-placement"},previewerProps:{title:"Placement",filename:"components/tree-select/demo/placement.tsx",jsx:`import { Radio, TreeSelect } from 'antd';
import { useState } from 'react';
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: (
              <b
                style={{
                  color: '#08c',
                }}
              >
                leaf3
              </b>
            ),
          },
        ],
      },
    ],
  },
];
const App = () => {
  const [placement, SetPlacement] = useState('topLeft');
  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };
  return (
    <>
      <Radio.Group value={placement} onChange={placementChange}>
        <Radio.Button value="topLeft">topLeft</Radio.Button>
        <Radio.Button value="topRight">topRight</Radio.Button>
        <Radio.Button value="bottomLeft">bottomLeft</Radio.Button>
        <Radio.Button value="bottomRight">bottomRight</Radio.Button>
      </Radio.Group>
      <br />
      <br />

      <TreeSelect
        showSearch
        dropdownStyle={{
          maxHeight: 400,
          overflow: 'auto',
          minWidth: 300,
        }}
        placeholder="Please select"
        dropdownMatchSelectWidth={false}
        placement={placement}
        allowClear
        treeDefaultExpandAll
        treeData={treeData}
      />
    </>
  );
};
export default App;
`,description:"<p>You can manually specify the position of the popup via <code>placement</code>.</p>"}},{demo:{id:"components-tree-select-demo-status"},previewerProps:{title:"Status",filename:"components/tree-select/demo/status.tsx",jsx:`import { Space, TreeSelect } from 'antd';
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <TreeSelect
      status="error"
      style={{
        width: '100%',
      }}
      placeholder="Error"
    />
    <TreeSelect
      status="warning"
      style={{
        width: '100%',
      }}
      multiple
      placeholder="Warning multiple"
    />
  </Space>
);
export default App;
`,description:"<p>Add status to TreeSelect with <code>status</code>, which could be <code>error</code> or <code>warning</code>.</p>"}},{demo:{id:"components-tree-select-demo-suffix"},previewerProps:{debug:!0,title:"Suffix",filename:"components/tree-select/demo/suffix.tsx",jsx:`import { SmileOutlined } from '@ant-design/icons';
import { TreeSelect } from 'antd';
import { useState } from 'react';
const icon = <SmileOutlined />;
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'my leaf',
          },
          {
            value: 'leaf2',
            title: 'your leaf',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'sss',
            title: (
              <b
                style={{
                  color: '#08c',
                }}
              >
                sss
              </b>
            ),
          },
        ],
      },
    ],
  },
];
const App = () => {
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <TreeSelect
      showSearch
      suffixIcon={icon}
      style={{
        width: '100%',
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
    />
  );
};
export default App;
`,description:"<p>The most basic usage.</p>"}},{demo:{id:"components-tree-select-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/tree-select/demo/render-panel.tsx",jsx:`import { TreeSelect } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalTreeSelect } = TreeSelect;
const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
  },
];
const App = () => (
  <InternalTreeSelect
    defaultValue="lucy"
    style={{
      width: '100%',
    }}
    treeData={treeData}
  />
);
export default App;
`,description:"<p>Debug usage. Do not use in your production.</p>"}}]}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"api"},(0,e.tZ)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)("h3",{id:"tree-props"},(0,e.tZ)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#tree-props",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Tree props"),(0,e.tZ)(u.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,l[5].value),(0,e.tZ)("th",null,l[6].value),(0,e.tZ)("th",null,l[7].value),(0,e.tZ)("th",null,l[8].value),(0,e.tZ)("th",null,l[9].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[10].value),(0,e.tZ)("td",null,l[11].value),(0,e.tZ)("td",null,l[12].value),(0,e.tZ)("td",null,l[13].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[14].value),(0,e.tZ)("td",null,l[15].value),(0,e.tZ)("td",null,l[16].value),(0,e.tZ)("td",null,l[17].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[18].value),(0,e.tZ)("td",null,l[19].value),(0,e.tZ)("td",null,l[20].value),(0,e.tZ)("td",null,l[21].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[22].value),(0,e.tZ)("td",null,l[23].value),(0,e.tZ)("td",null,l[24].value),(0,e.tZ)("td",null,l[25].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[26].value),(0,e.tZ)("td",null,l[27].value),(0,e.tZ)("td",null,l[28].value),(0,e.tZ)("td",null,l[29].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[30].value),(0,e.tZ)("td",null,l[31].value),(0,e.tZ)("td",null,l[32].value),(0,e.tZ)("td",null,l[33].value),(0,e.tZ)("td",null,l[34].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[35].value),(0,e.tZ)("td",null,l[36].value,(0,e.tZ)("code",null,l[37].value),l[38].value,(0,e.tZ)("code",null,l[39].value),l[40].value),(0,e.tZ)("td",null,l[41].value),(0,e.tZ)("td",null,l[42].value),(0,e.tZ)("td",null,l[43].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[44].value),(0,e.tZ)("td",null,l[45].value),(0,e.tZ)("td",null,l[46].value),(0,e.tZ)("td",null,l[47].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[48].value),(0,e.tZ)("td",null,l[49].value),(0,e.tZ)("td",null,l[50].value),(0,e.tZ)("td",null,l[51].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[52].value),(0,e.tZ)("td",null,l[53].value),(0,e.tZ)("td",null,l[54].value),(0,e.tZ)("td",null,l[55].value,(0,e.tZ)("code",null,l[56].value),l[57].value,(0,e.tZ)("code",null,l[58].value),l[59].value,(0,e.tZ)("code",null,l[60].value),l[61].value),(0,e.tZ)("td",null,l[62].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[63].value),(0,e.tZ)("td",null,l[64].value,(0,e.tZ)("code",null,l[65].value),l[66].value),(0,e.tZ)("td",null,l[67].value),(0,e.tZ)("td",null,l[68].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[69].value),(0,e.tZ)("td",null,l[70].value,(0,e.tZ)("code",null,l[71].value),l[72].value,(0,e.tZ)("code",null,l[73].value),l[74].value,(0,e.tZ)(n.Z,{href:"https://codepen.io/afc163/pen/zEjNOy?editors=0010",sourceType:"a"},l[75].value)),(0,e.tZ)("td",null,l[76].value),(0,e.tZ)("td",null,l[77].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[78].value),(0,e.tZ)("td",null,l[79].value,(0,e.tZ)("code",null,l[80].value),l[81].value),(0,e.tZ)("td",null,l[82].value),(0,e.tZ)("td",null,l[83].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[84].value),(0,e.tZ)("td",null,l[85].value),(0,e.tZ)("td",null,l[86].value),(0,e.tZ)("td",null,l[87].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[88].value),(0,e.tZ)("td",null,l[89].value),(0,e.tZ)("td",null,l[90].value),(0,e.tZ)("td",null,l[91].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[92].value),(0,e.tZ)("td",null,l[93].value,(0,e.tZ)("code",null,l[94].value),l[95].value),(0,e.tZ)("td",null,l[96].value,(0,e.tZ)("code",null,l[97].value)),(0,e.tZ)("td",null,l[98].value),(0,e.tZ)("td",null,l[99].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[100].value),(0,e.tZ)("td",null,l[101].value),(0,e.tZ)("td",null,l[102].value),(0,e.tZ)("td",null,l[103].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[104].value),(0,e.tZ)("td",null,l[105].value),(0,e.tZ)("td",null,l[106].value),(0,e.tZ)("td",null,l[107].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[108].value),(0,e.tZ)("td",null,l[109].value,(0,e.tZ)("code",null,l[110].value),l[111].value,(0,e.tZ)("code",null,l[112].value)),(0,e.tZ)("td",null,l[113].value),(0,e.tZ)("td",null,l[114].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[115].value),(0,e.tZ)("td",null,l[116].value),(0,e.tZ)("td",null,l[117].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,l[118].value)),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[119].value),(0,e.tZ)("td",null,l[120].value),(0,e.tZ)("td",null,l[121].value),(0,e.tZ)("td",null,l[122].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[123].value),(0,e.tZ)("td",null,l[124].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,l[125].value),l[126].value,(0,e.tZ)("code",null,l[127].value),l[128].value,(0,e.tZ)("code",null,l[129].value),l[130].value,(0,e.tZ)("code",null,l[131].value)),(0,e.tZ)("td",null,l[132].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[133].value),(0,e.tZ)("td",null,l[134].value,(0,e.tZ)("code",null,l[135].value),l[136].value),(0,e.tZ)("td",null,l[137].value),(0,e.tZ)("td",null,l[138].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[139].value),(0,e.tZ)("td",null,l[140].value,(0,e.tZ)("code",null,l[141].value)),(0,e.tZ)("td",null,l[142].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,l[143].value)),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[144].value),(0,e.tZ)("td",null,l[145].value,(0,e.tZ)("code",null,l[146].value),l[147].value,(0,e.tZ)("strong",null,l[148].value),l[149].value,(0,e.tZ)("strong",null,(0,e.tZ)("code",null,l[150].value),l[151].value),l[152].value,(0,e.tZ)("strong",null,(0,e.tZ)("code",null,l[153].value),l[154].value),l[155].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,l[156].value),l[157].value,(0,e.tZ)("code",null,l[158].value),l[159].value,(0,e.tZ)("code",null,l[160].value)),(0,e.tZ)("td",null,(0,e.tZ)("code",null,l[161].value)),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[162].value),(0,e.tZ)("td",null,l[163].value),(0,e.tZ)("td",null,l[164].value),(0,e.tZ)("td",null,l[165].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[166].value),(0,e.tZ)("td",null,l[167].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,l[168].value),l[169].value,(0,e.tZ)("code",null,l[170].value),l[171].value,(0,e.tZ)("code",null,l[172].value)),(0,e.tZ)("td",null,l[173].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[174].value),(0,e.tZ)("td",null,l[175].value),(0,e.tZ)("td",null,l[176].value),(0,e.tZ)("td",null,l[177].value),(0,e.tZ)("td",null,l[178].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[179].value),(0,e.tZ)("td",null,l[180].value,(0,e.tZ)("code",null,l[181].value),l[182].value,(0,e.tZ)("code",null,l[183].value),l[184].value),(0,e.tZ)("td",null,l[185].value),(0,e.tZ)("td",null,l[186].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[187].value),(0,e.tZ)("td",null,l[188].value),(0,e.tZ)("td",null,l[189].value),(0,e.tZ)("td",null,l[190].value),(0,e.tZ)("td",null,l[191].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[192].value),(0,e.tZ)("td",null,l[193].value,(0,e.tZ)("code",null,l[194].value)),(0,e.tZ)("td",null,l[195].value),(0,e.tZ)("td",null,l[196].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[197].value),(0,e.tZ)("td",null,l[198].value),(0,e.tZ)("td",null,l[199].value),(0,e.tZ)("td",null,l[200].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[201].value),(0,e.tZ)("td",null,l[202].value,(0,e.tZ)("code",null,l[203].value),l[204].value,(0,e.tZ)("code",null,l[205].value),l[206].value),(0,e.tZ)("td",null,l[207].value),(0,e.tZ)("td",null,l[208].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[209].value),(0,e.tZ)("td",null,l[210].value),(0,e.tZ)("td",null,l[211].value),(0,e.tZ)("td",null,l[212].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[213].value),(0,e.tZ)("td",null,l[214].value,(0,e.tZ)("code",null,l[215].value),l[216].value,(0,e.tZ)("code",null,l[217].value),l[218].value,(0,e.tZ)("code",null,l[219].value),l[220].value,(0,e.tZ)("code",null,l[221].value)),(0,e.tZ)("td",null,l[222].value),(0,e.tZ)("td",null,l[223].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[224].value),(0,e.tZ)("td",null,l[225].value),(0,e.tZ)("td",null,l[226].value),(0,e.tZ)("td",null,l[227].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[228].value),(0,e.tZ)("td",null,l[229].value),(0,e.tZ)("td",null,l[230].value),(0,e.tZ)("td",null,l[231].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[232].value),(0,e.tZ)("td",null,l[233].value,(0,e.tZ)("code",null,l[234].value),l[235].value,(0,e.tZ)("code",null,l[236].value)),(0,e.tZ)("td",null,l[237].value),(0,e.tZ)("td",null,l[238].value),(0,e.tZ)("td",null,l[239].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[240].value),(0,e.tZ)("td",null,l[241].value),(0,e.tZ)("td",null,l[242].value),(0,e.tZ)("td",null,l[243].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[244].value),(0,e.tZ)("td",null,l[245].value,(0,e.tZ)("code",null,l[246].value)),(0,e.tZ)("td",null,l[247].value),(0,e.tZ)("td",null,l[248].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[249].value),(0,e.tZ)("td",null,l[250].value,(0,e.tZ)("code",null,l[251].value),l[252].value),(0,e.tZ)("td",null,l[253].value),(0,e.tZ)("td",null,l[254].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[255].value),(0,e.tZ)("td",null,l[256].value,(0,e.tZ)(n.Z,{to:"/components/tree/#components-tree-demo-line",sourceType:"Link"},l[257].value)),(0,e.tZ)("td",null,l[258].value),(0,e.tZ)("td",null,l[259].value),(0,e.tZ)("td",null,l[260].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[261].value),(0,e.tZ)("td",null,l[262].value,(0,e.tZ)("code",null,l[263].value),l[264].value),(0,e.tZ)("td",null,l[265].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,l[266].value)),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[267].value),(0,e.tZ)("td",null,l[268].value),(0,e.tZ)("td",null,l[269].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,l[270].value)),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[271].value),(0,e.tZ)("td",null,l[272].value),(0,e.tZ)("td",null,l[273].value),(0,e.tZ)("td",null,l[274].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[275].value),(0,e.tZ)("td",null,l[276].value),(0,e.tZ)("td",null,l[277].value),(0,e.tZ)("td",null,l[278].value),(0,e.tZ)("td",null,l[279].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[280].value),(0,e.tZ)("td",null,l[281].value),(0,e.tZ)("td",null,l[282].value),(0,e.tZ)("td",null,l[283].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[284].value),(0,e.tZ)("td",null,l[285].value),(0,e.tZ)("td",null,l[286].value),(0,e.tZ)("td",null,l[287].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[288].value),(0,e.tZ)("td",null,l[289].value),(0,e.tZ)("td",null,l[290].value),(0,e.tZ)("td",null,l[291].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[292].value),(0,e.tZ)("td",null,l[293].value),(0,e.tZ)("td",null,l[294].value),(0,e.tZ)("td",null,l[295].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[296].value),(0,e.tZ)("td",null,l[297].value),(0,e.tZ)("td",null,l[298].value),(0,e.tZ)("td",null,l[299].value),(0,e.tZ)("td",null)))),(0,e.tZ)("h3",{id:"tree-methods"},(0,e.tZ)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#tree-methods",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Tree Methods"),(0,e.tZ)(u.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,l[300].value),(0,e.tZ)("th",null,l[301].value),(0,e.tZ)("th",null,l[302].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[303].value),(0,e.tZ)("td",null,l[304].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[305].value),(0,e.tZ)("td",null,l[306].value),(0,e.tZ)("td",null)))),(0,e.tZ)("h3",{id:"treenode-props"},(0,e.tZ)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#treenode-props",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"TreeNode props"),(0,e.tZ)("blockquote",null,(0,e.tZ)("p",null,l[307].value,(0,e.tZ)("code",null,l[308].value),l[309].value,(0,e.tZ)("code",null,l[310].value),l[311].value)),(0,e.tZ)(u.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,l[312].value),(0,e.tZ)("th",null,l[313].value),(0,e.tZ)("th",null,l[314].value),(0,e.tZ)("th",null,l[315].value),(0,e.tZ)("th",null,l[316].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[317].value),(0,e.tZ)("td",null,l[318].value),(0,e.tZ)("td",null,l[319].value),(0,e.tZ)("td",null,l[320].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[321].value),(0,e.tZ)("td",null,l[322].value),(0,e.tZ)("td",null,l[323].value),(0,e.tZ)("td",null,l[324].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[325].value),(0,e.tZ)("td",null,l[326].value),(0,e.tZ)("td",null,l[327].value),(0,e.tZ)("td",null,l[328].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[329].value),(0,e.tZ)("td",null,l[330].value),(0,e.tZ)("td",null,l[331].value),(0,e.tZ)("td",null,l[332].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[333].value),(0,e.tZ)("td",null,l[334].value,(0,e.tZ)("code",null,l[335].value),l[336].value),(0,e.tZ)("td",null,l[337].value),(0,e.tZ)("td",null,l[338].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[339].value),(0,e.tZ)("td",null,l[340].value),(0,e.tZ)("td",null,l[341].value),(0,e.tZ)("td",null,l[342].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[343].value),(0,e.tZ)("td",null,l[344].value),(0,e.tZ)("td",null,l[345].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,l[346].value)),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,l[347].value),(0,e.tZ)("td",null,l[348].value,(0,e.tZ)("code",null,l[349].value),l[350].value),(0,e.tZ)("td",null,l[351].value),(0,e.tZ)("td",null,l[352].value),(0,e.tZ)("td",null)))),(0,e.tZ)("h2",{id:"design-token"},(0,e.tZ)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Design Token")),(0,e.tZ)(r.Z,{component:"TreeSelect"}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"faq"},(0,e.tZ)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,e.tZ)("h3",{id:"how-to-get-parent-node-in-onchange"},(0,e.tZ)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-get-parent-node-in-onchange",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"How to get parent node in onChange?"),(0,e.tZ)("p",null,l[353].value,(0,e.tZ)(n.Z,{href:"https://codesandbox.io/s/get-parent-node-in-onchange-eb1608",sourceType:"a"},l[354].value)),(0,e.tZ)("h3",{id:"why-sometime-customize-option-cause-scroll-break"},(0,e.tZ)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#why-sometime-customize-option-cause-scroll-break",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Why sometime customize Option cause scroll break?"),(0,e.tZ)("p",null,l[355].value,(0,e.tZ)(n.Z,{to:"/components/select",sourceType:"Link"},l[356].value),l[357].value),(0,e.tZ)("h3",{id:"why-loaddata-not-trigger-when-searching"},(0,e.tZ)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#why-loaddata-not-trigger-when-searching",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Why ",(0,e.tZ)("code",null,l[358].value)," not trigger when searching?"),(0,e.tZ)("p",null,l[359].value,(0,e.tZ)("code",null,l[360].value),l[361].value,(0,e.tZ)("code",null,l[362].value),l[363].value,(0,e.tZ)("code",null,l[364].value),l[365].value),(0,e.tZ)(o.Z,{lang:"tsx"},l[366].value))))}a.default=v}}]);
