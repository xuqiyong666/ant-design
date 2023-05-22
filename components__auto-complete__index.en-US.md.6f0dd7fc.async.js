"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[4147],{760977:function(c,o,n){n.r(o);var m=n(502143),_=n(968521),v=n(720719),Z=n(28840),h=n(759907),a=n(828089),x=n(825673),g=n(902068),A=n(574399),C=n(863942),I=n(316073),f=n(24628),P=n(719260),O=n(956140),s=n(127179),r=n(905388),y=n(104979),E=n(606965),S=n(268696),l=n(424128),D=n(249706),T=n(795127),U=n(116846),b=n(73024),u=n(606641),d=n(667294),t=n(370917);function i(){var p=(0,u.eL)(),e=p.texts;return(0,t.tZ)(u.dY,null,(0,t.tZ)(d.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,e[0].value),(0,t.tZ)("h2",{id:"when-to-use"},(0,t.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a"},(0,t.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,e[1].value),(0,t.tZ)("li",null,e[2].value)),(0,t.tZ)("p",null,e[3].value),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,e[4].value,(0,t.tZ)("strong",null,e[5].value),e[6].value),(0,t.tZ)("li",null,e[7].value,(0,t.tZ)("strong",null,e[8].value),e[9].value)),(0,t.tZ)("h2",{id:"examples"},(0,t.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a"},(0,t.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,t.tZ)(r.Z,{items:[{demo:{id:"components-auto-complete-demo-basic"},previewerProps:{title:"Basic Usage",filename:"components/auto-complete/demo/basic.tsx",jsx:`import { AutoComplete } from 'antd';
import { useState } from 'react';
const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});
const App = () => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);
  const [anotherOptions, setAnotherOptions] = useState([]);
  const getPanelValue = (searchText) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  const onSelect = (data) => {
    console.log('onSelect', data);
  };
  const onChange = (data) => {
    setValue(data);
  };
  return (
    <>
      <AutoComplete
        options={options}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        onSearch={(text) => setOptions(getPanelValue(text))}
        placeholder="input here"
      />
      <br />
      <br />
      <AutoComplete
        value={value}
        options={anotherOptions}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        onSearch={(text) => setAnotherOptions(getPanelValue(text))}
        onChange={onChange}
        placeholder="control mode"
      />
    </>
  );
};
export default App;
`,description:"<p>Basic Usage, set data source of autocomplete with <code>options</code> property.</p>"}},{demo:{id:"components-auto-complete-demo-options"},previewerProps:{title:"Customized",filename:"components/auto-complete/demo/options.tsx",jsx:`import { AutoComplete } from 'antd';
import { useState } from 'react';
const App = () => {
  const [options, setOptions] = useState([]);
  const handleSearch = (value) => {
    let res = [];
    if (!value || value.indexOf('@') >= 0) {
      res = [];
    } else {
      res = ['gmail.com', '163.com', 'qq.com'].map((domain) => ({
        value,
        label: \`\${value}@\${domain}\`,
      }));
    }
    setOptions(res);
  };
  return (
    <AutoComplete
      style={{
        width: 200,
      }}
      onSearch={handleSearch}
      placeholder="input here"
      options={options}
    />
  );
};
export default App;
`,description:"<p>You could set custom <code>Option</code> label</p>"}},{demo:{id:"components-auto-complete-demo-custom"},previewerProps:{title:"Customize Input Component",filename:"components/auto-complete/demo/custom.tsx",jsx:`import { AutoComplete, Input } from 'antd';
import { useState } from 'react';
const { TextArea } = Input;
const App = () => {
  const [options, setOptions] = useState([]);
  const handleSearch = (value) => {
    setOptions(
      !value
        ? []
        : [
            {
              value,
            },
            {
              value: value + value,
            },
            {
              value: value + value + value,
            },
          ],
    );
  };
  const handleKeyPress = (ev) => {
    console.log('handleKeyPress', ev);
  };
  const onSelect = (value) => {
    console.log('onSelect', value);
  };
  return (
    <AutoComplete
      options={options}
      style={{
        width: 200,
      }}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <TextArea
        placeholder="input here"
        className="custom"
        style={{
          height: 50,
        }}
        onKeyPress={handleKeyPress}
      />
    </AutoComplete>
  );
};
export default App;
`,description:"<p>Customize Input Component</p>"}},{demo:{id:"components-auto-complete-demo-non-case-sensitive"},previewerProps:{title:"Non-case-sensitive AutoComplete",filename:"components/auto-complete/demo/non-case-sensitive.tsx",jsx:`import { AutoComplete } from 'antd';
const options = [
  {
    value: 'Burns Bay Road',
  },
  {
    value: 'Downing Street',
  },
  {
    value: 'Wall Street',
  },
];
const App = () => (
  <AutoComplete
    style={{
      width: 200,
    }}
    options={options}
    placeholder="try to type \`b\`"
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
);
export default App;
`,description:"<p>A non-case-sensitive AutoComplete</p>"}},{demo:{id:"components-auto-complete-demo-certain-category"},previewerProps:{title:"Lookup-Patterns - Certain Category",filename:"components/auto-complete/demo/certain-category.tsx",jsx:`import { UserOutlined } from '@ant-design/icons';
import { AutoComplete, Input } from 'antd';
const renderTitle = (title) => (
  <span>
    {title}
    <a
      style={{
        float: 'right',
      }}
      href="https://www.google.com/search?q=antd"
      target="_blank"
      rel="noopener noreferrer"
    >
      more
    </a>
  </span>
);
const renderItem = (title, count) => ({
  value: title,
  label: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {title}
      <span>
        <UserOutlined /> {count}
      </span>
    </div>
  ),
});
const options = [
  {
    label: renderTitle('Libraries'),
    options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
  },
  {
    label: renderTitle('Solutions'),
    options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
  },
  {
    label: renderTitle('Articles'),
    options: [renderItem('AntDesign design language', 100000)],
  },
];
const App = () => (
  <AutoComplete
    popupClassName="certain-category-search-dropdown"
    dropdownMatchSelectWidth={500}
    style={{
      width: 250,
    }}
    options={options}
  >
    <Input.Search size="large" placeholder="input here" />
  </AutoComplete>
);
export default App;
`,description:'<p>Demonstration of <a href="https://ant.design/docs/spec/reaction#lookup-patterns">Lookup Patterns: Certain Category</a>. Basic Usage, set options of autocomplete with <code>options</code> property.</p>',style:`.certain-category-search-dropdown .ant-select-dropdown-menu-item-group-title {
  color: #666;
  font-weight: bold;
}

.certain-category-search-dropdown .ant-select-dropdown-menu-item-group {
  border-bottom: 1px solid #f6f6f6;
}

.certain-category-search-dropdown .ant-select-dropdown-menu-item {
  padding-left: 16px;
}

.certain-category-search-dropdown .ant-select-dropdown-menu-item.show-all {
  text-align: center;
  cursor: default;
}

.certain-category-search-dropdown .ant-select-dropdown-menu {
  max-height: 300px;
}`}},{demo:{id:"components-auto-complete-demo-uncertain-category"},previewerProps:{title:"Lookup-Patterns - Uncertain Category",filename:"components/auto-complete/demo/uncertain-category.tsx",jsx:`import { AutoComplete, Input } from 'antd';
import { useState } from 'react';
const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;
const searchResult = (query) =>
  new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = \`\${query}\${idx}\`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              Found {query} on{' '}
              <a
                href={\`https://s.taobao.com/search?q=\${query}\`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });
const App = () => {
  const [options, setOptions] = useState([]);
  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };
  const onSelect = (value) => {
    console.log('onSelect', value);
  };
  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{
        width: 300,
      }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search size="large" placeholder="input here" enterButton />
    </AutoComplete>
  );
};
export default App;
`,description:'<p>Demonstration of <a href="https://ant.design/docs/spec/reaction#lookup-patterns">Lookup Patterns: Uncertain Category</a>.</p>'}},{demo:{id:"components-auto-complete-demo-status"},previewerProps:{title:"Status",filename:"components/auto-complete/demo/status.tsx",jsx:`import { AutoComplete, Space } from 'antd';
import { useState } from 'react';
const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});
const App = () => {
  const [options, setOptions] = useState([]);
  const [anotherOptions, setAnotherOptions] = useState([]);
  const getPanelValue = (searchText) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
    >
      <AutoComplete
        options={options}
        onSearch={(text) => setOptions(getPanelValue(text))}
        status="error"
        style={{
          width: 200,
        }}
      />
      <AutoComplete
        options={anotherOptions}
        onSearch={(text) => setAnotherOptions(getPanelValue(text))}
        status="warning"
        style={{
          width: 200,
        }}
      />
    </Space>
  );
};
export default App;
`,description:"<p>Add status to AutoComplete with <code>status</code>, which could be <code>error</code> or <code>warning</code>.</p>"}},{demo:{id:"components-auto-complete-demo-form-debug"},previewerProps:{debug:!0,title:"Debug in Form",filename:"components/auto-complete/demo/form-debug.tsx",jsx:`import { SearchOutlined } from '@ant-design/icons';
import { AutoComplete, Button, Form, Input, TreeSelect } from 'antd';
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const App = () => (
  <Form
    style={{
      margin: '0 auto',
    }}
    {...formItemLayout}
  >
    <Form.Item label="\u5355\u72EC AutoComplete">
      <AutoComplete />
    </Form.Item>
    <Form.Item label="\u5355\u72EC TreeSelect">
      <TreeSelect />
    </Form.Item>
    <Form.Item label="\u6DFB\u52A0 Input.Group \u6B63\u5E38">
      <Input.Group compact>
        <TreeSelect
          style={{
            width: '30%',
          }}
        />
        <AutoComplete />
      </Input.Group>
    </Form.Item>
    <Form.Item label="\u5305\u542B search \u56FE\u6807\u6B63\u5E38">
      <AutoComplete>
        <Input suffix={<SearchOutlined />} />
      </AutoComplete>
    </Form.Item>
    <Form.Item label="\u540C\u65F6\u6709 Input.Group \u548C\u56FE\u6807\u53D1\u751F\u79FB\u4F4D">
      <Input.Group compact>
        <TreeSelect
          style={{
            width: '30%',
          }}
        />
        <AutoComplete>
          <Input suffix={<SearchOutlined />} />
        </AutoComplete>
      </Input.Group>
    </Form.Item>
    <Form.Item label="\u540C\u65F6\u6709 Input.Group \u548C Search \u7EC4\u4EF6\u53D1\u751F\u79FB\u4F4D">
      <Input.Group compact>
        <TreeSelect
          style={{
            width: '30%',
          }}
        />
        <AutoComplete>
          <Input.Search />
        </AutoComplete>
      </Input.Group>
    </Form.Item>
    <Form.Item label="Input Group \u548C Button \u7ED3\u5408">
      <Input.Group compact>
        <TreeSelect
          style={{
            width: '20%',
          }}
        />
        <AutoComplete>
          <Input.Search />
        </AutoComplete>
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
      </Input.Group>
    </Form.Item>
  </Form>
);
export default App;
`}},{demo:{id:"components-auto-complete-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/auto-complete/demo/render-panel.tsx",jsx:`import { AutoComplete, Space, Switch } from 'antd';
import React from 'react';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalAutoComplete } = AutoComplete;
const App = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Space
      direction="vertical"
      style={{
        display: 'flex',
      }}
    >
      <Switch checked={open} onChange={() => setOpen(!open)} />
      <InternalAutoComplete
        defaultValue="lucy"
        style={{
          width: 120,
        }}
        open={open}
        options={[
          {
            label: 'Jack',
            value: 'jack',
          },
          {
            label: 'Lucy',
            value: 'lucy',
          },
          {
            label: 'Disabled',
            value: 'disabled',
          },
          {
            label: 'Bamboo',
            value: 'bamboo',
          },
        ]}
      />
    </Space>
  );
};
export default App;
`,description:"<p>Debug usage. Do not use in your production.</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[10].value),(0,t.tZ)("th",null,e[11].value),(0,t.tZ)("th",null,e[12].value),(0,t.tZ)("th",null,e[13].value),(0,t.tZ)("th",null,e[14].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[15].value),(0,t.tZ)("td",null,e[16].value),(0,t.tZ)("td",null,e[17].value),(0,t.tZ)("td",null,e[18].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[19].value),(0,t.tZ)("td",null,e[20].value),(0,t.tZ)("td",null,e[21].value),(0,t.tZ)("td",null,e[22].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[23].value),(0,t.tZ)("td",null,e[24].value),(0,t.tZ)("td",null,e[25].value),(0,t.tZ)("td",null,e[26].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[27].value),(0,t.tZ)("td",null,e[28].value),(0,t.tZ)("td",null,e[29].value),(0,t.tZ)("td",null,e[30].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[31].value),(0,t.tZ)("td",null,e[32].value),(0,t.tZ)("td",null,e[33].value),(0,t.tZ)("td",null,e[34].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[35].value),(0,t.tZ)("td",null,e[36].value),(0,t.tZ)("td",null,e[37].value),(0,t.tZ)("td",null,e[38].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[39].value),(0,t.tZ)("td",null,e[40].value),(0,t.tZ)("td",null,e[41].value),(0,t.tZ)("td",null,e[42].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[43].value),(0,t.tZ)("td",null,e[44].value),(0,t.tZ)("td",null,e[45].value),(0,t.tZ)("td",null,e[46].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[47].value),(0,t.tZ)("td",null,e[48].value),(0,t.tZ)("td",null,e[49].value),(0,t.tZ)("td",null,e[50].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[51].value),(0,t.tZ)("td",null,e[52].value),(0,t.tZ)("td",null,e[53].value),(0,t.tZ)("td",null,e[54].value),(0,t.tZ)("td",null,e[55].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[56].value),(0,t.tZ)("td",null,e[57].value,(0,t.tZ)("code",null,e[58].value),e[59].value,(0,t.tZ)("code",null,e[60].value),e[61].value),(0,t.tZ)("td",null,e[62].value),(0,t.tZ)("td",null,e[63].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[64].value),(0,t.tZ)("td",null,e[65].value,(0,t.tZ)("code",null,e[66].value),e[67].value,(0,t.tZ)("code",null,e[68].value),e[69].value),(0,t.tZ)("td",null,e[70].value),(0,t.tZ)("td",null,e[71].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[72].value),(0,t.tZ)("td",null,e[73].value),(0,t.tZ)("td",null,e[74].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[75].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[76].value),(0,t.tZ)("td",null,e[77].value),(0,t.tZ)("td",null,e[78].value),(0,t.tZ)("td",null,e[79].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[80].value),(0,t.tZ)("td",null,e[81].value),(0,t.tZ)("td",null,e[82].value),(0,t.tZ)("td",null,e[83].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[84].value),(0,t.tZ)("td",null,e[85].value),(0,t.tZ)("td",null,e[86].value),(0,t.tZ)("td",null,e[87].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[88].value),(0,t.tZ)("td",null,e[89].value),(0,t.tZ)("td",null,e[90].value),(0,t.tZ)("td",null,e[91].value),(0,t.tZ)("td",null,e[92].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[93].value),(0,t.tZ)("td",null,e[94].value),(0,t.tZ)("td",null,e[95].value),(0,t.tZ)("td",null,e[96].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[97].value),(0,t.tZ)("td",null,e[98].value),(0,t.tZ)("td",null,e[99].value),(0,t.tZ)("td",null,e[100].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[101].value),(0,t.tZ)("td",null,e[102].value),(0,t.tZ)("td",null,e[103].value),(0,t.tZ)("td",null,e[104].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[105].value),(0,t.tZ)("td",null,e[106].value),(0,t.tZ)("td",null,e[107].value),(0,t.tZ)("td",null,e[108].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[109].value),(0,t.tZ)("td",null,e[110].value),(0,t.tZ)("td",null,e[111].value),(0,t.tZ)("td",null,e[112].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[113].value),(0,t.tZ)("td",null,e[114].value),(0,t.tZ)("td",null,e[115].value),(0,t.tZ)("td",null,e[116].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[117].value),(0,t.tZ)("td",null,e[118].value),(0,t.tZ)("td",null,e[119].value),(0,t.tZ)("td",null,e[120].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[121].value),(0,t.tZ)("td",null,e[122].value),(0,t.tZ)("td",null,e[123].value),(0,t.tZ)("td",null,e[124].value),(0,t.tZ)("td",null,e[125].value)))),(0,t.tZ)("h2",{id:"methods"},(0,t.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#methods",sourceType:"a"},(0,t.tZ)("span",{className:"icon icon-link"})),"Methods"),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[126].value),(0,t.tZ)("th",null,e[127].value),(0,t.tZ)("th",null,e[128].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[129].value),(0,t.tZ)("td",null,e[130].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[131].value),(0,t.tZ)("td",null,e[132].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h2",{id:"design-token"},(0,t.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a"},(0,t.tZ)("span",{className:"icon icon-link"})),"Design Token")),(0,t.tZ)(s.Z,{component:"Select"}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"faq"},(0,t.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a"},(0,t.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,t.tZ)("h3",{id:"why-doesnt-the-text-composition-system-work-well-with-onsearch-in-controlled-mode"},(0,t.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#why-doesnt-the-text-composition-system-work-well-with-onsearch-in-controlled-mode",sourceType:"a"},(0,t.tZ)("span",{className:"icon icon-link"})),"Why doesn't the text composition system work well with onSearch in controlled mode?"),(0,t.tZ)("p",null,e[133].value,(0,t.tZ)("code",null,e[134].value),e[135].value,(0,t.tZ)("code",null,e[136].value),e[137].value,(0,t.tZ)("code",null,e[138].value),e[139].value,(0,t.tZ)("code",null,e[140].value),e[141].value),(0,t.tZ)("p",null,e[142].value,(0,t.tZ)(l.Z,{href:"https://github.com/ant-design/ant-design/issues/18230",sourceType:"a"},e[143].value),e[144].value,(0,t.tZ)(l.Z,{href:"https://github.com/ant-design/ant-design/issues/17916",sourceType:"a"},e[145].value)))))}o.default=i}}]);
