/**
 * title: Default usage
 * desc: Do async check when component is mounted.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 组件加载时进行异步的检查
 */
import React, {useState} from 'react';
import Button from '../index';

export default () => {
  const [pass, setPass] = useState<boolean>();

  return <Button>测试按钮111</Button>;
};
