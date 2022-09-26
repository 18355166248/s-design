/**
 * title: 基础用法
 * desc: 按钮组件
 * hideActions: ["CSB"]
 */
import React, {useState} from 'react';
import Button from '../index';

export default () => {
  const [pass, setPass] = useState<boolean>();

  return <Button>测试按钮</Button>;
};
