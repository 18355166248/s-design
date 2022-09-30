/**
 * title: 基础用法
 * desc: 按钮组件
 * hideActions: ["CSB"]
 */
import React, {useState} from 'react';
import Button from '../index';
import '../style/index.less';

export default () => {
  return (
    <div className="common-space">
      <Button className="mb-3">Default Button</Button>
      <Button type="primary">Primary Button</Button>
    </div>
  );
};
